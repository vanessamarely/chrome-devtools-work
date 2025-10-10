import { WorkshopData } from '../types/workshop'

export const workshopData: WorkshopData = {
  title: "Chrome DevTools & AI Workshop",
  sections: [
    {
      id: "basics",
      title: "DevTools Basics",
      icon: "🔧",
      topics: [
        {
          id: "introduction",
          title: "Introduction to DevTools",
          content: `# Welcome to Chrome DevTools Workshop

Chrome DevTools is a set of web developer tools built directly into the Google Chrome browser. It allows developers to debug, profile, and optimize their web applications.

## What You'll Learn

In this workshop, you'll master:
- Core DevTools panels and their purposes
- Debugging JavaScript with breakpoints and console
- Analyzing network performance
- Using the new AI-powered debugging features
- Optimizing CSS and DOM manipulation

## Getting Started

Open Chrome DevTools by:
- **F12** or **Ctrl+Shift+I** (Windows/Linux)
- **Cmd+Option+I** (Mac)
- Right-click → "Inspect Element"

Let's begin your journey to becoming a DevTools expert!`,
          exercises: [
            {
              id: "open-devtools",
              title: "Opening DevTools",
              description: "Practice opening DevTools using different methods",
              code: `<!DOCTYPE html>
<html>
<head>
    <title>DevTools Practice</title>
</head>
<body>
    <h1>Hello DevTools!</h1>
    <p id="demo">Click the button to change this text.</p>
    <button onclick="changeText()">Change Text</button>
    
    <script>
        function changeText() {
            document.getElementById("demo").innerHTML = "Text changed!";
        }
    </script>
</body>
</html>`,
              language: "html",
              instructions: [
                "Copy the HTML code into a new file and save as 'practice.html'",
                "Open the file in Chrome",
                "Try opening DevTools using F12",
                "Try right-clicking on the button and selecting 'Inspect Element'",
                "Notice how DevTools highlights the selected element"
              ]
            }
          ]
        },
        {
          id: "elements-panel",
          title: "Elements Panel",
          content: `# The Elements Panel

The Elements panel is your gateway to the DOM (Document Object Model). Here you can inspect, modify, and debug HTML structure and CSS styles in real-time.

## Key Features

### DOM Tree Navigation
- Expand/collapse elements using the arrow icons
- Use arrow keys to navigate the tree
- Search for elements with **Ctrl+F**

### Live Editing
- Double-click any text to edit HTML content
- Modify attributes by double-clicking them
- Add new attributes by pressing Tab after the last attribute

### CSS Inspection
- View all applied styles in the Styles pane
- See computed values in the Computed tab
- Identify style conflicts with strikethrough text

## Pro Tips

- **H** key toggles element hiding
- **Delete** key removes selected elements
- **Ctrl+Z** undoes DOM changes`,
          exercises: [
            {
              id: "dom-manipulation",
              title: "DOM Manipulation Practice",
              description: "Learn to edit HTML and CSS live in the browser",
              code: `<!DOCTYPE html>
<html>
<head>
    <style>
        .container {
            padding: 20px;
            margin: 10px;
            background-color: #f0f0f0;
            border-radius: 8px;
        }
        
        .highlight {
            background-color: yellow;
            font-weight: bold;
        }
        
        .hidden {
            display: none;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>DOM Practice Area</h2>
        <p class="text">This is some sample text.</p>
        <button id="toggle-btn">Toggle Visibility</button>
        <div class="hidden" id="secret">Secret content!</div>
    </div>
</body>
</html>`,
              language: "html",
              instructions: [
                "Open this HTML in Chrome and open DevTools",
                "In Elements panel, find the <p> element with class 'text'",
                "Double-click on the text content and change it to 'Modified text!'",
                "Right-click on the <p> element and select 'Edit as HTML'",
                "Add class='highlight' to the <p> element",
                "Find the div with id='secret' and remove the 'hidden' class",
                "Notice how changes appear instantly in the browser"
              ]
            }
          ]
        }
      ]
    },
    {
      id: "debugging",
      title: "JavaScript Debugging",
      icon: "🐛",
      topics: [
        {
          id: "console-basics",
          title: "Console Fundamentals",
          content: `# Console Panel Mastery

The Console is your primary interface for JavaScript debugging and interaction. It's both a REPL (Read-Eval-Print Loop) and a logging destination.

## Console Methods

### Basic Logging
- \`console.log()\` - General logging
- \`console.error()\` - Error messages (red)
- \`console.warn()\` - Warnings (yellow)
- \`console.info()\` - Information (blue)

### Advanced Logging
- \`console.table()\` - Display arrays/objects as tables
- \`console.group()\` - Group related logs
- \`console.time()\` - Performance timing
- \`console.count()\` - Count function calls

### Debugging Helpers
- \`console.trace()\` - Stack trace
- \`console.assert()\` - Conditional logging
- \`console.clear()\` - Clear console

## Console API Tricks

### Object Inspection
Use \`%o\` to get expandable object output:
\`\`\`javascript
console.log('User data: %o', userObject);
\`\`\`

### Styling Console Output
\`\`\`javascript
console.log('%c Styled Text', 'color: blue; font-size: 20px;');
\`\`\``
        },
        {
          id: "breakpoints",
          title: "Setting Breakpoints",
          content: `# Breakpoint Debugging

Breakpoints pause code execution, allowing you to inspect variables, call stack, and step through code line by line.

## Types of Breakpoints

### Line Breakpoints
- Click line numbers in Sources panel
- **F9** to toggle breakpoint on current line
- Blue dot indicates active breakpoint

### Conditional Breakpoints
- Right-click line number → "Add conditional breakpoint"
- Only triggers when condition is true
- Example: \`i > 10\` or \`user.name === 'admin'\`

### DOM Breakpoints
- Right-click element in Elements panel
- Choose: subtree modifications, attribute changes, or node removal
- Pauses when DOM changes occur

### Exception Breakpoints
- Sources panel → Pause on exceptions button
- Can pause on all exceptions or only uncaught ones

## Stepping Through Code

When paused at a breakpoint:
- **F10** - Step over (next line)
- **F11** - Step into (enter functions)
- **Shift+F11** - Step out (exit current function)
- **F8** - Resume execution
- **Ctrl+Shift+F10** - Step to cursor

## Call Stack & Scope

- **Call Stack** shows function execution chain
- **Scope** panel shows variable values
- **Watch** panel for monitoring specific expressions`
        }
      ]
    },
    {
      id: "ai-features",
      title: "AI-Powered DevTools",
      icon: "🤖",
      topics: [
        {
          id: "ai-console",
          title: "AI Console Assistant",
          content: `# AI-Powered Console Features

Chrome DevTools now includes AI assistance to help debug issues, explain errors, and suggest solutions.

## AI Console Integration

### Error Explanation
When JavaScript errors occur, DevTools can now provide:
- Plain English explanations of error messages
- Common causes for the specific error type
- Suggested fixes and debugging steps

### Code Suggestions
The AI can help with:
- Writing console commands
- Generating test data
- Creating debugging scripts
- Explaining complex stack traces

## Using AI Features

### Enabling AI Assistant
1. Open DevTools Settings (F1)
2. Navigate to Experiments tab
3. Enable "AI assistance in Console"
4. Restart DevTools

### AI Commands
- Type natural language questions in console
- Prefix with \`AI:\` for direct AI queries
- Ask about error messages or code behavior

### Example Queries
\`\`\`
AI: Why is my fetch request failing?
AI: How do I debug a memory leak?
AI: Explain this error: TypeError: Cannot read property 'length' of undefined
\`\`\`

## AI-Powered Performance Insights

The AI can analyze:
- Performance bottlenecks
- Memory usage patterns
- Network optimization opportunities
- Bundle size recommendations`
        },
        {
          id: "ai-debugging",
          title: "AI Debugging Assistant",
          content: `# AI-Enhanced Debugging Workflow

The new AI debugging features transform how you approach complex issues by providing intelligent insights and automated analysis.

## Smart Error Analysis

### Automatic Error Context
When errors occur, AI provides:
- Related code analysis
- Variable state explanations
- Potential fix suggestions
- Similar issue patterns

### Call Stack Intelligence
AI can explain:
- Why functions were called in specific order
- Which parameters might be causing issues
- Expected vs actual execution flow

## AI Code Analysis

### Pattern Recognition
The AI assistant can identify:
- Common anti-patterns in your code
- Performance issues
- Security vulnerabilities
- Best practice violations

### Refactoring Suggestions
Get AI recommendations for:
- Code optimization
- Better error handling
- Improved readability
- Modern JavaScript features

## Debugging Workflow with AI

1. **Encounter Error** → AI explains the error type and common causes
2. **Set Breakpoints** → AI suggests optimal breakpoint locations
3. **Inspect Variables** → AI explains unexpected values
4. **Trace Execution** → AI highlights suspicious execution paths
5. **Apply Fixes** → AI validates your solution approach

## Advanced AI Features

### Learning Mode
- AI learns from your debugging patterns
- Provides personalized suggestions
- Adapts to your coding style

### Team Insights
- Share AI debugging sessions
- Collaborative problem solving
- Knowledge base building`
        }
      ]
    },
    {
      id: "performance",
      title: "Performance Analysis",
      icon: "⚡",
      topics: [
        {
          id: "network-panel",
          title: "Network Analysis",
          content: `# Network Performance Optimization

The Network panel helps you analyze loading performance, identify bottlenecks, and optimize resource delivery.

## Network Panel Overview

### Request Information
Each network request shows:
- **Status** - HTTP response code
- **Type** - Resource type (XHR, JS, CSS, IMG, etc.)
- **Initiator** - What triggered the request
- **Size** - Transfer size vs resource size
- **Time** - Request duration
- **Waterfall** - Visual timeline

### Key Metrics
- **DOMContentLoaded** - HTML parsing complete
- **Load** - All resources finished loading
- **Finish** - Last network activity
- **Transfer Size** - Data sent over network
- **Resource Size** - Uncompressed resource size

## Performance Analysis

### Identify Slow Requests
- Sort by Time column to find slowest requests
- Look for requests > 1 second
- Check for failed requests (red status)

### Waterfall Analysis
- Blue line: DOMContentLoaded event
- Red line: Load event
- Stacked bars show request phases:
  - Queueing (light gray)
  - DNS lookup (dark gray)
  - Connecting (orange)
  - Waiting (green)
  - Receiving (blue)

### Common Issues
- **Large bundle sizes** - Split code, lazy load
- **Too many requests** - Bundle resources, use HTTP/2
- **Slow server response** - Optimize backend, use CDN
- **Render blocking** - Async/defer scripts, critical CSS`
        },
        {
          id: "lighthouse",
          title: "Lighthouse Audits",
          content: `# Lighthouse Performance Audits

Lighthouse provides automated auditing for performance, accessibility, best practices, SEO, and Progressive Web App features.

## Running Lighthouse

### In DevTools
1. Open DevTools
2. Navigate to Lighthouse tab
3. Select audit categories
4. Choose device type (Mobile/Desktop)
5. Click "Generate report"

### Audit Categories

#### Performance
- First Contentful Paint (FCP)
- Largest Contentful Paint (LCP)
- Cumulative Layout Shift (CLS)
- Time to Interactive (TTI)
- Total Blocking Time (TBT)

#### Accessibility
- Color contrast ratios
- Keyboard navigation
- Screen reader compatibility
- ARIA implementation

#### Best Practices
- HTTPS usage
- No deprecated APIs
- Console error count
- Security headers

#### SEO
- Meta descriptions
- Title elements
- Mobile-friendly design
- Structured data

## Performance Optimization

### Critical Metrics
- **LCP < 2.5s** - Optimize largest elements
- **FID < 100ms** - Reduce JavaScript execution
- **CLS < 0.1** - Prevent layout shifts

### Common Fixes
- Compress images (WebP format)
- Minify CSS/JavaScript
- Use Content Delivery Network (CDN)
- Enable gzip compression
- Lazy load non-critical resources
- Preload critical resources

### Monitoring Performance
- Set performance budgets
- Regular Lighthouse CI integration
- Real User Monitoring (RUM)
- Synthetic testing in CI/CD`
        }
      ]
    }
  ]
}