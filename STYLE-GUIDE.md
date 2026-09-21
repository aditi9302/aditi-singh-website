# Website style guide

The approved editorial design is serious, restrained, and light by default. The source of truth is `assets/styles.css` and `assets/components.css`.

## Palette

| Role | Light | Dark |
| --- | --- | --- |
| Background | `#ffffff` | `#17120d` |
| Main text | `#292624` | `#e9ddc5` |
| Secondary text | `#655e57` | `#c2b291` |
| Accent | `#773d40` | `#c5a35c` |
| Hairline | `#dcd5cb` | `#3a2f1f` |
| Panels | `#ffffff` | `#1f1810` |

Light backgrounds are pure white without parchment, stains, or textures. Dark mode uses subtle espresso gradients and the original antique-gold accents.

## Typography and layout

- Source Serif 4 for body copy, name, page titles, paper titles, and courses; DM Sans for navigation, labels, and buttons.
- Small portrait: 120 by 150 pixels on desktop, reduced on mobile.
- Page titles use one font and color, without split italic words or descriptive subheadings.
- Main container: maximum width 1080 pixels, with responsive margins.
- Navigation: Home, Research, Policy, Teaching, CV.

## Research and policy

- Paper and course titles: 18 pixels, weight 500. Section labels: 18 pixels on desktop, 16 on mobile. Page titles: 48 pixels on desktop, 40 on mobile.
- Coauthors: 14 pixels; upright on Research and Policy, italic in the homepage selection.
- Entries have thin left borders that change color on hover and keyboard focus.
- Title links change to the accent color on hover, without underlines.
- SSRN and working-paper links are outlined buttons. Under Review is plain italic text.
- Abstracts use native disclosure controls with plus/minus indicators.
- Policy projects have their own page; academic research remains on Research.
- Selected Research shows Hand-to-Mouth Households first, then Household Expectations.

## Teaching and contact

- Role badges and semesters share a left column; course titles and “with …” share a right column. Columns stack on mobile.
- No dot separates semesters and co-instructor text.
- Preserve outlined teaching-evaluation links and hover colors.
- Contact contains only emails and social icons. The footer contains only the copyright line. Research interests uses the About heading and body text styles.
- LinkedIn, X, and GitHub use small SVG icons with accessible names.

## Theme behavior

New visitors start in light mode. An explicit selection persists across visits and pages through `aditi-editorial-theme` in localStorage. The toggle updates its accessible label and favicon. Preserve keyboard focus indicators and reduced-motion behavior.
