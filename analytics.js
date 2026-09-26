(() => {
  const config = window.CRITERIACUE_ANALYTICS;
  const page = window.location;
  const siteUrl = "https://ivanxia1988.github.io/criteriacue/";
  if (page.origin !== "https://ivanxia1988.github.io" ||
      !["/criteriacue/", "/criteriacue/index.html"].includes(page.pathname) ||
      !config?.projectToken || !/^phc_[A-Za-z0-9_]+$/.test(config.projectToken) ||
      !["https://us.i.posthog.com", "https://eu.i.posthog.com"].includes(config.apiHost) ||
      navigator.doNotTrack === "1" || navigator.globalPrivacyControl === true) return;

  const channels = ["linkedin", "discord", "reddit", "github", "brainfood", "producthunt"];
  const query = new URL(page.href).searchParams;
  let referrer = "";
  let channel = "direct";
  try {
    const origin = new URL(document.referrer).origin;
    const host = new URL(origin).hostname;
    const known = { "linkedin.com": "linkedin", "discord.com": "discord", "discord.gg": "discord",
      "reddit.com": "reddit", "github.com": "github", "recruitingbrainfood.com": "brainfood",
      "producthunt.com": "producthunt", "google.com": "google", "bing.com": "bing" };
    channel = Object.entries(known).find(([domain]) => host === domain || host.endsWith(`.${domain}`))?.[1] || "other";
    // Unknown domains can be private hosts; only send recognized public sources.
    if (channel !== "other") referrer = `${origin}/`;
  } catch { /* A direct visit has no referrer. */ }
  const source = query.get("utm_source");
  if (channels.includes(source)) channel = source;
  const properties = {
    site: "criteriacue_landing", $current_url: siteUrl, $pathname: "/criteriacue/",
    $host: "ivanxia1988.github.io", $referrer: referrer,
    $referring_domain: referrer ? new URL(referrer).hostname : "",
    utm_source: channel,
    utm_medium: ["social", "community", "referral"].includes(query.get("utm_medium")) ? query.get("utm_medium") : "",
    utm_campaign: ["launch", "jev_demo"].includes(query.get("utm_campaign")) ? query.get("utm_campaign") : "",
  };
  function beforeSend(event) {
    if (!event || !["$pageview", "store_install_click"].includes(event.event)) return null;
    const clean = {};
    // Cookieless ingestion requires the user agent to hash identity, then strips it server-side.
    for (const key of ["distinct_id", "$device_id", "$session_id", "$window_id", "$lib", "$lib_version", "$browser", "$browser_version", "$os", "$os_version", "$device_type", "$cookieless_mode", "$raw_user_agent"]) {
      if (event.properties?.[key] !== undefined) clean[key] = event.properties[key];
    }
    if (event.event === "store_install_click" && ["hero", "footer"].includes(event.properties?.placement)) {
      clean.placement = event.properties.placement;
    }
    // The public ingestion token is required by PostHog, not visitor-supplied data.
    event.properties = { ...clean, ...properties, token: config.projectToken, $process_person_profile: false, $geoip_disable: true };
    return event;
  }
  function capture(name, extra = {}) {
    try { window.posthog?.capture(name, { ...properties, ...extra }); }
    catch { /* Analytics must never prevent navigation. */ }
  }
  for (const link of document.querySelectorAll("[data-store-link]")) {
    link.addEventListener("click", () => capture("store_install_click", { placement: link.dataset.storeLink }));
  }

  // The loader is the official PostHog snippet; configuration below limits capture.
  if (!window.posthog) loadPostHog();
  window.posthog.init(config.projectToken, {
    api_host: config.apiHost,
    cookieless_mode: "always", disable_persistence: true, person_profiles: "never",
    autocapture: false, capture_pageview: false, capture_pageleave: false,
    capture_dead_clicks: false, capture_heatmaps: false, capture_performance: false,
    capture_exceptions: false, disable_session_recording: true, disable_surveys: true,
    advanced_disable_flags: true, respect_dnt: true, before_send: beforeSend,
    loaded: (client) => client.capture("$pageview", properties),
  });

  function loadPostHog() {
    !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],Object.defineProperty(u,"toString",{configurable:!0,enumerable:!0,writable:!0,value:function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e}}),Object.defineProperty(u.people,"toString",{configurable:!0,enumerable:!0,writable:!0,value:function(){return u.toString(1)+".people (stub)"}}),o="init capture register register_once register_for_session unregister unregister_for_session getFeatureFlag getFeatureFlagResult isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey getNextSurveyStep identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty createPersonProfile opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing debug".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
  }
})();
