import mixpanel from "mixpanel-browser";
import type { Lang } from "@/content";

// Mixpanel project tokens are public by design: they ship in the browser bundle and only allow sending events.
const MIXPANEL_TOKEN = "0bdf39232802ef8e9c63975a0cb6f66c";

let enabled = false;

/** Production builds only, so local development doesn't pollute the data. */
export function initAnalytics(lang: Lang) {
  if (!import.meta.env.PROD || enabled) return;

  mixpanel.init(MIXPANEL_TOKEN, {
    persistence: "localStorage",
    autocapture: {
      // Page views are sent by trackPageView() instead: autocapture's own fires inside init(),
      // before the language super property can be registered.
      pageview: false,
      // Record button/link labels so reports read "Download resume" instead of a bare <a>.
      // Safe here: the site has no forms or user-entered content.
      capture_text_content: true,
    },
  });
  mixpanel.register({ language: lang });
  enabled = true;
}

export function setAnalyticsLanguage(lang: Lang) {
  if (enabled) mixpanel.register({ language: lang });
}

/** One page view per route ("/" or "/projects"); #section jumps and ?lang changes don't count. */
export function trackPageView() {
  if (enabled) mixpanel.track_pageview();
}
