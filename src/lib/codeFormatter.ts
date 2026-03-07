import * as prettier from 'prettier'
import parserBabel from 'prettier/parser-babel'
import parserHtml from 'prettier/parser-html'
import parserPostcss from 'prettier/parser-postcss'

export interface FormatResult {
  success: boolean
  code: string
  error?: string
}

export async function formatCode(code: string, language: string): Promise<FormatResult> {
  try {
    let parser: string
    let plugins: any[]

    switch (language.toLowerCase()) {
      case 'javascript':
      case 'js':
        parser = 'babel'
        plugins = [parserBabel]
        break
      case 'html':
      case 'markup':
        parser = 'html'
        plugins = [parserHtml]
        break
      case 'css':
        parser = 'css'
        plugins = [parserPostcss]
        break
      default:
        return {
          success: false,
          code,
          error: `Formatting not supported for ${language}`
        }
    }

    const formatted = await prettier.format(code, {
      parser,
      plugins,
      printWidth: 80,
      tabWidth: 2,
      useTabs: false,
      semi: true,
      singleQuote: true,
      trailingComma: 'es5',
      bracketSpacing: true,
      arrowParens: 'always',
      htmlWhitespaceSensitivity: 'css',
    })

    return {
      success: true,
      code: formatted
    }
  } catch (error) {
    return {
      success: false,
      code,
      error: error instanceof Error ? error.message : 'Unknown formatting error'
    }
  }
}
