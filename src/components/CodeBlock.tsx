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
        return 'bg-yellow-500/10 text-yellow-700 border-yellow-500/20'
      case 'html':
        return 'bg-orange-500/10 text-orange-700 border-orange-500/20'
      case 'css':
        return 'bg-blue-500/10 text-blue-700 border-blue-500/20'
      case 'console':
      case 'bash':
        return 'bg-green-500/10 text-green-700 border-green-500/20'
      default:
        return 'bg-muted text-muted-foreground border-border'
    }
  }

  const lines = editableCode.split('\n')

  return (
    <div className="relative group border border-border rounded-lg overflow-hidden bg-card">
      {/* Header */}
      <div className="flex items-center justify-between bg-muted/50 px-4 py-3 border-b border-border">
        <div className="flex items-center gap-3">
          {getLanguageIcon(language)}
          <div className="flex items-center gap-2">
            <Badge 
              variant="outline" 
              className={cn("text-xs font-medium", getLanguageColor(language))}
            >
              {language.toUpperCase()}
            </Badge>
            {title && (
              <span className="text-sm font-medium text-foreground">{title}</span>
            )}
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          {editable && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsEditing(!isEditing)}
              className="h-8 px-3 text-xs"
            >
              {isEditing ? 'Vista' : 'Editar'}
            </Button>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={copyToClipboard}
            className="h-8 px-3 opacity-0 group-hover:opacity-100 transition-opacity gap-2"
          >
            {copied ? (
              <>
                <Check size={14} />
                <span className="text-xs">¡Copiado!</span>
              </>
            ) : (
              <>
                <Copy size={14} />
                <span className="text-xs">Copiar</span>
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Description */}
      {description && (
        <div className="px-4 py-2 bg-muted/20 border-b border-border">
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      )}

      {/* Code Content */}
      <div className="relative">
        {isEditing && editable ? (
          <textarea
            value={editableCode}
            onChange={(e) => setEditableCode(e.target.value)}
            className="w-full bg-transparent border-0 p-4 font-mono text-sm leading-relaxed text-card-foreground resize-none focus:outline-none min-h-[200px]"
            style={{ 
              fontFamily: 'var(--font-mono)',
              tabSize: 2
            }}
          />
        ) : (
          <div className="flex">
            {/* Line Numbers */}
            {showLineNumbers && (
              <div className="select-none bg-muted/30 px-3 py-4 text-right border-r border-border">
                {lines.map((_, index) => (
                  <div
                    key={index}
                    className={cn(
                      "text-xs font-mono leading-relaxed text-muted-foreground/70",
                      highlightLines.includes(index + 1) && "text-accent font-medium"
                    )}
                  >
                    {index + 1}
                  </div>
                ))}
              </div>
            )}
            
            {/* Code */}
            <pre className="flex-1 p-4 overflow-x-auto">
              <code className="text-sm font-mono leading-relaxed text-card-foreground block">
                {lines.map((line, index) => (
                  <div 
                    key={index}
                    className={cn(
                      "leading-relaxed",
                      highlightLines.includes(index + 1) && "bg-accent/10 px-2 -mx-2 rounded border-l-2 border-accent"
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

      {/* Footer for editable mode */}
      {editable && isEditing && (
        <div className="flex items-center justify-between bg-muted/30 px-4 py-2 border-t border-border">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Terminal size={12} />
            <span>Presiona Tab para indentar • Ctrl+A para seleccionar todo</span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setEditableCode(code)}
            className="h-7 px-2 text-xs"
          >
            Resetear
          </Button>
        </div>
      )}
    </div>
  )
}