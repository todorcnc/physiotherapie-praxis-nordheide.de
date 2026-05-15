import { useEffect } from "react";
import { canonicalUrl, seoDefaults } from "../data/seo";

function setMeta(selector, attributes) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
}

function setLink(selector, attributes) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("link");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
}

function Seo({ title, description, path = "/", image = seoDefaults.image, type = "website", jsonLd = [] }) {
  useEffect(() => {
    const url = canonicalUrl(path);
    const structuredData = Array.isArray(jsonLd) ? jsonLd : [jsonLd];

    document.documentElement.setAttribute("lang", "de");
    document.title = title;

    setMeta('meta[name="description"]', { name: "description", content: description });
    setMeta('meta[name="robots"]', { name: "robots", content: "index, follow" });
    setLink('link[rel="canonical"]', { rel: "canonical", href: url });

    setMeta('meta[property="og:locale"]', { property: "og:locale", content: seoDefaults.locale });
    setMeta('meta[property="og:site_name"]', { property: "og:site_name", content: seoDefaults.siteName });
    setMeta('meta[property="og:type"]', { property: "og:type", content: type });
    setMeta('meta[property="og:title"]', { property: "og:title", content: title });
    setMeta('meta[property="og:description"]', { property: "og:description", content: description });
    setMeta('meta[property="og:url"]', { property: "og:url", content: url });
    setMeta('meta[property="og:image"]', { property: "og:image", content: image });

    setMeta('meta[name="twitter:card"]', { name: "twitter:card", content: seoDefaults.twitterCard });
    setMeta('meta[name="twitter:title"]', { name: "twitter:title", content: title });
    setMeta('meta[name="twitter:description"]', { name: "twitter:description", content: description });
    setMeta('meta[name="twitter:image"]', { name: "twitter:image", content: image });

    let script = document.head.querySelector('script[data-seo-json-ld="true"]');

    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-seo-json-ld", "true");
      document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(structuredData.filter(Boolean));
  }, [description, image, jsonLd, path, title, type]);

  return null;
}

export default Seo;
