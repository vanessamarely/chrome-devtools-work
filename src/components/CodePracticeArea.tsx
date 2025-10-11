import React, { useState } from 'react'
import { Flask, Code, Terminal, CheckCircle, FileText, Monitor } from '@phosphor-icons/react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { CodeEditor } from './CodeEditor'
import { cn } from '../lib/utils'

interface CodePracticeAreaProps {
  title: string
  description: string
  examples: {
    title: string
    language: string
    code: string
    description?: string
    highlightLines?: number[]
    editable?: boolean
  }[]
  webPageCode?: {
    html: string
    css: string
    javascript: string
  }
  tips?: string[]
}

export function CodePracticeArea({ 
  title, 
  description, 
  examples, 
  webPageCode,
  tips = []
}: CodePracticeAreaProps) {
  const [activeSection, setActiveSection] = useState('examples')

  return (
    <div className="mt-8 space-y-6">
      <div className="flex items-center gap-3">
        <Flask size={24} className="text-accent" />
        <div>
          <h3 className="text-xl font-bold text-foreground">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>

      <Tabs value={activeSection} onValueChange={setActiveSection} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="examples" className="gap-2">
            <Code size={16} />
            Ejemplos de Código
          </TabsTrigger>
          {webPageCode && (
            <TabsTrigger value="webpage" className="gap-2">
              <Monitor size={16} />
              Página Web de Práctica
            </TabsTrigger>
          )}
          <TabsTrigger value="tips" className="gap-2">
            <FileText size={16} />
            Consejos y Trucos
          </TabsTrigger>
        </TabsList>

        <TabsContent value="examples" className="space-y-4">
          <CodeEditor
            examples={examples}
            title="Ejemplos para Practicar"
            description="Examina y modifica estos ejemplos para entender mejor los conceptos"
            allowExecution={true}
          />
        </TabsContent>

        {webPageCode && (
          <TabsContent value="webpage" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Monitor size={20} className="text-primary" />
                  Página Web de Práctica
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Usa este código para crear una página web local y practicar con DevTools
                </p>
              </CardHeader>
              <CardContent>
                <CodeEditor
                  examples={[
                    {
                      title: 'HTML',
                      language: 'html',
                      code: webPageCode.html,
                      description: 'Estructura HTML de la página de práctica',
                      editable: true
                    },
                    {
                      title: 'CSS',
                      language: 'css',
                      code: webPageCode.css,
                      description: 'Estilos CSS con problemas intencionados para depurar',
                      editable: true
                    },
                    {
                      title: 'JavaScript',
                      language: 'javascript',
                      code: webPageCode.javascript,
                      description: 'JavaScript con diferentes tipos de errores para practicar',
                      editable: true
                    }
                  ]}
                  title="Código de la Página de Práctica"
                  description="Copia estos archivos para crear tu entorno de práctica local"
                />
                
                <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Terminal size={20} className="text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">Instrucciones de Configuración:</h4>
                      <ol className="text-sm text-blue-800 space-y-1">
                        <li>1. Crea una carpeta nueva para el proyecto</li>
                        <li>2. Guarda el HTML como <code className="bg-blue-100 px-1 rounded">index.html</code></li>
                        <li>3. Guarda el CSS como <code className="bg-blue-100 px-1 rounded">styles.css</code></li>
                        <li>4. Guarda el JavaScript como <code className="bg-blue-100 px-1 rounded">script.js</code></li>
                        <li>5. Abre <code className="bg-blue-100 px-1 rounded">index.html</code> en Chrome</li>
                        <li>6. Abre DevTools y comienza a practicar</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        )}

        <TabsContent value="tips" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText size={20} className="text-primary" />
                Consejos y Trucos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {tips.map((tip, index) => (
                  <div key={index} className="flex gap-3 p-3 bg-muted/30 rounded-lg">
                    <div className="flex-shrink-0">
                      <div className="w-6 h-6 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-medium">
                        {index + 1}
                      </div>
                    </div>
                    <p className="text-sm text-foreground leading-relaxed">{tip}</p>
                  </div>
                ))}
                
                {tips.length === 0 && (
                  <div className="text-center py-8 text-muted-foreground">
                    <Terminal size={32} className="mx-auto mb-3 opacity-50" />
                    <p>Los consejos específicos aparecerán aquí según el tema del lab.</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}