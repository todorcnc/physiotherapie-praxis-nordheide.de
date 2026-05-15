export const legalOwner = {
  practice: "Physiotherapie Nordheide",
  owner: "Petar Hrisimov",
  street: "Neuherbergstraße 100",
  city: "80937 München",
  phone: "089 461 376 43",
  email: "kontakt@physiotherapie-praxis-nordheide.de",
};

export const legalPages = {
  impressum: {
    eyebrow: "Rechtliches",
    title: "Impressum",
    intro: "Angaben gemäß den gesetzlichen Informationspflichten.",
    sections: [
      {
        title: "Anbieter und Verantwortlicher",
        paragraphs: [legalOwner.practice, legalOwner.owner, legalOwner.street, legalOwner.city],
      },
      {
        title: "Kontakt",
        paragraphs: [`Telefon: ${legalOwner.phone}`, `E-Mail: ${legalOwner.email}`],
      },
      {
        title: "Praxisbezeichnung",
        paragraphs: ["Praxis für Physiotherapie Nordheide in München"],
      },
      {
        title: "Haftung für Inhalte",
        paragraphs: [
          "Die Inhalte dieser Website wurden mit Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.",
        ],
      },
      {
        title: "Haftung für Links",
        paragraphs: [
          "Diese Website kann Links zu externen Websites Dritter enthalten. Auf deren Inhalte haben wir keinen Einfluss. Für diese fremden Inhalte übernehmen wir keine Gewähr.",
        ],
      },
    ],
  },
  datenschutz: {
    eyebrow: "Datenschutz",
    title: "Datenschutzerklärung",
    intro:
      "Wir freuen uns über Ihr Interesse an unserer Website. Der Schutz Ihrer persönlichen Daten ist uns sehr wichtig. Nachfolgend informieren wir Sie über die Verarbeitung personenbezogener Daten auf dieser Website gemäß Art. 13 DSGVO.",
    sections: [
      {
        title: "1. Verantwortlicher",
        paragraphs: [
          legalOwner.practice,
          legalOwner.owner,
          legalOwner.street,
          legalOwner.city,
          `E-Mail: ${legalOwner.email}`,
          `Telefon: ${legalOwner.phone}`,
        ],
      },
      {
        title: "2. Zugriffsdaten und Hosting",
        paragraphs: [
          "Beim Besuch dieser Website werden automatisch Informationen allgemeiner Natur erfasst, sogenannte Server-Logfiles. Diese Informationen beinhalten zum Beispiel den Browsertyp, das verwendete Betriebssystem, den Domainnamen Ihres Internet-Service-Providers, die IP-Adresse und ähnliche technische Daten.",
          "Zweck der Verarbeitung ist die Sicherstellung eines reibungslosen Verbindungsaufbaus der Website, Systemsicherheit und technische Administration.",
          "Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.",
        ],
      },
      {
        title: "3. Kontaktanfragen",
        paragraphs: [
          "Wenn Sie uns Anfragen zukommen lassen, werden Ihre Angaben inklusive der von Ihnen angegebenen Kontaktdaten zwecks Bearbeitung und für den Fall von Anschlussfragen gespeichert.",
          "Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO zur Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen.",
        ],
      },
      {
        title: "4. Google Maps",
        paragraphs: [
          "Diese Seite nutzt über eine API den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.",
          "Beim Aufruf von Google Maps können personenbezogene Daten, zum Beispiel die IP-Adresse, an Google übertragen werden.",
          "Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO. Mehr Informationen finden Sie in der Datenschutzerklärung von Google: https://www.google.com/policies/privacy",
        ],
      },
      {
        title: "5. Cookies",
        paragraphs: [
          "Unsere Website verwendet technisch notwendige Cookies, die für den Betrieb der Seite erforderlich sind.",
          "Optional können funktionale Cookies, zum Beispiel für eingebettete Karten, verwendet werden. Diese werden nur mit Ihrer Zustimmung geladen.",
          "Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO bei Einwilligung und Art. 6 Abs. 1 lit. f DSGVO bei berechtigtem Interesse.",
        ],
      },
      {
        title: "6. Ihre Rechte",
        paragraphs: [
          "Sie haben das Recht auf Auskunft über Ihre gespeicherten Daten, Berichtigung unrichtiger Daten, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit, Widerspruch gegen die Verarbeitung sowie Beschwerde bei einer Aufsichtsbehörde.",
          "Rechtsgrundlagen: Art. 15, 16, 17, 18, 20 und 21 DSGVO.",
        ],
      },
      {
        title: "7. Änderungen dieser Datenschutzerklärung",
        paragraphs: [
          "Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen, um sie aktuellen rechtlichen Anforderungen anzupassen.",
        ],
      },
    ],
  },
  agb: {
    eyebrow: "Rechtliches",
    title: "Allgemeine Geschäftsbedingungen",
    intro: "Diese Allgemeinen Geschäftsbedingungen gelten für Leistungen und Terminvereinbarungen der Physiotherapie Nordheide.",
    sections: [
      {
        title: "1. Geltungsbereich",
        paragraphs: [
          "Diese Allgemeinen Geschäftsbedingungen gelten für alle physiotherapeutischen Leistungen, die in der Praxis Physiotherapie Nordheide erbracht werden, sowie für Terminvereinbarungen, unabhängig davon, ob diese persönlich, telefonisch oder online erfolgen.",
        ],
      },
      {
        title: "2. Terminvereinbarung und Terminabsage",
        paragraphs: [
          "Termine gelten als verbindlich, sobald sie mündlich, telefonisch oder online vereinbart wurden.",
          "Sollten Sie einen Termin nicht wahrnehmen können, bitten wir um eine Absage mindestens 24 Stunden im Voraus. Bei kurzfristiger Absage oder Nichterscheinen behalten wir uns vor, eine Ausfallgebühr in Höhe von 60 bis 100 Prozent der geplanten Behandlungskosten zu berechnen, je nach Behandlungsart.",
        ],
      },
      {
        title: "3. Behandlungsvertrag",
        paragraphs: [
          "Der Behandlungsvertrag kommt durch die Terminvereinbarung zwischen dem Patienten und der Praxis zustande. Die Behandlung erfolgt nach den allgemein anerkannten fachlichen Standards der Physiotherapie.",
        ],
      },
      {
        title: "4. Abrechnung und Zahlungsbedingungen",
        paragraphs: [
          "Die Abrechnung erfolgt entweder auf Grundlage einer ärztlichen Verordnung oder als Selbstzahlerleistung.",
          "Zahlungen sind direkt nach der Behandlung oder nach Rechnungserhalt fällig, sofern nichts anderes vereinbart wurde.",
        ],
      },
      {
        title: "5. Haftung",
        paragraphs: [
          "Die Haftung der Praxis ist auf Vorsatz und grobe Fahrlässigkeit beschränkt. Für Schäden, die durch unsachgemäße Mitwirkung des Patienten entstehen, wird keine Haftung übernommen.",
          "Bitte informieren Sie uns vor Beginn der Behandlung über bestehende gesundheitliche Einschränkungen oder Risiken.",
        ],
      },
      {
        title: "6. Datenschutz",
        paragraphs: [
          "Die im Rahmen der Behandlung erhobenen personenbezogenen Daten werden vertraulich behandelt und gemäß der Datenschutzerklärung verarbeitet. Eine Weitergabe an Dritte erfolgt nicht ohne ausdrückliche Einwilligung.",
        ],
      },
      {
        title: "7. Salvatorische Klausel",
        paragraphs: [
          "Sollten einzelne Bestimmungen dieser AGB ganz oder teilweise unwirksam sein, so bleibt die Wirksamkeit der übrigen Bestimmungen unberührt. Anstelle der unwirksamen Regelung tritt die gesetzliche Regelung.",
        ],
      },
      {
        title: "8. Gerichtsstand",
        paragraphs: ["Gerichtsstand ist, soweit gesetzlich zulässig, der Sitz der Praxis: München, Deutschland."],
      },
    ],
  },
};
