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
          ],
          interactiveExercises: [
            {
              id: "devtools-shortcut",
              title: "Atajos de DevTools",
              description: "Aprende los atajos de teclado principales para abrir DevTools",
              type: "console-command",
              solution: ["F12", "Ctrl+Shift+I", "Cmd+Option+I"],
              validation: [
                {
                  type: "contains",
                  value: "F12",
                  message: "F12 es el atajo principal para abrir DevTools",
                  points: 1
                },
                {
                  type: "contains", 
                  value: "Ctrl+Shift+I",
                  message: "Ctrl+Shift+I es el atajo alternativo en Windows/Linux",
                  points: 1
                },
                {
                  type: "contains",
                  value: "Cmd+Option+I",
                  message: "Cmd+Option+I es el atajo para Mac",
                  points: 1
                }
              ],
              hints: [
                "Hay tres atajos principales: uno con función, uno con Ctrl en Windows, y uno con Cmd en Mac",
                "El atajo principal usa la tecla F12",
                "Los atajos incluyen Shift e I en combinación con Ctrl o Cmd"
              ]
            },
            {
              id: "element-selection",
              title: "Seleccionar Elementos",
              description: "Aprende el atajo para activar la herramienta de selección de elementos",
              type: "console-command",
              solution: ["Ctrl+Shift+C", "Cmd+Shift+C"],
              validation: [
                {
                  type: "contains",
                  value: "Ctrl+Shift+C",
                  message: "Ctrl+Shift+C activa la herramienta de selección en Windows/Linux",
                  points: 1
                },
                {
                  type: "contains",
                  value: "Cmd+Shift+C", 
                  message: "Cmd+Shift+C activa la herramienta de selección en Mac",
                  points: 1
                }
              ],
              hints: [
                "El atajo usa la tecla C junto con Shift",
                "En Windows/Linux usa Ctrl, en Mac usa Cmd"
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
          ],
          interactiveExercises: [
            {
              id: "css-selector-practice",
              title: "Práctica de Selectores CSS", 
              description: "Escribe selectores CSS para encontrar elementos específicos",
              type: "css-selector",
              solution: ".contenedor p",
              validation: [
                {
                  type: "regex",
                  value: /\.contenedor\s+p/,
                  message: "Selector correcto para párrafos dentro de .contenedor",
                  points: 2
                }
              ],
              hints: [
                "Necesitas un selector que apunte a elementos <p> dentro de un elemento con clase 'contenedor'",
                "Usa el selector de clase para .contenedor seguido de un espacio y luego p"
              ]
            },
            {
              id: "dom-manipulation-code",
              title: "Código de Manipulación DOM",
              description: "Escribe código JavaScript para cambiar el texto de un elemento",
              type: "dom-manipulation",
              initialCode: `// Cambiar el texto del elemento con id "demo"
// a "¡Nuevo texto!"
`,
              solution: `document.getElementById("demo").innerHTML = "¡Nuevo texto!";`,
              validation: [
                {
                  type: "contains",
                  value: "document.getElementById",
                  message: "Usa document.getElementById para obtener el elemento",
                  points: 1
                },
                {
                  type: "contains",
                  value: '"demo"',
                  message: "Busca el elemento con id 'demo'",
                  points: 1
                },
                {
                  type: "contains",
                  value: "innerHTML",
                  message: "Usa innerHTML para cambiar el contenido",
                  points: 1
                },
                {
                  type: "contains",
                  value: "¡Nuevo texto!",
                  message: "Establece el texto correcto",
                  points: 1
                }
              ],
              hints: [
                "Usa document.getElementById() para obtener el elemento",
                "Luego usa .innerHTML para cambiar su contenido",
                "El texto debe ser exactamente '¡Nuevo texto!'"
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
\`\`\``,
          interactiveExercises: [
            {
              id: "console-log-practice",
              title: "Comandos de Consola Básicos",
              description: "Practica escribir comandos de consola para registrar información",
              type: "console-command",
              initialCode: `// Escribe un comando para registrar "Hola DevTools" en la consola
`,
              solution: `console.log("Hola DevTools");`,
              validation: [
                {
                  type: "contains",
                  value: "console.log",
                  message: "Usa console.log para mostrar mensajes",
                  points: 1
                },
                {
                  type: "contains",
                  value: "Hola DevTools",
                  message: "El mensaje debe ser 'Hola DevTools'",
                  points: 1
                }
              ],
              hints: [
                "Usa console.log() para mostrar mensajes en la consola",
                "El texto debe ir entre comillas dentro de los paréntesis"
              ]
            },
            {
              id: "console-error-practice", 
              title: "Registro de Errores",
              description: "Aprende a registrar mensajes de error en la consola",
              type: "console-command",
              initialCode: `// Registra un mensaje de error que diga "Error encontrado"
`,
              solution: `console.error("Error encontrado");`,
              validation: [
                {
                  type: "contains",
                  value: "console.error",
                  message: "Usa console.error para mostrar errores",
                  points: 1
                },
                {
                  type: "contains",
                  value: "Error encontrado",
                  message: "El mensaje debe ser 'Error encontrado'",
                  points: 1
                }
              ],
              hints: [
                "Usa console.error() para mostrar errores en rojo",
                "El mensaje debe ser 'Error encontrado'"
              ]
            }
          ]
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
- Panel **Watch** para monitorear expresiones específicas`,
          interactiveExercises: [
            {
              id: "debug-fix-exercise",
              title: "Corregir Bug en JavaScript",
              description: "Encuentra y corrige el error en esta función",
              type: "debug-fix",
              initialCode: `function calcularPromedio(numeros) {
    let suma = 0;
    for (let i = 0; i <= numeros.length; i++) {
        suma += numeros[i];
    }
    return suma / numeros.length;
}

// El error está en el bucle for`,
              solution: `function calcularPromedio(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    return suma / numeros.length;
}`,
              validation: [
                {
                  type: "contains",
                  value: "i < numeros.length",
                  message: "Condición del bucle corregida para evitar acceso fuera de límites",
                  points: 2
                },
                {
                  type: "regex",
                  value: /for\s*\(\s*let\s+i\s*=\s*0;\s*i\s*<\s*numeros\.length;\s*i\+\+\s*\)/,
                  message: "Bucle for correctamente formateado",
                  points: 1
                }
              ],
              hints: [
                "El problema está en la condición del bucle for",
                "Usar <= causa que el bucle acceda a un índice que no existe",
                "Cambia <= por < en la condición del bucle"
              ]
            },
            {
              id: "breakpoint-condition",
              title: "Condición de Breakpoint",
              description: "Escribe una condición para un breakpoint que se active solo cuando la variable 'contador' sea mayor que 5",
              type: "console-command",
              solution: "contador > 5",
              validation: [
                {
                  type: "exact",
                  value: "contador > 5",
                  message: "Condición correcta para breakpoint condicional",
                  points: 2
                }
              ],
              hints: [
                "La condición debe comparar la variable 'contador' con el número 5",
                "Usa el operador > para verificar que sea mayor que 5"
              ]
            }
          ]
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
- Recomendaciones de tamaño de bundle`,
          interactiveExercises: [
            {
              id: "ai-query-practice",
              title: "Consultas de IA",
              description: "Practica escribir consultas efectivas para el asistente de IA",
              type: "console-command",
              initialCode: `// Escribe una consulta de IA para explicar un error de TypeError
// Usa el prefijo "IA:" seguido de tu pregunta
`,
              solution: `IA: ¿Qué significa TypeError: Cannot read property 'length' of undefined?`,
              validation: [
                {
                  type: "contains",
                  value: "IA:",
                  message: "Usa el prefijo 'IA:' para consultas directas",
                  points: 1
                },
                {
                  type: "contains",
                  value: "TypeError",
                  message: "Menciona el tipo de error específico",
                  points: 1
                },
                {
                  type: "contains",
                  value: "Cannot read property",
                  message: "Incluye detalles del mensaje de error",
                  points: 1
                }
              ],
              hints: [
                "Comienza con 'IA:' para indicar que es una consulta para el asistente",
                "Pregunta específicamente sobre el error TypeError",
                "Incluye parte del mensaje de error para contexto"
              ]
            },
            {
              id: "ai-debugging-question",
              title: "Pregunta de Depuración con IA",
              description: "Escribe una pregunta para el asistente de IA sobre depuración de performance",
              type: "console-command",
              solution: `IA: ¿Cómo puedo identificar cuellos de botella de rendimiento en mi aplicación?`,
              validation: [
                {
                  type: "contains",
                  value: "IA:",
                  message: "Usa el prefijo correcto para consultas de IA",
                  points: 1
                },
                {
                  type: "regex",
                  value: /(rendimiento|performance|cuellos de botella|optimización)/i,
                  message: "Pregunta relacionada con rendimiento o optimización",
                  points: 2
                }
              ],
              hints: [
                "Usa el prefijo 'IA:' para comenzar tu consulta",
                "Pregunta sobre análisis de rendimiento o identificación de problemas",
                "Palabras clave: rendimiento, cuellos de botella, optimización"
              ]
            }
          ]
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