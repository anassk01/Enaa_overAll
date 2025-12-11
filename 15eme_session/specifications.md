Based on the code and assets provided in the raw HTML, here is a breakdown of the design specifications you will need to recreate the Calm homepage.

### 1. Typography
The website relies on a specific set of custom fonts defined in the `@font-face` rules.

*   **Primary UI Font (Sans-Serif):** `Figtree`
    *   **Weights:** 300 (Light), 400 (Regular), 500 (Medium), 700 (Bold).
    *   **Usage:** Buttons, navigation, body text, subheadings.
*   **Serif Font (Classic/Elegant):** `Century`
    *   **Style:** Regular, Italic.
    *   **Usage:** likely used for Quotes or testimonials to give a "book" feel.
*   **Display Serif:** `ITC Souvenir`
    *   **Usage:** Headings (e.g., "Stress less.", "Sleep more.").
*   **Display Sans (Bold):** `Neue Plak` (WideBlack)
    *   **Usage:** Heavy impact headers or numbers.

### 2. Color Palette
Calm uses a lot of gradients rather than solid flat colors for their branding elements.

**Primary Brand Gradient (The "Calm" Blue):**
*   **CSS:** `background: linear-gradient(to bottom, #60B4E7, #6461E0);`
*   **Stops:** Light Blue `#60B4E7` $\to$ Purple-Blue `#6461E0`

**Icon Gradients (Extracted from SVGs):**
*   **Teal/Blue (Bandage Icon):** `#75F0F0` $\to$ `#7575F0`
*   **Green/Blue (Universal Icon):** `#75F094` $\to$ `#75B2F0`
*   **Purple/Pink (Moon Icon):** `#9191FF` $\to$ `#F075C7`

**UI Colors:**
*   **White:** `#FFFFFF` (Text on dark backgrounds, card backgrounds).
*   **Off-White/Backgrounds:** `#F2F4F8` (Likely used for section backgrounds like the "Check out our blog" area).
*   **Text (Dark):** `#2D2E2E` (Standard dark text for readability on light backgrounds).
*   **Text (Light Gray):** `#5D5E5E` or `#C6C6C6` (Icons, subtext).
*   **Star Rating Gold:** `#F8D22D`

### 3. Spacing & Layout
*   **Container Width:** Max-width approx `1200px` or `1440px` for main content, centered.
*   **Border Radius:**
    *   **Buttons:** `999px` (Full "Pill" shape).
    *   **Cards/Modals:** `16px` to `24px` (Soft, rounded corners).
*   **Z-Index Layers:**
    *   Hero Image: Background.
    *   Gradient Overlays: On top of images to make text readable.
    *   Text/Buttons: Topmost layer.

### 4. Component Specifications

#### Navigation Bar
*   **Background:** Transparent (initially), turning white or solid on scroll (sticky).
*   **Items:** "Sleep", "Stress & Anxiety", "Mindfulness", etc.
*   **CTA Button:** "Try Calm for Free" (White button with dark text or Brand Gradient button).

#### Hero Section
*   **Background Image:** `jasper-lake.webp` (A serene lake scene).
*   **Overlay:** Slight dark gradient overlay to ensure the white text pops.
*   **Text:** Centered or Left-aligned depending on screen size.
*   **Heading:** Large, white, `Figtree` or `ITC Souvenir`.

#### Feature Grid (The 3 Icons)
*   **Layout:** Flexbox or Grid (3 columns on desktop, 1 on mobile).
*   **Icons:** Large SVG icons using the gradients listed above.
*   **Interaction:** Hover effects likely lift the card slightly or brighten the gradient.

#### Testimonials Carousel
*   **Background:** Gradient background (Purple/Blue).
*   **Content:** White text.
*   **Stars:** 5 yellow SVG stars.
*   **Navigation:** Arrow buttons (Left/Right) circular with transparent background and white borders.

### 5. Assets (Extracted from Code)
You will need to source or create placeholders for these images mentioned in the code:
1.  **Hero Background:** `jasper-lake.7b49d2ef.webp`
2.  **Collage Banner:** `content-tile-collage.ac12f6e5.webp`
3.  **Wave Background:** `blue-wave-bg.webp`
4.  **Blog Thumbnails:** Various images for "Screen time", "ADHD spouse", "Conscious parenting".

### 6. Quick CSS Starter Snippet
Here is some CSS to get your variables set up based on the analysis:

```css
:root {
  /* Fonts */
  --font-primary: 'Figtree', sans-serif;
  --font-serif: 'Century', serif;
  --font-display: 'ITC Souvenir', serif;

  /* Colors */
  --color-white: #ffffff;
  --color-text-dark: #2D2E2E;
  --color-text-subtle: #5D5E5E;
  --color-star: #F8D22D;
  --color-icon-gray: #C6C6C6;

  /* Gradients */
  --grad-brand: linear-gradient(180deg, #60B4E7 0%, #6461E0 100%);
  --grad-teal: linear-gradient(to bottom right, #75F0F0, #7575F0);
  --grad-green: linear-gradient(to bottom right, #75F094, #75B2F0);
  --grad-pink: linear-gradient(to bottom right, #9191FF, #F075C7);

  /* Spacing */
  --radius-pill: 9999px;
  --radius-card: 20px;
  --container-max: 1200px;
}

body {
  font-family: var(--font-primary);
  color: var(--color-text-dark);
  margin: 0;
  padding: 0;
}

.btn-primary {
  background: var(--color-white);
  color: #6461E0; /* Pulling the purple from the brand */
  border-radius: var(--radius-pill);
  padding: 12px 24px;
  font-weight: 600;
  border: none;
  cursor: pointer;
}

.btn-brand {
  background: var(--grad-brand);
  color: var(--color-white);
  border-radius: var(--radius-pill);
  padding: 12px 24px;
  font-weight: 600;
  border: none;
  cursor: pointer;
}
```