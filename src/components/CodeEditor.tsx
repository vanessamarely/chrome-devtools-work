import React, { useState, useEffect } from 'react'
import { Play, ArrowCounterClockwise, Download, Upload, CheckCircle, XCircle } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CodeBlock } from './CodeBlock'
import { cn } from '../lib/utils'

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

  const currentExample = examples.find(ex => ex.title === activeTab) || examples[0]

  const executeCode = async (code: string, language: string) => {
    if (!allowExecution) return

    setIsExecuting(true)
    try {
      let result: { success: boolean; error?: string; logs: string[] } | null = null
      
      if (language === 'javascript' || language === 'js') {
        // Simple evaluation for demonstration
        try {
          // Create a safe eval context
          const fn = new Function('console', `
            const logs = [];
            const mockConsole = {
              log: (...args) => logs.push(args.join(' ')),
              error: (...args) => logs.push('ERROR: ' + args.join(' ')),
              warn: (...args) => logs.push('WARN: ' + args.join(' ')),
              info: (...args) => logs.push('INFO: ' + args.join(' '))
            };
            
            try {
              ${code}
              return { success: true, logs };
            } catch (error) {
              return { success: false, error: error.message, logs };
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
    // This would reset to original code in a real implementation
    setExecutionResults(prev => ({
      ...prev,
      [activeTab]: null
    }))
  }

  const exportCode = () => {
    if (!currentExample) return
    
    const blob = new Blob([currentExample.code], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${currentExample.title.toLowerCase().replace(/\s+/g, '_')}.${currentExample.language}`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const currentResult = executionResults[activeTab]

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
            {allowExecution && currentExample && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => executeCode(currentExample.code, currentExample.language)}
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
        <Tabs value={activeTab} onValueChange={setActiveTab}>
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
                code={example.code}
                language={example.language}
                title={example.title}
                description={example.description}
                editable={example.editable}
                showLineNumbers={true}
                highlightLines={example.highlightLines}
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
      </CardContent>
    </Card>
  )
}