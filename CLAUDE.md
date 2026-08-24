# camilomartin.com — Portfolio Site

Personal portfolio for Raúl Camilo Martín Bernal, Senior Data Engineer.

> **No build step.** No framework, no bundler, no runtime JS dependencies beyond Google Fonts. Three files, drop anywhere and it works.

## Stack

- `index.html` — homepage markup and intentional inline element styles
- `cases.html` — Success Cases page (six case studies on a logo timeline)
- `css/styles.css` — layout classes, lang toggle, cases page, responsive media queries (shared by both pages)
- `js/main.js` — homepage: i18n translations (EN/ES), scroll effects, parallax, nav state, hamburger menu
- `js/cases.js` — cases page: its own EN/ES dictionary + a copy of the nav/hamburger/reveal behaviour, plus the sticky rail logic. Deliberately self-contained; keep the shared blocks in sync with `main.js` when you change them there.
- `images/` — local logos, icons, favicon
- Favicon: `images/icon.png`
- `robots.txt` + `sitemap.xml` — SEO crawler files (canonical URLs: https://www.camilomartin.com/ and /cases.html)
- `vercel.json` — security headers (strict CSP, HSTS, nosniff, frame denial). No inline event handlers or inline `<script>` allowed — CSP `script-src 'self'` blocks them; use `addEventListener` in the page's JS file. `img-src 'self'` also blocks remote images — inline `<svg>` is fine, external logo URLs are not.

## Page Structure — index.html

Sections in DOM order:

1. **Hero** — full-viewport dark space scene with parallax earth + stars; name pronunciation subtitle below `<h1>`
2. **Professional** (`#professional`) — work timeline, stat counters
3. **Skills** (`#skills`) — tech stack cards + certifications/education
4. **About** (`#about`) — personal bio, sports, languages
5. **Books** (`#books`) — recommended reading shelf (10 books)
6. **Horizon** (`#horizon`) — future technology interests (robotics, space, energy, quantum)
7. **Footer/Contact** (`#contact`) — email, LinkedIn, GitHub links + Flaticon attribution

## Page Structure — cases.html

1. **Hero** (`#casesHero`) — compact dark scene, stars only (no earth)
2. **Sticky rail** (`#casesRail`) — horizontal logo timeline, sticks under the nav at `top:57px` (`52px` ≤768px). Each `.rail-stop` links to a case anchor; `js/cases.js` adds `.is-active` to the current stop and fills `#railProgress` as you scroll. Horizontally scrollable on mobile, where `.rail-line` is hidden.
3. **Case flow** (`.cases-flow`) — six `<article class="case">` blocks (`#case-01` … `#case-06`) hung off a gradient vertical spine (`.cases-flow::before`). Each has a brand `.case-marker` tile, a `.case-card` with problem / what-I-built columns, a `.case-result` metric strip and `.case-stack` chips.
4. **Pattern band** (`.cases-pattern`) — three cards on the throughline across all six cases
5. **Footer/Contact** (`#contact`) — shared with the homepage, plus a "back to full profile" link

### The six cases

| # | Company | Case | Headline result |
|---|---|---|---|
| 01 | Esri Colombia | Geospatial automation at national scale | weeks → 1 day; COVID 15 h → 15 min |
| 02 | Rappi · RappiPay | NiFi → Spark on Glue + Airflow | 6 h → 20 min (~18×) |
| 03 | Rappi · RappiPay | Regulatory reporting + Kafka card statements | manual → scheduled; licensed bank |
| 04 | Globant | Iceberg lakehouse → Neptune + OpenSearch | ~40 GB/day into a .NET app |
| 05 | Globant | Snowflake facts/dims + Streamlit lineage app | 10 h → 5 min |
| 06 | EPAM Systems | Glue → Airbyte + dbt + Redshift, Terraform | 8 h → 30 min (16×) |

### Company brand tiles

Logos are inline SVG monograms on a brand-coloured gradient tile — no trademarked logo files, so nothing external to load under CSP. Colour classes live in `styles.css`: `.brand-esri`, `.brand-rappi`, `.brand-globant`, `.brand-epam`.

**To swap in a real logo file:** drop e.g. `images/esri.png` into `images/`, then in `cases.html` replace the inline `<svg>` inside that `.rail-tile` / `.case-marker` with `<img src="images/esri.png" alt="Esri" class="brand-img">` and remove the `brand-*` class from the wrapping element. The `.brand-img` class already handles sizing, `object-fit` and the white backing.

**Add a case** — copy an `<article class="case">` block, bump the id (`#case-07`), add a matching `.rail-stop` to `#casesRail`, and add its `c7.*` keys to both dictionaries in `js/cases.js`.

## Certifications (in Skills section)

Each cert is an `<a>` row with a 44×44 icon, name, issuer/date, and arrow. Linked certs open their verification URL.

| Cert | Issuer | Verification |
|---|---|---|
| Claude Certified Architect — Foundations | Anthropic | https://verify.skilljar.com/c/i6dit8ytcfc9 |
| Astronomer DAG Authoring for Airflow 3 | Astronomer | https://www.credly.com/badges/3c2ef8ec-fe45-4e38-9d30-ba26e6f722ef |
| SnowPro Advanced: Architect | Snowflake | https://achieve.snowflake.com/c1849df5-78ad-4b27-bdc5-08a939c80b91 |
| SnowPro Advanced: Data Engineer | Snowflake | https://achieve.snowflake.com/5dd1ae95-a699-4be3-b6db-cc95c82f1044 |
| AWS Certified Data Engineer — Associate | AWS | https://www.credly.com/badges/6e5f6cdf-bb63-478d-8fa5-f5a29844361b |
| DeepLearning.AI — Data Engineering | DeepLearning.AI | — |
| Deep Learning Specialization | DeepLearning.AI / Coursera | — |

Icons: Credly badge images used for AWS and Astronomer. Snowflake uses an inline SVG snowflake. Anthropic uses an inline SVG "A". DeepLearning.AI uses an inline SVG neural-net pattern.

## CSS Conventions

Layout classes (defined in `<style>`, responsive via `@media`):

| Class | Purpose |
|---|---|
| `.nav-inner` | Nav bar centering wrapper |
| `.nav-links` | Desktop nav; collapses on mobile |
| `.hamburger` | Mobile menu toggle (hidden on desktop) |
| `.section-inner` | `max-width:1180px` content wrapper with responsive padding |
| `.stats-grid` | 4-col → 2-col responsive stat counters |
| `.about-grid` | 2-col → 1-col about layout |
| `.skills-grid` | Auto-fit skills cards |
| `.ai-card` | Full-width card (`grid-column:span 2` → `span 1` on mobile) |
| `.creds-grid` | 2-col → 1-col certifications/education layout |

Breakpoints: `900px` (stats reflow), `768px` (mobile layout), `480px` (small mobile).

## JS Behaviour

- **Hamburger menu** — toggles `.open` on `#navLinks`; closes on any link click; hamburger span color tracks scroll state
- **Scroll parallax** — stars and earth move at different rates (`translateY`)
- **Nav state** — background/color transitions once past 62% of hero height
- **Reveal animations** — `[data-reveal]` elements animate in via `IntersectionObserver`; fallback fires after 2.8 s

## Design Tokens

| Token | Value |
|---|---|
| Primary blue | `#2f6fe0` |
| Dark bg | `#03060f` |
| Light bg | `#eef1f6` |
| Subtle bg | `#f4f6fa` |
| Body text | `#16202e` |
| Muted text | `#8a93a3` |
| Font — headings | Space Grotesk |
| Font — body | IBM Plex Sans |
| Font — mono/labels | IBM Plex Mono |

## Common Tasks

**Add a new job to the timeline** — copy an existing `[data-reveal]` timeline block inside `#professional`, update content, keep the `position:relative;padding-left:36px` wrapper and the blue dot/line markup.

**Add a book** — copy a book card inside the books grid div, increment the counter span (`01`–`10`…).

**Add a certification** — copy an `<a>` row inside the certs `flex-direction:column` div. Use an `<img>` for Credly/badge images or an inline `<svg>` for custom icons. Non-linked certs use `<div>` instead of `<a>`.

**Add a skill tag** — add a `<span>` inside the relevant skills card's flex-wrap div, using the existing `font-size:13px;color:#34404f;background:#f4f6fa;border:1px solid #e1e7ef;border-radius:4px;padding:5px 11px` style.

**Change section order** — sections are independent; move the `<section>` blocks and update the `01 /`, `02 /` … counter labels inside each section header. Also update the nav link order in `<nav class="nav-links">`.

## Deployment

Static file — drop `index.html` anywhere (GitHub Pages, Netlify, S3, etc.). No build required.
