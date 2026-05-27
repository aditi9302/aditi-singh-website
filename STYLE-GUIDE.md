# aditi-singh.com — Style Guide

A reference for keeping any future document — CV, research statement, paper, syllabus, slides, web page — visually consistent with the personal website at [www.aditi-singh.com](https://www.aditi-singh.com).

> **Hand this file to an AI assistant (or anyone) before they design a new document.** It captures the entire visual system in one place: palette, typography, components, spacing, and ready-to-use LaTeX / CSS recipes.

---

## 1. Aesthetic / identity

**Dark academia, scholarly, antiquarian.** Think old library, leather-bound books, parchment under lamplight, restrained antique gold. The tone is quiet and considered — never decorative or loud.

Two interchangeable modes:

- **Dark mode** (default on the web): espresso background, warm parchment text, antique-gold accents.
- **Light mode** (also used for printed documents): warm parchment background — *white paper* for actual printing — with dark sepia ink text and a deeper antique gold for accents.

For documents that will be printed or read on white paper, use the **light-mode palette on a white sheet** (don't tint the background).

---

## 2. Colour palette

Token names match the CSS variables in the source. **Never introduce a third hue.** No saturated reds, blues, or greens.

### Dark mode

| Token | Hex | Role |
| --- | --- | --- |
| `bg` | `#17120d` | page background |
| `bg-2` | `#1f1810` | panels (research band, contact card) |
| `bg-3` | `#261d14` | cards inside panels |
| `paper` | `#e9ddc5` | main text |
| `paper-dim` | `#c2b291` | secondary text |
| `muted` | `#8c7c60` | tertiary text / dates |
| `gold` | `#c5a35c` | accents, links, section labels |
| `gold-soft` | `#9d7f45` | borders, hairline rules, decorative numerals |
| `line` | `#3a2f1f` | very subtle hairlines |
| `oxblood` | `#7d3a33` | reserved alert/accent (use sparingly) |

### Light mode (and print)

| Token | Hex | Role |
| --- | --- | --- |
| `bg` | `#f0e7d3` (web) / `#ffffff` (print) | page background |
| `bg-2` | `#e9dcc1` | panels |
| `bg-3` | `#e3d5b6` | cards |
| `paper` | `#2e2417` | main text |
| `paper-dim` | `#5f5236` | secondary text |
| `muted` | `#8a785a` (web) / `#6b5e45` (print) | tertiary / dates |
| `gold` | `#876722` | accents, links, section labels |
| `gold-soft` | `#a9883f` | borders, rules |
| `line` | `#cdbd97` | very subtle hairlines |

**Rules of thumb**

- Most ink is just `paper` (text colour). Gold is for *accents* — section labels, links, hovers, a few rules — used sparingly.
- Pair `gold` with `gold-soft` for hairline rules and decorative borders.
- Borders should be **thin** (0.4–1 px) and in `gold-soft`, not heavy black.

---

## 3. Typography

Two type families carry the whole system:

| Family | Where | Weights used |
| --- | --- | --- |
| **Cormorant Garamond** | display sizes — site name, page titles, hero name, paper/contact-card titles, drop caps | 500 regular, 600 bold; **italic 500/600 for emphasis** |
| **EB Garamond** | body, captions, lists, small-caps labels, buttons | 400 regular, 600 bold; 400 italic |

### Loading the fonts

**Web (Google Fonts):**

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400&display=swap" rel="stylesheet">
```

**LaTeX:** `\usepackage{ebgaramond}` covers both faces visually (italic EB Garamond stands in cleanly for Cormorant in document contexts). Compiles with pdfLaTeX or XeLaTeX.

### Size / weight patterns

- **Document title / name:** Cormorant Garamond, 500–600, very large (`clamp(48px, 7vw, 88–104px)` on web; 26–28 pt in LaTeX with small caps + letter-spacing ≈ 0.14). Use *italic + gold* for the surname or one emphasised word.
- **Eyebrow** (small label above a title): EB Garamond, 600, uppercase, **0.30–0.34 em** letter-spacing, in `gold`. Optional thin gold rules flanking it.
- **Section label** (e.g., `RESEARCH`, `EDUCATION`): EB Garamond, 600, uppercase, **0.30 em** letter-spacing, `gold`, followed by a thin `gold-soft` hairline rule extending across the column.
- **Body:** EB Garamond, 400, ≈ 1.04 rem on web / 11 pt in print, **line-height ≈ 1.78**.
- **Long-form display paragraph** (e.g., bio): Cormorant Garamond, 1.22–1.40 rem, line-height ≈ 1.85.
- **Drop cap** (use once, only on the first paragraph of a bio/statement): Cormorant Garamond 600, ≈ 3.4× the body, in `gold`, floated.
- **Captions / dates / meta:** EB Garamond, italic 400, `muted` colour.

### Letter-spacing rules

- Small uppercase labels: **0.18–0.34 em** depending on size — smaller text = tighter, larger = airier.
- Display caps (the document title): subtle ≈ 0.04 em, or none if you use small caps.
- Body text: **default** (no manual tracking).

---

## 4. Section headers & dividers

The site uses one consistent header pattern — **mirror it in every document**:

> `[SMALL UPPERCASE GOLD LABEL]` followed by a **thin `gold-soft` hairline** running to the column edge.

**CSS:**

```css
.section-header { display: flex; align-items: center; gap: 22px; margin-bottom: 56px; }
.section-label  { font-size: .7rem; font-weight: 600; letter-spacing: .30em;
                  text-transform: uppercase; color: var(--gold); white-space: nowrap; }
.section-rule   { flex: 1; height: 1px; background: var(--line); }
```

**LaTeX (with `titlesec`):**

```latex
\newcommand{\secfmt}[1]{\textls[180]{\MakeUppercase{#1}}}
\titleformat{\section}
  {\normalfont\footnotesize\bfseries\color{gold}}{}{0pt}{\secfmt}
  [{\vspace{2.5pt}{\color{goldsoft}\titlerule[0.6pt]}}]
\titlespacing*{\section}{0pt}{17pt}{7pt}
```

Other rule patterns: a short centred 46–60 pt `gold-soft` rule under the document title; a full-width 0.4 pt `gold-soft` rule under the contact block; never heavy black borders or boxed sections.

---

## 5. Components

- **Name treatment.** Display Cormorant Garamond; render the surname *italic + gold*. Optionally letter-space the whole name when set in small caps.
- **Tags / pills.** Small uppercase EB Garamond text, 0.18 em tracking, 7–10 px padding, **1 px `gold-soft` border**. Hover: border + text brighten to full `gold`.
- **Buttons.** Same proportions as tags but slightly more padding (~13×26 px); `gold-soft` border, `gold` text. Hover: filled `gold` background with `bg` text.
- **Entry / row pattern** (employment, education, papers, courses):
  - Bold title (ink) left, muted date right-aligned on the same line.
  - Italic muted sub-line below for role / co-authors / venue.
- **Lists** (awards, presentations): tight bullets in `gold-soft`, body text, date right-aligned in `muted`.
- **Drop cap.** Once only, on the first paragraph of the bio / personal statement.
- **Footer / "updated" line.** Centred, small, `muted`, letter-spaced ≈ 0.12 em uppercase.

---

## 6. Spacing & layout

- **Body line-height:** ≈ 1.78–1.85. Generous — these are reading serifs.
- **Print margins:** 0.85–0.9 in.
- **Web container max-widths:** ≈ 1080 px content; ≈ 720 px hero text; ≈ 460 px tight subtitle.
- **Section spacing:** ≈ 17 pt before a section header, ≈ 7 pt after.
- **Within-entry spacing:** 4–6 pt above each new entry; 1–2 pt between title and sub-row.

---

## 7. Voice & tone

- Restrained, precise, academic.
- Active voice; **no marketing modifiers** ("transformative", "innovative", "passionate", "cutting-edge" — avoid).
- Italics for paper titles, journal / book names, and gentle emphasis — sparingly.
- Names of people, papers and institutions in plain text — no all-caps or bold for emphasis, except the few designed exceptions (section labels, eyebrows, name).

---

## 8. Do / Don't

| Do | Don't |
| --- | --- |
| Use the two Garamond serifs throughout | Mix in a sans-serif body |
| Use `gold` for ~one accent per block | Colour every heading or use bright primaries |
| Hairline rules in `gold-soft` | Heavy black bars or boxed sections |
| *Italic + gold* for emphasis on display | Bold red / coloured emphasis in body |
| Generous line height | Tight paragraph leading |
| Small uppercase letter-spaced labels | Sentence-case labels with no tracking |
| Plain serif numerals in dates | Mixed numeral styles or fancy figures |
| Centred title pages | Ornaments, emojis, drop shadows, gradients |

---

## 9. Implementation recipes

### LaTeX minimal preamble (light / print)

```latex
\documentclass[11pt]{article}
\usepackage[letterpaper,margin=0.9in]{geometry}
\usepackage[T1]{fontenc}
\usepackage{ebgaramond}
\usepackage{microtype}
\usepackage{xcolor}
\usepackage{titlesec}
\usepackage{tabularx}
\usepackage{enumitem}
\usepackage[hidelinks]{hyperref}

\definecolor{ink}{HTML}{2E2417}
\definecolor{gold}{HTML}{876722}
\definecolor{goldsoft}{HTML}{A9883F}
\definecolor{muted}{HTML}{6B5E45}

\color{ink}
\hypersetup{colorlinks=true,urlcolor=gold,linkcolor=gold}
\linespread{1.06}
```

For a working end-to-end example, see the CV files (private/local; not in this repo): `cv/aditi-singh-cv.tex` (gold accents) and `cv/aditi-singh-cv-bw.tex` (all black).

### HTML / CSS variables

```css
:root {
  --bg: #17120d;   --bg-2: #1f1810;   --bg-3: #261d14;
  --paper: #e9ddc5; --paper-dim: #c2b291; --muted: #8c7c60;
  --gold: #c5a35c;  --gold-soft: #9d7f45;
  --line: #3a2f1f;
}
:root[data-theme="light"] {
  --bg: #f0e7d3;   --bg-2: #e9dcc1;   --bg-3: #e3d5b6;
  --paper: #2e2417; --paper-dim: #5f5236; --muted: #8a785a;
  --gold: #876722;  --gold-soft: #a9883f;
  --line: #cdbd97;
}
body {
  background: var(--bg);
  color: var(--paper);
  font-family: 'EB Garamond', Georgia, serif;
  font-size: 1.04rem;
  line-height: 1.78;
}
```

---

## 10. Living references

When in doubt, copy from the source of truth in this repo:

- **Website pages:** `index.html`, `research/index.html`, `teaching/index.html` — every pattern above is implemented there.
- **Favicons:** `favicon-dark.svg`, `favicon-light.svg` — minimal "AS" monogram inside a thin gold frame.

---

## 11. Using this guide with an AI assistant

When you ask an AI to produce a new document (CV, research statement, syllabus, slides), open with:

> "Style this document using the conventions in `STYLE-GUIDE.md` at the root of the repo. For printed/light output, use the light-mode palette on a white page."

Then describe the **content** only. The assistant should reuse the tokens, fonts, and patterns above rather than inventing new ones.
