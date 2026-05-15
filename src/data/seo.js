import { practiceInfo, services } from "./siteContent";

export const siteUrl = "https://todorcnc.github.io/physiotherapie-praxis-nordheide.de";

export const seoDefaults = {
  siteName: practiceInfo.name,
  locale: "de_DE",
  image: `${siteUrl}/images/Rezeption.png`,
  twitterCard: "summary_large_image",
};

export const pageSeo = {
  home: {
    path: "/",
    title: "Physiotherapie Praxis Nordheide | Physiotherapie in Muenchen",
    description:
      "Physiotherapie Praxis Nordheide in Muenchen: individuelle Physiotherapie, Krankengymnastik und persoenliche Betreuung im Aerztehaus Nordheide.",
  },
  about: {
    path: "/ueber-uns",
    title: "Ueber uns | Physiotherapie Praxis Nordheide",
    description:
      "Lernen Sie die Physiotherapie Praxis Nordheide kennen: moderne Behandlungsraeume, persoenliche Betreuung und ein klarer physiotherapeutischer Therapieansatz.",
  },
  services: {
    path: "/leistungen",
    title: "Leistungen | Physiotherapie Praxis Nordheide Muenchen",
    description:
      "Uebersicht der physiotherapeutischen Leistungen: Krankengymnastik, Manuelle Therapie, PNF, Lymphdrainage, Waerme- und Kaeltetherapie und weitere Angebote.",
  },
  contact: {
    path: "/kontakt",
    title: "Kontakt & Anfahrt | Physiotherapie Praxis Nordheide",
    description:
      "Kontakt zur Physiotherapie Praxis Nordheide in der Neuherbergstrasse 100, 80937 Muenchen. Telefonnummer, E-Mail, Oeffnungszeiten und Anfahrt.",
  },
};

export const seoPages = Object.values(pageSeo);

export function canonicalUrl(path = "/") {
  return `${siteUrl}${path === "/" ? "/" : path}`;
}

export function imageUrl(path) {
  const normalizedPath = String(path).replace(/^\/+/, "");
  return `${siteUrl}/${normalizedPath}`;
}

export function breadcrumbJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: canonicalUrl(item.path),
    })),
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: practiceInfo.name,
    url: canonicalUrl("/"),
    image: imageUrl(practiceInfo.logo),
    logo: imageUrl(practiceInfo.logo),
    telephone: practiceInfo.phone,
    email: practiceInfo.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: practiceInfo.addressLine1,
      postalCode: "80937",
      addressLocality: "Muenchen",
      addressCountry: "DE",
    },
    medicalSpecialty: "Physiotherapie",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "08:00",
        closes: "13:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "14:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "08:00",
        closes: "14:00",
      },
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: practiceInfo.name,
    url: canonicalUrl("/"),
    inLanguage: "de",
  };
}

export function servicesJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "Physiotherapeutische Leistungen",
    url: canonicalUrl(pageSeo.services.path),
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.description,
        provider: {
          "@type": "MedicalBusiness",
          name: practiceInfo.name,
        },
        ...(service.image ? { image: imageUrl(service.image) } : {}),
      },
    })),
  };
}
