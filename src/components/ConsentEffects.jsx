import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useConsent } from "../context/ConsentContext";

function ConsentEffects() {
  const location = useLocation();
  const { canUse } = useConsent();
  const analyticsAllowed = canUse("analytics");
  const embedsAllowed = canUse("embeds");
  const marketingAllowed = canUse("marketing");

  useEffect(() => {
    document.documentElement.dataset.consentAnalytics = String(analyticsAllowed);
    document.documentElement.dataset.consentEmbeds = String(embedsAllowed);
    document.documentElement.dataset.consentMarketing = String(marketingAllowed);
  }, [analyticsAllowed, embedsAllowed, marketingAllowed]);

  useEffect(() => {
    if (!analyticsAllowed) {
      return;
    }

    const payload = {
      path: `${location.pathname}${location.search}${location.hash}`,
      timestamp: new Date().toISOString(),
    };

    const existing = window.sessionStorage.getItem("ppn_analytics_pageviews");
    const currentEntries = existing ? JSON.parse(existing) : [];
    currentEntries.push(payload);
    window.sessionStorage.setItem("ppn_analytics_pageviews", JSON.stringify(currentEntries));
    window.dispatchEvent(new CustomEvent("ppn:analytics-pageview", { detail: payload }));
  }, [analyticsAllowed, location]);

  return null;
}

export default ConsentEffects;
