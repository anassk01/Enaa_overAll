# HTML & CSS Mastery Guide
## Build Modern Landing Pages from Scratch

---

## Table of Contents
1. [Foundation Concepts](#foundation-concepts)
2. [Project Structure](#project-structure)
3. [HTML Essentials](#html-essentials)
4. [CSS Essentials](#css-essentials)
5. [Advanced Techniques](#advanced-techniques)
6. [Step-by-Step Build Process](#step-by-step-build-process)
7. [Practice Exercises](#practice-exercises)

---

## Foundation Concepts

### What You Need to Know First

**HTML** = Structure (the skeleton of your page)
**CSS** = Style (the appearance and layout)

Think of it like building a house:
- HTML is the walls, rooms, and doors
- CSS is the paint, furniture, and decoration

---

## Project Structure

### File Organization
```
project-folder/
├── index.html          (Your HTML structure)
├── style.css           (Your CSS styles)
└── images/             (All your images)
    ├── logo.svg
    ├── hero-bg.jpg
    └── ...
```

**Rule:** Always keep HTML and CSS separate. Never mix them together.

---

## HTML Essentials

### 1. Basic HTML Document Structure

Every HTML file needs this skeleton:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Page Title</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Your content goes here -->
</body>
</html>
```

**Key Parts:**
- `<!DOCTYPE html>` - Tells browser this is HTML5
- `<head>` - Contains meta information (not visible on page)
- `<body>` - Contains all visible content
- `<link rel="stylesheet">` - Connects your CSS file

### 2. Essential HTML Tags

**Container Tags:**
```html
<header>     <!-- Top section of page -->
<nav>        <!-- Navigation menu -->
<section>    <!-- Major content section -->
<footer>     <!-- Bottom section of page -->
<div>        <!-- Generic container (use when others don't fit) -->
```

**Content Tags:**
```html
<h1>, <h2>, <h3>    <!-- Headings (h1 is biggest) -->
<p>                  <!-- Paragraph -->
<a href="#">         <!-- Link -->
<img src="...">      <!-- Image -->
<button>             <!-- Button -->
<ul>, <li>           <!-- List (unordered/list items) -->
```

**Special Tags:**
```html
<details>            <!-- Collapsible content -->
<summary>            <!-- Clickable header for details -->
```

### 3. Classes and IDs

**Classes** (reusable, can be used multiple times):
```html
<div class="card">Card 1</div>
<div class="card">Card 2</div>
<div class="card">Card 3</div>
```

**IDs** (unique, use once per page):
```html
<section id="about">About Section</section>
```

**Multiple Classes:**
```html
<button class="btn btn-primary btn-large">Click Me</button>
```

### 4. Semantic HTML

Use meaningful tags instead of divs everywhere:

**Bad:**
```html
<div class="header">
    <div class="nav">...</div>
</div>
```

**Good:**
```html
<header>
    <nav>...</nav>
</header>
```

---

## CSS Essentials

### 1. CSS Variables (Custom Properties)

Define reusable values at the top:

```css
:root {
    --primary-color: #60B4E7;
    --text-dark: #2D2E2E;
    --spacing-large: 80px;
}

/* Use them anywhere */
.header {
    color: var(--text-dark);
    padding: var(--spacing-large);
}
```

**Why?** Change one value, update everywhere instantly.

### 2. CSS Reset

Always start with this to remove browser defaults:

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

### 3. The Box Model

Every element is a box with 4 parts:

```
┌─────────────────────────────┐
│        MARGIN               │
│  ┌─────────────────────┐   │
│  │     BORDER          │   │
│  │  ┌──────────────┐   │   │
│  │  │  PADDING     │   │   │
│  │  │  ┌────────┐  │   │   │
│  │  │  │CONTENT │  │   │   │
│  │  │  └────────┘  │   │   │
│  │  └──────────────┘   │   │
│  └─────────────────────┘   │
└─────────────────────────────┘
```

```css
.box {
    width: 200px;           /* Content width */
    padding: 20px;          /* Space inside border */
    border: 2px solid #000; /* Border line */
    margin: 30px;           /* Space outside border */
}
```

### 4. Display Properties

**Block** (takes full width):
```css
.block-element {
    display: block;  /* h1, p, div by default */
}
```

**Inline** (fits content width):
```css
.inline-element {
    display: inline;  /* span, a by default */
}
```

**Inline-Block** (best of both):
```css
.button {
    display: inline-block;  /* Respects width/height, stays inline */
}
```

### 5. Positioning

**Static** (default, normal flow):
```css
position: static;
```

**Relative** (offset from normal position):
```css
.relative {
    position: relative;
    top: 20px;  /* Moves down 20px from normal spot */
}
```

**Absolute** (positioned relative to parent):
```css
.parent {
    position: relative;  /* Creates reference point */
}
.child {
    position: absolute;
    top: 0;
    right: 0;  /* Sticks to top-right of parent */
}
```

**Fixed** (stays in place when scrolling):
```css
.header {
    position: fixed;
    top: 0;
    width: 100%;  /* Sticky header */
}
```

### 6. Flexbox (One-Dimensional Layout)

Perfect for navigation bars, buttons in a row, centering:

```css
.container {
    display: flex;
    justify-content: space-between;  /* Horizontal alignment */
    align-items: center;             /* Vertical alignment */
    gap: 20px;                       /* Space between items */
}
```

**Common Patterns:**

Center everything:
```css
.center {
    display: flex;
    justify-content: center;
    align-items: center;
}
```

Navigation menu:
```css
.nav {
    display: flex;
    gap: 25px;  /* Space between links */
}
```

Button group:
```css
.button-group {
    display: flex;
    gap: 15px;
}
```

### 7. CSS Grid (Two-Dimensional Layout)

Perfect for card layouts, blog grids, footers:

```css
.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);  /* 3 equal columns */
    gap: 30px;
}
```

**Breakdown:**
- `repeat(3, 1fr)` = 3 columns of equal width
- `1fr` = 1 fraction of available space
- `gap` = space between items

**Responsive Grid:**
```css
/* 3 columns on desktop */
.grid {
    grid-template-columns: repeat(3, 1fr);
}

/* 1 column on mobile */
@media (max-width: 768px) {
    .grid {
        grid-template-columns: 1fr;
    }
}
```

### 8. Colors and Gradients

**Solid Colors:**
```css
color: #2D2E2E;           /* Hex code */
color: rgb(45, 46, 46);   /* RGB */
```

**Gradients:**
```css
background: linear-gradient(180deg, #60B4E7 0%, #6461E0 100%);
/*          direction      start-color   end-color */
```

### 9. Typography

```css
.text {
    font-family: 'Figtree', sans-serif;
    font-size: 1.5rem;      /* Responsive size */
    font-weight: 700;       /* 400=normal, 700=bold */
    line-height: 1.5;       /* Space between lines */
    letter-spacing: -1px;   /* Tighter spacing */
}
```

### 10. Shadows and Effects

**Box Shadow:**
```css
.card {
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    /*         x  y  blur   color */
}
```

**Text Shadow:**
```css
.heading {
    text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
}
```

**Border Radius:**
```css
.rounded {
    border-radius: 12px;        /* Rounded corners */
    border-radius: 9999px;      /* Perfect circle/pill */
}
```

### 11. Transitions and Hover Effects

```css
.button {
    transition: all 0.3s ease;  /* Smooth animation */
}

.button:hover {
    transform: translateY(-2px);  /* Move up 2px */
    box-shadow: 0 6px 20px rgba(0,0,0,0.2);
}
```

### 12. Responsive Design

Use media queries to adapt to screen sizes:

```css
/* Desktop styles (default) */
.grid {
    grid-template-columns: repeat(3, 1fr);
}

/* Tablet */
@media (max-width: 1024px) {
    .grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* Mobile */
@media (max-width: 768px) {
    .grid {
        grid-template-columns: 1fr;
    }
}
```

---

## Advanced Techniques

### 1. Container Pattern

Always wrap content in a centered container:

```css
.container {
    max-width: 1200px;    /* Maximum width */
    margin: 0 auto;       /* Center horizontally */
    padding: 0 20px;      /* Side padding for mobile */
}
```

### 2. Hero Section with Overlay

```html
<section class="hero" style="background-image: url('hero.jpg');">
    <div class="hero-overlay"></div>
    <div class="hero-content">
        <h1>Your Title</h1>
    </div>
</section>
```

```css
.hero {
    height: 90vh;
    background-size: cover;
    background-position: center;
    position: relative;
}

.hero-overlay {
    position: absolute;
    inset: 0;  /* Covers entire hero */
    background: linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(255,255,255,0.9));
    z-index: 1;
}

.hero-content {
    position: relative;
    z-index: 2;  /* Above overlay */
}
```

### 3. Card Component Pattern

```html
<div class="card">
    <div class="icon-wrapper">
        <svg>...</svg>
    </div>
    <h3>Title</h3>
    <p>Description</p>
    <a href="#">Learn More</a>
</div>
```

```css
.card {
    background: white;
    padding: 40px;
    border-radius: 20px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.icon-wrapper {
    width: 72px;
    height: 72px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #E6F8FF, #F0F0FF);
}
```

### 4. Sticky Header

```css
header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;           /* Always on top */
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
}

/* Add margin to first section so header doesn't cover content */
.hero {
    margin-top: 80px;  /* Height of header */
}
```

### 5. Button Styles

```css
.btn {
    display: inline-block;
    padding: 14px 28px;
    border-radius: 9999px;    /* Pill shape */
    font-weight: 700;
    text-align: center;
    cursor: pointer;
    border: none;
    transition: all 0.3s ease;
}

.btn-primary {
    background: linear-gradient(180deg, #60B4E7, #6461E0);
    color: white;
    box-shadow: 0 4px 12px rgba(100, 97, 224, 0.3);
}

.btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0,0,0,0.2);
}
```

### 6. Collapsible FAQ with `<details>`

```html
<details>
    <summary>What is meditation?</summary>
    <p>Meditation is a practice where you focus your mind...</p>
</details>
```

```css
details {
    border-bottom: 1px solid #e0e0e0;
    padding: 20px 0;
    cursor: pointer;
}

summary {
    list-style: none;
    font-weight: 600;
    display: flex;
    justify-content: space-between;
}

/* Hide default arrow */
summary::-webkit-details-marker {
    display: none;
}

/* Add custom + icon */
summary::after {
    content: '+';
    font-size: 1.5rem;
    color: #60B4E7;
}

/* Change to - when open */
details[open] summary::after {
    content: '-';
}
```

---

## Step-by-Step Build Process

### Phase 1: HTML Structure (30 minutes)

**Step 1:** Create basic HTML skeleton
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Landing Page</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Start building here -->
</body>
</html>
```

**Step 2:** Add header section
```html
<header>
    <div class="container header-container">
        <div class="logo">
            <a href="#">Logo</a>
        </div>
        <nav>
            <ul>
                <li><a href="#">Link 1</a></li>
                <li><a href="#">Link 2</a></li>
                <li><a href="#">Link 3</a></li>
            </ul>
            <a href="#" class="btn btn-primary">Sign Up</a>
        </nav>
    </div>
</header>
```

**Step 3:** Add hero section
```html
<section class="hero">
    <div class="hero-overlay"></div>
    <div class="hero-content">
        <h1>Main Headline</h1>
        <p>Subtitle text</p>
        <div class="hero-buttons">
            <a href="#" class="btn btn-primary">Get Started</a>
            <a href="#" class="btn btn-secondary">Learn More</a>
        </div>
    </div>
</section>
```

**Step 4:** Add services grid
```html
<section class="services container">
    <h2 class="section-title">Our Services</h2>
    <div class="services-grid">
        <div class="service-card">
            <div class="icon-wrapper">🎯</div>
            <h3>Service 1</h3>
            <p>Description here</p>
            <a href="#">Learn More</a>
        </div>
        <!-- Repeat for 2 more cards -->
    </div>
</section>
```

**Step 5:** Add footer
```html
<footer>
    <div class="container footer-grid">
        <div class="footer-col">
            <h4>Column 1</h4>
            <ul>
                <li><a href="#">Link</a></li>
            </ul>
        </div>
        <!-- Repeat for more columns -->
    </div>
</footer>
```

### Phase 2: CSS Reset & Variables (15 minutes)

```css
/* RESET */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* VARIABLES */
:root {
    --primary-blue: #60B4E7;
    --primary-purple: #6461E0;
    --dark-text: #2D2E2E;
    --light-text: #5D5E5E;
    --bg-light: #F2F4F8;
    --white: #FFFFFF;

    --container-max: 1200px;
    --radius-pill: 9999px;
    --radius-card: 20px;
}

/* GLOBAL STYLES */
body {
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    color: var(--dark-text);
    line-height: 1.5;
}

a {
    text-decoration: none;
    color: inherit;
}

ul {
    list-style: none;
}

.container {
    max-width: var(--container-max);
    margin: 0 auto;
    padding: 0 20px;
}
```

### Phase 3: Header Styling (20 minutes)

```css
header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    padding: 20px 0;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

.header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

nav {
    display: flex;
    align-items: center;
    gap: 20px;
}

nav ul {
    display: flex;
    gap: 25px;
}

nav a {
    font-weight: 600;
}
```

### Phase 4: Hero Section (25 minutes)

```css
.hero {
    height: 90vh;
    min-height: 600px;
    background-size: cover;
    background-position: center;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 80px;  /* Header height */
}

.hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom,
        rgba(0,0,0,0.2) 0%,
        rgba(255,255,255,0.8) 100%);
    z-index: 1;
}

.hero-content {
    position: relative;
    z-index: 2;
    max-width: 800px;
}

.hero h1 {
    font-size: 3.5rem;
    font-weight: 800;
    margin-bottom: 1rem;
}

.hero p {
    font-size: 1.25rem;
    margin-bottom: 2rem;
}

.hero-buttons {
    display: flex;
    gap: 15px;
    justify-content: center;
}
```

### Phase 5: Button Styles (15 minutes)

```css
.btn {
    display: inline-block;
    padding: 14px 28px;
    border-radius: var(--radius-pill);
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease;
    border: none;
}

.btn-primary {
    background: linear-gradient(180deg, var(--primary-blue), var(--primary-purple));
    color: white;
    box-shadow: 0 4px 12px rgba(100, 97, 224, 0.3);
}

.btn-secondary {
    background: white;
    color: var(--dark-text);
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0,0,0,0.2);
}
```

### Phase 6: Grid Layouts (30 minutes)

```css
.services-grid,
.testimonials-grid,
.blog-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
}

.service-card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
}

.icon-wrapper {
    width: 72px;
    height: 72px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #E6F8FF, #F0F0FF);
    margin-bottom: 20px;
}
```

### Phase 7: Responsive Design (20 minutes)

```css
/* Tablet */
@media (max-width: 1024px) {
    .hero h1 {
        font-size: 2.8rem;
    }

    .services-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* Mobile */
@media (max-width: 768px) {
    nav {
        display: none;  /* Hide on mobile */
    }

    .hero h1 {
        font-size: 2rem;
    }

    .hero-buttons {
        flex-direction: column;
    }

    .services-grid,
    .testimonials-grid,
    .blog-grid {
        grid-template-columns: 1fr;
    }
}
```

---

## Practice Exercises

### Exercise 1: Build a Simple Header
Create a header with:
- Logo on left
- Navigation links in center
- Sign up button on right
- Make it sticky

### Exercise 2: Create a Card Grid
Build 3 cards in a row showing:
- Icon at top
- Title
- Description
- "Learn More" link

### Exercise 3: Hero Section
Create a hero with:
- Background image
- Dark overlay
- Centered text
- Two buttons side by side

### Exercise 4: Make it Responsive
Take your card grid and make it:
- 3 columns on desktop (>1024px)
- 2 columns on tablet (768px-1024px)
- 1 column on mobile (<768px)

### Exercise 5: Add Hover Effects
Add to your cards:
- Smooth transition
- Move up 2px on hover
- Increase shadow on hover

---

## Key Takeaways

### HTML Best Practices:
1. Use semantic tags (`<header>`, `<section>`, `<footer>`)
2. Use classes for styling, IDs for unique elements
3. Keep structure logical and nested properly
4. Add meaningful class names (`.hero`, `.service-card`)

### CSS Best Practices:
1. Start with CSS reset
2. Use CSS variables for colors and spacing
3. Build mobile-first, then add desktop styles
4. Use flexbox for one-dimensional layouts
5. Use grid for two-dimensional layouts
6. Add transitions for smooth interactions

### Common Patterns:
1. **Container:** Max-width + centered content
2. **Grid:** `display: grid` + `grid-template-columns`
3. **Flexbox:** `display: flex` + `justify-content` + `align-items`
4. **Card:** Padding + border-radius + box-shadow
5. **Overlay:** Absolute position + gradient background

### Debugging Tips:
1. Use browser DevTools (F12) to inspect elements
2. Add temporary borders to see element sizes: `border: 1px solid red;`
3. Check console for errors
4. Test in different screen sizes
5. Validate HTML at validator.w3.org

---

## Final Project Checklist

When building a landing page, follow this order:

- [ ] Create HTML structure with all sections
- [ ] Add CSS reset and variables
- [ ] Style header (make it sticky)
- [ ] Style hero section with background
- [ ] Create grid layouts for cards
- [ ] Add button styles
- [ ] Style footer
- [ ] Add hover effects and transitions
- [ ] Make it responsive
- [ ] Test on different devices
- [ ] Optimize images

---

## Next Steps

After mastering this guide:
1. Build 3 different landing pages from scratch
2. Learn JavaScript to add interactivity
3. Study CSS animations
4. Learn CSS preprocessors (SASS)
5. Explore CSS frameworks (Tailwind, Bootstrap)

---

**Remember:** The best way to learn is by building. Start with simple projects and gradually increase complexity. Don't try to memorize everything - reference this guide as needed!

**Good luck building!**
