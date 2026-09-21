# Качване на сайта в ALL-INKL (KAS)

Сайтът е подготвен за `https://physiotherapie-praxis-nordheide.de/` в корена на домейна. Ако ще използвате друг домейн или поддиректория, преди build сменете адресите в `src/data/seo.js`, `index.html`, `public/robots.txt`, `public/sitemap.xml` и HTTPS адреса в `public/.htaccess` (за поддиректория е нужна и промяна на `base` във `vite.config.js`).

## Стъпка по стъпка

1. Влезте в [KAS](https://kas.all-inkl.com/). От **Domain** проверете, че `physiotherapie-praxis-nordheide.de` е добавен. При редакция на домейна вижте **Ziel / Webspace**: той трябва да сочи към папката, в която ще качите сайта. Самата папка не се показва в URL. Запишете точния път; не гадайте по името на папката.
2. Проверете DNS на домейна. Ако е при друг регистратор, насочете го към ALL-INKL според данните на вашия акаунт. Не променяйте MX записите на пощата без план за миграция. Изчакайте домейнът да сочи към ALL-INKL.
3. В **Domain → редактиране → SSL-Schutz → bearbeiten** активирайте Let's Encrypt за домейна. Изчакайте `https://physiotherapie-praxis-nordheide.de/` да се отваря със сертификат, преди да качите `.htaccess`: той пренасочва HTTP към HTTPS. Възможността за Let's Encrypt зависи от тарифата и от DNS насочването.
4. На своя компютър, в папката на проекта, изпълнете:

   ```powershell
   npm ci
   npm run build
   ```

   Готовите файлове са в `dist/`. При следващо обновяване обикновено е достатъчно `npm run build`.
5. В KAS отворете **FTP** за данните за вход. Свържете се с FileZilla чрез шифрована FTP връзка или използвайте WebFTP. В дясната част отворете точно папката, зададена като **Ziel / Webspace** в стъпка 1. Ако там има стар сайт, направете резервно копие преди подмяната.
6. Качете **съдържанието** на `dist/`, а не папката `dist` като подпапка. В целевата папка трябва да стоят `index.html`, `.htaccess`, `assets/`, `images/`, `favicon.png`, `robots.txt` и `sitemap.xml`. Уверете се, че FTP клиентът показва и качва скрития файл `.htaccess`. Не качвайте `src/`, `node_modules/`, `package.json` или `.git/`.
7. Проверете в браузър началната страница, `https://physiotherapie-praxis-nordheide.de/leistungen`, `/kontakt`, `/impressum`, `/datenschutz` и `/agb`. Отворете някоя подстраница директно и натиснете Refresh. Ако получите 404, проверете `.htaccess` и дали е качен в правилната папка.
8. Проверете `https://physiotherapie-praxis-nordheide.de/robots.txt`, `/sitemap.xml`, логото и изображенията. Опитайте и `http://physiotherapie-praxis-nordheide.de/`: трябва да пренасочи към HTTPS. Ако искате да използвате и `www`, настройте го като отделен домейн/пренасочване към основния без `www`.

## Важно при публикуване

- Приложението е статичен Vite build. На сървъра не са нужни Node.js, `npm` или база данни.
- React Router използва браузърни адреси. `dist/.htaccess` връща `index.html` за маршрутите, но оставя реалните файлове и папки непроменени.
- Адресите в SEO метаданните и sitemap сочат към домейна без `www`. При друг основен домейн ги обновете преди build.
- За нова версия повторете build и качете обновеното съдържание на `dist/`. Проверете дали остарелите файлове в `assets/` не се ползват, преди да ги премахнете.

## Официални инструкции

- [ALL-INKL: Domain → Einstellungen Übersicht](https://all-inkl.com/wichtig/anleitungen/kas/domain/edit-settings/settings-overview_503.html)
- [ALL-INKL: Let's Encrypt сертификат](https://all-inkl.com/wichtig/anleitungen/kas/ssl-schutz-ssl-einstellungen/ssl-zertifikat/einbindung-let-s-encrypt-zertifikat_470.html)
- [ALL-INKL: FileZilla качване](https://all-inkl.com/wichtig/anleitungen/programmes/ftp/filezilla-version-3/connecter-et-tlcharger_27.html)
