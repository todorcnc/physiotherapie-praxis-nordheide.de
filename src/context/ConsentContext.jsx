import { createContext, useContext, useEffect, useMemo, useState } from "react";
import {
  clearStoredConsent,
  createConsentState,
  createStoredConsent,
  defaultOptionalConsent,
  readStoredConsent,
  writeStoredConsent,
} from "../lib/cookieConsent";

const ConsentContext = createContext(null);

export function ConsentProvider({ children }) {
  const [storedConsent, setStoredConsent] = useState(() => readStoredConsent());
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  useEffect(() => {
    const syncConsent = () => {
      setStoredConsent(readStoredConsent());
    };

    window.addEventListener("storage", syncConsent);
    window.addEventListener("ppn:cookie-consent-updated", syncConsent);
    window.addEventListener("ppn:cookie-consent-cleared", syncConsent);

    return () => {
      window.removeEventListener("storage", syncConsent);
      window.removeEventListener("ppn:cookie-consent-updated", syncConsent);
      window.removeEventListener("ppn:cookie-consent-cleared", syncConsent);
    };
  }, []);

  const consent = storedConsent?.consent ?? createConsentState(defaultOptionalConsent);
  const hasAnswered = Boolean(storedConsent);

  const saveConsent = (nextConsent) => {
    const normalizedConsent = createConsentState(nextConsent);
    const nextStoredConsent = createStoredConsent(normalizedConsent);
    writeStoredConsent(nextStoredConsent);
    setStoredConsent(nextStoredConsent);
    setIsSettingsOpen(false);
  };

  const value = useMemo(
    () => ({
      consent,
      hasAnswered,
      isBannerOpen: !hasAnswered,
      isSettingsOpen,
      openSettings: () => setIsSettingsOpen(true),
      closeSettings: () => setIsSettingsOpen(false),
      acceptAll: () =>
        saveConsent({
          analytics: true,
          embeds: true,
          marketing: true,
        }),
      rejectAll: () => saveConsent(defaultOptionalConsent),
      savePreferences: (preferences) => saveConsent(preferences),
      resetConsent: () => {
        clearStoredConsent();
        setStoredConsent(null);
        setIsSettingsOpen(false);
      },
      canUse: (category) => Boolean(consent[category]),
    }),
    [consent, hasAnswered, isSettingsOpen],
  );

  return <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>;
}

export function useConsent() {
  const value = useContext(ConsentContext);

  if (!value) {
    throw new Error("useConsent must be used inside ConsentProvider");
  }

  return value;
}
