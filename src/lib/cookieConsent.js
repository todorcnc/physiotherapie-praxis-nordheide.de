export const CONSENT_STORAGE_KEY = "ppn_cookie_consent_v1";
export const CONSENT_COOKIE_KEY = "ppn_cookie_consent";
export const CONSENT_VERSION = 1;

export const consentCategories = [
  {
    key: "essential",
    label: "Essential",
    description: "Required for core navigation, security, and storing the visitor's consent selection.",
    required: true,
  },
  {
    key: "analytics",
    label: "Analytics",
    description: "Allows privacy-aware measurement after explicit opt-in.",
    required: false,
  },
  {
    key: "embeds",
    label: "External media",
    description: "Allows maps, videos, and similar third-party embedded content.",
    required: false,
  },
  {
    key: "marketing",
    label: "Marketing",
    description: "Allows advertising or remarketing tools that may track visitors across sites.",
    required: false,
  },
];

export const defaultOptionalConsent = {
  analytics: false,
  embeds: false,
  marketing: false,
};

export function createConsentState(overrides = {}) {
  return {
    essential: true,
    analytics: Boolean(overrides.analytics),
    embeds: Boolean(overrides.embeds),
    marketing: Boolean(overrides.marketing),
  };
}

export function createStoredConsent(consent) {
  return {
    version: CONSENT_VERSION,
    updatedAt: new Date().toISOString(),
    consent: createConsentState(consent),
  };
}

export function parseStoredConsent(rawValue) {
  if (!rawValue) {
    return null;
  }

  try {
    const parsed = JSON.parse(rawValue);

    if (!parsed?.consent || parsed.version !== CONSENT_VERSION) {
      return null;
    }

    return {
      version: parsed.version,
      updatedAt: parsed.updatedAt,
      consent: createConsentState(parsed.consent),
    };
  } catch {
    return null;
  }
}

export function readStoredConsent() {
  if (typeof window === "undefined") {
    return null;
  }

  return parseStoredConsent(window.localStorage.getItem(CONSENT_STORAGE_KEY));
}

export function writeStoredConsent(storedConsent) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(storedConsent));

  const maxAge = 60 * 60 * 24 * 180;
  const cookieValue = encodeURIComponent(JSON.stringify(storedConsent.consent));
  document.cookie = `${CONSENT_COOKIE_KEY}=${cookieValue}; Max-Age=${maxAge}; Path=/; SameSite=Lax`;

  window.dispatchEvent(
    new CustomEvent("ppn:cookie-consent-updated", {
      detail: storedConsent,
    }),
  );
}

export function clearStoredConsent() {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.removeItem(CONSENT_STORAGE_KEY);
  document.cookie = `${CONSENT_COOKIE_KEY}=; Max-Age=0; Path=/; SameSite=Lax`;
  window.dispatchEvent(new CustomEvent("ppn:cookie-consent-cleared"));
}
