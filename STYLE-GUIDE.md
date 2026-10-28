# Website style guide

The approved editorial design is serious, restrained, and light by default. The source of truth is `assets/styles.css` and `assets/components.css`.

## Palette

| Role | Light | Dark |
| --- | --- | --- |
| Background | `#fdfbf8` | `#17120d` |
| Main text | `#302923` | `#e9ddc5` |
| Secondary text | `#706458` | `#c2b291` |
| Accent | `#8b3443` | `#c5a35c` |
| Hairline | `#ded2c3` | `#3a2f1f` |
| Panels | `#f5eee6` | `#1f1810` |

Light mode uses the burgundy and ivory palette approved on 2026-10-28 across Home, Research, Policy, and Teaching. Backgrounds are solid ivory without textures. Dark mode uses subtle espresso gradients and the original antique-gold accents.

## Typography and layout

- Source Serif 4 for body copy, name, page titles, paper titles, and courses; DM Sans for navigation, labels, and buttons.
- Portrait: 176 pixels wide on desktop and tablet, 100 pixels on mobile, with its original proportions and colors. Vertically center the portrait beside the name and title; use an 18-pixel gap on mobile. The introduction has 44-pixel vertical padding on desktop and 32 pixels on mobile.
- Page titles use one font and color, without split italic words or descriptive subheadings.
- Main container: maximum width 1080 pixels, with responsive margins.
- Navigation: Home, Research, Policy, Teaching, CV. Use 16px DM Sans; the CV label has no arrow. The theme toggle displays only its icon and retains an accessible label describing its action.

## Research and policy

- Paper and course titles: 18 pixels, weight 500. Section labels: 18 pixels on desktop, 16 on mobile. Page titles: 48 pixels on desktop, 40 on mobile.
- Coauthors: 14 pixels; upright on Research and Policy, italic in the homepage selection.
- Entries have thin left borders that change color on hover and keyboard focus.
- Title links change to the accent color on hover, without underlines.
- SSRN and working-paper links are outlined buttons. Under Review is plain italic text.
- Abstracts use native disclosure controls with plus/minus indicators.
- Policy projects have their own page; academic research remains on Research.
- Selected Research shows "When is Wealth Liquid? Gold and Household Financial Constraints in India" first, then "What Determines Household Expectations?".
- Homepage typography follows the approved burgundy and ivory option: the name is 52px in the accent color (28–40px on mobile, scaling with screen width); the position is 18px (16px on mobile). Section headings and All Research are 15px uppercase DM Sans, weight 600, with .13em letter-spacing in the accent color. Selected paper titles are 18px, weight 500; upright coauthor lines are 14px. About and Research interests body text is 16px with 1.8 line-height. Biography paragraphs align left on mobile.
- Selected Research has no line beneath its heading or vertical paper borders; its entries align with the section heading. Research and Policy keep their vertical borders.

## Teaching and contact

- Role badges and semesters share a left column; course titles and “with …” share a right column. Columns stack on mobile.
- No dot separates semesters and co-instructor text.
- Preserve outlined teaching-evaluation links and hover colors.
- Contact contains only emails and social icons. The footer contains only the copyright line. Research interests uses the About heading and body text styles.
- LinkedIn, X, and GitHub use small SVG icons with accessible names.

## Theme behavior

New visitors start in light mode. An explicit selection persists across visits and pages through `aditi-editorial-theme` in localStorage. The toggle updates its accessible label and favicon. Preserve keyboard focus indicators and reduced-motion behavior.
