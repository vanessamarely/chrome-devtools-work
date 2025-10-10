import { Copy, Check } from '@phosphor-icons/react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '../lib/utils'

interface CodeBlockProps {
  code: string
  language: string
}

export function CodeBlock({ code, language }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  return (
    <div className="relative group">
      <div className="flex items-center justify-between bg-muted px-4 py-2 rounded-t-lg border border-border">
        <span className="text-sm font-medium text-muted-foreground capitalize">{language}</span>
        <Button
          variant="ghost"
          size="sm"
          onClick={copyToClipboard}
          className="opacity-0 group-hover:opacity-100 transition-opacity gap-2"
        >
          {copied ? (
            <>
              <Check size={14} />
              ¡Copiado!
            </>
          ) : (
            <>
              <Copy size={14} />
              Copiar
            </>
          )}
        </Button>
      </div>
      <pre className={cn(
        "bg-card border border-t-0 border-border rounded-b-lg p-4 overflow-x-auto",
        "text-sm font-mono leading-relaxed"
      )}>
        <code className="text-card-foreground">{code}</code>
      </pre>
    </div>
  )
}