# Layout System Guide

## Overview

This guide documents the standardized layout and spacing system implemented for The Energy Planet website. The system provides consistent spacing, alignment, and responsive behavior across all components and pages.

## Spacing System

### CSS Custom Properties

The spacing system uses CSS custom properties (variables) for consistent spacing throughout the application:

```css
:root {
  /* Base spacing units */
  --spacing-xs: 0.5rem;    /* 8px */
  --spacing-sm: 1rem;      /* 16px */
  --spacing-md: 1.5rem;    /* 24px */
  --spacing-lg: 2rem;      /* 32px */
  --spacing-xl: 3rem;      /* 48px */
  --spacing-2xl: 4rem;     /* 64px */
  --spacing-3xl: 6rem;     /* 96px */
  
  /* Layout-specific spacing */
  --section-spacing: var(--spacing-xl);
  --component-spacing: var(--spacing-lg);
  --element-spacing: var(--spacing-md);
  
  /* Container system */
  --max-width: 1280px;
  --container-padding: var(--spacing-md);
}
```

### Responsive Spacing

The spacing system automatically adjusts for different screen sizes:

- **Mobile (< 640px)**: Reduced spacing for compact layouts
- **Tablet (641px - 1024px)**: Standard spacing
- **Desktop (> 1025px)**: Increased spacing for better visual hierarchy

## Z-Index Management

### Z-Index Scale

A systematic z-index scale prevents overlapping issues:

```css
.z-dropdown { z-index: 1000; }
.z-sticky { z-index: 1020; }
.z-fixed { z-index: 1030; }
.z-modal-backdrop { z-index: 1040; }
.z-modal { z-index: 1050; }
.z-popover { z-index: 1060; }
.z-tooltip { z-index: 1070; }
.z-toast { z-index: 1080; }
```

### Usage Guidelines

- Use the predefined z-index classes instead of arbitrary values
- Navbar should use `.z-fixed` (1030)
- Modals should use `.z-modal` (1050)
- Tooltips should use `.z-tooltip` (1070)

## Layout Utilities

### Container Classes

```css
.page-container          /* Standard page container with responsive padding */
.container-responsive    /* Responsive container with CSS variables */
.container-sm           /* Small container (640px max) */
.container-md           /* Medium container (768px max) */
.container-lg           /* Large container (1024px max) */
.container-xl           /* Extra large container (1280px max) */
.container-2xl          /* 2X large container (1536px max) */
```

### Section Spacing

```css
.section-padding        /* Standard section padding */
.section-padding-sm     /* Small section padding */
.section-padding-lg     /* Large section padding */
.section-separator      /* Section with top/bottom padding */
.section-gap           /* Bottom margin for section separation */
.component-gap         /* Bottom margin for component separation */
```

### Alignment Utilities

```css
.content-center        /* Center-aligned content */
.content-left          /* Left-aligned content */
.content-right         /* Right-aligned content */
.layout-safe           /* Prevents layout issues with isolation */
.section-clear         /* Clears floats and prevents overlaps */
```

## Cursor Pointer System

### Interactive Elements

All interactive elements should use the cursor pointer utilities:

```css
.cursor-pointer        /* Pointer cursor for clickable elements */
.cursor-default        /* Default cursor */
```

### Navigation Enhancement

```css
.nav-item {
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  position: relative;
}

.nav-item:hover {
  opacity: 0.8;
  transform: translateY(-1px);
}
```

## Responsive Design

### Breakpoints

```css
--breakpoint-sm: 640px;
--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
--breakpoint-xl: 1280px;
--breakpoint-2xl: 1536px;
```

### Responsive Utilities

```css
.mobile-only          /* Visible only on mobile */
.tablet-up           /* Visible on tablet and up */
.desktop-only        /* Visible only on desktop */
.mobile-tablet       /* Visible on mobile and tablet */
```

## Implementation Examples

### Basic Page Structure

```jsx
export default function Page() {
  return (
    <div className="layout-safe">
      <section className="section-padding">
        <div className="page-container">
          <div className="space-content">
            <h1>Page Title</h1>
            <p>Page content...</p>
          </div>
        </div>
      </section>
    </div>
  );
}
```

### Navigation with Cursor Pointers

```jsx
export default function Navbar() {
  return (
    <nav className="z-fixed">
      <div className="page-container">
        <div className="flex items-center justify-between">
          <div className="cursor-pointer nav-item">
            <Logo />
          </div>
          <div className="flex space-x-4">
            <a href="/about" className="cursor-pointer nav-item">
              About
            </a>
            <a href="/contact" className="cursor-pointer nav-item">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
```

### Component with Proper Spacing

```jsx
export default function Card() {
  return (
    <div className="card-hover component-gap">
      <div className="card-padding">
        <div className="space-elements">
          <h3>Card Title</h3>
          <p>Card content...</p>
          <button className="cursor-pointer btn-primary">
            Action
          </button>
        </div>
      </div>
    </div>
  );
}
```

## Best Practices

### Do's

✅ Use the predefined spacing variables instead of arbitrary values
✅ Apply cursor pointer to all interactive elements
✅ Use the z-index scale for layering
✅ Implement responsive spacing with the provided utilities
✅ Use `.layout-safe` for components that might have positioning issues

### Don'ts

❌ Don't use arbitrary z-index values
❌ Don't forget cursor pointers on interactive elements
❌ Don't use fixed pixel values for spacing
❌ Don't create overlapping components without proper z-index management
❌ Don't ignore responsive spacing requirements

## Accessibility Considerations

### Focus Management

```css
.focus-responsive {
  @apply focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2;
}
```

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  .nav-item,
  .animate-fade-in-up,
  .animate-pulse-glow {
    animation: none;
    transition: none;
  }
}
```

### Touch Targets

Ensure all interactive elements meet minimum touch target sizes:
- Minimum 44px × 44px for touch targets
- Use padding to increase touch area if needed

## Troubleshooting

### Common Issues

1. **Components Overlapping**
   - Solution: Use `.layout-safe` and proper z-index classes

2. **Inconsistent Spacing**
   - Solution: Use spacing variables instead of arbitrary values

3. **Missing Cursor Pointers**
   - Solution: Add `.cursor-pointer` to all interactive elements

4. **Responsive Issues**
   - Solution: Test at all breakpoints and use responsive utilities

### Debug Tools

Use browser dev tools to inspect:
- CSS custom properties values
- Z-index stacking context
- Responsive behavior at different screen sizes
- Touch target sizes on mobile devices

## Migration Guide

### Updating Existing Components

1. Replace arbitrary spacing with spacing variables
2. Add cursor pointer classes to interactive elements
3. Update z-index values to use the systematic scale
4. Test responsive behavior and adjust as needed

### Example Migration

**Before:**
```jsx
<div style={{ padding: '20px', zIndex: 999 }}>
  <button style={{ cursor: 'default' }}>Click me</button>
</div>
```

**After:**
```jsx
<div className="section-padding z-modal">
  <button className="cursor-pointer btn-primary">Click me</button>
</div>
```

This layout system ensures consistent, accessible, and maintainable styling across the entire application.