# Chrome DevTools Workshop Documentation Platform

A comprehensive interactive workshop platform for learning Google Chrome DevTools and AI-powered debugging features through hands-on code exercises.

**Experience Qualities**:
1. **Educational** - Clear, progressive learning path with structured content and practical examples
2. **Interactive** - Hands-on code exercises that demonstrate real DevTools usage scenarios
3. **Professional** - Clean, focused interface that mirrors developer tool aesthetics

**Complexity Level**: Light Application (multiple features with basic state)
- Multiple workshop subjects with organized content delivery, code examples, and progress tracking

## Essential Features

### Sidebar Navigation
- **Functionality**: Display categorized workshop subjects with expandable sections
- **Purpose**: Easy navigation between different DevTools topics and AI features
- **Trigger**: Click on subject categories or individual topics
- **Progression**: Click category → expand topics → select specific lesson → content loads in main area
- **Success criteria**: Smooth navigation with visual feedback for current selection

### Content Display Area
- **Functionality**: Render workshop content with formatted text, code examples, and exercises
- **Purpose**: Primary learning interface with rich content presentation
- **Trigger**: Selection from sidebar navigation
- **Progression**: Select topic → content loads → scroll through material → interact with code examples
- **Success criteria**: Clear typography, syntax-highlighted code, and responsive layout

### Code Exercise System
- **Functionality**: Interactive code snippets with DevTools integration instructions
- **Purpose**: Hands-on practice with real-world debugging scenarios
- **Trigger**: Navigate to exercise sections within topics
- **Progression**: Read instructions → view code → follow DevTools steps → verify results
- **Success criteria**: Clear step-by-step instructions with expected outcomes

### Progress Tracking
- **Functionality**: Mark completed sections and track workshop progress
- **Purpose**: Maintain learning momentum and provide sense of accomplishment
- **Trigger**: Complete reading/exercise sections
- **Progression**: Read content → mark as complete → visual progress updates
- **Success criteria**: Persistent progress state across sessions

## Edge Case Handling
- **Empty Content**: Display placeholder with getting started guidance
- **Long Code Blocks**: Horizontal scroll with syntax highlighting preservation
- **Mobile Usage**: Collapsible sidebar with touch-friendly navigation
- **Incomplete Exercises**: Clear indicators for partially completed sections

## Design Direction
The design should feel professional and educational, mirroring the clean aesthetics of modern developer tools while maintaining excellent readability for technical content.

## Color Selection
Complementary (opposite colors) - Using a blue-based primary with warm orange accents to create a professional yet approachable developer-focused aesthetic.

- **Primary Color**: Deep Blue (oklch(0.4 0.15 240)) - Communicates trust, professionalism, and technical depth
- **Secondary Colors**: Light Gray (oklch(0.95 0.01 240)) for backgrounds and Slate (oklch(0.6 0.05 240)) for supporting elements
- **Accent Color**: Warm Orange (oklch(0.7 0.15 45)) - Highlights interactive elements and calls-to-action
- **Foreground/Background Pairings**:
  - Background (Light Gray #F8F9FA): Dark Blue text (oklch(0.2 0.1 240)) - Ratio 12.1:1 ✓
  - Primary (Deep Blue): White text (oklch(1 0 0)) - Ratio 8.2:1 ✓
  - Secondary (Light Gray): Dark Blue text (oklch(0.2 0.1 240)) - Ratio 12.1:1 ✓
  - Accent (Warm Orange): White text (oklch(1 0 0)) - Ratio 4.9:1 ✓

## Font Selection
Use Inter for its excellent readability in technical documentation and code-adjacent content, with JetBrains Mono for code blocks to maintain professional developer tool aesthetics.

- **Typographic Hierarchy**:
  - H1 (Workshop Title): Inter Bold/32px/tight letter spacing
  - H2 (Section Headers): Inter Semibold/24px/normal spacing
  - H3 (Subsections): Inter Medium/20px/normal spacing
  - Body Text: Inter Regular/16px/relaxed line height
  - Code Inline: JetBrains Mono Regular/14px/normal spacing
  - Code Blocks: JetBrains Mono Regular/14px/1.6 line height

## Animations
Subtle functionality-focused animations that guide attention and provide smooth transitions between workshop sections without distracting from learning content.

- **Purposeful Meaning**: Smooth sidebar transitions reinforce navigation hierarchy, subtle hover states indicate interactivity
- **Hierarchy of Movement**: Content area transitions take precedence, followed by sidebar state changes, with minimal decorative motion

## Component Selection
- **Components**: Sidebar for navigation, Card components for content sections, Accordion for expandable topics, Button for interactive elements, Badge for progress indicators
- **Customizations**: Custom syntax highlighting component for code blocks, progress indicator system, collapsible content areas
- **States**: Sidebar items show hover/active/completed states, buttons have clear press feedback, content areas load smoothly
- **Icon Selection**: ChevronRight for expandable items, BookOpen for lessons, Code for exercises, CheckCircle for completed items
- **Spacing**: Consistent 4-unit (16px) padding for content areas, 2-unit (8px) for compact elements
- **Mobile**: Sidebar collapses to overlay on mobile, content area becomes full-width with touch-optimized navigation