# BnB Astro Template

Template per siti web di case vacanze e B&B.  
**Stack:** Astro v6 · Tailwind v4 · Bun · Formspree · GLightbox · Google Maps

## Funzionalità

- Bilingue IT/EN con routing i18n nativo Astro
- Header sticky con effetto trasparente → bianco allo scroll
- Gallery fotografica con lightbox (GLightbox)
- 3 camere con card Airbnb + badge "In arrivo"
- Form prenotazione con date (Formspree AJAX)
- Floating contact button (Formspree Formbutton)
- Mappa Google Maps collegata alla scheda (src/data/place.ts)
- Sezione prezzi: Airbnb + sconto email
- SEO: meta, hreflang, og:image
- Deploy-ready: Vercel, Netlify, GitHub Pages

---

## Avvio rapido

```bash
bun install
bun run dev
```

Il sito sarà disponibile su `http://localhost:4321/`

---

## Personalizzazione

Tutti i punti da modificare sono marcati con ✏️ nel codice.

### 1. Testi e traduzioni
Modifica `src/i18n/it.ts` e `src/i18n/en.ts`:
- Nome struttura, città, descrizioni
- Indirizzo
- Prezzi e stagioni
- Testi delle card camere

### 2. Foto
Copia i tuoi file `.jpg` in `public/images/` e aggiorna la lista in `src/components/Gallery.astro`:
```ts
const images = ['foto-01', 'foto-02', 'foto-03'];
```

### 3. Camere e Airbnb
In `src/components/Booking.astro` aggiorna nomi e link:
```ts
const rooms = [
  { name: 'Camera 1', airbnb: 'https://www.airbnb.it/rooms/XXXXXXXXX', ... },
];
```

### 4. Mappa (Google Maps)
Tutti i dati della scheda Google sono in `src/data/place.ts`:
```ts
export const GOOGLE_MAPS_CID = '4841584683133220459';                       // ✏️ CID della scheda
export const GOOGLE_MAPS_FID = '0x1319e5031725b38d:0x4330c39e1420b66b';     // ✏️ feature ID (dal link Maps)
export const GEO = { lat: 38.1183387, lon: 13.3631736 };                    // ✏️ segnaposto
```
Il CID e il feature ID si ricavano dal link completo della scheda (`...!1s0x<FID_A>:0x<FID_B>...`):
il CID è il secondo esadecimale convertito in decimale. La mappa incorporata non richiede API key.

### 5. Formspree (form di contatto)
1. Crea account su [formspree.io](https://formspree.io)
2. Crea un nuovo form
3. Aggiorna l'endpoint in `src/components/ContactForm.astro` e `src/layouts/Layout.astro`

### 6. Dominio e SEO
In `astro.config.mjs`:
```js
site: 'https://tuodominio.it',
```
In `src/layouts/Layout.astro`:
```ts
const canonicalIt = 'https://tuodominio.it/';
const canonicalEn = 'https://tuodominio.it/en/';
```

---

## Struttura del progetto

```
src/
├── i18n/
│   ├── it.ts          ← testi italiano  ✏️
│   ├── en.ts          ← testi inglese   ✏️
│   ├── types.ts       ← interfacce TypeScript
│   └── index.ts       ← helper t()
├── layouts/
│   └── Layout.astro   ← HTML base, SEO, Formbutton  ✏️
├── components/
│   ├── Header.astro
│   ├── Hero.astro
│   ├── Gallery.astro  ← lista foto  ✏️
│   ├── Booking.astro  ← camere e link Airbnb  ✏️
│   ├── Map.astro      ← coordinate GPS  ✏️
│   ├── Prices.astro
│   ├── Footer.astro
│   └── ContactForm.astro  ← endpoint Formspree  ✏️
└── pages/
    ├── index.astro        ← homepage italiana
    └── en/index.astro     ← homepage inglese
public/
└── images/            ← metti qui le foto .jpg  ✏️
```

---

## Deploy

### Vercel (consigliato)
1. Connetti il repo su [vercel.com](https://vercel.com)
2. Framework preset: **Astro**
3. Build command: `bun run build`
4. Ogni push su `main` fa deploy automatico

### Netlify
1. Connetti il repo su [netlify.com](https://netlify.com)
2. Build command: `bun run build`
3. Publish directory: `dist`

---

## Realizzato con

[Astro](https://astro.build) · [Tailwind CSS](https://tailwindcss.com) · [Bun](https://bun.sh) · [Formspree](https://formspree.io) · [GLightbox](https://biati-digital.github.io/glightbox/)
