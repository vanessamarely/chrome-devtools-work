import { WorkshopData } from '../types/workshop'

export const workshopData: WorkshopData = {
  title: "DevTools + IA en Acción",
  description: "Usa la IA integrada en DevTools para aclarar errores, proponer correcciones seguras y priorizar mejoras de performance. Cero humo: ejercicios guiados, métricas antes/después y un proceso paso a paso que acelera tu depuración diaria en JavaScript, HTML y CSS.",
  sections: [
    {
      id: "basics",
      title: "Fundamentos de DevTools",
      icon: "🔧",
      topics: [
        {
          id: "introduction",
          title: "Introducción a DevTools",
          content: `# Bienvenido al Taller de DevTools + IA

Chrome DevTools es un conjunto de herramientas para desarrolladores web integradas directamente en el navegador Google Chrome. Permite a los desarrolladores depurar, perfilar y optimizar sus aplicaciones web.

## Lo que Aprenderás

En este taller, dominarás:
- Paneles principales de DevTools y sus propósitos
- Depuración de JavaScript con breakpoints y consola
- Análisis de rendimiento de red
- Uso de las nuevas funciones de depuración con IA
- Optimización de CSS y manipulación del DOM

## Comenzando

Abre Chrome DevTools con:
- **F12** o **Ctrl+Shift+I** (Windows/Linux)
- **Cmd+Option+I** (Mac)
- Clic derecho → "Inspeccionar Elemento"

¡Comencemos tu viaje para convertirte en un experto de DevTools!`,
          exercises: [
            {
              id: "open-devtools",
              title: "Abriendo DevTools",
              description: "Practica abrir DevTools usando diferentes métodos",
              code: `<!DOCTYPE html>
<html>
<head>
    <title>Práctica de DevTools</title>
</head>
<body>
    <h1>¡Hola DevTools!</h1>
    <p id="demo">Haz clic en el botón para cambiar este texto.</p>
    <button onclick="cambiarTexto()">Cambiar Texto</button>
    
    <script>
        function cambiarTexto() {
            document.getElementById("demo").innerHTML = "¡Texto cambiado!";
        }
    </script>
</body>
</html>`,
              language: "html",
              instructions: [
                "Copia el código HTML en un nuevo archivo y guárdalo como 'practica.html'",
                "Abre el archivo en Chrome",
                "Intenta abrir DevTools usando F12",
                "Intenta hacer clic derecho en el botón y seleccionar 'Inspeccionar Elemento'",
                "Observa cómo DevTools resalta el elemento seleccionado"
              ]
            }
          ]
        },
        {
          id: "elements-panel",
          title: "Panel de Elementos",
          content: `# El Panel de Elementos

El panel de Elementos es tu puerta de entrada al DOM (Document Object Model). Aquí puedes inspeccionar, modificar y depurar la estructura HTML y estilos CSS en tiempo real.

## Características Clave

### Navegación del Árbol DOM
- Expandir/contraer elementos usando los iconos de flecha
- Usar las teclas de flecha para navegar por el árbol
- Buscar elementos con **Ctrl+F**

### Edición en Vivo
- Doble clic en cualquier texto para editar contenido HTML
- Modificar atributos haciendo doble clic en ellos
- Agregar nuevos atributos presionando Tab después del último atributo

### Inspección de CSS
- Ver todos los estilos aplicados en el panel Styles
- Ver valores calculados en la pestaña Computed
- Identificar conflictos de estilo con texto tachado

## Consejos Pro

- Tecla **H** alterna la ocultación de elementos
- Tecla **Delete** elimina elementos seleccionados
- **Ctrl+Z** deshace cambios del DOM`,
          exercises: [
            {
              id: "dom-manipulation",
              title: "Práctica de Manipulación del DOM",
              description: "Aprende a editar HTML y CSS en vivo en el navegador",
              code: `<!DOCTYPE html>
<html>
<head>
    <style>
        .contenedor {
            padding: 20px;
            margin: 10px;
            background-color: #f0f0f0;
            border-radius: 8px;
        }
        
        .resaltado {
            background-color: yellow;
            font-weight: bold;
        }
        
        .oculto {
            display: none;
        }
    </style>
</head>
<body>
    <div class="contenedor">
        <h2>Área de Práctica DOM</h2>
        <p class="texto">Este es un texto de ejemplo.</p>
        <button id="boton-alternar">Alternar Visibilidad</button>
        <div class="oculto" id="secreto">¡Contenido secreto!</div>
    </div>
</body>
</html>`,
              language: "html",
              instructions: [
                "Abre este HTML en Chrome y abre DevTools",
                "En el panel Elementos, encuentra el elemento <p> con clase 'texto'",
                "Haz doble clic en el contenido de texto y cámbialo a '¡Texto modificado!'",
                "Haz clic derecho en el elemento <p> y selecciona 'Editar como HTML'",
                "Agrega class='resaltado' al elemento <p>",
                "Encuentra el div con id='secreto' y elimina la clase 'oculto'",
                "Observa cómo los cambios aparecen instantáneamente en el navegador"
              ]
            }
          ]
        }
      ]
    },
    {
      id: "debugging",
      title: "Depuración de JavaScript",
      icon: "🐛",
      topics: [
        {
          id: "console-basics",
          title: "Fundamentos de la Consola",
          content: `# Dominio del Panel de Consola

La Consola es tu interfaz principal para la depuración e interacción con JavaScript. Es tanto un REPL (Read-Eval-Print Loop) como un destino de logging.

## Métodos de Consola

### Logging Básico
- \`console.log()\` - Logging general
- \`console.error()\` - Mensajes de error (rojo)
- \`console.warn()\` - Advertencias (amarillo)
- \`console.info()\` - Información (azul)

### Logging Avanzado
- \`console.table()\` - Mostrar arrays/objetos como tablas
- \`console.group()\` - Agrupar logs relacionados
- \`console.time()\` - Timing de rendimiento
- \`console.count()\` - Contar llamadas a funciones

### Ayudas de Depuración
- \`console.trace()\` - Stack trace
- \`console.assert()\` - Logging condicional
- \`console.clear()\` - Limpiar consola

## Trucos de API de Consola

### Inspección de Objetos
Usa \`%o\` para obtener salida expandible de objetos:
\`\`\`javascript
console.log('Datos de usuario: %o', objetoUsuario);
\`\`\`

### Estilizar Salida de Consola
\`\`\`javascript
console.log('%c Texto Estilizado', 'color: blue; font-size: 20px;');
\`\`\``
        },
        {
          id: "breakpoints",
          title: "Configurando Breakpoints",
          content: `# Depuración con Breakpoints

Los breakpoints pausan la ejecución del código, permitiéndote inspeccionar variables, call stack y recorrer el código línea por línea.

## Tipos de Breakpoints

### Breakpoints de Línea
- Haz clic en números de línea en el panel Sources
- **F9** para alternar breakpoint en la línea actual
- Punto azul indica breakpoint activo

### Breakpoints Condicionales
- Clic derecho en número de línea → "Agregar breakpoint condicional"
- Solo se activa cuando la condición es verdadera
- Ejemplo: \`i > 10\` o \`user.name === 'admin'\`

### Breakpoints del DOM
- Clic derecho en elemento en el panel Elementos
- Elegir: modificaciones de subárbol, cambios de atributos, o eliminación de nodo
- Pausa cuando ocurren cambios en el DOM

### Breakpoints de Excepción
- Panel Sources → botón Pausar en excepciones
- Puede pausar en todas las excepciones o solo las no capturadas

## Recorriendo el Código

Cuando está pausado en un breakpoint:
- **F10** - Step over (siguiente línea)
- **F11** - Step into (entrar a funciones)
- **Shift+F11** - Step out (salir de función actual)
- **F8** - Reanudar ejecución
- **Ctrl+Shift+F10** - Step to cursor

## Call Stack y Scope

- **Call Stack** muestra la cadena de ejecución de funciones
- Panel **Scope** muestra valores de variables
- Panel **Watch** para monitorear expresiones específicas`
        }
      ]
    },
    {
      id: "ai-features",
      title: "DevTools con IA",
      icon: "🤖",
      topics: [
        {
          id: "ai-console",
          title: "Asistente de IA para Consola",
          content: `# Funciones de Consola con IA

Chrome DevTools ahora incluye asistencia de IA para ayudar a depurar problemas, explicar errores y sugerir soluciones.

## Integración de IA en Consola

### Explicación de Errores
Cuando ocurren errores de JavaScript, DevTools ahora puede proporcionar:
- Explicaciones en lenguaje natural de mensajes de error
- Causas comunes para el tipo específico de error
- Correcciones sugeridas y pasos de depuración

### Sugerencias de Código
La IA puede ayudar con:
- Escribir comandos de consola
- Generar datos de prueba
- Crear scripts de depuración
- Explicar stack traces complejos

## Usando Funciones de IA

### Habilitando el Asistente de IA
1. Abre Configuración de DevTools (F1)
2. Navega a la pestaña Experiments
3. Habilita "Asistencia de IA en Consola"
4. Reinicia DevTools

### Comandos de IA
- Escribe preguntas en lenguaje natural en la consola
- Usa el prefijo \`IA:\` para consultas directas de IA
- Pregunta sobre mensajes de error o comportamiento del código

### Consultas de Ejemplo
\`\`\`
IA: ¿Por qué falla mi petición fetch?
IA: ¿Cómo depuro una fuga de memoria?
IA: Explica este error: TypeError: Cannot read property 'length' of undefined
\`\`\`

## Insights de Rendimiento con IA

La IA puede analizar:
- Cuellos de botella de rendimiento
- Patrones de uso de memoria
- Oportunidades de optimización de red
- Recomendaciones de tamaño de bundle`
        },
        {
          id: "ai-debugging",
          title: "Asistente de Depuración con IA",
          content: `# Flujo de Depuración Mejorado con IA

Las nuevas funciones de depuración con IA transforman cómo abordas problemas complejos proporcionando insights inteligentes y análisis automatizado.

## Análisis Inteligente de Errores

### Contexto Automático de Errores
Cuando ocurren errores, la IA proporciona:
- Análisis de código relacionado
- Explicaciones del estado de variables
- Sugerencias de correcciones potenciales
- Patrones de problemas similares

### Inteligencia de Call Stack
La IA puede explicar:
- Por qué las funciones fueron llamadas en orden específico
- Qué parámetros podrían estar causando problemas
- Flujo de ejecución esperado vs actual

## Análisis de Código con IA

### Reconocimiento de Patrones
El asistente de IA puede identificar:
- Anti-patrones comunes en tu código
- Problemas de rendimiento
- Vulnerabilidades de seguridad
- Violaciones de mejores prácticas

### Sugerencias de Refactoring
Obtén recomendaciones de IA para:
- Optimización de código
- Mejor manejo de errores
- Mejora de legibilidad
- Características modernas de JavaScript

## Flujo de Depuración con IA

1. **Encontrar Error** → IA explica el tipo de error y causas comunes
2. **Configurar Breakpoints** → IA sugiere ubicaciones óptimas de breakpoints
3. **Inspeccionar Variables** → IA explica valores inesperados
4. **Rastrear Ejecución** → IA resalta rutas de ejecución sospechosas
5. **Aplicar Correcciones** → IA valida tu enfoque de solución

## Funciones Avanzadas de IA

### Modo de Aprendizaje
- IA aprende de tus patrones de depuración
- Proporciona sugerencias personalizadas
- Se adapta a tu estilo de codificación

### Insights de Equipo
- Compartir sesiones de depuración con IA
- Resolución colaborativa de problemas
- Construcción de base de conocimientos`
        }
      ]
    },
    {
      id: "performance",
      title: "Análisis de Rendimiento",
      icon: "⚡",
      topics: [
        {
          id: "network-panel",
          title: "Análisis de Red",
          content: `# Optimización de Rendimiento de Red

El panel de Red te ayuda a analizar el rendimiento de carga, identificar cuellos de botella y optimizar la entrega de recursos.

## Resumen del Panel de Red

### Información de Peticiones
Cada petición de red muestra:
- **Status** - Código de respuesta HTTP
- **Type** - Tipo de recurso (XHR, JS, CSS, IMG, etc.)
- **Initiator** - Qué activó la petición
- **Size** - Tamaño de transferencia vs tamaño de recurso
- **Time** - Duración de la petición
- **Waterfall** - Línea de tiempo visual

### Métricas Clave
- **DOMContentLoaded** - Análisis HTML completo
- **Load** - Todos los recursos terminaron de cargar
- **Finish** - Última actividad de red
- **Transfer Size** - Datos enviados por red
- **Resource Size** - Tamaño de recurso sin comprimir

## Análisis de Rendimiento

### Identificar Peticiones Lentas
- Ordenar por columna Time para encontrar peticiones más lentas
- Buscar peticiones > 1 segundo
- Verificar peticiones fallidas (estado rojo)

### Análisis de Waterfall
- Línea azul: evento DOMContentLoaded
- Línea roja: evento Load
- Barras apiladas muestran fases de petición:
  - Queueing (gris claro)
  - DNS lookup (gris oscuro)
  - Connecting (naranja)
  - Waiting (verde)
  - Receiving (azul)

### Problemas Comunes
- **Tamaños de bundle grandes** - Dividir código, carga lazy
- **Demasiadas peticiones** - Agrupar recursos, usar HTTP/2
- **Respuesta lenta del servidor** - Optimizar backend, usar CDN
- **Bloqueo de renderizado** - Scripts async/defer, CSS crítico`
        },
        {
          id: "lighthouse",
          title: "Auditorías Lighthouse",
          content: `# Auditorías de Rendimiento Lighthouse

Lighthouse proporciona auditorías automatizadas para rendimiento, accesibilidad, mejores prácticas, SEO y características de Progressive Web App.

## Ejecutando Lighthouse

### En DevTools
1. Abre DevTools
2. Navega a la pestaña Lighthouse
3. Selecciona categorías de auditoría
4. Elige tipo de dispositivo (Móvil/Escritorio)
5. Haz clic en "Generar reporte"

### Categorías de Auditoría

#### Rendimiento
- First Contentful Paint (FCP)
- Largest Contentful Paint (LCP)
- Cumulative Layout Shift (CLS)
- Time to Interactive (TTI)
- Total Blocking Time (TBT)

#### Accesibilidad
- Ratios de contraste de color
- Navegación por teclado
- Compatibilidad con lectores de pantalla
- Implementación ARIA

#### Mejores Prácticas
- Uso de HTTPS
- No APIs obsoletas
- Conteo de errores de consola
- Headers de seguridad

#### SEO
- Meta descripciones
- Elementos de título
- Diseño amigable para móviles
- Datos estructurados

## Optimización de Rendimiento

### Métricas Críticas
- **LCP < 2.5s** - Optimizar elementos más grandes
- **FID < 100ms** - Reducir ejecución de JavaScript
- **CLS < 0.1** - Prevenir cambios de layout

### Correcciones Comunes
- Comprimir imágenes (formato WebP)
- Minificar CSS/JavaScript
- Usar Content Delivery Network (CDN)
- Habilitar compresión gzip
- Carga lazy de recursos no críticos
- Precargar recursos críticos

### Monitoreo de Rendimiento
- Establecer presupuestos de rendimiento
- Integración regular de Lighthouse CI
- Real User Monitoring (RUM)
- Pruebas sintéticas en CI/CD`
        }
      ]
    }
  ]
}