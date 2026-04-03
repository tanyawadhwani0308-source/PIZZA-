# Design System Strategy: The Artisanal Editorial

## 1. Overview & Creative North Star

### The Creative North Star: "The Heritage Curator"
This design system rejects the clinical coldness of modern SaaS in favor of a "Heritage Curator" aesthetic. It is designed to feel like a high-end, hand-bound Italian culinary journal—tactile, sophisticated, and deeply intentional. We move beyond the "template" look by utilizing organic asymmetry, overlapping layers, and a "paper-on-paper" depth strategy.

**Key Tenets:**
* **Intentional Asymmetry:** Avoid perfect grid alignments. Allow images to break container boundaries and typography to overlap decorative elements to create a bespoke, editorial feel.
* **Tactile Depth:** Instead of digital shadows, we use "tonal layering" to suggest physical materials stacked upon one another.
* **Organic Craft:** Every corner is softened (using our Roundedness Scale), mimicking the natural wear of artisanal parchment and smoothed olive wood.

---

## 2. Colors

The palette is a sophisticated dialogue between earthy heritage tones and sun-drenched neutrals.

* **Primary (Sage Heritage):** `#485422` (Primary) and `#606c38` (Primary Container). Used for grounding elements, main backgrounds, and sophisticated call-to-actions.
* **Secondary (Golden Olive):** `#924c00`. Used sparingly for highlighting artisanal details and secondary buttons.
* **Tertiary (Terracotta Red):** `#902b19`. Our "Flavor" accent. Reserved for high-importance semantic actions or subtle decorative flourishes (like the 'Benvenuto' spirit).
* **Neutral (Parchment & Cream):** `#fff8f0` (Surface/Background). This is our canvas.

### The "No-Line" Rule
**Strict Directive:** 1px solid borders are prohibited for sectioning. Structural boundaries must be defined solely through background color shifts.
* *Example:* A `surface-container-low` (`#fcf3e1`) section should sit directly against a `surface` (`#fff8f0`) background to create a soft, sophisticated transition without the "boxed-in" feel of a wireframe.

### Surface Hierarchy & Nesting
Treat the UI as physical layers of fine paper.
* **Base:** `surface` (#fff8f0).
* **Nested Content:** Use `surface-container` tiers to create depth. A card (`surface-container-lowest`) sitting on a section background (`surface-container-low`) creates a natural, "lifted" feel.

### The "Glass & Gradient" Rule
To elevate the "out-of-the-box" feel, use **Glassmorphism** for floating navigation or overlays. Apply a semi-transparent version of `surface` with a heavy backdrop-blur. For main CTAs, use a subtle radial gradient transitioning from `primary` to `primary_container` to give the button a "soul" and three-dimensional richness.

---

## 3. Typography

The typographic soul of this system lies in the contrast between the storied past and the functional present.

* **Display & Headline (Noto Serif):** These are our "Artisanal" marks. Use `display-lg` (3.5rem) for hero statements. The serif evokes the elegance of Italian stone-carved lettering and vintage menu headers.
* **Title & Body (Plus Jakarta Sans):** Our "Functional" engine. Clean, highly readable, and modern. Use `body-lg` (1rem) for storytelling and `body-md` (0.875rem) for technical details.
* **The Hierarchy Narrative:** Headlines should always feel like titles in a book—spaced generously (using our `Spacing 8` or `10`) to let the letterforms breathe.

---

## 4. Elevation & Depth

We eschew "Material" shadows in favor of **Tonal Layering**.

* **The Layering Principle:** Depth is achieved by stacking. Place a `surface_container_highest` element over a `surface` background to indicate the highest level of focal importance.
* **Ambient Shadows:** If a floating element (like a modal) is required, use an extra-diffused shadow: `box-shadow: 0 20px 40px rgba(52, 48, 36, 0.06)`. The color is a tint of our `on_surface` (#1f1b10), never a pure black.
* **The "Ghost Border" Fallback:** If accessibility requires a border, use the `outline_variant` (#c7c8b9) at **15% opacity**. It should be felt, not seen.
* **Visual Soul:** Incorporate subtle linen or parchment textures as background-images with `opacity: 0.03` to break the digital flatness of the hex codes.

---

## 5. Components

### Buttons
* **Primary:** Background: `primary` (#485422); Text: `on_primary` (#ffffff). Shape: `full` (pill) or `xl` (1.5rem).
* **Secondary:** Background: `surface_container_high`; Text: `primary`.
* **Tertiary:** Text: `secondary` (#924c00) with an icon. No background.

### Input Fields
* **Style:** Minimalist "Underline" or "Soft Surface." Avoid heavy boxes.
* **Surface:** Use `surface_container_low` with a `sm` (0.25rem) radius.
* **Focus:** Transition the background to `surface_container_highest` and change the label color to `primary`.

### Cards & Lists
* **Strict Forbid:** No divider lines.
* **Implementation:** Use `Spacing 4` (1.4rem) or `Spacing 5` (1.7rem) to create separation. Content clusters should be grouped by a subtle background shift to `surface_container_lowest`.
* **Imagery:** All images within cards should use `lg` (1rem) rounded corners to maintain the soft, organic feel.

### Artisanal Flourishes (Custom Components)
* **The "Seal" Chip:** A high-contrast circular element using `tertiary` (#902b19) to highlight "New" or "Handcrafted" items.
* **The Heritage Divider:** Instead of a line, use a wide spacing gap with a single centered decorative element (e.g., a small leaf icon or an "est. date" label).

---

## 6. Do's and Don'ts

### Do
* **Do** use asymmetrical layouts where images overlap background color blocks.
* **Do** embrace white space. If a layout feels "crowded," double the spacing using the `Spacing 16` (5.5rem) or `Spacing 20` (7rem) tokens.
* **Do** use `notoSerif` for numbers in price lists or dates to add a touch of sophistication.

### Don't
* **Don't** use pure black (#000000) for text. Use `on_surface` (#1f1b10) to maintain the warmth of the parchment.
* **Don't** use 90-degree sharp corners. Everything must have a minimum of `sm` (0.25rem) roundedness.
* **Don't** use "Default" drop shadows. If it doesn't look like ambient natural light, remove it.
* **Don't** use horizontal rules (`<hr>`). Use color blocking or white space to separate thoughts.
