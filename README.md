# shawnnafziger.com

Shawn Nafziger's personal portfolio: a home page and one data story, "Where the seaweed lands".

## How it works

- Plain HTML pages, no build step. GitHub Pages publishes `main` about a minute after a merge.
- Changes arrive as pull requests; Shawn reviews and merges.

## Layout

| Path | What |
| --- | --- |
| `index.html` | Home: intro, the featured story, how I work. The contact section is hidden in an HTML comment for now |
| `stories/` | Data stories, one folder each, one self-contained page with its data built in. Only `seaweed-beaches-sargassum/` for now: built in the private `travel-analytics` repo (`analysis/seaweed_beaches/map_prototype/`) and copied here by pull request. Don't hand-edit the copy |
| `404.html` | Page not found (uses root-relative links, since it's served from any depth) |
| `assets/site.css` | All styles and color tokens (light and dark) |
| `assets/theme.js` | Light/dark toggle, saved as `sn-theme` |
| `favicon.svg`, `CNAME` | Icon and custom domain |

## Before sharing

Nothing visible is a placeholder now. The hidden contact section still has a placeholder LinkedIn link (class `todo`); fill it in before un-hiding it.
