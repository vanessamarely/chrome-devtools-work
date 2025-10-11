import { WorkshopData } from '../types/workshop'

export const workshopData: WorkshopData = {
  title: "DevTools + IA en Acción",
  description: "Usa la IA integrada en DevTools para aclarar errores, proponer correcciones seguras y priorizar mejoras de performance. Cero humo: mini labs guiados, métricas antes/después y un proceso paso a paso que acelera tu depuración diaria en JavaScript, HTML y CSS.",
  sections: [
    {
      id: "fundamentals",
      title: "Conceptos Básicos y Paneles DevTools",
      icon: "🔧",
      topics: [
        {
          id: "introduction",
          title: "Introducción a DevTools",
          content: `# Bienvenido al Taller de DevTools + IA

Chrome DevTools es un conjunto de herramientas para desarrolladores web integradas directamente en el navegador Google Chrome. Permite a los desarrolladores depurar, perfilar y optimizar sus aplicaciones web.

## Lo que Aprenderás

En este taller, dominarás:
- Paneles fundamentales de DevTools: Elements, Console, Sources, Network, Performance
- Conceptos básicos de depuración y análisis
- Técnicas de manipulación del DOM y CSS
- Análisis de rendimiento y red
- Integración de IA en cada panel para acelerar tu flujo de trabajo

## Comenzando

Abre Chrome DevTools con:
- **F12** o **Ctrl+Shift+I** (Windows/Linux)
- **Cmd+Option+I** (Mac)
- Clic derecho → "Inspeccionar Elemento"

¡Comencemos tu viaje para convertirte en un experto de DevTools!`,
          miniLab: {
            title: "Mini Lab: Explorando DevTools",
            description: "Sigue estos pasos en Chrome para familiarizarte con DevTools",
            steps: [
              {
                step: 1,
                title: "Abriendo DevTools",
                instructions: [
                  "Abre una nueva pestaña en Chrome y navega a cualquier sitio web",
                  "Presiona F12 para abrir DevTools",
                  "Observa los diferentes paneles disponibles en la parte superior",
                  "Prueba cambiar el tamaño del panel arrastrando la línea divisoria"
                ]
              },
              {
                step: 2,
                title: "Navegando por los Paneles",
                instructions: [
                  "Haz clic en cada panel: Elements, Console, Sources, Network, Performance",
                  "Nota las diferentes herramientas disponibles en cada panel",
                  "Prueba el botón de configuración (⚙️) en la esquina superior derecha",
                  "Experimenta con diferentes ubicaciones del dock (bottom, right, separate window)"
                ]
              },
              {
                step: 3,
                title: "Herramienta de Selección",
                instructions: [
                  "Presiona Ctrl+Shift+C (Cmd+Shift+C en Mac) para activar la herramienta de selección",
                  "Mueve el cursor sobre diferentes elementos de la página",
                  "Observa cómo se resaltan los elementos y aparece información de dimensiones",
                  "Haz clic en un elemento para seleccionarlo en el panel Elements"
                ]
              }
            ]
          }
        },
        {
          id: "elements-panel",
          title: "Panel Elements (DOM y CSS)",
          content: `# Panel Elements: Maestro del DOM y CSS

El panel Elements es tu puerta de entrada al DOM (Document Object Model) y los estilos CSS. Aquí puedes inspeccionar, modificar y depurar la estructura HTML y estilos CSS en tiempo real.

## Características Principales

### Navegación del Árbol DOM
- Expandir/contraer elementos usando los iconos de flecha
- Usar las teclas de flecha para navegar por el árbol
- Buscar elementos con **Ctrl+F**
- Filtrar por tipo de nodo, atributos o texto

### Edición en Vivo del DOM
- Doble clic en cualquier texto para editar contenido HTML
- Modificar atributos haciendo doble clic en ellos
- Agregar nuevos atributos presionando Tab después del último atributo
- Arrastrar y soltar elementos para reorganizar la estructura

### Panel de Estilos CSS
- Ver todos los estilos aplicados en el panel Styles
- Ver valores calculados en la pestaña Computed
- Identificar conflictos de estilo con texto tachado
- Editar propiedades CSS en tiempo real

## Funcionalidades Avanzadas

### Manipulación de Estado
- **:hover**, **:active**, **:focus** - Simular estados de pseudo-clases
- **:visited** - Probar estilos de enlaces visitados
- **Force state** - Forzar estados específicos para testing

### Debugging de Layout
- Ver el modelo de caja (Box Model) visual
- Inspeccionar márgenes, padding, bordes
- Analizar problemas de overflow y positioning
- Grid y Flexbox inspector para layouts complejos

## Atajos Útiles
- **H** - Ocultar/mostrar elemento seleccionado
- **Delete** - Eliminar elemento seleccionado
- **Ctrl+Z** - Deshacer último cambio
- **F2** - Editar como HTML`,
          miniLab: {
            title: "Mini Lab: Manipulación DOM y CSS",
            description: "Practica editando HTML y CSS en tiempo real",
            steps: [
              {
                step: 1,
                title: "Selección de Elementos",
                instructions: [
                  "Ve a cualquier sitio web (ej: wikipedia.org)",
                  "Presiona Ctrl+Shift+C para activar el selector",
                  "Haz clic en un título principal (h1 o h2)",
                  "Observa cómo se resalta en el panel Elements"
                ]
              },
              {
                step: 2,
                title: "Editando Contenido",
                instructions: [
                  "Con el título seleccionado, haz doble clic en el texto dentro del HTML",
                  "Cambia el texto por 'Mi Título Modificado'",
                  "Presiona Enter para confirmar el cambio",
                  "Observa cómo cambia instantáneamente en la página"
                ]
              },
              {
                step: 3,
                title: "Modificando Estilos CSS",
                instructions: [
                  "En el panel Styles (lado derecho), busca la propiedad 'color'",
                  "Haz clic en el valor de color para abrrir el selector",
                  "Cambia el color a rojo (#ff0000)",
                  "Prueba agregar una nueva propiedad: background-color: yellow"
                ]
              },
              {
                step: 4,
                title: "Estados de Pseudo-clases",
                instructions: [
                  "Busca un enlace (elemento <a>) en la página",
                  "Selecciónalo en el panel Elements",
                  "En el panel Styles, haz clic en ':hov'",
                  "Activa la checkbox de ':hover' y observa los cambios"
                ]
              }
            ],
            practiceArea: {
              title: "Área de Práctica: Página de Demostración",
              description: "Usa esta página web para practicar las técnicas de manipulación DOM y CSS",
              webPageCode: {
                html: `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DevTools Practice - Elements Panel</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header class="header">
        <h1 id="main-title">Práctica de DevTools</h1>
        <nav class="navigation">
            <a href="#home" class="nav-link">Inicio</a>
            <a href="#about" class="nav-link">Acerca</a>
            <a href="#contact" class="nav-link">Contacto</a>
        </nav>
    </header>
    
    <main class="content">
        <section class="hero">
            <h2 class="hero-title">Bienvenido al Lab de DevTools</h2>
            <p class="hero-description">Practica manipulando elementos y estilos con las herramientas de desarrollador.</p>
            <button class="cta-button" onclick="showAlert()">Probar Interacción</button>
        </section>
        
        <section class="cards">
            <div class="card">
                <h3>Panel Elements</h3>
                <p>Inspecciona y modifica el DOM en tiempo real.</p>
            </div>
            <div class="card highlighted">
                <h3>Panel Styles</h3>
                <p>Edita CSS y experimenta con estilos visuales.</p>
            </div>
            <div class="card">
                <h3>Box Model</h3>
                <p>Analiza márgenes, padding y dimensiones.</p>
            </div>
        </section>
    </main>
    
    <footer class="footer">
        <p>&copy; 2024 DevTools Lab - Práctica educativa</p>
    </footer>
    
    <script src="script.js"></script>
</body>
</html>`,
                css: `/* Estilos base con algunos problemas intencionados para depurar */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    color: #333;
    background-color: #f4f4f4;
}

.header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    padding: 2rem 0;
    text-align: center;
    color: white;
}

#main-title {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    /* Error intencional: color poco visible */
    color: #ccc;
}

.navigation {
    margin-top: 1rem;
}

.nav-link {
    color: white;
    text-decoration: none;
    margin: 0 1rem;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    transition: background-color 0.3s;
    /* Error intencional: hover muy sutil */
    &:hover {
        background-color: rgba(255, 255, 255, 0.05);
    }
}

.content {
    max-width: 1200px;
    margin: 2rem auto;
    padding: 0 2rem;
}

.hero {
    text-align: center;
    margin-bottom: 3rem;
    padding: 3rem;
    background: white;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.hero-title {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #2c3e50;
}

.hero-description {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    color: #7f8c8d;
    /* Error intencional: line-height muy estrecho */
    line-height: 1.1;
}

.cta-button {
    background: #3498db;
    color: white;
    border: none;
    padding: 1rem 2rem;
    font-size: 1rem;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
    /* Error intencional: efecto hover roto */
    &:hover {
        background: #3498db; /* No cambia */
    }
}

.cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}

.card {
    background: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
    /* Error intencional: border no visible */
    border: 1px solid transparent;
}

.card:hover {
    transform: translateY(-5px);
    /* Error intencional: shadow muy exagerado */
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
}

.card h3 {
    color: #2c3e50;
    margin-bottom: 1rem;
}

.card.highlighted {
    /* Error intencional: texto poco legible */
    background: #ecf0f1;
    color: #bdc3c7;
}

.footer {
    background: #34495e;
    color: white;
    text-align: center;
    padding: 2rem 0;
    margin-top: 3rem;
}

/* Error intencional: media query rota */
@media (max-width: 768px) {
    .cards {
        grid-template-columns: 1fr 1fr 1fr; /* Muy estrecho en móvil */
    }
    
    #main-title {
        font-size: 4rem; /* Muy grande para móvil */
    }
}`,
                javascript: `// JavaScript con errores intencionados para práctica de depuración

// Error intencional: variable no declarada
function showAlert() {
    // Error: undefinedVariable no está definida
    console.log(undefinedVariable);
    
    alert("¡Hola desde DevTools!");
}

// Error intencional: función con bug lógico
function calculateTotal(price, tax) {
    // Error: conversión incorrecta de string
    return price + tax; // Debería ser price * (1 + tax)
}

// Error intencional: loop infinito (comentado para seguridad)
// function problematicLoop() {
//     let i = 0;
//     while (i >= 0) {
//         console.log("Loop infinito!");
//         i++; // Error: nunca se cumple la condición de salida
//     }
// }

// Error intencional: acceso a elementos que no existen
document.addEventListener('DOMContentLoaded', function() {
    // Error: elemento no existe
    const nonExistentElement = document.getElementById('does-not-exist');
    nonExistentElement.textContent = "Esto causará un error";
    
    // Error: typo en el selector
    const wrongSelector = document.querySelector('.wrong-class-name');
    if (wrongSelector) {
        wrongSelector.style.color = 'red';
    }
    
    // Ejemplo correcto para comparar
    const correctElement = document.getElementById('main-title');
    if (correctElement) {
        console.log('Título encontrado:', correctElement.textContent);
    }
});

// Error intencional: problema de scope
var globalVar = "Soy global";

function testScope() {
    console.log(localVar); // Error: hoisting incorrecto
    var localVar = "Soy local";
}

// Error intencional: async/await mal usado
async function problematicAsync() {
    // Error: no usar await
    const result = fetch('https://api.ejemplo.com/datos');
    console.log(result); // Mostrará Promise en lugar de datos
}

// Error intencional: manejo de eventos
document.querySelector('.cta-button').addEventListener('click', function() {
    // Error: no prevenir default en algunos casos
    calculateTotal("100", "0.1"); // Error: strings en lugar de números
});`
              },
              tips: [
                "Usa Ctrl+Shift+C para activar el selector de elementos rápidamente",
                "Los cambios en DevTools son temporales - recarga la página para revertir",
                "Haz clic derecho en elementos para ver opciones como 'Copiar selector' o 'Editar como HTML'",
                "El panel Styles muestra estilos tachados cuando hay conflictos - muy útil para depurar",
                "Usa la pestaña Computed para ver exactamente qué estilos finales se aplican",
                "Presiona 'H' para ocultar/mostrar elementos seleccionados temporalmente",
                "Los pseudo-estados (:hover, :focus) se pueden forzar desde el panel Styles",
                "El Box Model visual te ayuda a entender spacing y dimensiones problemáticas"
              ]
            }
          }
        },
        {
          id: "console-panel",
          title: "Panel Console (JavaScript)",
          content: `# Panel Console: Tu Interfaz JavaScript

La Consola es tu interfaz principal para la depuración e interacción con JavaScript. Es tanto un REPL (Read-Eval-Print Loop) como un destino de logging.

## Funcionalidades Básicas

### Métodos de Console
- \`console.log()\` - Logging general
- \`console.error()\` - Mensajes de error (rojo)
- \`console.warn()\` - Advertencias (amarillo)
- \`console.info()\` - Información (azul)

### Logging Avanzado
- \`console.table()\` - Mostrar arrays/objetos como tablas
- \`console.group()\` - Agrupar logs relacionados
- \`console.time()\` / \`console.timeEnd()\` - Timing de rendimiento
- \`console.count()\` - Contar llamadas a funciones

### Debugging Helpers
- \`console.trace()\` - Stack trace completo
- \`console.assert()\` - Logging condicional
- \`console.clear()\` - Limpiar consola

## Comandos de Console API

### Variables Especiales
- \`$0\` - Último elemento inspeccionado
- \`$1, $2, $3, $4\` - Elementos previamente inspeccionados
- \`$_\` - Resultado de la última expresión

### Funciones Útiles
- \`$(selector)\` - Equivalente a document.querySelector()
- \`$$(selector)\` - Equivalente a document.querySelectorAll()
- \`inspect(element)\` - Inspeccionar elemento en el panel Elements
- \`copy()\` - Copiar al portapapeles

## Técnicas Avanzadas

### Filtrado de Mensajes
- Filtrar por tipo: Errores, Advertencias, Info, Logs
- Filtrar por texto específico
- Usar expresiones regulares para filtros complejos

### Multi-line Code
- **Shift+Enter** - Nueva línea sin ejecutar
- Editor incorporado para scripts más largos
- Historial de comandos con teclas de flecha`,
          miniLab: {
            title: "Mini Lab: Dominando la Console",
            description: "Explora las funcionalidades de la consola JavaScript",
            steps: [
              {
                step: 1,
                title: "Comandos Básicos",
                instructions: [
                  "Ve al panel Console en DevTools",
                  "Escribe: console.log('Hola desde DevTools')",
                  "Presiona Enter y observa el resultado",
                  "Prueba: console.error('Este es un error') y nota el color rojo"
                ]
              },
              {
                step: 2,
                title: "Variables Especiales",
                instructions: [
                  "Ve al panel Elements y selecciona cualquier elemento",
                  "Regresa al Console y escribe: $0",
                  "Observa que muestra el elemento seleccionado",
                  "Prueba: $0.style.border = '3px solid red'"
                ]
              },
              {
                step: 3,
                title: "Selectores Rápidos",
                instructions: [
                  "En la console, escribe: $('h1')",
                  "Observa que encuentra el primer h1 de la página",
                  "Prueba: $$('p') para obtener todos los párrafos",
                  "Ejecuta: inspect($('h1')) para ir al panel Elements"
                ]
              },
              {
                step: 4,
                title: "Timing y Performance",
                instructions: [
                  "Escribe: console.time('miTimer')",
                  "Ejecuta alguna operación: for(let i=0; i<1000000; i++){}",
                  "Escribe: console.timeEnd('miTimer')",
                  "Observa el tiempo transcurrido en milisegundos"
                ]
              }
            ]
          }
        },
        {
          id: "sources-panel",
          title: "Panel Sources (Debugging)",
          content: `# Panel Sources: Depuración Avanzada

El panel Sources es el centro de comando para la depuración de JavaScript. Aquí puedes configurar breakpoints, recorrer código línea por línea y analizar el estado de tu aplicación.

## Estructura del Panel Sources

### File Navigator (Izquierda)
- **Page** - Archivos de la página actual
- **Filesystem** - Mapeo de archivos locales
- **Overrides** - Sobrescribir archivos remotos localmente
- **Content scripts** - Scripts de extensiones
- **Snippets** - Fragmentos de código reutilizables

### Code Editor (Centro)
- Editor completo con syntax highlighting
- Números de línea clicables para breakpoints
- Búsqueda y reemplazo con Ctrl+F / Ctrl+H
- Mapas de fuente (source maps) automáticos

### Debugging Sidebar (Derecha)
- **Call Stack** - Cadena de llamadas de funciones
- **Scope** - Variables en el scope actual
- **Watch** - Expresiones para monitorear
- **Breakpoints** - Lista de breakpoints activos

## Tipos de Breakpoints

### Line Breakpoints
- Clic en número de línea para crear/eliminar
- **F9** para alternar en línea actual
- Punto azul indica breakpoint activo

### Conditional Breakpoints
- Clic derecho en línea → "Add conditional breakpoint"
- Solo pausa cuando la condición es verdadera
- Ejemplos: \`i > 10\`, \`user.name === 'admin'\`

### Logpoints
- Clic derecho → "Add logpoint"
- Registra un mensaje sin pausar ejecución
- Útil para debugging en producción

## Controles de Stepping

### Navegación de Código
- **F8** / ▶️ - Resume execution (Reanudar)
- **F10** / ⬇️ - Step over (Saltar sobre función)
- **F11** / ⬇️ - Step into (Entrar en función)
- **Shift+F11** / ⬆️ - Step out (Salir de función)

### Call Stack Navigation
- Clic en cualquier frame del call stack
- Ver variables y estado en diferentes niveles
- Entender la secuencia de llamadas

## Funciones Avanzadas

### Watch Expressions
- Monitorear variables específicas
- Evaluar expresiones complejas
- Actualizaciones automáticas en cada pausa

### Scope Inspection
- **Local** - Variables de función actual
- **Global** - Variables globales (window)
- **Closure** - Variables capturadas por closures

### Source Maps
- Mapeo automático de código minificado/transpilado
- Debugging de TypeScript, Babel, Webpack
- Configuración en bundlers para mejor experiencia`,
          miniLab: {
            title: "Mini Lab: Debugging con Sources",
            description: "Aprende a usar breakpoints y stepping para depurar código",
            steps: [
              {
                step: 1,
                title: "Configurando tu Primer Breakpoint",
                instructions: [
                  "Ve a cualquier sitio con JavaScript (ej: github.com)",
                  "Abre DevTools y ve al panel Sources",
                  "En el File Navigator, busca un archivo .js",
                  "Haz clic en un número de línea para crear un breakpoint (punto azul)",
                  "Interactúa con la página para que ejecute ese código"
                ]
              },
              {
                step: 2,
                title: "Navegación con Stepping",
                instructions: [
                  "Cuando el código se pause en tu breakpoint:",
                  "Presiona F10 (Step over) varias veces",
                  "Observa cómo se resalta la línea actual",
                  "Revisa el panel Scope para ver las variables actuales"
                ]
              },
              {
                step: 3,
                title: "Explorando Call Stack",
                instructions: [
                  "En el panel Call Stack, observa la cadena de funciones",
                  "Haz clic en diferentes frames del stack",
                  "Nota cómo cambian las variables en el panel Scope",
                  "Usa esto para entender la secuencia de ejecución"
                ]
              },
              {
                step: 4,
                title: "Watch Expressions",
                instructions: [
                  "En el panel Watch, haz clic en '+'",
                  "Agrega una expresión como 'this' o una variable que veas",
                  "Presiona F10 para avanzar y observa cómo cambia el valor",
                  "Agrega expresiones más complejas como 'typeof variable'"
                ]
              }
            ]
          }
        },
        {
          id: "network-panel",
          title: "Panel Network (Red)",
          content: `# Panel Network: Análisis de Rendimiento de Red

El panel Network te permite analizar todas las peticiones HTTP, identificar cuellos de botella de rendimiento y optimizar la carga de recursos.

## Vista General del Panel

### Información de Peticiones
Cada petición muestra:
- **Status** - Código de respuesta HTTP (200, 404, 500, etc.)
- **Type** - Tipo de recurso (XHR, JS, CSS, IMG, Doc, etc.)
- **Initiator** - Qué activó la petición (script, parser, etc.)
- **Size** - Tamaño transferido vs tamaño del recurso
- **Time** - Duración total de la petición
- **Waterfall** - Timeline visual de la petición

### Filtros de Peticiones
- **All** - Todas las peticiones
- **XHR/Fetch** - Peticiones AJAX
- **JS** - Archivos JavaScript
- **CSS** - Hojas de estilo
- **Img** - Imágenes
- **Media** - Audio/Video
- **Font** - Fuentes web
- **Doc** - Documentos HTML
- **WS** - WebSockets

## Métricas de Performance

### Timeline Events
- **DOMContentLoaded** (línea azul) - DOM completamente parseado
- **Load** (línea roja) - Todos los recursos terminaron de cargar
- **FCP** - First Contentful Paint
- **LCP** - Largest Contentful Paint

### Análisis de Waterfall
Cada barra muestra las fases de la petición:
- **Queueing** (gris claro) - Esperando en cola
- **Stalled** (gris) - Stalled/bloqueado
- **DNS Lookup** (verde oscuro) - Resolución DNS
- **Initial Connection** (naranja) - Estableciendo conexión
- **SSL** (marrón) - Handshake SSL/TLS
- **Request sent** (verde claro) - Enviando petición
- **Waiting (TTFB)** (verde) - Time to First Byte
- **Content Download** (azul) - Descargando respuesta

## Debugging de Red

### Problemas Comunes
- **Peticiones lentas** - Ordenar por columna Time
- **Recursos grandes** - Revisar columna Size
- **Demasiadas peticiones** - Contar peticiones por tipo
- **Errores de red** - Filtrar por status codes 4xx/5xx

### Headers y Response
- **Headers** - Request/Response headers completos
- **Preview** - Vista previa formateada del contenido
- **Response** - Contenido raw de la respuesta
- **Timing** - Breakdown detallado de timing

## Optimización de Rendimiento

### Identificar Mejoras
- Recursos sin comprimir (falta gzip/brotli)
- Imágenes demasiado grandes
- CSS/JS no minificados
- Demasiadas peticiones HTTP
- Recursos bloqueantes del render

### Métricas Objetivo
- **TTFB < 200ms** - Server response time
- **FCP < 1.8s** - First Contentful Paint
- **LCP < 2.5s** - Largest Contentful Paint
- **Total page size < 1MB** - Tamaño total optimizado`,
          miniLab: {
            title: "Mini Lab: Análisis de Red",
            description: "Analiza el performance de red de una página web",
            steps: [
              {
                step: 1,
                title: "Capturando Tráfico de Red",
                instructions: [
                  "Ve al panel Network en DevTools",
                  "Asegúrate que la grabación esté activa (botón rojo)",
                  "Haz clic en 'Clear' para limpiar peticiones anteriores",
                  "Recarga la página (Ctrl+R) para capturar todas las peticiones"
                ]
              },
              {
                step: 2,
                title: "Analizando Peticiones",
                instructions: [
                  "Ordena las peticiones por 'Time' (columna Time)",
                  "Identifica la petición más lenta",
                  "Haz clic en ella para ver detalles en el panel inferior",
                  "Revisa las pestañas Headers, Preview, Response, Timing"
                ]
              },
              {
                step: 3,
                title: "Filtros y Búsqueda",
                instructions: [
                  "Haz clic en 'Img' para ver solo imágenes",
                  "Identifica la imagen más grande",
                  "Usa el filtro 'JS' para ver archivos JavaScript",
                  "En la caja de búsqueda, escribe '.css' para filtrar estilos"
                ]
              },
              {
                step: 4,
                title: "Waterfall y Timing",
                instructions: [
                  "Observa la columna Waterfall (timeline visual)",
                  "Identifica las líneas azul (DOMContentLoaded) y roja (Load)",
                  "Busca gaps largos que indiquen problemas de red",
                  "Haz clic en una petición y ve a la pestaña Timing para detalles"
                ]
              }
            ]
          }
        },
        {
          id: "performance-panel",
          title: "Panel Performance (Rendimiento)",
          content: `# Panel Performance: Profiling Avanzado

El panel Performance te permite analizar en detalle el rendimiento de tu aplicación, identificar cuellos de botella de JavaScript, problemas de rendering y optimizar la experiencia del usuario.

## Capturando un Performance Profile

### Preparación
- Usa el modo incógnito para evitar interferencia de extensiones
- Cierra otras pestañas para recursos dedicados
- Considera usar simulación de CPU slower (4x/6x slowdown)

### Grabación
1. **Abre el panel Performance**
2. **Configura opciones de grabación**:
   - Screenshots - Capturas durante la grabación
   - Memory - Uso de memoria
   - **Nota**: Las métricas de Web Vitals ahora se incluyen automáticamente, no necesitas activar esta opción
3. **Presiona Record (⚫) o Ctrl+E**
4. **Interactúa con tu aplicación**
5. **Detén la grabación**

## Anatomía del Performance Profile

### Main Thread Timeline
- **Tasks** - Bloques de trabajo en el hilo principal
- **Parse HTML** - Parsing del documento
- **Parse CSS** - Procesamiento de estilos
- **Evaluate Script** - Ejecución de JavaScript
- **Layout** - Cálculo de posiciones
- **Paint** - Renderizado visual
- **Composite** - Composición de capas

### Call Tree
- Jerarquía de llamadas de funciones
- Tiempo total vs tiempo propio (self time)
- Identificación de funciones costosas

### Bottom-Up View
- Funciones ordenadas por tiempo propio
- Útil para encontrar el código más lento
- Agregación de tiempo por función

## Identificando Problemas

### JavaScript Performance
- **Long Tasks** - Tareas > 50ms (resaltadas en rojo)
- **Function calls** - Tiempo en funciones específicas
- **Idle time** - Tiempo disponible entre frames

### Rendering Performance
- **Layout thrashing** - Layouts repetitivos costosos
- **Paint issues** - Pintura excesiva
- **Compositing problems** - Problemas de capas

### Memory Issues
- **Memory leaks** - Uso creciente de memoria
- **Garbage collection** - Pausas por GC
- **DOM node count** - Nodos excesivos

## Web Vitals Integration

### Core Web Vitals
- **LCP** (Largest Contentful Paint) - Carga percibida
- **INP** (Interaction to Next Paint) - Responsividad de interacciones (reemplaza FID desde marzo 2024)
- **CLS** (Cumulative Layout Shift) - Estabilidad visual

### Performance Metrics Adicionales
- **FCP** (First Contentful Paint) - Primera renderización con contenido
- **TTI** (Time to Interactive) - Tiempo hasta interactividad completa
- **TBT** (Total Blocking Time) - Tiempo total de bloqueo del hilo principal
- **FID** (First Input Delay) - Métrica heredada, reemplazada por INP

## Optimización Strategies

### JavaScript Optimization
- **Code splitting** - Dividir bundles grandes
- **Lazy loading** - Carga diferida de componentes
- **Web Workers** - Offload trabajo pesado
- **Debouncing/Throttling** - Control de eventos frecuentes

### Rendering Optimization
- **Avoid layout thrashing** - Batch DOM changes
- **Use CSS transforms** - Hardware acceleration
- **Optimize images** - Formats modernos (WebP/AVIF)
- **Reduce paint area** - Minimize repaints`,
          miniLab: {
            title: "Mini Lab: Performance Profiling",
            description: "Aprende a hacer profiling de performance y identificar problemas",
            steps: [
              {
                step: 1,
                title: "Grabando un Performance Profile",
                instructions: [
                  "Ve al panel Performance en DevTools",
                  "Asegúrate que Screenshots y Memory estén activados según necesites",
                  "Nota: Las métricas de Web Vitals (LCP, INP, CLS) se incluyen automáticamente",
                  "Haz clic en el botón Record (⚫)",
                  "Recarga la página y espera que termine de cargar, interactúa si quieres medir INP",
                  "Detén la grabación haciendo clic en Stop"
                ]
              },
              {
                step: 2,
                title: "Navegando el Timeline",
                instructions: [
                  "Observa el overview en la parte superior",
                  "Usa las barras de desplazamiento para hacer zoom en secciones",
                  "Identifica las barras rojas que indican Long Tasks (>50ms)",
                  "Haz clic en tareas específicas para ver detalles"
                ]
              },
              {
                step: 3,
                title: "Analizando el Main Thread",
                instructions: [
                  "En la fila 'Main', observa la actividad del hilo principal",
                  "Busca bloques grandes que indiquen JavaScript costoso",
                  "Haz clic en bloques específicos para ver el call stack",
                  "Identifica funciones que toman más tiempo"
                ]
              },
              {
                step: 4,
                title: "Web Vitals y Métricas",
                instructions: [
                  "Busca las marcas de Web Vitals en el timeline",
                  "Identifica FCP (First Contentful Paint)",
                  "Busca LCP (Largest Contentful Paint)",
                  "Observa si hay problemas de CLS (layout shifts)",
                  "Nota: INP (Interaction to Next Paint) reemplaza a FID desde marzo 2024",
                  "Revisa el summary para métricas generales"
                ]
              }
            ]
          }
        }
      ]
    },
    {
      id: "ai-integration",
      title: "DevTools + IA Integrada",
      icon: "🤖",
      topics: [
        {
          id: "ai-elements",
          title: "IA en Panel Elements",
          content: `# Asistencia de IA en el Panel Elements

La integración de IA en el panel Elements revolutiona cómo inspeccionas y modificas el DOM y CSS, proporcionando insights inteligentes y sugerencias automáticas.

## Funciones de IA para DOM

### Análisis Automático de Estructura
- **DOM Health Check** - La IA analiza la estructura del DOM buscando problemas comunes
- **Accessibility Insights** - Identificación automática de problemas de accesibilidad
- **SEO Recommendations** - Sugerencias para mejorar el SEO basado en la estructura HTML

### Sugerencias de Optimización
- **Semantic HTML** - Recomendaciones para usar elementos semánticos apropiados
- **Performance Impact** - Análisis del impacto de cambios en el DOM
- **Best Practices** - Alertas sobre violaciones de mejores prácticas

## IA para CSS y Estilos

### CSS Intelligent Analysis
- **Unused CSS Detection** - Identificación de estilos no utilizados
- **CSS Conflicts Resolution** - Sugerencias para resolver conflictos de estilos
- **Performance Optimization** - Recomendaciones para CSS más eficiente

### Design System Integration
- **Pattern Recognition** - La IA identifica patrones de diseño en tu CSS
- **Consistency Checks** - Detección de inconsistencias en spacing, colores, tipografía
- **Component Suggestions** - Sugerencias para extractar componentes reutilizables

### Responsive Design Assistant
- **Breakpoint Optimization** - Análisis de breakpoints y sugerencias de mejora
- **Mobile-First Recommendations** - Consejos para diseño mobile-first
- **Cross-Browser Compatibility** - Alertas sobre problemas de compatibilidad

## Comandos de IA Específicos

### En el Panel Elements
\`\`\`
IA: Analiza la accesibilidad de este formulario
IA: ¿Cómo puedo optimizar este CSS para mejor rendimiento?
IA: Sugiéreme mejoras semánticas para este HTML
IA: ¿Hay estilos redundantes en esta página?
\`\`\`

### Análisis de Layout
\`\`\`
IA: ¿Por qué este elemento no se está centrando?
IA: Optimiza este grid layout para mobile
IA: ¿Cómo puedo mejorar la performance de este CSS?
IA: Detecta problemas de z-index en esta página
\`\`\`

## Beneficios de la IA en Elements

### Aprendizaje Acelerado
- Explicaciones instantáneas de propiedades CSS complejas
- Sugerencias de alternativas modernas a técnicas obsoletas
- Contexto histórico de por qué ciertas técnicas se usan

### Debugging Inteligente
- Identificación automática de la causa raíz de problemas de layout
- Sugerencias paso a paso para resolver problemas comunes
- Análisis predictivo de impacto de cambios

### Optimización Continua
- Monitoreo en tiempo real de métricas de rendimiento visual
- Sugerencias proactivas de mejoras
- Integración con Core Web Vitals para optimización automática`,
          miniLab: {
            title: "Mini Lab: IA en Elements",
            description: "Explora las funciones de IA para análisis de DOM y CSS",
            steps: [
              {
                step: 1,
                title: "Activando IA en Elements",
                instructions: [
                  "Abre DevTools y ve al panel Elements",
                  "Busca el ícono de IA (🤖) en la barra superior",
                  "Si no está visible, ve a Settings > Experiments > AI assistance",
                  "Selecciona cualquier elemento complejo de la página"
                ]
              },
              {
                step: 2,
                title: "Análisis de Accesibilidad",
                instructions: [
                  "Selecciona un formulario o botón en la página",
                  "En la console, escribe: 'IA: Analiza la accesibilidad de este elemento'",
                  "Observa las recomendaciones de mejora",
                  "Aplica una de las sugerencias y verifica el resultado"
                ]
              },
              {
                step: 3,
                title: "Optimización de CSS",
                instructions: [
                  "Selecciona un elemento con muchos estilos CSS",
                  "Pregunta: 'IA: ¿Cómo puedo optimizar estos estilos?'",
                  "Revisa las sugerencias de propiedades redundantes",
                  "Implementa las recomendaciones de performance"
                ]
              },
              {
                step: 4,
                title: "Debugging de Layout",
                instructions: [
                  "Encuentra un elemento con problemas de layout",
                  "Pregunta: 'IA: ¿Por qué este elemento no se comporta como esperado?'",
                  "Sigue las sugerencias paso a paso",
                  "Verifica la solución aplicando los cambios recomendados"
                ]
              }
            ]
          }
        },
        {
          id: "ai-console",
          title: "IA en Panel Console",
          content: `# Asistencia de IA en la Console

La integración de IA en la consola transforma la experiencia de debugging, proporcionando explicaciones inteligentes de errores y sugerencias de código automáticas.

## Explicación Inteligente de Errores

### Error Context Analysis
Cuando ocurren errores JavaScript, la IA proporciona:
- **Root Cause Analysis** - Identificación de la causa raíz del error
- **Context Explanation** - Explicación del estado del código cuando ocurrió el error
- **Similar Patterns** - Referencias a errores similares y sus soluciones
- **Fix Suggestions** - Pasos específicos para resolver el problema

### Stack Trace Intelligence
- **Call Chain Analysis** - Explicación de la cadena de llamadas
- **Variable State Insights** - Análisis del estado de variables en cada nivel
- **Function Responsibility** - Qué hace cada función en el stack
- **Error Propagation** - Cómo se propagó el error a través del código

## Asistente de Código IA

### Code Generation
\`\`\`javascript
// Ejemplos de prompts para generación de código:
IA: Crea una función para validar emails
IA: Genera un debounce function
IA: Escribe código para hacer una petición fetch con manejo de errores
IA: Crea un observer para cambios en el DOM
\`\`\`

### Code Explanation
\`\`\`javascript
// Código complejo que no entiendes
const throttle = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Pregunta a la IA:
IA: Explica cómo funciona esta función throttle
\`\`\`

### Performance Analysis
- **Complexity Analysis** - Análisis de complejidad algorítmica de tu código
- **Memory Usage Insights** - Identificación de posibles leaks de memoria
- **Optimization Suggestions** - Recomendaciones para mejorar performance

## Debugging Colaborativo con IA

### Interactive Debugging Sessions
- **Step-by-Step Guidance** - La IA te guía a través del proceso de debugging
- **Variable Inspection Help** - Explicación de valores de variables complejos
- **Conditional Breakpoint Suggestions** - La IA sugiere dónde poner breakpoints

### Learning Mode
- **Explain as You Debug** - La IA explica cada paso del debugging
- **Best Practices Teaching** - Enseñanza de mejores prácticas durante el debugging
- **Anti-pattern Recognition** - Identificación y explicación de anti-patrones

## Comandos Avanzados de IA

### Análisis de Rendimiento
\`\`\`javascript
IA: ¿Por qué esta función es lenta?
IA: Optimiza este código para mejor rendimiento
IA: ¿Hay memory leaks en este componente?
IA: Analiza la complejidad de este algoritmo
\`\`\`

### Debugging Específico
\`\`\`javascript
IA: ¿Por qué esta variable es undefined?
IA: Explica este error: TypeError: Cannot read property 'map' of undefined
IA: ¿Cómo puedo prevenir este race condition?
IA: Ayúdame a entender este closure
\`\`\`

### Testing y Validación
\`\`\`javascript
IA: Genera casos de prueba para esta función
IA: ¿Qué edge cases debería considerar?
IA: Valida si este código maneja errores correctamente
IA: ¿Este código es seguro contra XSS?
\`\`\``,
          miniLab: {
            title: "Mini Lab: IA en Console",
            description: "Usa la IA para debugging inteligente y explicación de errores",
            steps: [
              {
                step: 1,
                title: "Generación de Código con IA",
                instructions: [
                  "Abre la console en DevTools",
                  "Escribe: 'IA: Crea una función para validar si un email es válido'",
                  "Observa el código generado por la IA",
                  "Copia y pega el código para probarlo",
                  "Prueba la función con diferentes emails"
                ]
              },
              {
                step: 2,
                title: "Explicación de Errores",
                instructions: [
                  "Escribe código que genere un error: let arr = null; arr.map(x => x)",
                  "Cuando aparezca el error, pregunta: 'IA: Explica este error'",
                  "Lee la explicación detallada de la IA",
                  "Aplica la solución sugerida"
                ]
              },
              {
                step: 3,
                title: "Análisis de Código Complejo",
                instructions: [
                  "Pega código complejo de cualquier sitio web",
                  "Pregunta: 'IA: Explica qué hace este código línea por línea'",
                  "Lee la explicación detallada",
                  "Haz preguntas de seguimiento sobre partes específicas"
                ]
              },
              {
                step: 4,
                title: "Optimización de Rendimiento",
                instructions: [
                  "Escribe un bucle ineficiente: for(let i=0; i<10000; i++) { document.body.style.color = 'red'; }",
                  "Pregunta: 'IA: ¿Cómo puedo optimizar este código?'",
                  "Implementa las sugerencias de la IA",
                  "Compara el rendimiento antes y después"
                ]
              }
            ]
          }
        },
        {
          id: "ai-sources",
          title: "IA en Panel Sources",
          content: `# Asistencia de IA en Panel Sources

La integración de IA en el panel Sources revolutiona el debugging al proporcionar análisis inteligente de código, sugerencias de breakpoints óptimos y explicaciones contextuales del flujo de ejecución.

## Análisis Inteligente de Código Fuente

### Code Understanding
La IA puede analizar tu código fuente y proporcionar:
- **Function Purpose Analysis** - Explicación de qué hace cada función
- **Variable Flow Tracking** - Seguimiento del flujo de variables a través del código
- **Dependency Mapping** - Mapeo de dependencias entre funciones y módulos
- **Code Complexity Assessment** - Evaluación de la complejidad del código

### Architecture Insights
- **Module Structure Analysis** - Análisis de la estructura de módulos
- **Design Pattern Recognition** - Identificación de patrones de diseño utilizados
- **Code Organization Suggestions** - Recomendaciones para mejor organización
- **Refactoring Opportunities** - Identificación de oportunidades de refactoring

## Debugging Inteligente con IA

### Smart Breakpoint Suggestions
La IA puede sugerir dónde colocar breakpoints basándose en:
- **Error Prone Areas** - Zonas propensas a errores
- **Critical Code Paths** - Rutas críticas de ejecución
- **State Change Points** - Puntos donde cambia el estado importante
- **Function Entry/Exit Points** - Puntos estratégicos de entrada/salida

### Execution Flow Analysis
- **Call Stack Intelligence** - Explicación inteligente del call stack
- **Variable State Prediction** - Predicción de estados de variables
- **Execution Path Visualization** - Visualización de rutas de ejecución
- **Bottleneck Identification** - Identificación de cuellos de botella

## Funciones Avanzadas de IA en Sources

### Source Map Intelligence
- **Original Code Mapping** - Mapeo inteligente a código original
- **Transpilation Understanding** - Comprensión de transformaciones de código
- **Build Process Insights** - Insights sobre el proceso de build
- **Development vs Production Analysis** - Análisis de diferencias

### Code Quality Assessment
- **Security Vulnerability Detection** - Detección de vulnerabilidades de seguridad
- **Performance Anti-patterns** - Identificación de anti-patrones de rendimiento
- **Memory Leak Prediction** - Predicción de posibles memory leaks
- **Error Handling Analysis** - Análisis de manejo de errores

## Comandos de IA para Sources

### Análisis de Función
\`\`\`javascript
// Selecciona una función en el editor y pregunta:
IA: ¿Qué hace esta función?
IA: ¿Hay algún problema con esta función?
IA: ¿Cómo puedo optimizar esta función?
IA: ¿Esta función maneja todos los edge cases?
\`\`\`

### Debugging Guidance
\`\`\`javascript
IA: ¿Dónde debería poner breakpoints para debuggear este problema?
IA: ¿Por qué esta variable tiene este valor aquí?
IA: ¿Cuál es el flujo de ejecución hasta este punto?
IA: ¿Qué función está causando este comportamiento inesperado?
\`\`\`

### Code Review Assistant
\`\`\`javascript
IA: Revisa este código para posibles problemas
IA: ¿Hay vulnerabilidades de seguridad en este código?
IA: ¿Este código sigue las mejores prácticas?
IA: ¿Cómo puedo refactorizar este código?
\`\`\`

## Aplicaciones Prácticas de IA en Sources

### Debugging de Aplicaciones Complejas
- **Multi-threaded Analysis** - Análisis de aplicaciones multi-thread
- **Async/Await Intelligence** - Comprensión inteligente de código asíncrono
- **Promise Chain Analysis** - Análisis de cadenas de promesas
- **Event Loop Understanding** - Comprensión del event loop

### Legacy Code Understanding
- **Code Archaeology** - Comprensión de código legacy sin documentación
- **Migration Assistance** - Ayuda para migrar código antiguo
- **Modernization Suggestions** - Sugerencias para modernizar código
- **Documentation Generation** - Generación automática de documentación

### Performance Debugging
- **Hot Path Identification** - Identificación de rutas calientes de código
- **Memory Usage Analysis** - Análisis de uso de memoria
- **CPU Intensive Operations** - Identificación de operaciones intensivas
- **Optimization Recommendations** - Recomendaciones específicas de optimización

## Integración con Herramientas de Desarrollo

### IDE-like Features
- **Intelligent Code Completion** - Autocompletado inteligente
- **Refactoring Suggestions** - Sugerencias de refactoring
- **Code Navigation** - Navegación inteligente de código
- **Symbol Understanding** - Comprensión de símbolos y referencias

### Collaborative Debugging
- **Team Insights Sharing** - Compartir insights con el equipo
- **Knowledge Base Building** - Construcción de base de conocimientos
- **Best Practices Enforcement** - Aplicación de mejores prácticas
- **Code Review Integration** - Integración con procesos de code review`,
          miniLab: {
            title: "Mini Lab: IA en Sources para Debugging Avanzado",
            description: "Explora las capacidades de IA para análisis y debugging de código",
            steps: [
              {
                step: 1,
                title: "Análisis de Función con IA",
                instructions: [
                  "Ve al panel Sources y abre cualquier archivo JavaScript",
                  "Selecciona una función compleja haciendo clic en su nombre",
                  "En la console, escribe: 'IA: Analiza esta función y explica qué hace'",
                  "Lee el análisis detallado que proporciona la IA"
                ]
              },
              {
                step: 2,
                title: "Sugerencias de Breakpoints Inteligentes",
                instructions: [
                  "Encuentra una función que cause un error o comportamiento inesperado",
                  "Pregunta: 'IA: ¿Dónde debería poner breakpoints para debuggear esta función?'",
                  "Implementa las sugerencias de la IA colocando breakpoints",
                  "Ejecuta el código y observa cómo los breakpoints capturan información útil"
                ]
              },
              {
                step: 3,
                title: "Análisis de Flujo de Ejecución",
                instructions: [
                  "Coloca un breakpoint en una función y pausa la ejecución",
                  "Pregunta: 'IA: Explica el call stack actual y cómo llegamos aquí'",
                  "Analiza la explicación del flujo de ejecución",
                  "Usa F10/F11 para seguir el análisis paso a paso"
                ]
              },
              {
                step: 4,
                title: "Optimización de Código con IA",
                instructions: [
                  "Selecciona código que parezca ineficiente o complejo",
                  "Pregunta: 'IA: ¿Cómo puedo optimizar este código para mejor rendimiento?'",
                  "Revisa las sugerencias de refactoring",
                  "Implementa una de las mejoras sugeridas y compara el resultado"
                ]
              }
            ]
          }
        },
        {
          id: "ai-network-performance",
          title: "IA en Network y Performance",
          content: `# Asistencia de IA en Network y Performance

La integración de IA en los paneles Network y Performance proporciona análisis automático de cuellos de botella, recomendaciones de optimización y insights predictivos sobre el rendimiento de tu aplicación.

## IA en Panel Network

### Análisis Automático de Peticiones
La IA puede analizar automáticamente:
- **Request Pattern Analysis** - Patrones de peticiones y eficiencia
- **Resource Optimization Opportunities** - Oportunidades de optimización de recursos
- **Caching Strategy Recommendations** - Estrategias de caché recomendadas
- **Bundle Analysis** - Análisis de bundles y sugerencias de code splitting

### Network Performance Intelligence
- **Bottleneck Detection** - Detección automática de cuellos de botella de red
- **Critical Resource Path** - Identificación del critical rendering path
- **Waterfall Optimization** - Sugerencias para optimizar el waterfall de carga
- **HTTP/2 Opportunities** - Identificación de oportunidades para HTTP/2

### Predictive Analysis
- **Load Time Prediction** - Predicción de tiempos de carga en diferentes condiciones
- **Bandwidth Impact Assessment** - Evaluación del impacto de ancho de banda
- **Mobile Performance Insights** - Insights específicos para rendimiento móvil
- **Geographic Performance Analysis** - Análisis de rendimiento por ubicación geográfica

## IA en Panel Performance

### Intelligent Performance Profiling
- **Automated Bottleneck Detection** - Detección automática de cuellos de botella
- **JavaScript Performance Analysis** - Análisis profundo de rendimiento de JavaScript
- **Rendering Performance Insights** - Insights sobre rendimiento de rendering
- **Memory Usage Optimization** - Optimización inteligente de uso de memoria

### Web Vitals Intelligence
- **Core Web Vitals Analysis** - Análisis detallado de Core Web Vitals
- **LCP Optimization Suggestions** - Sugerencias específicas para optimizar LCP
- **CLS Problem Identification** - Identificación de problemas de Cumulative Layout Shift
- **INP Improvement Recommendations** - Recomendaciones para mejorar Interaction to Next Paint (nueva métrica que reemplaza FID)
- **INP vs FID Analysis** - Comparación entre la nueva métrica INP y la antigua FID

### Advanced Performance Insights
- **Frame Rate Analysis** - Análisis de frame rate y smoothness
- **Paint Time Optimization** - Optimización de tiempos de paint
- **Compositing Layer Insights** - Insights sobre capas de compositing
- **GPU Usage Analysis** - Análisis de uso de GPU

## Comandos Específicos de IA

### Network Analysis
\`\`\`javascript
IA: Analiza las peticiones de red de esta página
IA: ¿Cómo puedo optimizar la carga de recursos?
IA: ¿Hay recursos que se cargan innecesariamente?
IA: ¿Qué estrategia de caché recomiendas?
IA: ¿Cómo puedo mejorar el Critical Rendering Path?
\`\`\`

### Performance Analysis
\`\`\`javascript
IA: ¿Cuáles son los principales cuellos de botella de rendimiento?
IA: ¿Cómo puedo mejorar mi LCP score?
IA: ¿Por qué mi página tiene layout shifts?
IA: ¿Qué JavaScript está bloqueando el renderizado?
IA: ¿Cómo puedo optimizar el uso de memoria?
IA: ¿Por qué mis interacciones son lentas? (INP analysis)
IA: ¿Cuál es la diferencia entre INP y FID?
\`\`\`

### Mobile Performance
\`\`\`javascript
IA: Analiza el rendimiento móvil de esta página
IA: ¿Cómo se comporta en conexiones lentas?
IA: ¿Qué optimizaciones son críticas para móvil?
IA: ¿Cómo puedo mejorar la experiencia en 3G?
\`\`\`

## Optimización Automática con IA

### Resource Optimization
- **Image Optimization Suggestions** - Sugerencias automáticas para optimización de imágenes
- **CSS Optimization** - Identificación de CSS no utilizado y optimizaciones
- **JavaScript Bundle Analysis** - Análisis de bundles y sugerencias de splitting
- **Font Loading Optimization** - Optimización de carga de fuentes

### Caching Strategy Intelligence
- **Cache-Control Optimization** - Optimización de headers de cache
- **Service Worker Recommendations** - Recomendaciones para service workers
- **CDN Strategy Suggestions** - Sugerencias de estrategia de CDN
- **Browser Caching Analysis** - Análisis de caché del navegador

### Performance Budget Assistant
- **Budget Recommendations** - Recomendaciones de presupuesto de rendimiento
- **Metric Tracking** - Seguimiento automático de métricas clave
- **Regression Detection** - Detección de regresiones de rendimiento
- **Goal Setting Assistance** - Asistencia para establecer objetivos de rendimiento

## Real-time Performance Monitoring

### Live Performance Insights
- **Real-time Metrics** - Métricas en tiempo real con análisis de IA
- **Performance Alerts** - Alertas automáticas de problemas de rendimiento
- **Trend Analysis** - Análisis de tendencias de rendimiento
- **Comparative Analysis** - Comparación con versiones anteriores

### User Experience Impact
- **UX Impact Assessment** - Evaluación del impacto en la experiencia de usuario
- **Business Metrics Correlation** - Correlación con métricas de negocio
- **A/B Testing Insights** - Insights para testing A/B de rendimiento
- **User Journey Analysis** - Análisis del journey del usuario y puntos de fricción`,
          miniLab: {
            title: "Mini Lab: Analizando una App Web Real",
            description: "Usa DevTools + IA para analizar una aplicación web desplegada paso a paso",
            steps: [
              {
                step: 1,
                title: "Preparar la Aplicación de Prueba",
                instructions: [
                  "Crea un nuevo repositorio en GitHub llamado 'devtools-lab'",
                  "Crea un archivo index.html con este código: <!DOCTYPE html><html><head><title>DevTools Lab App</title><link rel='stylesheet' href='styles.css'></head><body><div class='container'><h1>Mi App de Prueba</h1><form id='form'><input type='text' id='name' placeholder='Tu nombre'><button type='submit'>Enviar</button></form><div id='gallery'><img src='https://picsum.photos/800/600?random=1' alt='Imagen 1'><img src='https://picsum.photos/800/600?random=2' alt='Imagen 2'><img src='https://picsum.photos/800/600?random=3' alt='Imagen 3'></div></div><script src='app.js'></script></body></html>",
                  "Crea styles.css con CSS básico y algunos problemas intencionados de performance",
                  "Crea app.js con JavaScript que incluya algunos errores y problemas de performance",
                  "Habilita GitHub Pages en Settings > Pages y accede a tu app"
                ]
              },
              {
                step: 2,
                title: "Inspeccionar el DOM con IA",
                instructions: [
                  "Abre DevTools (F12) en tu aplicación desplegada",
                  "Ve al panel Elements y selecciona el formulario",
                  "Usa la IA preguntando: 'What accessibility issues does this form have?'",
                  "Pregunta: 'How can I improve the HTML structure for SEO?'",
                  "Implementa las sugerencias en tu repositorio"
                ]
              },
              {
                step: 3,
                title: "Debugging JavaScript con IA",
                instructions: [
                  "Ve al panel Console - deberías ver errores",
                  "Selecciona un error y pregunta: 'Explain this error and suggest a fix'",
                  "Ve al panel Sources, encuentra tu app.js",
                  "Pregunta a la IA: 'Review this JavaScript code for potential issues'",
                  "Corrige los errores siguiendo las sugerencias"
                ]
              },
              {
                step: 4,
                title: "Optimización de Performance",
                instructions: [
                  "Ve al panel Performance y graba 5 segundos de interacción",
                  "Pregunta: 'What performance bottlenecks do you see in this profile?'",
                  "Ve al panel Network, recarga la página",
                  "Pregunta sobre las imágenes: 'How can I optimize these image loading patterns?'",
                  "Implementa lazy loading y optimizaciones sugeridas"
                ]
              },
              {
                step: 5,
                title: "Auditoría de CSS con IA",
                instructions: [
                  "Ve al panel Elements > Computed styles",
                  "Pregunta: 'What CSS optimizations would improve performance?'",
                  "Selecciona reglas CSS complejas en Sources",
                  "Pregunta: 'How can I modernize this CSS code?'",
                  "Aplica las optimizaciones CSS sugeridas"
                ]
              },
              {
                step: 6,
                title: "Testing y Validación Final",
                instructions: [
                  "Haz commit de todos los cambios sugeridos por la IA",
                  "Despliega automáticamente en GitHub Pages",
                  "Ejecuta una nueva auditoría de Performance",
                  "Pregunta: 'Compare the before and after metrics - what improved?'",
                  "Documenta las mejoras en el README.md del repositorio"
                ]
              }
            ]
          }
        }
      ]
    },
    {
      id: "ai-prompts",
      title: "Prompts de IA para DevTools",
      icon: "💬",
      topics: [
        {
          id: "english-prompts",
          title: "Prompts en Inglés para DevTools + IA",
          content: `# Colección de Prompts en Inglés para DevTools + IA

Esta sección proporciona una biblioteca completa de prompts en inglés optimizados para usar con la asistencia de IA integrada en Chrome DevTools.

## 🔍 Prompts para Panel Elements

### DOM Analysis
\`\`\`
Analyze this HTML structure for semantic issues and accessibility problems
What's the best way to optimize this DOM structure for performance?
Explain why this element isn't displaying correctly
How can I improve the semantic meaning of this HTML?
Suggest accessible alternatives for this markup
Review this HTML for SEO optimization opportunities
\`\`\`

### CSS Optimization
\`\`\`
Identify unused CSS rules in this stylesheet
How can I optimize these CSS properties for better performance?
Explain the cascade conflicts in these styles
Suggest modern CSS alternatives to this legacy code
What's causing the layout shift in this component?
Optimize this CSS for mobile-first responsive design
Convert this layout to use CSS Grid instead of floats
\`\`\`

### Layout Debugging
\`\`\`
Why isn't this element centering properly?
Debug this flexbox layout issue
Explain the z-index stacking context problem
How can I fix this CSS positioning issue?
What's causing the overflow in this container?
Optimize this grid layout for better responsive behavior
\`\`\`

## 🖥️ Prompts para Panel Console

### Error Analysis
\`\`\`
Explain this JavaScript error and provide a solution
What's the root cause of this TypeError?
How can I prevent this null reference error?
Debug this async/await error handling issue
Explain why this function is returning undefined
Analyze this stack trace and suggest fixes
\`\`\`

### Code Generation
\`\`\`
Generate a debounce function for search input
Create a throttle function for scroll events
Write a utility function to validate email addresses
Generate code for handling API errors gracefully
Create a helper function for DOM manipulation
Write a custom event handler for keyboard navigation
\`\`\`

### Performance Analysis
\`\`\`
Why is this function executing slowly?
Optimize this loop for better performance
Identify memory leaks in this component
Analyze the computational complexity of this algorithm
Suggest performance improvements for this code
Review this code for potential bottlenecks
\`\`\`

## 🔧 Prompts para Panel Sources

### Debugging Assistance
\`\`\`
Where should I place breakpoints to debug this issue?
Explain the execution flow of this function
Why is this variable undefined at this point?
Help me understand this closure behavior
Debug this race condition in asynchronous code
Trace the call stack to find the error source
\`\`\`

### Code Quality Review
\`\`\`
Review this function for potential bugs
Identify security vulnerabilities in this code
Suggest refactoring opportunities for this module
Analyze this code for best practices compliance
Check this function for proper error handling
Evaluate the testability of this code structure
\`\`\`

### Architecture Analysis
\`\`\`
Explain the design patterns used in this code
Suggest improvements to this module structure
Analyze the coupling between these components
Review the separation of concerns in this architecture
Identify opportunities for code reuse
Suggest modernization strategies for this legacy code
\`\`\`

## 🌐 Prompts para Panel Network

### Resource Optimization
\`\`\`
Analyze these network requests for optimization opportunities
Which resources are blocking the critical rendering path?
Suggest improvements for resource loading strategy
Identify unnecessary network requests
Recommend caching strategies for these resources
Optimize the waterfall loading pattern
\`\`\`

### Performance Analysis
\`\`\`
What's causing the slow load times in this application?
Analyze the impact of these large resources
Suggest bundle splitting strategies for JavaScript
Recommend image optimization techniques
Evaluate the effectiveness of current caching headers
Identify opportunities for lazy loading implementation
\`\`\`

### Security Review
\`\`\`
Review these requests for potential security issues
Analyze the HTTPS implementation
Check for exposed sensitive data in requests
Evaluate CORS configuration
Review authentication token handling
Identify potential XSS vulnerabilities in requests
\`\`\`

## ⚡ Prompts para Panel Performance

### Web Vitals Optimization
\`\`\`
How can I improve the Largest Contentful Paint (LCP)?
What's causing the Cumulative Layout Shift (CLS)?
Optimize the Interaction to Next Paint (INP) for this page
Analyze the First Contentful Paint (FCP) bottlenecks
Improve the Time to Interactive (TTI) metric
Reduce the Total Blocking Time (TBT)
What's the difference between INP and the old FID metric?
How can I debug slow interaction responses?
\`\`\`

### JavaScript Performance
\`\`\`
Identify the most expensive JavaScript operations
Analyze the main thread blocking tasks
Suggest optimizations for these long-running scripts
Review the event loop performance
Optimize garbage collection patterns
Identify opportunities for Web Worker usage
\`\`\`

### Rendering Performance
\`\`\`
What's causing the frame rate drops?
Optimize the paint and composite operations
Analyze the render-blocking resources
Improve the critical rendering path
Optimize CSS animations for 60fps
Reduce layout thrashing in this component
\`\`\`

## 🔄 Prompts Integrales (Multi-Panel)

### Holistic Performance Analysis
\`\`\`
Perform a comprehensive performance audit of this application
Prioritize the most impactful optimizations for this page
Create an optimization roadmap based on current performance metrics
Analyze the user experience impact of these performance issues
Suggest a performance budget for this application
\`\`\`

### Problem-Solving Workflows
\`\`\`
Help me diagnose this intermittent bug
Create a debugging strategy for this complex issue
Suggest a systematic approach to optimize this slow page
Guide me through performance profiling best practices
Develop a testing strategy for these optimizations
\`\`\`

## 🎯 Prompts Específicos por Tipo de Problema

### E-commerce Performance
\`\`\`
Optimize checkout flow performance
Analyze product image loading strategies
Improve search functionality responsiveness
Optimize shopping cart state management
\`\`\`

### SPA (Single Page Application)
\`\`\`
Optimize client-side routing performance
Analyze component mounting and unmounting costs
Improve state management efficiency
Optimize bundle size for code splitting
\`\`\`

### Content-Heavy Sites
\`\`\`
Optimize article loading and rendering
Improve font loading strategies
Analyze content layout shifts
Optimize media-rich content delivery
\`\`\`

## 💡 Tips para Usar Prompts Efectivamente

### Mejores Prácticas
1. **Sé específico**: Include context about what you're trying to achieve
2. **Provide details**: Share relevant code snippets or error messages
3. **Ask follow-up questions**: Dig deeper into the AI's suggestions
4. **Test iteratively**: Apply suggestions and ask for validation
5. **Combine insights**: Use multiple panels and prompts for comprehensive analysis

### Estructura de Prompts Efectivos
\`\`\`
Context: "I'm working on an e-commerce checkout page"
Problem: "Users are experiencing slow interactions during payment"
Current observation: "I see long tasks in the Performance panel"
Question: "What's the most likely cause and how can I optimize it?"
\`\`\``,
          miniLab: {
            title: "Práctica de Prompts de IA",
            description: "Practica usando prompts efectivos con la IA de DevTools",
            steps: [
              {
                step: 1,
                title: "Configuración de IA en DevTools",
                instructions: [
                  "Abre Chrome Canary o Chrome Dev channel",
                  "Ve a chrome://flags y busca 'devtools-ai'",
                  "Habilita las funciones experimentales de IA",
                  "Reinicia Chrome y abre DevTools",
                  "Verifica que aparezca el ícono de IA (🤖) en la console"
                ]
              },
              {
                step: 2,
                title: "Prompts Básicos de Análisis",
                instructions: [
                  "Ve a cualquier sitio web complejo (ej: reddit.com)",
                  "En la console, prueba: 'Analyze this page for performance bottlenecks'",
                  "Luego: 'What are the largest resources being loaded?'",
                  "Pregunta: 'How can I improve the load time of this page?'",
                  "Observa la calidad y especificidad de las respuestas"
                ]
              },
              {
                step: 3,
                title: "Prompts de Debugging Específicos",
                instructions: [
                  "Abre el panel Sources y encuentra un archivo JavaScript",
                  "Prueba: 'Explain what this function does and identify potential issues'",
                  "Selecciona código complejo y pregunta: 'How can I optimize this code?'",
                  "Para errores: 'What's the most likely cause of this error and how do I fix it?'",
                  "Practica hacer preguntas de seguimiento basadas en las respuestas"
                ]
              },
              {
                step: 4,
                title: "Prompts de Optimización Avanzados",
                instructions: [
                  "Ve al panel Performance y graba un profile",
                  "Pregunta: 'What are the 3 most critical optimizations for this performance profile?'",
                  "Luego: 'How would implementing these changes impact Core Web Vitals?'",
                  "Finaliza con: 'Create a prioritized action plan for these optimizations'",
                  "Compara la utilidad de prompts genéricos vs específicos"
                ]
              }
            ]
          }
        },
        {
          id: "sample-app",
          title: "Aplicación Web de Muestra para el Mini Lab",
          content: `# Aplicación Web de Muestra para Practicar DevTools + IA

Esta sección proporciona el código completo de una aplicación web que puedes desplegar fácilmente en GitHub Pages para practicar DevTools con IA.

## 📁 Estructura del Proyecto

\`\`\`
devtools-lab/
├── index.html
├── styles.css
├── app.js
├── utils.js
└── README.md
\`\`\`

## 🌐 index.html

\`\`\`html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DevTools Lab - App de Prueba</title>
    <link rel="stylesheet" href="styles.css">
    <!-- Fuente pesada intencionalmente para testing -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Roboto:wght@300;400;500&display=swap" rel="stylesheet">
</head>
<body>
    <div class="container">
        <header class="header">
            <h1 id="main-title">🚀 DevTools Lab App</h1>
            <nav class="nav">
                <a href="#home" class="nav-link active">Inicio</a>
                <a href="#gallery" class="nav-link">Galería</a>
                <a href="#contact" class="nav-link">Contacto</a>
            </nav>
        </header>

        <main class="main-content">
            <!-- Sección con problemas de accesibilidad intencionados -->
            <section class="hero">
                <div class="hero-text">
                    <h2 style="color: #ccc;">Bienvenido a Nuestra App</h2>
                    <p>Una aplicación con varios problemas de performance y accesibilidad para practicar</p>
                    <div class="button" onclick="loadData()">Cargar Datos</div>
                </div>
            </section>

            <!-- Formulario con problemas de validación -->
            <section class="form-section">
                <h3>Formulario de Contacto</h3>
                <form id="contact-form">
                    <input type="text" placeholder="Nombre" id="name">
                    <input type="email" placeholder="Email" id="email">
                    <textarea placeholder="Mensaje" id="message"></textarea>
                    <button type="submit">Enviar</button>
                </form>
                <div id="form-status"></div>
            </section>

            <!-- Galería con imágenes grandes sin lazy loading -->
            <section class="gallery">
                <h3>Galería de Imágenes</h3>
                <div class="image-grid">
                    <img src="https://picsum.photos/800/600?random=1" alt="Imagen 1">
                    <img src="https://picsum.photos/800/600?random=2" alt="Imagen 2">
                    <img src="https://picsum.photos/800/600?random=3" alt="Imagen 3">
                    <img src="https://picsum.photos/800/600?random=4" alt="Imagen 4">
                    <img src="https://picsum.photos/800/600?random=5" alt="Imagen 5">
                    <img src="https://picsum.photos/800/600?random=6" alt="Imagen 6">
                </div>
            </section>

            <!-- Lista con problemas de performance -->
            <section class="data-section">
                <h3>Datos Dinámicos</h3>
                <button onclick="generateList()">Generar Lista Grande</button>
                <div id="data-container"></div>
            </section>
        </main>

        <footer class="footer">
            <p>&copy; 2024 DevTools Lab. Para fines educativos.</p>
        </footer>
    </div>

    <script src="utils.js"></script>
    <script src="app.js"></script>
</body>
</html>
\`\`\`

## 🎨 styles.css

\`\`\`css
/* CSS con problemas intencionados para testing */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', sans-serif;
    line-height: 1.6;
    color: #333;
    /* Problema: forzar reflow en cada scroll */
    overflow-x: auto;
}

/* Selector ineficiente intencionalmente */
* * * .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 2rem 0;
    /* Problema: sombra costosa */
    box-shadow: 0 20px 40px rgba(0,0,0,0.3);
    position: relative;
}

/* Animación costosa que se ejecuta constantemente */
.header::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(255,255,255,0.1) 0%, transparent 100%);
    animation: shimmer 3s ease-in-out infinite;
}

@keyframes shimmer {
    0%, 100% { transform: translateX(-100%); }
    50% { transform: translateX(100%); }
}

#main-title {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    text-align: center;
    /* Problema: uso de !important innecesario */
    font-weight: 700 !important;
}

.nav {
    display: flex;
    justify-content: center;
    gap: 2rem;
}

.nav-link {
    color: white;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    transition: all 0.3s ease;
}

.nav-link:hover {
    background: rgba(255,255,255,0.2);
    /* Problema: transform en hover causa repaints */
    transform: scale(1.1) rotate(1deg);
}

.nav-link.active {
    background: rgba(255,255,255,0.3);
}

.main-content {
    padding: 2rem 0;
}

.hero {
    text-align: center;
    padding: 4rem 0;
    background: #f8f9fa;
    /* Problema: gradient costoso en elemento grande */
    background: radial-gradient(circle at center, #f8f9fa 0%, #e9ecef 100%);
}

.hero-text h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    /* Problema de contraste intencionado */
    color: #ccc;
}

.hero-text p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    color: #666;
}

/* Botón simulando comportamiento de div clickeable */
.button {
    display: inline-block;
    background: #007bff;
    color: white;
    padding: 1rem 2rem;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1.1rem;
    /* Problema: transition en todas las propiedades */
    transition: all 0.3s ease;
}

.button:hover {
    background: #0056b3;
    /* Problema: shadow costosa en hover */
    box-shadow: 0 10px 25px rgba(0,123,255,0.3);
    transform: translateY(-3px);
}

.form-section {
    background: white;
    padding: 3rem;
    margin: 2rem 0;
    border-radius: 10px;
    /* Problema: muchas sombras costosas */
    box-shadow: 
        0 4px 6px rgba(0,0,0,0.1),
        0 1px 3px rgba(0,0,0,0.08),
        inset 0 1px 0 rgba(255,255,255,0.1);
}

.form-section h3 {
    margin-bottom: 2rem;
    color: #333;
}

/* Formulario sin labels apropiados */
#contact-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

#contact-form input,
#contact-form textarea {
    padding: 1rem;
    border: 2px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
    /* Problema: outline removido */
    outline: none;
}

#contact-form input:focus,
#contact-form textarea:focus {
    border-color: #007bff;
    /* Problema: sin indicador de focus visible */
}

#contact-form button {
    background: #28a745;
    color: white;
    padding: 1rem;
    border: none;
    border-radius: 5px;
    font-size: 1.1rem;
    cursor: pointer;
    transition: background 0.3s ease;
}

#contact-form button:hover {
    background: #218838;
}

.gallery {
    margin: 3rem 0;
}

.gallery h3 {
    text-align: center;
    margin-bottom: 2rem;
    color: #333;
}

.image-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
}

/* Problema: imágenes grandes sin dimensiones específicas */
.image-grid img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    /* Problema: filter costoso */
    filter: contrast(1.1) saturate(1.2);
    transition: transform 0.3s ease, filter 0.3s ease;
}

.image-grid img:hover {
    transform: scale(1.05);
    /* Problema: filter aún más costoso en hover */
    filter: contrast(1.3) saturate(1.5) brightness(1.1);
}

.data-section {
    margin: 3rem 0;
    padding: 2rem;
    background: #f8f9fa;
    border-radius: 10px;
}

.data-section h3 {
    margin-bottom: 1rem;
}

.data-section button {
    background: #dc3545;
    color: white;
    padding: 1rem 2rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 2rem;
}

/* Lista que será problemática cuando sea grande */
#data-container {
    max-height: 400px;
    overflow-y: auto;
}

.data-item {
    padding: 1rem;
    margin: 0.5rem 0;
    background: white;
    border-radius: 5px;
    border-left: 4px solid #007bff;
    /* Problema: sombra en cada item de la lista */
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.footer {
    background: #333;
    color: white;
    text-align: center;
    padding: 2rem 0;
    margin-top: 3rem;
}

/* Media queries con problemas */
@media (max-width: 768px) {
    /* Problema: muchas reglas duplicadas */
    .header { padding: 1rem 0; }
    #main-title { font-size: 2rem; }
    .nav { flex-direction: column; align-items: center; }
    .nav-link { margin: 0.25rem 0; }
    .hero { padding: 2rem 0; }
    .hero-text h2 { font-size: 1.5rem; }
    .form-section { padding: 2rem; }
    .image-grid { grid-template-columns: 1fr; }
}

/* CSS no utilizado intencionalmente */
.unused-class {
    color: red;
    background: yellow;
    padding: 100px;
}

.another-unused {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.old-browser-support {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
}
\`\`\`

## ⚡ app.js

\`\`\`javascript
// JavaScript con problemas intencionados para testing

// Problema: Variable global sin const/let
currentData = null;

// Problema: función async mal manejada
async function loadData() {
    // Problema: no manejo de errores
    const response = fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    
    // Problema: manipulación del DOM ineficiente
    const statusDiv = document.getElementById('form-status');
    statusDiv.innerHTML = 'Datos cargados: ' + data.length + ' items';
    statusDiv.style.color = 'green';
    
    currentData = data;
    
    // Problema: timeout innecesario
    setTimeout(() => {
        console.log('Datos procesados');
    }, 100);
}

// Problema: Event listener sin removeEventListener
document.addEventListener('DOMContentLoaded', function() {
    // Problema: querySelector repetitivo
    const form = document.querySelector('#contact-form');
    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');
    const messageInput = document.querySelector('#message');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Problema: validación ineficiente
        if (nameInput.value.trim() === '') {
            alert('Por favor ingresa tu nombre'); // Problema: usar alert
            return;
        }
        
        if (emailInput.value.trim() === '') {
            alert('Por favor ingresa tu email');
            return;
        }
        
        if (messageInput.value.trim() === '') {
            alert('Por favor ingresa un mensaje');
            return;
        }
        
        // Problema: regex innecesariamente compleja
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_\`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        
        if (!emailRegex.test(emailInput.value)) {
            alert('Email inválido');
            return;
        }
        
        // Simulación de envío con problemas
        submitForm(nameInput.value, emailInput.value, messageInput.value);
    });
    
    // Problema: event listener costoso en scroll
    window.addEventListener('scroll', function() {
        // Problema: acceso al DOM en cada scroll
        const header = document.querySelector('.header');
        const scrolled = window.pageYOffset;
        
        if (scrolled > 100) {
            header.style.transform = 'translateY(-10px)';
        } else {
            header.style.transform = 'translateY(0)';
        }
    });
});

// Problema: función que puede causar memory leak
function submitForm(name, email, message) {
    const statusDiv = document.getElementById('form-status');
    statusDiv.innerHTML = 'Enviando...';
    statusDiv.style.color = 'orange';
    
    // Simulación de API call con problema
    setTimeout(() => {
        // Problema: no verificar si el elemento aún existe
        statusDiv.innerHTML = '¡Mensaje enviado exitosamente!';
        statusDiv.style.color = 'green';
        
        // Problema: crear muchos objetos innecesarios
        const userData = {
            name: name,
            email: email,
            message: message,
            timestamp: new Date(),
            id: Math.random() * 10000,
            metadata: {
                userAgent: navigator.userAgent,
                url: window.location.href,
                referrer: document.referrer
            }
        };
        
        console.log('Usuario:', userData);
        
        // Problema: timeout sin cleanup
        setTimeout(() => {
            statusDiv.innerHTML = '';
        }, 5000);
    }, 2000);
}

// Problema: función que genera muchos elementos DOM
function generateList() {
    const container = document.getElementById('data-container');
    
    // Problema: no limpiar contenido anterior
    // container.innerHTML = '';
    
    // Problema: loop que crea muchos elementos de una vez
    for (let i = 0; i < 1000; i++) {
        const item = document.createElement('div');
        item.className = 'data-item';
        
        // Problema: innerHTML dentro de un loop
        item.innerHTML = \`
            <h4>Item #\${i + 1}</h4>
            <p>Este es el contenido del item \${i + 1}</p>
            <small>Generado en: \${new Date().toLocaleTimeString()}</small>
        \`;
        
        // Problema: appendChild en cada iteración causa reflow
        container.appendChild(item);
        
        // Problema: event listener en cada item
        item.addEventListener('click', function() {
            // Problema: función anónima que puede causar memory leak
            console.log('Clicked item:', i);
            item.style.backgroundColor = '#007bff';
            item.style.color = 'white';
        });
    }
}

// Problema: setInterval sin clearInterval
setInterval(() => {
    // Problema: código que se ejecuta constantemente
    console.log('App status check:', new Date());
}, 10000);

// Problema: función recursiva sin limite claro
function infiniteDataProcessor(data, depth = 0) {
    if (depth > 100) return data; // Límite arbitrario
    
    if (Array.isArray(data)) {
        return data.map(item => infiniteDataProcessor(item, depth + 1));
    }
    
    if (typeof data === 'object' && data !== null) {
        const processed = {};
        for (let key in data) {
            processed[key] = infiniteDataProcessor(data[key], depth + 1);
        }
        return processed;
    }
    
    return data;
}

// Export para testing (problema: variable global)
window.appFunctions = {
    loadData,
    generateList,
    submitForm,
    infiniteDataProcessor
};
\`\`\`

## 🛠️ utils.js

\`\`\`javascript
// Utilidades con problemas adicionales para testing

// Problema: función que modifica prototipos nativos
String.prototype.reverse = function() {
    return this.split('').reverse().join('');
};

// Problema: función con memory leak potencial
function createExpensiveObject() {
    const largeArray = new Array(100000).fill(0).map((_, i) => ({
        id: i,
        data: 'Some data ' + i,
        timestamp: new Date(),
        randomValue: Math.random()
    }));
    
    // Problema: closure que mantiene referencia a array grande
    return function(index) {
        return largeArray[index];
    };
}

// Problema: polyfill innecesario para navegadores modernos
if (!Array.prototype.includes) {
    Array.prototype.includes = function(element) {
        return this.indexOf(element) !== -1;
    };
}

// Problema: función que puede bloquear el UI
function heavyComputation() {
    let result = 0;
    for (let i = 0; i < 10000000; i++) {
        result += Math.sqrt(i) * Math.sin(i);
    }
    return result;
}

// Problema: función con side effects ocultos
function processUserData(userData) {
    // Problema: modificar objeto de entrada
    userData.processed = true;
    userData.processedAt = new Date();
    
    // Problema: console.log en función de utilidad
    console.log('Processing user:', userData);
    
    // Problema: operación síncrona que debería ser async
    const processed = JSON.parse(JSON.stringify(userData));
    
    return processed;
}

// Problema: variable global accesible
window.GLOBAL_CONFIG = {
    apiUrl: 'https://api.example.com',
    apiKey: 'secret-key-123', // Problema: clave expuesta
    debugMode: true
};

// Export problemático
window.utils = {
    createExpensiveObject,
    heavyComputation,
    processUserData
};
\`\`\`

## 📋 README.md

\`\`\`markdown
# DevTools Lab - Aplicación de Prueba

Esta aplicación contiene problemas intencionados de performance, accesibilidad y JavaScript para practicar DevTools con IA.

## 🚀 Despliegue Rápido

1. Fork este repositorio
2. Ve a Settings > Pages
3. Selecciona "Deploy from a branch" > "main"
4. Accede a \`https://tu-usuario.github.io/devtools-lab\`

## 🐛 Problemas Incluidos

### Performance
- Imágenes grandes sin lazy loading
- CSS con selectores ineficientes
- JavaScript que bloquea el main thread
- Animaciones costosas
- Memory leaks potenciales

### Accesibilidad
- Contraste insuficiente en textos
- Falta de labels en formularios
- Elementos clickeables sin semántica apropiada
- Falta de indicadores de focus

### JavaScript
- Funciones async mal manejadas
- Event listeners sin cleanup
- Manipulación del DOM ineficiente
- Variables globales

## 🔧 Para Practicar

1. Abre DevTools (F12)
2. Usa los prompts sugeridos en el workshop
3. Implementa las mejoras sugeridas por la IA
4. Compara métricas antes/después

## 📝 Licencia

MIT - Solo para fines educativos
\`\`\`

## 🎯 Prompts Sugeridos para esta Aplicación

### Para Elements Panel
- "What accessibility issues do you see in this contact form?"
- "How can I improve the semantic structure of this HTML?"
- "Analyze the CSS specificity issues in this stylesheet"

### Para Console Panel
- "Explain the JavaScript errors and suggest fixes"
- "What global variables are polluting the namespace?"
- "How can I improve error handling in this code?"

### Para Performance Panel
- "What are the main performance bottlenecks in this application?"
- "How can I optimize the image loading strategy?"
- "Analyze the impact of CSS animations on frame rate"

### Para Network Panel
- "Which resources are slowing down the initial page load?"
- "How can I implement better caching strategies?"
- "What's the critical rendering path optimization opportunity?"

Esta aplicación está diseñada para ser un laboratorio completo donde los asistentes pueden practicar todas las técnicas de DevTools + IA de manera estructurada y con problemas reales comunes en el desarrollo web.`,
        },
        {
          id: "test-sites",
          title: "Sitios Web para Practicar DevTools + IA",
          content: `# Sitios Web Recomendados para Practicar DevTools + IA

Esta sección proporciona una lista curada de sitios web que presentan diferentes tipos de problemas comunes, perfectos para practicar las técnicas de DevTools con asistencia de IA.

## 🎯 Sitios con Problemas de Performance Conocidos

### 1. Heavy News Sites
**CNN.com** / **BBC.com**
- **Problemas típicos**: Carga lenta, muchos recursos, scripts pesados
- **Ideal para practicar**: Network analysis, Performance profiling, Resource optimization
- **Prompts sugeridos**:
  - "Analyze the resource loading waterfall for optimization opportunities"
  - "What's causing the slow First Contentful Paint on this news site?"
  - "How can the Critical Rendering Path be optimized?"

### 2. E-commerce Platforms
**Amazon.com** / **eBay.com** 
- **Problemas típicos**: Layout shifts, JavaScript bloqueante, imágenes grandes
- **Ideal para practicar**: CLS debugging, Image optimization, JavaScript performance
- **Prompts sugeridos**:
  - "Identify sources of Cumulative Layout Shift during page load"
  - "Analyze the image loading strategy and suggest improvements"
  - "What JavaScript is blocking the main thread?"

### 3. Social Media Platforms
**Twitter.com** / **LinkedIn.com**
- **Problemas típicos**: Infinite scroll performance, memory leaks, async loading
- **Ideal para practicar**: Memory profiling, Event handling, Async debugging
- **Prompts sugeridos**:
  - "Analyze memory usage patterns during infinite scroll"
  - "Debug the performance of dynamic content loading"
  - "What's causing frame rate drops during scrolling?"

## 🔧 Sitios Específicos para Testing

### 4. TestMyCSS.com
**Sitio especializado para debugging CSS**
- **Problemas típicos**: CSS conflicts, specificity issues, layout problems
- **Ideal para practicar**: CSS debugging, Specificity analysis, Layout debugging
- **Prompts sugeridos**:
  - "Analyze the CSS cascade conflicts in this layout"
  - "Explain the specificity issues affecting these styles"
  - "How can this CSS be refactored for better maintainability?"

### 5. WebPageTest.org Demo Sites
**Various demo pages with intentional performance issues**
- **Problemas típicos**: Simulated slow connections, large bundles, render-blocking
- **Ideal para practicar**: Comprehensive performance analysis
- **Prompts sugeridos**:
  - "Create a complete performance optimization strategy"
  - "Prioritize fixes based on impact vs effort"
  - "Predict the performance improvements from these optimizations"

## 🌍 Sitios Internacionales con Desafíos Específicos

### 6. Gobierno y Servicios Públicos
**gov.uk** / **usa.gov**
- **Problemas típicos**: Accessibility issues, legacy code, complex forms
- **Ideal para practicar**: Accessibility debugging, Form optimization, Legacy code analysis
- **Prompts sugeridos**:
  - "Audit this government site for accessibility compliance"
  - "How can these forms be optimized for better user experience?"
  - "Suggest modernization strategies for this legacy codebase"

### 7. Educational Platforms
**coursera.org** / **edx.org**
- **Problemas típicos**: Video loading, interactive content, mobile responsiveness
- **Ideal para practicar**: Media optimization, Interactive debugging, Responsive design
- **Prompts sugeridos**:
  - "Optimize video loading and playback performance"
  - "Debug interactive content performance issues"
  - "Analyze mobile responsiveness and suggest improvements"

## 🎪 Sitios Complejos para Usuarios Avanzados

### 8. Figma.com
- **Problemas típicos**: Canvas rendering, complex interactions, memory management
- **Ideal para practicar**: Canvas performance, Event handling, Memory optimization
- **Prompts sugeridos**:
  - "Analyze canvas rendering performance bottlenecks"
  - "Debug complex user interaction performance"
  - "Optimize memory usage for graphics-intensive applications"

### 9. GitHub.com
- **Problemas típicos**: Code syntax highlighting, dynamic loading, search performance
- **Ideal para practicar**: Code editor performance, Search optimization, Dynamic content
- **Prompts sugeridos**:
  - "Analyze syntax highlighting performance impact"
  - "Optimize dynamic code loading strategies"
  - "Debug search functionality performance"

## 🏗️ Sitios para Problemas Específicos

### Layout y CSS Issues
**Wikipedia.org**
- Dense content, complex layouts, multiple languages
- Perfecto para: CSS analysis, Typography optimization, Content layout

### JavaScript Heavy Applications
**Gmail.com** / **Google Docs**
- Complex JavaScript applications, real-time updates
- Perfecto para: JavaScript debugging, Memory profiling, Real-time performance

### Image-Heavy Sites
**Pinterest.com** / **Instagram.com**
- Large numbers of images, lazy loading, infinite scroll
- Perfecto para: Image optimization, Lazy loading analysis, Scroll performance

## 📋 Guía de Uso por Nivel

### Principiante (Usar estos sitios primero)
1. **Wikipedia.org** - Problemas básicos de performance
2. **BBC.com** - Análisis simple de network
3. **gov.uk** - Accesibilidad y formularios

### Intermedio
1. **Amazon.com** - E-commerce performance
2. **Twitter.com** - Dynamic content loading
3. **GitHub.com** - Code editor performance

### Avanzado
1. **Figma.com** - Canvas y graphics performance
2. **Gmail.com** - Complex application debugging
3. **Custom problematic sites** - Real-world scenarios

## 🎯 Metodología de Práctica Recomendada

### Paso 1: Selección de Sitio
- Elige basándote en el tipo de problema que quieres practicar
- Considera tu nivel de experiencia
- Ten claro qué panel de DevTools quieres enfocar

### Paso 2: Análisis Inicial
- Ejecuta Lighthouse audit como baseline
- Identifica 2-3 problemas principales
- Formula prompts específicos para cada problema

### Paso 3: Investigación Profunda
- Usa múltiples paneles de DevTools
- Aplica prompts de IA de diferentes categorías
- Documenta hallazgos y soluciones sugeridas

### Paso 4: Simulación de Mejoras
- Implementa cambios temporales en DevTools
- Verifica mejoras con métricas
- Estima impacto real de las optimizaciones

## ⚠️ Consideraciones Importantes

### Ética y Términos de Uso
- Usa estos sitios solo para propósitos educativos
- No hagas modificaciones permanentes
- Respeta los términos de servicio de cada sitio
- No automatices requests o hagas scraping

### Limitaciones de Testing
- Los cambios en DevTools son temporales
- Algunos problemas solo se pueden resolver en producción
- Las métricas pueden variar según conexión y dispositivo
- Usa resultados como guía, no como garantías absolutas

## 🎁 Bonus: Sitios Controlados para Testing

### Web.dev/measure
- Herramienta oficial de Google para testing
- Sitios de demo con problemas conocidos
- Perfecto para comparar antes/después

### GTmetrix Test Sites
- Sitios específicamente diseñados para testing
- Diferentes categorías de problemas
- Resultados consistentes para comparación`,
          miniLab: {
            title: "Explorando Sitios de Prueba",
            description: "Practica con diferentes tipos de sitios web y sus problemas característicos",
            steps: [
              {
                step: 1,
                title: "Sitio Básico: Wikipedia",
                instructions: [
                  "Ve a es.wikipedia.org y abre DevTools",
                  "Ejecuta Lighthouse audit para obtener baseline",
                  "Pregunta: 'Analyze this content-heavy site for performance opportunities'",
                  "Identifica: imágenes sin optimizar, CSS no utilizado, problemas de accesibilidad",
                  "Toma nota de las 3 mejoras más impactantes sugeridas"
                ]
              },
              {
                step: 2,
                title: "E-commerce: Amazon",
                instructions: [
                  "Ve a amazon.com y navega a una página de producto",
                  "Ve al panel Performance y graba durante la carga",
                  "Pregunta: 'What are the main CLS (Layout Shift) causes on this e-commerce page?'",
                  "Analiza: imágenes que cargan tarde, anuncios dinámicos, contenido recomendado",
                  "Simula mobile y verifica responsive performance"
                ]
              },
              {
                step: 3,
                title: "Aplicación Compleja: GitHub",
                instructions: [
                  "Ve a github.com y abre un repositorio con muchos archivos",
                  "Ve al panel Network y analiza las peticiones",
                  "Pregunta: 'How can this code editor interface be optimized for better performance?'",
                  "Identifica: syntax highlighting cost, dynamic loading, search performance",
                  "Compara performance entre diferentes tipos de archivos"
                ]
              },
              {
                step: 4,
                title: "Comparación y Síntesis",
                instructions: [
                  "Compara los 3 sitios analizados",
                  "Pregunta: 'What are the common performance patterns across these different site types?'",
                  "Identifica problemas universales vs específicos por tipo de sitio",
                  "Crea una lista de 'top 5 optimizaciones' aplicables a cualquier sitio",
                  "Documenta las diferencias en estrategias de optimización por sector"
                ]
              }
            ]
          }
        }
      ]
    },
    {
      id: "practical-lab",
      title: "Mini Lab Integral",
      icon: "🧪",
      topics: [
        {
          id: "complete-workflow",
          title: "Flujo de Trabajo Completo con DevTools + IA",
          content: `# Mini Lab Integral: DevTools + IA en Acción

Este mini lab integra todas las herramientas de DevTools con asistencia de IA para proporcionar una experiencia completa de debugging y optimización.

## Objetivo del Lab

Simularemos un flujo de trabajo real donde:
1. **Identificamos un problema** en una aplicación web
2. **Usamos diferentes paneles** de DevTools para investigar
3. **Aplicamos IA** para obtener insights y sugerencias
4. **Implementamos soluciones** basadas en las recomendaciones
5. **Verificamos mejoras** con métricas antes/después

## Escenario: Aplicación Web con Problemas de Rendimiento

Trabajaremos con una aplicación web que tiene varios problemas comunes:
- Carga lenta de la página
- JavaScript que bloquea el rendering
- Imágenes no optimizadas
- Problemas de accesibilidad
- Layout shifts durante la carga

## Metodología del Lab

### Fase 1: Diagnóstico Inicial
- Usar Lighthouse para auditoría general
- Identificar métricas problemáticas
- Consultar IA para priorización de problemas

### Fase 2: Análisis Profundo
- Network panel para análisis de recursos
- Performance panel para profiling detallado
- Sources panel para debugging de JavaScript
- Elements panel para análisis de DOM/CSS

### Fase 3: Optimización Guiada por IA
- Aplicar sugerencias de IA panel por panel
- Implementar cambios incrementales
- Validar mejoras en tiempo real

### Fase 4: Verificación y Medición
- Comparar métricas antes/después
- Verificar Web Vitals mejorados
- Documentar lecciones aprendidas

## Herramientas y Técnicas Utilizadas

### DevTools Panels
- **Elements**: Optimización de DOM y CSS
- **Console**: Debugging de JavaScript con IA
- **Sources**: Análisis de código y breakpoints inteligentes
- **Network**: Optimización de recursos de red
- **Performance**: Profiling y análisis de Web Vitals

### Funciones de IA
- **Error Analysis**: Explicación automática de errores
- **Code Optimization**: Sugerencias de mejora de código
- **Performance Insights**: Análisis predictivo de rendimiento
- **Best Practices**: Recomendaciones automáticas

## Resultados Esperados

Al completar este lab, habrás:
- Mejorado significativamente las métricas de rendimiento
- Aprendido a usar IA para acelerar el debugging
- Dominado el flujo de trabajo integrado de DevTools
- Desarrollado intuición para identificar y resolver problemas comunes

## Preparación para el Lab

### Requisitos Técnicos
- Chrome con DevTools habilitado
- Conexión a internet estable
- Funciones experimentales de IA activadas
- Sitio web de prueba con problemas conocidos

### Configuración Inicial
- Habilitar todas las funciones experimentales de IA
- Configurar simulación de red lenta
- Preparar herramientas de medición
- Establecer métricas baseline`,
          miniLab: {
            title: "🚀 Mini Lab Completo: Optimización Web con DevTools + IA",
            description: "Sigue este workflow completo para diagnosticar y optimizar una aplicación web real usando todos los paneles de DevTools con asistencia de IA",
            steps: [
              {
                step: 1,
                title: "Configuración Inicial y Baseline",
                instructions: [
                  "Ve a un sitio web con problemas conocidos (ej: wordpress.com, amazon.com)",
                  "Abre DevTools (F12) y ve a Settings > Experiments",
                  "Habilita 'AI assistance in Console' y 'Performance insights'",
                  "Ve al panel Lighthouse, selecciona todas las categorías",
                  "Ejecuta la auditoría y guarda los resultados como baseline",
                  "Toma nota de los scores iniciales: Performance, Accessibility, Best Practices, SEO"
                ]
              },
              {
                step: 2,
                title: "Análisis de Red y Recursos",
                instructions: [
                  "Ve al panel Network y borra las peticiones anteriores",
                  "Recarga la página para capturar todas las peticiones",
                  "Ordena por 'Size' para identificar recursos más grandes",
                  "En la console, pregunta: 'IA: Analiza estas peticiones y sugiere optimizaciones'",
                  "Identifica: imágenes > 500KB, archivos JS/CSS grandes, recursos lentos",
                  "Filtra por 'Img' y revisa formatos: ¿hay JPEGs que podrían ser WebP?"
                ]
              },
              {
                step: 3,
                title: "Performance Profiling con IA",
                instructions: [
                  "Ve al panel Performance, activa 'Screenshots' si deseas capturas visuales",
                  "Nota: Las métricas de Web Vitals (LCP, INP, CLS) se incluyen automáticamente",
                  "Graba un profile durante la carga de la página (5-10 segundos)",
                  "Pregunta: 'IA: ¿Cuáles son los principales cuellos de botella en este profile?'",
                  "Identifica: Long Tasks (barras rojas), JavaScript bloqueante, layout shifts",
                  "Busca métricas Web Vitals: FCP, LCP, CLS, y la nueva INP (reemplaza FID)",
                  "Pregunta: 'IA: ¿Cómo puedo mejorar el LCP de esta página?'"
                ]
              },
              {
                step: 4,
                title: "Debugging de JavaScript con Sources + IA",
                instructions: [
                  "Ve al panel Console y busca errores en rojo",
                  "Si hay errores, pregunta: 'IA: Explica este error y cómo solucionarlo'",
                  "Ve al panel Sources, busca archivos JavaScript principales",
                  "Pregunta: 'IA: ¿Hay código JavaScript que bloquee el rendering?'",
                  "Busca scripts síncronos en <head>, ¿podrían ser async/defer?",
                  "Identifica funciones que se ejecutan en el critical path"
                ]
              },
              {
                step: 5,
                title: "Optimización de DOM y CSS con Elements",
                instructions: [
                  "Ve al panel Elements, selecciona el elemento más grande visible",
                  "Pregunta: 'IA: ¿Cómo puedo optimizar el CSS de este elemento?'",
                  "Busca elementos con muchas propiedades CSS redundantes",
                  "En la console: 'IA: ¿Hay CSS no utilizado en esta página?'",
                  "Revisa las fuentes cargadas: ¿se usan todas las variantes?",
                  "Simula mobile (Device toolbar) y verifica responsive design"
                ]
              },
              {
                step: 6,
                title: "Implementación de Mejoras Críticas",
                instructions: [
                  "Basándote en el análisis de IA, implementa cambios simulados:",
                  "En Elements: edita CSS para reducir unused styles",
                  "Simula lazy loading: marca imágenes offscreen como 'loading=lazy'",
                  "Pregunta: 'IA: Si aplico estas optimizaciones, ¿cuánto mejoraría el performance?'",
                  "Toma screenshots de antes/después de los cambios",
                  "Documenta las 3 mejoras más impactantes identificadas"
                ]
              },
              {
                step: 7,
                title: "Validación y Métricas Finales",
                instructions: [
                  "Ve al panel Lighthouse y ejecuta una nueva auditoría",
                  "Compara los scores con el baseline inicial",
                  "Pregunta: 'IA: ¿Qué otros optimizaciones recomendarías como siguiente paso?'",
                  "Documenta mejoras potenciales:",
                  "  - Performance score: [antes] → [después estimado]",
                  "  - LCP: [antes] → [después estimado]",
                  "  - CLS: [antes] → [después estimado]",
                  "Crea un plan de acción con las optimizaciones priorizadas por impacto/esfuerzo"
                ]
              },
              {
                step: 8,
                title: "Consolidación y Siguientes Pasos",
                instructions: [
                  "En la console, pregunta: 'IA: Resume los hallazgos clave de este análisis'",
                  "Crea un reporte mental con:",
                  "  - 3 problemas principales identificados",
                  "  - 3 soluciones prioritarias",
                  "  - Impacto estimado en métricas clave",
                  "Pregunta: 'IA: ¿Qué herramientas adicionales recomendarías para monitoreo continuo?'",
                  "Planifica implementación: ¿cuáles cambios puedes hacer inmediatamente vs cuáles requieren desarrollo?",
                  "¡Felicidades! Has completado un flujo de trabajo profesional de optimización web"
                ]
              }
            ]
          }
        }
      ]
    }
  ]
}