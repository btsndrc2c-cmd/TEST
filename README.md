# La Maison du Tatouage — V1 Web App

Cette V1 livre une application web premium et interactive pour **La Maison du Tatouage (Vertou)**.

## Fonctionnalités V1

- Navigation par sections : Accueil, RDV, Salon, Tatouage, Piercing, Fidélité, Boutique, Compte, Admin.
- RDV Planity avec tracking analytics local (`planityClicks`).
- Portfolio tatouage filtrable par style.
- Espace compte client avec consentement RGPD.
- Espace "Mes tatouages" avec upload image depuis téléphone/desktop + compression locale.
- Workflow de modération admin (pending → approved/rejected).
- Programme fidélité (points basés sur tatouages validés).
- Boutique avec variantes taille, panier, code promo `FLASH10`, mode livraison/click&collect.
- Checkout simulé Stripe avec tracking local (`checkouts`).
- RGPD MVP : export des données et suppression compte/données.
- Préparation i18n FR/EN (beta).

## Lancer

```bash
python3 -m http.server 4173
```

Puis ouvrir : <http://localhost:4173>

## Notes importantes

- Stockage : `localStorage` (MVP/V1 locale)
- Paiement : simulation (pas d’API Stripe réelle)
- Admin : clé de démo `LMDT-ADMIN-2026`
- URL Planity : à remplacer par l’URL officielle du salon
