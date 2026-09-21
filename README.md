# aditi-singh.com

Personal academic website, published with GitHub Pages at https://www.aditi-singh.com.
Plain HTML, CSS, and JavaScript; no production build step.

| URL | Source | Content |
| --- | --- | --- |
| `/` | `index.html` | Biography, contact, selected research |
| `/research/` | `research/index.html` | Working papers, ongoing work, book chapters |
| `/policy/` | `policy/index.html` | Policy projects |
| `/teaching/` | `teaching/index.html` | Courses and teaching evaluations |

Shared styles and theme scripts live in `assets/`. Source Serif 4 and DM Sans provide the typography, with a small portrait and pure white background with burgundy accents. Light mode is the default. An explicit theme choice is saved in localStorage; dark mode retains the espresso and antique-gold palette.

Edit the public HTML and shared assets directly. `STYLE-GUIDE.md` documents the current design. Local design studies are excluded from Git and deployment. Private CV source files remain excluded; public CV and paper links point to papers.aditi-singh.com.

GitHub Pages deploys the root of the `main` branch. `CNAME` binds www.aditi-singh.com, and `.nojekyll` disables Jekyll. Preserve clean page URLs, the sitemap, and the existing Google Analytics tag when editing.
