# DevTools + IA Workshop Platform

Una plataforma de workshop interactivo y comprehensivo para aprender Google Chrome DevTools integrado con funciones de IA para depuración acelerada a través de mini labs prácticos paso a paso.

**Experience Qualities**:
1. **Educativo y Práctico** - Camino de aprendizaje claro y progresivo con contenido estructurado y mini labs hands-on
2. **Asistido por IA** - Integración de asistencia de IA para explicar errores, sugerir optimizaciones y acelerar debugging
3. **Profesional y Moderno** - Interfaz limpia y enfocada que refleja la estética de herramientas de desarrollo modernas

**Complexity Level**: Light Application (multiple features with basic state)
- Workshop multi-sección con mini labs organizados, contenido progresivo y seguimiento de progreso por pasos

## Essential Features

### Navegación por Secciones Reorganizada
- **Functionality**: Estructura clara separando conceptos básicos de DevTools vs integración avanzada con IA
- **Purpose**: Progresión lógica desde fundamentos hasta técnicas avanzadas con IA
- **Trigger**: Click en secciones: Conceptos Básicos → DevTools + IA → Mini Lab Integral
- **Progression**: Seleccionar sección → expandir temas → mini lab step-by-step → completar pasos
- **Success criteria**: Navegación intuitiva con progreso visual por pasos completados

### Sistema de Mini Labs Interactivos
- **Functionality**: Labs prácticos paso a paso que simulan flujos de trabajo reales con DevTools + IA
- **Purpose**: Experiencia hands-on siguiendo metodología profesional de debugging y optimización
- **Trigger**: Navegar a mini labs dentro de cada tema
- **Progression**: Leer descripción → seguir pasos numerados → marcar pasos como completados → validar progreso
- **Success criteria**: Pasos claros con instrucciones específicas para Chrome DevTools

### Panel Sources con IA Integration
- **Functionality**: Contenido específico sobre debugging avanzado en panel Sources con asistencia de IA
- **Purpose**: Dominar debugging de JavaScript con ayuda de IA para análisis de código y sugerencias
- **Trigger**: Seleccionar tema "IA en Panel Sources"
- **Progression**: Aprender conceptos → practicar en mini lab → aplicar IA para análisis de código
- **Success criteria**: Comprensión completa de debugging con IA en Sources panel

### Flujo de Trabajo Completo (Mini Lab Integral)
- **Functionality**: Lab comprehensivo que integra todos los paneles con metodología profesional
- **Purpose**: Simular flujo real de optimización web usando DevTools + IA end-to-end
- **Trigger**: Acceder al "Mini Lab Integral" final
- **Progression**: Setup → diagnóstico → análisis con IA → implementación → validación → reporte
- **Success criteria**: Completar workflow completo con métricas antes/después

## Edge Case Handling
- **Pasos Incompletos**: Indicadores claros de progreso con pasos faltantes resaltados
- **Mini Labs Largos**: Navegación por pasos con scroll automático y estado persistente
- **Contenido Técnico Complejo**: Explicaciones step-by-step con screenshots conceptuales
- **Mobile Usage**: Mini labs adaptados para pantallas pequeñas con instrucciones simplificadas

## Design Direction
El diseño debe sentirse profesional y educativo, reflejando la estética limpia de herramientas de desarrollo modernas mientras mantiene excelente legibilidad para contenido técnico y flujos paso a paso.

## Color Selection
Complementary (opposite colors) - Usando un esquema azul profesional con acentos naranjas cálidos para crear una estética técnica pero accesible.

- **Primary Color**: Deep Blue (oklch(0.4 0.15 240)) - Comunica confianza, profesionalismo y profundidad técnica
- **Secondary Colors**: Light Gray (oklch(0.95 0.01 240)) para fondos y Slate (oklch(0.6 0.05 240)) para elementos de soporte
- **Accent Color**: Warm Orange (oklch(0.7 0.15 45)) - Resalta elementos interactivos, pasos completados y CTAs
- **Foreground/Background Pairings**:
  - Background (Light Gray): Dark Blue text (oklch(0.2 0.1 240)) - Ratio 12.1:1 ✓
  - Primary (Deep Blue): White text (oklch(1 0 0)) - Ratio 8.2:1 ✓
  - Accent (Warm Orange): White text (oklch(1 0 0)) - Ratio 4.9:1 ✓
  - Steps Progress: Accent background with white text for completed steps

## Font Selection
Inter para excelente legibilidad en documentación técnica y contenido educativo, con JetBrains Mono para bloques de código manteniendo estética profesional de developer tools.

- **Typographic Hierarchy**:
  - H1 (Workshop Title): Inter Bold/32px/tight letter spacing
  - H2 (Section Headers): Inter Semibold/24px/normal spacing  
  - H3 (Mini Lab Steps): Inter Medium/18px/normal spacing
  - Body Text: Inter Regular/16px/relaxed line height
  - Step Instructions: Inter Regular/14px/relaxed line height
  - Code Commands: JetBrains Mono Regular/14px/normal spacing

## Animations
Animaciones sutiles enfocadas en funcionalidad que guían la atención durante el progreso de mini labs sin distraer del aprendizaje.

- **Purposeful Meaning**: Transiciones suaves de pasos completados, expansión/colapso de mini lab steps, feedback visual de progreso
- **Hierarchy of Movement**: Progreso de pasos toma precedencia, seguido por transiciones de contenido, con movimiento decorativo mínimo

## Component Selection
- **Components**: Collapsible para mini lab steps, Progress bars para avance, Badge para pasos completados, Card para contenido de pasos, Button para acciones de completar
- **Customizations**: Componente MiniLab personalizado con tracking de progreso, step-by-step navigation, estado persistente por KV
- **States**: Steps muestran estados pending/completed/active, buttons tienen feedback claro, progress bars animadas
- **Icon Selection**: Flask para mini labs, CheckCircle para pasos completados, CaretRight/CaretDown para expandir, Target para ejercicios
- **Spacing**: 6-unit (24px) entre pasos, 4-unit (16px) padding interno, 2-unit (8px) para elementos compactos
- **Mobile**: Mini lab steps se adaptan a pantalla completa, instrucciones optimizadas para touch, navegación simplificada