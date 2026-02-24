# La Maison du Tatouage (Vertou) — Conception complète Web + App Mobile

## 1) Vision produit & objectif global

Créer une expérience **premium, artistique et rassurante** pour les clients de **La Maison du Tatouage** à Vertou, sur :
- **Site web responsive** (vitrine + e-commerce + espace client),
- **Application mobile iOS/Android** (compte, fidélité, suivi, notifications).

Objectifs business et usage :
1. Faciliter la **prise de rendez-vous via Planity**.
2. Présenter clairement le **salon, les artistes et les services**.
3. Valoriser la qualité (hygiène, expertise, style) avec un univers visuel fort.
4. Fidéliser grâce à un espace **"Mes tatouages" + programme avantages**.
5. Générer du CA additionnel via la **boutique vêtements**.

---

## 2) Identité de marque (UI/UX)

### Direction artistique
- Palette : **Noir profond / Blanc cassé / Gris anthracite** + accent cuivre léger.
- Ambiance : contrastes forts, photos immersives, espaces respirants, composants minimalistes.
- Typographies :
  - Titres : serif moderne (artistique),
  - Corps : sans-serif très lisible (mobile-first).
- Iconographie : fine-line monochrome, cohérente avec l’univers tatouage.

### Ton rédactionnel
- **Accueillant, professionnel, pédagogique**, avec une touche artistique.
- Rassurer sur : hygiène, sécurité, accompagnement, suivi.
- Version initiale : **FR**, architecture prévue pour i18n (ajout EN ultérieur).

---

## 3) Structure de navigation (site + app)

## Navigation principale (menu)
1. Accueil
2. Rendez-vous
3. Le Salon
4. Tatouage
5. Piercing
6. Fidélité / Mes Tatouages
7. Boutique
8. Mon Compte

## Navigation secondaire (app mobile - onglets)
- Accueil
- Réserver
- Portfolio
- Boutique
- Compte

## Raccourcis persistants
- Bouton flottant : **Prendre RDV**
- Header sticky : accès rapide Planity + panier

---

## 4) Wireframes texte + contenus prêts à intégrer

## A. Écran Accueil

### Structure bloc par bloc
1. **Hero plein écran**
   - Image/vidéo salon + artistes en action.
   - Titre fort + baseline.
   - 4 CTA principaux.
2. **Entrées services** (cartes)
   - Tatouage / Piercing / Le Salon / Fidélité.
3. **Section artistes en avant**
   - 3 cartes profils + lien “Voir tous les artistes”.
4. **Preuve sociale**
   - Avis clients + note moyenne.
5. **Rappel Planity**
   - Bloc court horaires/adresse + CTA réserver.

### Textes
- **Titre** : “L’art du tatouage, signé à Vertou.”
- **Accroche** : “Un salon premium où créativité, précision et hygiène se rencontrent pour donner vie à votre projet.”
- **CTA** :
  - “Prendre RDV”
  - “Voir les artistes”
  - “Boutique”
  - “Mon compte”
- **Micro-texte réassurance** : “Consultation personnalisée • Matériel stérile • Accompagnement avant/après séance.”

### Suggestions visuelles
- Façade du salon, poste de travail, plans serrés en noir & gris, mur d’esquisses.

### États vides / erreurs
- “Impossible de charger les contenus pour le moment. Réessayez dans quelques instants.”

---

## B. Écran Prise de RDV (Planity)

### Structure
1. Intro + bénéfices réservation en ligne.
2. Bouton principal Planity.
3. Intégration Planity (webview mobile / iframe web).
4. Encart infos pratiques : horaires, adresse, consignes.
5. FAQ rapide RDV.

### Textes
- **Titre** : “Réservez votre rendez-vous en quelques clics.”
- **Paragraphe** : “Choisissez votre prestation, votre artiste et votre créneau directement sur Planity.”
- **CTA** : “Réserver sur Planity”
- **Consignes** :
  - “Merci d’arriver 10 minutes en avance.”
  - “Un acompte peut être demandé selon le projet.”
  - “En cas d’empêchement, merci de prévenir au plus tôt.”

### FAQ exemple
- “Puis-je déplacer mon rendez-vous ?”
- “Combien de temps dure une consultation ?”

### États
- Chargement webview : “Connexion à Planity…”
- Erreur : “Le module de réservation est indisponible. Ouvrir Planity dans le navigateur.”

---

## C. Écran Le Salon (Infos)

### Structure
1. Histoire & vision du salon.
2. Valeurs : créativité, écoute, hygiène stricte.
3. Infos pratiques (adresse Vertou, horaires, accès, parking, contact).
4. Galerie du salon.
5. FAQ générale.

