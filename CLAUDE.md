# shawnnafziger.com: notes for Claude

Shawn Nafziger's personal portfolio site, aimed at hiring managers for analytics and visualization roles. **Decided Nov 2, 2026:** shawnnafziger.com is the personal portfolio; tallorderdigital.com stays the commercial site and keeps all data stories. This site links to the stories there and never copies them (no duplicate pages).

Who Shawn is and how we work: read `CLAUDE.md` in `shawn-nafziger/nba-analytics` or `shawn-nafziger/weather-intelligence`. In short: BI and data-viz analyst (Power BI, Tableau), not a developer; lead every PR and reply with what he needs to know and do.

## Rules
- **Changes arrive as pull requests.** Shawn reviews and merges; GitHub Pages publishes `main`.
- **Static only:** self-contained HTML, no server, database or build step.
- **Relative links only**, except `404.html` (served from any depth, so it uses `/...`).
- **Every claim about the projects must be true today.** Check facts against the project repos (`nba-analytics`, `weather-intelligence`) before changing case-study text. Never invent employers, dates or results for the résumé; leave a highlighted `todo` placeholder instead.
- **Power BI embeds** use Publish to web links only (`https://app.powerbi.com/view?r=...`, checked by `assets/pbi-embed.js`). Public data only. Phones get a screenshot + link (`data-img`).
- **Credit data sources** on any page that shows NBA or weather work; NBA pages keep "Not affiliated with the NBA". No team or league logos.
- **No analytics or cookies yet.** If added, use the same cookie-free setup as tallorderdigital.com and update the footer line.
- Test before every PR: serve locally, check desktop and phone widths, light and dark, no script errors, no broken internal links.

## Design
**Related to Tall Order Digital, not identical.** Same palette, type and chart rules: the master is `docs/design-system-and-dataviz-playbook.md` in `tallorderdigital-site`; read it there (no copy here, so it can't go stale).
- Personal wordmark: "SHAWN NAFZIGER" in Barlow Semi Condensed Bold beside a short orange bar (`#F99A2B`). Don't use the Tall Order bar mark here, except where the page is linking to the business.
- Tokens live in `assets/site.css` (Paper/Ink light, Deep/Teal dark). Signal text is Burnt `#B36000` in light mode and Orange in dark; Orange is never text on Paper.
- Light/dark: follows the system on first visit; the header button saves the choice as `sn-theme`.
