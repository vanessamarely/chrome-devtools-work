import React, { useState, useEffect, useRef } from 'react'
import { Play, ArrowCounterClockwise, Download, Eye, CheckCircle, XCircle, SplitVertical, MagicWand } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CodeBlock } from './CodeBlock'
import { cn } from '../lib/utils'
import { formatCode } from '@/lib/codeFormatter'
import { toast } from 'sonner'

interface CodeExample {
  title: string
  language: string
  code: string
  description?: string
  highlightLines?: number[]
  editable?: boolean
}

interface CodeEditorProps {
  examples: CodeExample[]
  title?: string
  description?: string
  allowExecution?: boolean
  onCodeChange?: (code: string, language: string) => void
}

export function CodeEditor({ 
  examples, 
  title = "Editor de Código",
  description,
  allowExecution = false,
  onCodeChange
}: CodeEditorProps) {
  const [activeTab, setActiveTab] = useState(examples[0]?.title || '')
  const [executionResults, setExecutionResults] = useState<Record<string, { success: boolean; error?: string; logs: string[] } | null>>({})
  const [isExecuting, setIsExecuting] = useState(false)
  const [showPreview, setShowPreview] = useState(false)
  const [codeStates, setCodeStates] = useState<Record<string, string>>({})
  const [isFormattingAll, setIsFormattingAll] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  const currentExample = examples.find(ex => ex.title === activeTab) || examples[0]

  const hasWebCode = examples.some(ex => 
    ['html', 'css', 'javascript', 'js'].includes(ex.language.toLowerCase())
  )

  const hasFormattableCode = examples.some(ex =>
    ['html', 'css', 'javascript', 'js', 'markup'].includes(ex.language.toLowerCase())
  )

  useEffect(() => {
    const initialStates: Record<string, string> = {}
    examples.forEach(ex => {
      initialStates[ex.title] = ex.code
    })
    setCodeStates(initialStates)
  }, [examples])

  useEffect(() => {
    if (showPreview && hasWebCode) {
      updatePreview()
    }
  }, [showPreview, codeStates])

  const handleCodeChange = (code: string, exampleTitle: string) => {
    setCodeStates(prev => ({
      ...prev,
      [exampleTitle]: code
    }))
  }

  const updatePreview = () => {
    if (!iframeRef.current) return

    const htmlExample = examples.find(ex => ex.language.toLowerCase() === 'html')
    const cssExample = examples.find(ex => ex.language.toLowerCase() === 'css')
    const jsExample = examples.find(ex => 
      ex.language.toLowerCase() === 'javascript' || ex.language.toLowerCase() === 'js'
    )

    const htmlCode = htmlExample ? (codeStates[htmlExample.title] || htmlExample.code) : '<body></body>'
    const cssCode = cssExample ? (codeStates[cssExample.title] || cssExample.code) : ''
    const jsCode = jsExample ? (codeStates[jsExample.title] || jsExample.code) : ''

    const previewHTML = `
      <!DOCTYPE html>
      <html lang="es">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body {
              margin: 0;
              padding: 16px;
              font-family: system-ui, -apple-system, sans-serif;
            }
            ${cssCode}
          </style>
        </head>
        ${htmlCode}
        <script>
          try {
            ${jsCode}
          } catch (error) {
            document.body.innerHTML = '<div style="color: red; padding: 20px; background: #fee; border: 2px solid red; border-radius: 8px; margin: 20px;"><strong>Error en JavaScript:</strong><br>' + error.message + '</div>' + document.body.innerHTML;
          }
        </script>
      </html>
    `

    const iframe = iframeRef.current
    const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document

    if (iframeDoc) {
      iframeDoc.open()
      iframeDoc.write(previewHTML)
      iframeDoc.close()
    }
  }

  const executeCode = async (code: string, language: string) => {
    if (!allowExecution) return

    setIsExecuting(true)
    try {
      let result: { success: boolean; error?: string; logs: string[] } | null = null
      
      if (language === 'javascript' || language === 'js') {
        try {
          const fn = new Function(`
            const logs = [];
            const mockConsole = {
              log: (...args) => logs.push(args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' ')),
              error: (...args) => logs.push('ERROR: ' + args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' ')),
              warn: (...args) => logs.push('WARN: ' + args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' ')),
              info: (...args) => logs.push('INFO: ' + args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' '))
            };
            
            const originalConsole = console;
            console = mockConsole;
            
            try {
              ${code}
              return { success: true, logs };
            } catch (error) {
              return { success: false, error: error.message, logs };
            } finally {
              console = originalConsole;
            }
          `)
          
          result = fn()
        } catch (error) {
          result = { success: false, error: (error as Error).message, logs: [] }
        }
      }
      
      setExecutionResults(prev => ({
        ...prev,
        [activeTab]: result
      }))
    } catch (error) {
      console.error('Execution error:', error)
    } finally {
      setIsExecuting(false)
    }
  }

  const resetCode = () => {
    const resetStates: Record<string, string> = {}
    examples.forEach(ex => {
      resetStates[ex.title] = ex.code
    })
    setCodeStates(resetStates)
    setExecutionResults({})
  }

  const exportCode = () => {
    if (!currentExample) return
    
    const code = codeStates[currentExample.title] || currentExample.code
    const blob = new Blob([code], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${currentExample.title.toLowerCase().replace(/\s+/g, '_')}.${currentExample.language}`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const formatAllCode = async () => {
    setIsFormattingAll(true)
    let successCount = 0
    let failCount = 0
    
    try {
      const newStates = { ...codeStates }
      
      for (const example of examples) {
        const code = codeStates[example.title] || example.code
        const result = await formatCode(code, example.language)
        
        if (result.success) {
          newStates[example.title] = result.code
          successCount++
        } else {
          failCount++
        }
      }
      
      setCodeStates(newStates)
      
      if (successCount > 0 && failCount === 0) {
        toast.success('¡Todo formateado!', {
          description: `${successCount} archivo${successCount > 1 ? 's' : ''} formateado${successCount > 1 ? 's' : ''} correctamente`
        })
      } else if (successCount > 0 && failCount > 0) {
        toast.warning('Formateado parcial', {
          description: `${successCount} exitoso${successCount > 1 ? 's' : ''}, ${failCount} fallido${failCount > 1 ? 's' : ''}`
        })
      } else {
        toast.error('No se pudo formatear', {
          description: 'Ningún archivo pudo ser formateado'
        })
      }
    } catch (error) {
      toast.error('Error al formatear', {
        description: 'Ocurrió un error inesperado'
      })
    } finally {
      setIsFormattingAll(false)
    }
  }

  const currentResult = executionResults[activeTab]
  const currentCode = codeStates[currentExample?.title] || currentExample?.code || ''

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Play size={20} className="text-primary" />
              {title}
            </CardTitle>
            {description && (
              <p className="text-sm text-muted-foreground mt-1">{description}</p>
            )}
          </div>
          
          <div className="flex items-center gap-2">
            {hasWebCode && (
              <Button
                variant={showPreview ? "default" : "outline"}
                size="sm"
                onClick={() => setShowPreview(!showPreview)}
                className="gap-2 btn-hover-scale"
              >
                {showPreview ? <SplitVertical size={14} /> : <Eye size={14} />}
                {showPreview ? 'Vista Dividida' : 'Vista Previa'}
              </Button>
            )}

            {hasFormattableCode && examples.length > 1 && (
              <Button
                variant="outline"
                size="sm"
                onClick={formatAllCode}
                disabled={isFormattingAll}
                className="gap-2 btn-hover-glow"
              >
                <MagicWand size={14} weight={isFormattingAll ? 'fill' : 'regular'} />
                {isFormattingAll ? 'Formateando...' : 'Formatear Todo'}
              </Button>
            )}
            
            {allowExecution && currentExample && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => executeCode(currentCode, currentExample.language)}
                disabled={isExecuting}
                className="gap-2"
              >
                <Play size={14} />
                {isExecuting ? 'Ejecutando...' : 'Ejecutar'}
              </Button>
            )}
            
            <Button
              variant="outline"
              size="sm"
              onClick={resetCode}
              className="gap-2"
            >
              <ArrowCounterClockwise size={14} />
              Reset
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              onClick={exportCode}
              className="gap-2"
            >
              <Download size={14} />
              Exportar
            </Button>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className={cn("grid gap-4", showPreview && "lg:grid-cols-2")}>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-auto">
              {examples.map((example) => (
                <TabsTrigger key={example.title} value={example.title} className="text-xs">
                  {example.title}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {examples.map((example) => (
              <TabsContent key={example.title} value={example.title} className="space-y-4">
                <CodeBlock
                  code={codeStates[example.title] || example.code}
                  language={example.language}
                  title={example.title}
                  description={example.description}
                  editable={example.editable}
                  showLineNumbers={true}
                  highlightLines={example.highlightLines}
                  onCodeChange={(code) => handleCodeChange(code, example.title)}
                />
                
                {currentResult && activeTab === example.title && (
                  <Card className={cn(
                    "border-2",
                    currentResult.success 
                      ? "border-accent/30 bg-accent/5" 
                      : "border-destructive/30 bg-destructive/5"
                  )}>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm flex items-center gap-2">
                        {currentResult.success ? (
                          <>
                            <CheckCircle size={16} className="text-accent" weight="fill" />
                            <span className="text-foreground">Ejecución Exitosa</span>
                          </>
                        ) : (
                          <>
                            <XCircle size={16} className="text-destructive" weight="fill" />
                            <span className="text-foreground">Error de Ejecución</span>
                          </>
                        )}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      {currentResult.logs && currentResult.logs.length > 0 && (
                        <div className="space-y-2">
                          <h4 className="font-medium text-sm text-foreground">Salida:</h4>
                          <div className="bg-black text-green-400 p-3 rounded font-mono text-sm border border-border">
                            {currentResult.logs.map((log: string, index: number) => (
                              <div key={index}>{log}</div>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {currentResult.error && (
                        <div className="space-y-2">
                          <h4 className="font-medium text-sm text-foreground">Error:</h4>
                          <div className="bg-destructive/10 border border-destructive/30 p-3 rounded text-sm text-destructive">
                            {currentResult.error}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )}
              </TabsContent>
            ))}
          </Tabs>

          {showPreview && hasWebCode && (
            <Card className="border-2 border-primary/30 overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10">
                <CardTitle className="text-sm flex items-center gap-2">
                  <Eye size={16} className="text-primary" />
                  Vista Previa en Vivo
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="relative bg-white min-h-[400px] max-h-[600px] overflow-auto">
                  <iframe
                    ref={iframeRef}
                    title="Live Preview"
                    sandbox="allow-scripts"
                    className="w-full h-[400px] border-0"
                  />
                </div>
                <div className="px-4 py-2 bg-muted/50 border-t border-border">
                  <p className="text-xs text-muted-foreground">
                    💡 La vista previa se actualiza automáticamente al editar el código
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </CardContent>
    </Card>
  )
}