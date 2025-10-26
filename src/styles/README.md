# Base UI System

The Base UI system with modular and maintainable architecture.

## Directory Structure

```
scss/
├── main.scss                 # Main file imports everything
├── base/                     # Basic styles
│   ├── _typography.scss      # Font, text styles, line-height
│   └── _layout.scss          # Display, flexbox, positioning
└── utilities/                # Utility classes
    ├── _spacing.scss         # Margin, padding utilities
    ├── _sizing.scss          # Width, height, min/max width
    └── _utilities.scss       # Other utilities (border, cursor, etc.)
```

## Usage

### Import the entire system
```scss
@import 'scss/main';
```

### Import individual parts
```scss
// Import typography only
@import 'scss/base/typography';

// Import layout only
@import 'scss/base/layout';

// Import spacing utilities only
@import 'scss/utilities/spacing';
```

## Main Modules

### 1. Typography (`_typography.scss`)
- Font families and weights
- Font sizes (8px - 80px)
- Line heights
- Text alignment and transform

### 2. Layout (`_layout.scss`)
- Display properties
- Flexbox utilities
- Positioning
- Width/height utilities
- Image utilities

### 3. Spacing (`_spacing.scss`)
- Margin utilities (all directions)
- Padding utilities (all directions)
- Responsive spacing

### 4. Sizing (`_sizing.scss`)
- Min/max width utilities
- Position utilities

### 5. Utilities (`_utilities.scss`)
- Global resets
- Border utilities
- Cursor and interaction
- Background utilities
- Box model utilities