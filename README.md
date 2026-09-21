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

## Deployment bei ALL-INKL

```bash
npm ci
npm run build
```

Nur den Inhalt von `dist/` in das Webspace-Zielverzeichnis hochladen. Der Build kopiert `public/.htaccess` nach `dist/.htaccess`, damit HTTPS und direkte Aufrufe von React-Unterseiten funktionieren.

Die Schritte in KAS und per FTP sind in [DEPLOY_ALL_INKL.md](DEPLOY_ALL_INKL.md) beschrieben.
