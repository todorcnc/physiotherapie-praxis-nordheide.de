# Physiotherapie Praxis Nordheide

Neuer Frontend-Start fuer einen modernen Praxisauftritt mit:

- Vite
- React
- MUI
- React Router

## Seitenstruktur

- Startseite
- Ueber uns
- Leistungen
- Kontakt

## Inhaltliche Grundlage

Die Basistexte und Kontaktdaten wurden aus der bisherigen Website uebernommen und fuer einen moderneren Auftritt neu strukturiert.

## Start

Nach Freigabe der Paketinstallation:

```bash
npm install
npm run dev
```

## GitHub Pages

Die Konfiguration ist jetzt automatisch:

```bash
npm run dev
```

Dabei gilt:

- `npm run dev` nutzt automatisch `/`
- `npm run build` nutzt automatisch den Pfad aus `homepage` in `package.json`

Fuer GitHub Pages muss also nur der `homepage`-Wert in [package.json](E:\git_projects\physiotherapie-praxis-nordheide.de\package.json:1) korrekt sein. Bildpfade und Router-Basename werden ueber `import.meta.env.BASE_URL` gesteuert, damit Assets lokal und unter dem GitHub-Pages-Subpfad korrekt funktionieren.

Zusatz fuer GitHub Pages:

- Direkte Aufrufe oder Refreshes auf Unterseiten wie `/kontakt` brauchen eine SPA-Fallback-Seite
- Dafür gibt es jetzt eine [404.html](E:\git_projects\physiotherapie-praxis-nordheide.de\public\404.html:1), die GitHub Pages automatisch zur React-App zurückleitet
