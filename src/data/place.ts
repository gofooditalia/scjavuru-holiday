// ✏️ Dati della scheda Google Maps / Google Business Profile
// Scheda: "Scjavuru of Home Dominik" — https://maps.app.goo.gl/7oTqxncvfUE3ea5z9

// CID della scheda: link stabile che apre direttamente il profilo su Google Maps
export const GOOGLE_MAPS_CID = '4841584683133220459';
export const GOOGLE_MAPS_URL = `https://www.google.com/maps?cid=${GOOGLE_MAPS_CID}`;

// Feature ID della scheda (dal link di Google Maps), usato per l'embed
export const GOOGLE_MAPS_FID = '0x1319e5031725b38d:0x4330c39e1420b66b';

// Posizione del segnaposto sulla scheda
export const GEO = { lat: 38.1183387, lon: 13.3631736 };

export const PLACE = {
  name: 'Scjavuru of Home Dominik',
  streetAddress: 'Via Maccherronai',
  postalCode: '90133',
  locality: 'Palermo',
  region: 'PA',
  country: 'IT',
};

// Mappa Google incorporata che mostra la scheda (gratuita, nessuna API key)
export function googleMapsEmbedUrl(lang: 'it' | 'en') {
  const name = encodeURIComponent(PLACE.name);
  return (
    'https://www.google.com/maps/embed?pb=' +
    `!1m18!1m12!1m3!1d1200!2d${GEO.lon}!3d${GEO.lat}` +
    '!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1' +
    `!3m3!1m2!1s${GOOGLE_MAPS_FID}!2s${name}` +
    `!5e0!3m2!1s${lang}!2sit`
  );
}
