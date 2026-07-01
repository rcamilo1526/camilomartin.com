# camilomartin.com — Portfolio Site

Personal portfolio for Raúl Camilo Martín Bernal, Senior Data Engineer.

> **No build step.** No framework, no bundler, no runtime JS dependencies beyond Google Fonts. Three files, drop anywhere and it works.

## Stack

- `index.html` — all markup and intentional inline element styles
- `css/styles.css` — layout classes, lang toggle, responsive media queries
- `js/main.js` — i18n translations (EN/ES), scroll effects, parallax, nav state, hamburger menu
- `images/` — local logos, icons, favicon
- Favicon: `images/icon.png`
- `robots.txt` + `sitemap.xml` — SEO crawler files (canonical URL: https://www.camilomartin.com/)
- `vercel.json` — security headers (strict CSP, HSTS, nosniff, frame denial). No inline event handlers or inline `<script>` allowed — CSP `script-src 'self'` blocks them; use `addEventListener` in `js/main.js`

## Page Structure

Sections in DOM order:

1. **Hero** — full-viewport dark space scene with parallax earth + stars; name pronunciation subtitle below `<h1>`
2. **Professional** (`#professional`) — work timeline, stat counters
3. **Skills** (`#skills`) — tech stack cards + certifications/education
4. **About** (`#about`) — personal bio, sports, languages
5. **Books** (`#books`) — recommended reading shelf (10 books)
6. **Horizon** (`#horizon`) — future technology interests (robotics, space, energy, quantum)
7. **Footer/Contact** (`#contact`) — email, LinkedIn, GitHub links + Flaticon attribution

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
