# Walkthrough — Hana Prague Guide Modernizace

## Co bylo uděláno

### Nové soubory

- **[styles.css](file:///c:/Users/mbecicka/OneDrive%20-%20ARTEX%20informační%20systémy%20spol.%20s%20r.o/Documents/GitHub/hana/styles.css)** — kompletní moderní CSS (~600 řádků)
  - CSS proměnné pro light/dark mode (26+ proměnných)
  - Hero sekce s obrázkem Prahy na pozadí + gradient overlay
  - Sticky nav s blur efektem (glassmorphism)
  - Pricing karty s gradient hover efektem
  - Testimonials grid (3 sloupce na desktopu)
  - FAQ accordion animace
  - Scroll fade-in animace (IntersectionObserver)
  - Plně responzivní (mobile hamburger, tablet, desktop)
  - Přístupnost (prefers-reduced-motion, focus-visible, skip-link)

- **[script.js](file:///c:/Users/mbecicka/OneDrive%20-%20ARTEX%20informační%20systémy%20spol.%20s%20r.o/Documents/GitHub/hana/script.js)** — JavaScript (~100 řádků)
  - Dark/light mode toggle s LocalStorage persistencí
  - Detekce systémové preference (prefers-color-scheme)
  - Sticky nav shadow při scrollu
  - Hamburger menu na mobilu
  - FAQ accordion (open/close)
  - Scroll animace (fade-in při viewport intersection)

### Upravené soubory

- **[index.html](file:///c:/Users/mbecicka/OneDrive%20-%20ARTEX%20informační%20systémy%20spol.%20s%20r.o/Documents/GitHub/hana/index.html)** (root) — kompletní přepis
- **[hana/index.html](file:///c:/Users/mbecicka/OneDrive%20-%20ARTEX%20informační%20systémy%20spol.%20s%20r.o/Documents/GitHub/hana/hana/index.html)** — synchronizováno s root

## Hlavní změny v HTML

| Oblast | Před | Po |
|---|---|---|
| Header | Prostý `<h1>` + text | Full-screen hero s obrázkem `hrad.png`, CTA tlačítka |
| Navigace | Žádná | Sticky navbar s odkazy + 🌙/☀️ toggle |
| CSS | Inline `<style>` | Externí `styles.css` s CSS proměnnými |
| JavaScript | Žádný | `script.js` (dark mode, animace, FAQ) |
| Barvy | `#5d4037` / `#8d6e63` | `#6B4226` / `#C9956B` / `#D4A84B` (zlatá CTA) |
| Typografie | Open Sans + Lora | **Outfit** (body) + Lora (nadpisy) |
| Testimonials | Nebyly | 3 karty s ★★★★★ hodnocením |
| FAQ | Nebyl | 5 otázek s accordion efektem |
| Ceny | CZK (EUR) | CZK (EUR) — **beze změny dle požadavku** |
| Dark mode | Nebyl | Plný dark mode s přepínačem |
| Footer rok | 2024 | 2025 |

## SEO vylepšení

- **Title:** zaměřen na *"Private Tour Guide Prague"*
- **Meta description:** akcentuje personalizaci a ★★★★★ hodnocení
- **Keywords:** rozšířeny o americké fráze (*female tour guide Prague, off the beaten path, best private tour*)
- **Geo meta tagy:** `geo.region=CZ-10`, `geo.placename=Prague`
- **hreflang:** `en` tag
- **Schema.org:** rozšířeno o `TouristTrip`, `FAQPage`, `AggregateRating`, `openingHours`, `paymentAccepted`
- **Open Graph + Twitter Cards:** aktualizovány texty
- **robots.txt / sitemap.xml:** přesunuty do rootu pro správnou indexaci

## Úklid repozitáře a Git

- **Smazán adresář `hana/`** — Šlo o duplicitní klon repozitáře uvnitř sebe sama (vytvořen 29. 1. 2026). Před smazáním byly unikátní soubory (`robots.txt`, `sitemap.xml`) přesunuty do rootu.
- **Vyřešen Merge Conflict** — V souboru `index.html` byl vyřešen konflikt tak, aby zůstala zachována modernizovaná verze.
- **Force Push na GitHub** — Repozitář byl vyčištěn od starých verzí (`index2.html` až `index6.html`) a synchronizován s čistým stavem.

## Optimalizace obrázků (SEO Výkon)

- **Veškeré obrázky převedeny na WebP** — Všechny vizuální prvky teď používají moderní formát WebP.
- **hrad_hero.webp (165 KB)** — náhrada za 1.4 MB PNG (úspora 88 %).
- **prague_guide.webp (54 KB)** — náhrada za 387 KB JPG (úspora 85 %).
- **hana_winter.webp (22 KB)** — náhrada za 237 KB PNG (úspora 90 %).
- To zásadně zrychlí načítání stránky, zlepší metriky LCP a celkové SEO hodnocení. Staré soubory byly z repozitáře odstraněn.

## Jak ověřit

Stránka běží na **<http://localhost:8080>** (http-server). Zkontroluj:

1. ✅ Hero sekce se zobrazí s obrázkem Hradčan
2. ✅ Sticky nav zůstává nahoře při scrollu
3. ✅ 🌙 přepínač funguje — klikni pro dark mode
4. ✅ Preference se ukládá (refresh stránky zachová téma)
5. ✅ FAQ otázky se otvírají/zavírají klikem
6. ✅ Pricing karty mají hover efekt (gradient + zdvih)
7. ✅ Mobilní hamburger menu funguje (zmenši okno)
