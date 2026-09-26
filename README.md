# CriteriaCue project website

An English introduction to CriteriaCue, with a four-step illustrated tour, three editable role-criteria templates, setup guidance, support and privacy links. Plain HTML/CSS/JavaScript; no build step, account system, analytics, cookies or form backend.

## Contents

- `index.html`: introduction, illustrated tour, templates, setup and FAQ.
- `styles.css`: desktop and mobile presentation.
- `site.js`: local clipboard action, with manual-copy fallback; optional video loading.
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
