# CriteriaCue project website

An English introduction to CriteriaCue, with a four-step illustrated tour, three editable role-criteria templates, setup guidance, support and privacy links. Plain HTML/CSS/JavaScript; no build step, account system or form backend. Website-only PostHog analytics is configured for the existing Minus / Default project (US Cloud, project 597344), as approved by the owner on 2026-09-26.

## Contents

- `index.html`: introduction, illustrated tour, templates, setup and FAQ.
- `styles.css`: desktop and mobile presentation.
- `site.js`: local clipboard action, with manual-copy fallback; optional video loading.
- `analytics-config.js`: verified public PostHog ingestion token and regional host; empty means disabled.
- `analytics.js`: cookieless pageviews and explicit store-link clicks, with a strict event/property allowlist.
- `website-privacy.html`: website analytics notice, separate from the extension privacy policy.
- `assets/`: approved fictional/simulated product screenshots and their provenance.
- `.nojekyll`: serves the directory as plain static files on GitHub Pages.

Public store availability was verified on 2026-09-26. The installation buttons link to the live Chrome Web Store listing; initial distribution is the United States. Screenshot captions disclose simulated data. The page does not imply platform endorsement or include real candidate information.

## Preview

From this directory:

```sh
python3 -m http.server 4187 --bind 127.0.0.1
```

Open http://127.0.0.1:4187/ in a browser. No npm install is required. Clipboard support depends on a secure context and browser permissions; when unavailable, the text is selected for manual copying.

## Optional video

The site includes a 60-second silent English screenshot-based interface introduction at `assets/criteriacue-tour.mp4` (1280×720, H.264, 24 fps), with matching captions and a complete image walkthrough below it. The file is bundled for same-origin playback. Clear `videoSource` to hide the video if replacing it; do not point to a nonexistent asset.

For a small MP4, place the reviewed file at `assets/criteriacue-tour.mp4` and set:

```js
const videoSource = "assets/criteriacue-tour.mp4";
```

For a release-hosted video, upload the MP4 as a GitHub Release asset and use its actual download URL. Verify playback and seeking after deployment before using this route. GitHub Releases is an asset distribution feature, not a streaming-video guarantee; browser behavior and response headers matter. If playback fails, keep the illustrated walkthrough and use a tested small same-origin MP4 or a suitable video host.

The prepared `assets/tour-en.vtt` matches the proposed 60-second storyboard. Retiming the video requires updating this caption file. Keep the silent/simulated-demo label visible. Do not autoplay with sound.

## Launch update

Installation URL: https://chromewebstore.google.com/detail/criteriacue-%E2%80%94-jev-native/gnbphmdpnhlbakiaegfgmppnajemboij

Keep this link synchronized with the live listing. The landing page is also the extension homepage in v0.2.8. Check distribution countries before promoting outside the launch region.

## Project hosting

Publish only this directory to the root of a dedicated website repository. Enable Pages from `main` / `/ (root)`. Creating a GitHub Release is optional and is not required to enable Pages.

A project website uses `https://USERNAME.github.io/REPOSITORY/`, not the repository's `https://github.com/USERNAME/REPOSITORY/` URL. Relative paths in this website support a project subpath.

The existing privacy policy remains at https://ivanxia1988.github.io/criteriacue-privacy/ .

References:
- https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository

Operator: minus · support@minus.team

## PostHog activation and reporting

Cookieless tracking is enabled in project 597344. The existing public ingestion token and US host are set in `analytics-config.js`; no new project or paid upgrade was created. If moving projects, enable cookieless tracking in the destination before updating these values. Use only the public project ingestion token, never a personal API key. Verify the project region; allowed hosts are `https://us.i.posthog.com` and `https://eu.i.posthog.com`.

Analytics runs only on the production landing page. Local previews and the privacy page send nothing. The official loader is from https://posthog.com/docs/integrate . The configuration follows https://posthog.com/docs/libraries/js/config . Browser DNT/GPC signals skip initialization. Replay, autocapture, profiles, heatmaps, errors and geographic enrichment are disabled. Do not turn them on as part of routine marketing work.

Measure `$pageview` (views and estimated visitors) and `store_install_click` (store-link clicks), always filtered to `site = criteriacue_landing`. Break down by `utm_source`; click placement is `hero` or `footer`. A click is not an installation. Do not claim actual extension usage, retention, or installations from these events. Without page-leave capture, do not use duration or bounce metrics as a success measure. Cookieless visitor counts are estimates rather than verified people or long-term identities.

Ready-to-use campaign links:

- LinkedIn: https://ivanxia1988.github.io/criteriacue/?utm_source=linkedin&utm_medium=social&utm_campaign=launch
- Discord: https://ivanxia1988.github.io/criteriacue/?utm_source=discord&utm_medium=community&utm_campaign=launch
- Reddit: https://ivanxia1988.github.io/criteriacue/?utm_source=reddit&utm_medium=community&utm_campaign=launch

Source allowlist: linkedin, discord, reddit, github, brainfood, producthunt. Medium allowlist: social, community, referral. Campaign allowlist: launch, jev_demo. Other values are discarded. Never place email addresses or personal identifiers in campaign parameters.

Before publishing, run `npm test -- tests/promo-analytics.test.ts` from the extension workspace and verify a real browser visit and store-link click in PostHog after deployment. Check the browser events in the project activity view. Data starts at activation; past traffic cannot be reconstructed.

PostHog project: https://us.posthog.com/project/597344/web

To separate websites in Web analytics, filter Current URL to `https://ivanxia1988.github.io/criteriacue/`, or use event property `site = criteriacue_landing` in Product analytics. Shared project totals include both sites.
