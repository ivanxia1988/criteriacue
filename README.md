# CriteriaCue project website

Public English website: https://criteriacue.minus.team/

Updated 2026-11-02 for the published V2 Edge release (0.2.39), Chrome release (0.2.29), and unpacked preview (0.2.39). Plain HTML/CSS/JavaScript on the existing GitHub Pages repository. Store and preview versions are listed separately.

## Current product description

- English and Simplified Chinese; authorized individual LinkedIn profiles and Chenglietong resume details.
- Paste a JD, edit the extracted title and core requirements, then save. Up to 30 local roles, 1–3 active at once, 1–10 requirements each.
- Quick requirement checks prioritize the first active role. Detailed analysis provides an advisory recommendation score, strengths, gaps and verification questions. The score is not a calibrated probability; no automatic candidate ranking, rejection, hiring or contact.
- V2 uses email-code registration/sign-in and a currently free platform service with service limits. No user API-key configuration.
- Roles, JDs and preferences stay local; AI processing passes through the platform. The application database stores accounts and task metadata, not candidate/JD/output bodies. See the separate extension privacy policy for providers and retention.

## Downloads

Checked 2026-11-02. Re-check store availability before changing these labels.

1. Chrome Web Store: https://chromewebstore.google.com/detail/criteriacue-%E2%80%94-jev-native/gnbphmdpnhlbakiaegfgmppnajemboij
   The official public listing currently serves 0.2.29. The latest 0.2.39 package is available from Edge or the ZIP preview; do not assume both stores always serve the same version.
2. Latest unpacked V2 preview: https://criteriacue.minus.team/downloads/criteriacue-test-v0.2.39.zip
   GitHub Release mirror: https://github.com/ivanxia1988/criteriacue/releases/download/v0.2.39-preview/criteriacue-test-v0.2.39.zip
   Package 0.2.39, 420451 bytes. SHA-256: 47ed38039f2653379c7c871930ba00b578252b2a53b6d4984a2717f4ce228d53. Release notes: https://github.com/ivanxia1988/criteriacue/releases/tag/v0.2.39-preview
3. Microsoft Edge Add-ons: https://microsoftedge.microsoft.com/addons/detail/aecndleilbgafmfclfjiilafoaaekfoc
   Public version 0.2.39, visually confirmed on the official store page. Open in desktop Edge to install without Developer mode. Full Edge workflow validation has not been claimed.

The maintained Chinese download document is `docs/launch/downloads.md` in the extension workspace. Hero, download cards and footer link directly to both stores and the reviewed ZIP. The Edge setup section describes store installation; the ZIP guide covers manual installation in both browsers.

The ZIP requires extraction and Developer mode. It still needs an internet connection and email sign-in. Preview updates are manual: replace the files in the same installation folder and reload. Store and preview installations have separate local data and sign-in. The stable preview identity is iolkljnhkdblmpoohjfkkhmkalfaknlf.

## Contents and preview

- index.html: V2 introduction, three download choices, installation guides, four workflow illustrations, fictional JD starters, setup and FAQ.
- styles.css: existing desktop/mobile design plus download cards and illustrations.
- site.js: local clipboard action with manual fallback; optional video loading.
- analytics-config.js / analytics.js: existing approved website analytics.
- website-privacy.html: website analytics notice, separate from extension privacy.
- downloads/: the explicitly authorized compiled V2 preview ZIP, byte-identical to the release asset.
- assets/: approved media. Historical screenshots remain stored but are no longer presented as current V2 screenshots.
- .nojekyll: plain static GitHub Pages.

From the extension workspace:

~~~sh
python3 -m http.server 49189 --bind 127.0.0.1 --directory docs/launch/promo-site
~~~

Open http://127.0.0.1:49189/ . Local previews do not send analytics. Nothing typed into the public fictional JD examples is saved or sent; copying is local.

## Retained concept film

Keep the approved 30-second English film assets/criteriacue-evidence-20260927-v2.mp4, its evidence-poster-20260927.png poster and evidence-en-20260927.vtt captions. It is now explicitly labeled an earlier concept film from the original Jev experiment, not the current V2 interface or live inference. All examples are fictional. Sound and playback remain user initiated.

Do not replace the film or imply that simulated footage proves accuracy, latency or time savings. New V2 workflow illustrations are HTML diagrams, not product screenshots.

## Hosting and publication

Repository: ivanxia1988/criteriacue. Publish only the intended website files from this directory; preserve unrelated remote files. The separately authorized compiled preview ZIP is hosted under downloads/ and as a GitHub Release mirror. Only that reviewed ZIP is published, not the release/ directory. Do not publish the extension workspace, raw source, server code, private reports, account data, credentials or candidate material.

A public website and a downloadable compiled preview do not imply the extension source is open source. Privacy policy: https://ivanxia1988.github.io/criteriacue-privacy/

## Existing analytics scope

Reuse Minus / Default US project 597344. Do not create a new project or alter the public ingestion configuration. Existing events remain $pageview and store_install_click, site = criteriacue_landing, with hero/footer Chrome store placements. ZIP and Edge store links do not add events or properties. A store click is not an installation; no cross-channel installation attribution is implied.

Cookieless statistics, DNT/GPC handling and the production-host allowlist remain. No replay, autocapture, profiles, heatmaps, error collection, JD input capture or persistent identity is added. No analytics on local previews or the privacy page.

Before publication: npm test -- tests/promo-content.test.ts tests/promo-analytics.test.ts. CUA visual checks cover layout, in-page navigation, copy feedback and browser download behavior; HTTP/hash checks are separately reported.

Operator: minus · support@minus.team
