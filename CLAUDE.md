# shawnnafziger.com: notes for Claude

Shawn Nafziger's personal portfolio site, aimed at hiring managers for analytics and visualization roles. Live at https://shawnnafziger.com since Nov 3, 2026 (GitHub Pages; DNS at Squarespace: four A records to GitHub Pages and `www` CNAME to `shawn-nafziger.github.io`; HTTPS enforced).

**Scope, decided Nov 3, 2026:** the site is the home page plus **one story, the seaweed story**. No résumé page and no dashboards yet, and the NBA and weather case studies were removed. Don't add pages, dashboards or other projects unless Shawn asks. **Decided Nov 2, 2026:** shawnnafziger.com is the personal portfolio; tallorderdigital.com stays the commercial site. (The first plan, that all stories stay on Tall Order and this site only links to them, was changed the same day; see below.)

Who Shawn is and how we work: read `CLAUDE.md` in `shawn-nafziger/nba-analytics` or `shawn-nafziger/weather-intelligence`. In short: BI and data-viz analyst (Power BI, Tableau), not a developer; lead every PR and reply with what he needs to know and do.

**Decided Nov 2, 2026 (later the same day):** Shawn doesn't want the portfolio to lean on links to Tall Order. Stories can live here, starting with the seaweed story (`stories/seaweed-beaches-sargassum/`). It is also on Tall Order at `travel/seaweed-beaches-sargassum/` (merged Nov 2, 2026), and Shawn is fine with both. Each copy names itself as the original (canonical); the Tall Order copy keeps Tall Order's shell and is no longer updated by rebuilds, since the template now produces this site's version. Pages here link within this site; Tall Order appears only where the business itself is the point (the "For businesses" panel on the home page, the footer credit).

## Stories
- Built in the data repos and copied here by PR, like Tall Order's stories: the seaweed story comes from `travel-analytics/analysis/seaweed_beaches/map_prototype/` (`build.py` writes `output/seaweed-map.html`, copied to `stories/seaweed-beaches-sargassum/index.html`). Edit the template there and rebuild; don't hand-edit the copy.
- Story pages carry this site's shell: the "Shawn Nafziger" wordmark, menu (Story, Contact, theme button), `sn-theme`, `../../assets/theme.js`, `../../favicon.svg`, canonical address on shawnnafziger.com, and no analytics. Glossary pop-ups have no "More on this" link (Tall Order's Stats, explained page isn't linked from here).
- Never run `tallorderdigital-site/tools/apply-header.py` on a template that publishes here.
- Address: `stories/<slug>/`. Never break a published address; leave a redirect page if a story moves.

## Rules
- **Changes arrive as pull requests.** Shawn reviews and merges; GitHub Pages publishes `main`.
- **Static only:** self-contained HTML, no server, database or build step.
- **Relative links only**, except `404.html` (served from any depth, so it uses `/...`).
- **Every claim on the site must be true today.** Check story claims against the travel repo's data and findings. Never invent employers, dates or results; leave a highlighted `todo` placeholder instead.
- **Power BI dashboards, if Shawn adds them later:** Publish to web links only (`https://app.powerbi.com/view?r=...`), public data only, and a screenshot + link on phones. A tested embed helper was removed on Nov 3, 2026; it's in git history as `assets/pbi-embed.js` (commit 0b510f0).
- **Credit data sources** on every story page. No logos.
- **No analytics or cookies yet.** If added, use the same cookie-free setup as tallorderdigital.com and update the footer line.
- Test before every PR: serve locally, check desktop and phone widths, light and dark, no script errors, no broken internal links.

## Design
**Related to Tall Order Digital, not identical.** Same palette, type and chart rules: the master is `docs/design-system-and-dataviz-playbook.md` in `tallorderdigital-site`; read it there (no copy here, so it can't go stale).
- Personal wordmark: "SHAWN NAFZIGER" in Barlow Semi Condensed Bold beside a short orange bar (`#F99A2B`). Don't use the Tall Order bar mark here, except where the page is linking to the business.
- Tokens live in `assets/site.css` (Paper/Ink light, Deep/Teal dark). Signal text is Burnt `#B36000` in light mode and Orange in dark; Orange is never text on Paper.
- Light/dark: follows the system on first visit; the header button saves the choice as `sn-theme`.
