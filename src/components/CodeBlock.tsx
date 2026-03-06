import { Copy, Check, Code, Terminal, FileCode } from '@phosphor-icons/react'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { cn } from '../lib/utils'

interface CodeBlockProps {
  code: string
  language: string
  title?: string
  description?: string
  editable?: boolean
  showLineNumbers?: boolean
  highlightLines?: number[]
}

export function CodeBlock({ 
  code, 
  language, 
  title, 
  description,
  editable = false,
  showLineNumbers = true,
  highlightLines = []
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false)
  const [editableCode, setEditableCode] = useState(code)
  const [isEditing, setIsEditing] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(editableCode)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  const getLanguageIcon = (lang: string) => {
    switch (lang.toLowerCase()) {
      case 'javascript':
      case 'js':
        return <FileCode size={16} className="text-yellow-500" />
      case 'html':
        return <Code size={16} className="text-orange-500" />
      case 'css':
        return <Code size={16} className="text-blue-500" />
      case 'console':
      case 'bash':
        return <Terminal size={16} className="text-green-500" />
      default:
        return <Code size={16} className="text-muted-foreground" />
    }
  }

  const getLanguageColor = (lang: string) => {
    switch (lang.toLowerCase()) {
      case 'javascript':
      case 'js':
        return 'bg-gradient-to-r from-yellow-500/15 to-yellow-600/15 text-yellow-700 border border-yellow-500/30'
      case 'html':
        return 'bg-gradient-to-r from-orange-500/15 to-orange-600/15 text-orange-700 border border-orange-500/30'
      case 'css':
        return 'bg-gradient-to-r from-blue-500/15 to-blue-600/15 text-blue-700 border border-blue-500/30'
      case 'console':
      case 'bash':
        return 'bg-gradient-to-r from-green-500/15 to-green-600/15 text-green-700 border border-green-500/30'
      default:
        return 'bg-muted text-muted-foreground border border-border'
    }
  }

  const lines = editableCode.split('\n')

  return (
    <div className="relative group rounded-xl overflow-hidden bg-card shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-border hover:border-primary/30">
      <div className="flex items-center justify-between bg-gradient-to-r from-muted/80 to-muted/60 px-5 py-3.5 border-b-2 border-border/50 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10">
            {getLanguageIcon(language)}
          </div>
          <div className="flex items-center gap-2.5">
            <Badge 
              variant="outline" 
              className={cn("text-xs font-semibold px-3 py-1", getLanguageColor(language))}
            >
              {language.toUpperCase()}
            </Badge>
            {title && (
              <span className="text-sm font-semibold text-foreground">{title}</span>
            )}
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          {editable && (
            <Button
              variant={isEditing ? "default" : "ghost"}
              size="sm"
              onClick={() => setIsEditing(!isEditing)}
              className="h-8 px-3 text-xs font-medium"
            >
              {isEditing ? '👁️ Vista' : '✏️ Editar'}
            </Button>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={copyToClipboard}
            className={cn(
              "h-8 px-3 transition-all duration-200 gap-2",
              copied ? "bg-accent/20 text-accent" : "opacity-0 group-hover:opacity-100"
            )}
          >
            {copied ? (
              <>
                <Check size={16} weight="bold" />
                <span className="text-xs font-medium">¡Copiado!</span>
              </>
            ) : (
              <>
                <Copy size={16} />
                <span className="text-xs font-medium">Copiar</span>
              </>
            )}
          </Button>
        </div>
      </div>

      {description && (
        <div className="px-5 py-3 bg-gradient-to-r from-muted/40 to-muted/20 border-b border-border/50">
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>
      )}

      <div className="relative bg-gradient-to-br from-card to-muted/20">
        {isEditing && editable ? (
          <textarea
            value={editableCode}
            onChange={(e) => setEditableCode(e.target.value)}
            className="w-full bg-transparent border-0 p-5 font-mono text-sm leading-relaxed text-card-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary/20 min-h-[200px]"
            style={{ 
              fontFamily: 'var(--font-mono)',
              tabSize: 2
            }}
          />
        ) : (
          <div className="flex">
            {showLineNumbers && (
              <div className="select-none bg-gradient-to-r from-muted/60 to-muted/40 px-4 py-4 text-right border-r-2 border-border/50">
                {lines.map((_, index) => (
                  <div
                    key={index}
                    className={cn(
                      "text-xs font-mono leading-relaxed font-medium",
                      highlightLines.includes(index + 1) 
                        ? "text-accent" 
                        : "text-muted-foreground/70"
                    )}
                  >
                    {index + 1}
                  </div>
                ))}
              </div>
            )}
            
            <pre className="flex-1 p-5 overflow-x-auto">
              <code className="text-sm font-mono leading-relaxed text-card-foreground block">
                {lines.map((line, index) => (
                  <div 
                    key={index}
                    className={cn(
                      "leading-relaxed transition-colors duration-150",
                      highlightLines.includes(index + 1) && "bg-gradient-to-r from-accent/15 to-accent/5 px-3 -mx-3 rounded-md border-l-3 border-accent shadow-sm"
                    )}
                  >
                    {line || '\u00A0'}
                  </div>
                ))}
              </code>
            </pre>
          </div>
        )}
      </div>

      {editable && isEditing && (
        <div className="flex items-center justify-between bg-gradient-to-r from-muted/50 to-muted/30 px-5 py-3 border-t-2 border-border/50">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Terminal size={14} />
            <span className="font-medium">Presiona Tab para indentar • Ctrl+A para seleccionar todo</span>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setEditableCode(code)}
            className="h-7 px-3 text-xs font-medium hover:bg-destructive/10 hover:text-destructive hover:border-destructive/30"
          >
            🔄 Resetear
          </Button>
        </div>
      )}
    </div>
  )
}