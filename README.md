# shawnnafziger.com

Shawn Nafziger's personal portfolio: a home page and one data story, "Where the seaweed lands". The business site, with the data stories, is [tallorderdigital.com](https://tallorderdigital.com) (repo `tallorderdigital-site`).

## How it works

- Plain HTML pages, no build step. GitHub Pages publishes `main` about a minute after a merge.
- Changes arrive as pull requests; Shawn reviews and merges.

## Layout

| Path | What |
| --- | --- |
| `index.html` | Home: intro, the featured story, how I work, link to Tall Order Digital, contact |
| `stories/` | Data stories, one folder each, one self-contained page with its data built in. Only `seaweed-beaches-sargassum/` for now: built in the private `travel-analytics` repo (`analysis/seaweed_beaches/map_prototype/`) and copied here by pull request. Don't hand-edit the copy |
| `404.html` | Page not found (uses root-relative links, since it's served from any depth) |
| `assets/site.css` | All styles and color tokens (light and dark) |
| `assets/theme.js` | Light/dark toggle, saved as `sn-theme` |
| `favicon.svg`, `CNAME` | Icon and custom domain |

## Before sharing

Anything highlighted in yellow on the site (class `todo`) is a placeholder: for now, only the LinkedIn link on the home page. Fill it in and remove the `todo` class.
