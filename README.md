# shawnnafziger.com

Shawn Nafziger's personal portfolio: case studies, résumé and embedded Power BI reports. The business site, with the data stories, is [tallorderdigital.com](https://tallorderdigital.com) (repo `tallorderdigital-site`).

## How it works

- Plain HTML pages, no build step. GitHub Pages publishes `main` about a minute after a merge.
- Changes arrive as pull requests; Shawn reviews and merges.

## Layout

| Path | What |
| --- | --- |
| `index.html` | Home: intro, selected work, one live dashboard, how I work, link to Tall Order Digital, contact |
| `work/` | Case studies: `nba-analytics/`, `weather-intelligence/` |
| `dashboards/` | Embedded Power BI reports |
| `resume/` | Experience, skills, education |
| `404.html` | Page not found (uses root-relative links, since it's served from any depth) |
| `assets/site.css` | All styles and color tokens (light and dark) |
| `assets/theme.js` | Light/dark toggle, saved as `sn-theme` |
| `assets/pbi-embed.js` | Power BI embeds: live report on desktop, picture + link on phones, placeholder until a link is added |
| `favicon.svg`, `CNAME` | Icon and custom domain |

## Adding a Power BI report

1. In Power BI Service, open the report → **File → Embed report → Publish to web (public)**. Copy the link (`https://app.powerbi.com/view?r=...`), not the iframe code.
   Publish to web makes the report public to anyone with the link. Only public data (NBA stats, NOAA weather) belongs here, never client data.
2. Paste it into `data-src` on the matching `<div class="pbi-frame">` (there's one on the home page, one per case study and one per report on `dashboards/`).
3. Optional: save a screenshot of the report as a PNG next to the page and put its file name in `data-img`. Phones then show the picture with a tap-to-open link instead of a cramped live report.

## Before launch

Anything highlighted in yellow on the site (class `todo`) is a placeholder: LinkedIn link, résumé PDF, past roles, education, and the "My role" lines on the case studies. Fill them in and remove the `todo` class.