### Textes
- **Titre** : “Bienvenue à La Maison du Tatouage.”
- **Présentation** : “Installé à Vertou, notre salon accueille chaque client avec une approche sur-mesure, dans un cadre soigné et inspirant.”
- **Valeurs** : “Exigence technique, sens artistique, hygiène irréprochable, relation de confiance.”
- **Infos pratiques (placeholder à valider)** :
  - Adresse : “Vertou, Loire-Atlantique”
  - Téléphone : “À compléter”
  - Email : “À compléter”

### FAQ exemple
- “Le tatouage est-il douloureux ?”
- “Comment préparer ma séance ?”
- “Acceptez-vous les mineurs ?”
- “Comment se passe la cicatrisation ?”

### États
- Galerie vide : “Les photos du salon arrivent bientôt.”

---

## D. Écran Tatouage (Infos)

### Structure
1. Introduction service tatouage.
2. Styles proposés (grille).
3. Déroulé de projet en 4 étapes.
4. Conseils préparation & aftercare.
5. Portfolio filtrable.
6. Section “Nos artistes”.
7. Double CTA : réserver / poser une question.

### Textes
- **Titre** : “Votre projet tatouage, de l’idée à l’encrage.”
- **Intro** : “Nous vous accompagnons dans la création d’une pièce unique, adaptée à votre style et à votre peau.”
- **Styles** : Noir & gris, Couleur, Fine line, Lettrage, Floral, Ornemental.
- **Étapes** :
  1) Échange & intentions
  2) Direction artistique
  3) Séance
  4) Suivi cicatrisation
- **CTA** : “Réserver” / “Poser une question”

### Artistes (cartes)
- Nom artiste
- Spécialité
- Bio courte (2 lignes)
- Liens Instagram/portfolio
- CTA : “Voir ses réalisations”

### États
- Portfolio vide : “Aucun projet dans cette catégorie pour le moment.”

---

## E. Écran Piercing (Infos)

### Structure
1. Présentation piercing.
2. Types disponibles.
3. Matériaux & sécurité.
4. Prix “à partir de”.
5. FAQ piercing.
6. CTA réserver.

### Textes
- **Titre** : “Piercing : esthétique, précision et hygiène.”
- **Intro** : “Des prestations réalisées avec du matériel stérile et des bijoux adaptés à votre morphologie.”
- **Matériaux** : “Titane implant grade, acier chirurgical selon zone et indication.”
- **Prix** : “À partir de XX € (selon zone et bijou).”
- **Avertissement** : “Un contrôle préalable est effectué pour garantir votre sécurité.”
- **CTA** : “Réserver”

### FAQ exemple
- “Quel bijou choisir pour une première pose ?”
- “Combien de temps dure la cicatrisation ?”
- “Quand puis-je changer mon bijou ?”

### États
- “Aucun créneau piercing disponible cette semaine.”

---

## F. Fidélité / Mes Tatouages

### Structure (client)
1. Connexion / inscription.
2. Profil (nom, email, téléphone optionnel, consentement RGPD).
3. Espace “Mes tatouages” (cards).
4. Ajout photo (upload mobile).
5. Demande de retouche / suivi.
6. Programme fidélité (points, avantages, historique).

### Structure (admin salon)
1. Recherche client.
2. Ajout photo tatouage au compte client.
3. Modération et validation des images.
4. Gestion des demandes retouche/suivi.

### Textes
- **Titre** : “Votre parcours tatouage, conservé en toute sécurité.”
- **Accroche** : “Retrouvez vos projets, suivez vos cicatrisations et cumulez des avantages.”
- **CTA** :
  - “Créer mon compte”
  - “Ajouter une photo”
  - “Demander une retouche”
- **Fidélité** :
  - “Mes points : 240”
  - “Prochain avantage : -10% Flash Day à 300 points”

### États / erreurs
- Vide : “Aucun tatouage ajouté pour le moment.”
- Upload refusé : “Format non pris en charge. Utilisez JPG, PNG ou HEIC.”
- Trop volumineux : “Image trop lourde. Taille max : 10 Mo.”
- Validation : “Votre photo est en cours de validation par l’équipe.”

---

## G. Boutique vêtements

### Structure
1. Listing produits (filtres : type, taille, prix, dispo).
2. Fiche produit.
3. Panier.
4. Paiement Stripe.
5. Livraison / Click & Collect.
6. Confirmation + suivi commande.

### Textes
- **Titre** : “Collection La Maison du Tatouage.”
- **Accroche** : “Des pièces textiles pensées pour prolonger l’univers du salon.”
- **Fiche produit** :
  - “T-shirt Signature — Coton épais 240g”
  - “Coupe unisexe, sérigraphie haute tenue.”
  - “Conseil taille : prendre votre taille habituelle.”
- **CTA** :
  - “Ajouter au panier”
  - “Payer en sécurité”
  - “Retrait au salon”

### Emails transactionnels
- Confirmation commande
- Paiement validé
- Commande expédiée / prête en retrait

### États
- Panier vide : “Votre panier est vide. Découvrez nos nouveautés.”
- Rupture : “Produit momentanément indisponible.”

---

## 5) Recommandations techniques (stack réaliste)

## Frontend
- **Web** : Next.js (App Router) + TypeScript + Tailwind + shadcn/ui.
- **Mobile iOS/Android** : React Native (Expo) + TypeScript.
- Design system partagé (tokens couleur/typo/espacements).

## Backend & données
- **Supabase** :
  - Auth (email/password, OAuth Google/Apple optionnel),
  - PostgreSQL (profils, tatouages, points fidélité, commandes),
  - Storage (photos tatouages, visuels boutique),
  - Row Level Security (isolation stricte par utilisateur).
- Edge functions pour logique métier (points fidélité, webhooks Stripe, modération).

## Intégrations clés
- **Planity** : bouton profond + webview/iframe fallback.
- **Stripe** : Checkout + webhooks (succès paiement, remboursement, stock sync).
- **Email** : Resend / Sendgrid pour confirmations.
- **Analytics** : PostHog ou GA4 (clics Planity, tunnel achat, engagement portfolio).
- **Push notifications (option)** : Expo Notifications / Firebase Cloud Messaging.

## Schéma de données (simplifié)
- users(id, email, full_name, phone, consent_rgpd, created_at)
- tattoo_entries(id, user_id, artist_id, photo_url, body_area, style, session_date, notes, status)
- loyalty_wallets(user_id, points_total, tier)
- loyalty_events(id, user_id, type, points_delta, source)
- products(id, name, price_cents, stock, sizes, images)
- orders(id, user_id, total_cents, status, delivery_mode, stripe_session_id)

---

## 6) Conformité, sécurité, accessibilité, performance

## RGPD
- Consentement explicite pour compte et photos.
- Politique confidentialité + mentions légales + cookies.
- Export/suppression de compte en self-service.
- Durée de conservation configurée (photos et logs).

## Sécurité
- Hash mot de passe (géré par auth provider), JWT courts.
- Validation upload (type MIME, antivirus optionnel, limite taille).
- Modération images avant publication (admin workflow).
- Protection anti-spam (rate limit, captcha sur formulaires sensibles).

## Accessibilité
- Contraste AA minimum.
- Corps de texte min 16px mobile.
- Focus visibles, labels explicites, alt text images.
- Navigation clavier complète sur web.

## Performance
- Compression d’images côté upload.
- Lazy loading galerie/portfolio.
- CDN + cache assets.
- Préchargement intelligent des pages à fort trafic (Accueil, RDV).

---

## 7) Checklist de lancement

## Produit & contenu
- [ ] Tous les textes FR validés (ton premium + rassurant).
- [ ] Photos salon/artistes optimisées et cohérentes.
- [ ] FAQ validées juridiquement et opérationnellement.

## Technique
- [ ] Flux Planity opérationnel (web + mobile).
- [ ] Auth complète (inscription, reset mdp, suppression compte).
- [ ] Upload “Mes tatouages” avec modération admin.
- [ ] Stripe (test puis prod) + emails transactionnels.
- [ ] Stock boutique + variantes tailles testés.

## QA
- [ ] Tests unitaires (logique fidélité, panier).
- [ ] Tests E2E (réservation, achat, ajout photo).
- [ ] Tests accessibilité (Lighthouse/axe).
- [ ] Tests performance (Core Web Vitals).

## Légal & stores
- [ ] RGPD : consentements, registre traitements, CGU/CGV.
- [ ] Pages légales (mentions, confidentialité, cookies).
- [ ] Publication App Store / Google Play (captures, descriptions, politique).

## SEO & acquisition
- [ ] SEO local : “tatouage Vertou”, “piercing Vertou”.
- [ ] Fiche Google Business Profile alignée.
- [ ] Tracking conversions (Planity + boutique) configuré.

---

## 8) Roadmap recommandée (MVP → V2)

### MVP (8 à 10 semaines)
- Site complet + app mobile (compte, mes tatouages, fidélité de base)
- Planity intégré
- Boutique avec Stripe

### V1.1
- Push notifications (rappels RDV, nouveautés)
- Codes promo avancés
- Avis clients vérifiés

### V2
- Personnalisation des recommandations (styles/artistes)
- Programme fidélité multi-niveaux
- Version EN complète
