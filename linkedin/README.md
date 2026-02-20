# 💼 Jour 2 — Clone LinkedIn

> **Challenge #2** de la série *Clone des 5 Grands Réseaux Sociaux*  
> Reproduire l'interface mobile de **LinkedIn** avec React Native & Expo.

---

## 📋 Description

Ce projet est un clone fonctionnel de l'interface LinkedIn. Il reproduit les écrans principaux du réseau social professionnel : le fil d'actualité, la mise en relation, les offres d'emploi, les posts et le profil utilisateur.

---

## ✅ Fonctionnalités Implémentées

### Navigation
- [x] Bottom Tab Navigation (Home, Mon Réseau, Publications, Emplois, Profil)
- [x] Header avec logo LinkedIn et icônes de navigation
- [x] Icône de messagerie

### Écran Accueil (Feed)
- [x] Stories / Activité en haut
- [x] Cards de publications avec like, commentaire, partage
- [x] Bouton de création de post
- [x] Avatar de l'utilisateur connecté
- [x] Indicateur de connexions en ligne

### Écran Mon Réseau
- [x] Invitations reçues en attente
- [x] Suggestions de personnes à contacter
- [x] Bouton Se connecter / Ignorer

### Écran Publications
- [x] Formulaire de création de post
- [x] Sélection d'image, vidéo, document
- [x] Sélection de l'audience

### Écran Emplois
- [x] Recommandations d'emploi
- [x] Filtres par lieu, type de poste
- [x] Cards d'offre avec logo entreprise

### Écran Profil
- [x] Bannière et photo de profil
- [x] Titre, entreprise actuelle, localisation
- [x] Résumé / À propos
- [x] Section Expériences
- [x] Section Formations
- [x] Section Compétences

---

## 🛠️ Stack Technique

| Outil            | Version   | Usage                        |
|------------------|-----------|------------------------------|
| React Native     | -         | Framework mobile             |
| Expo             | SDK 52    | Toolchain & build            |
| Expo Router      | v3        | Navigation fichier-based     |
| TypeScript       | -         | Typage statique              |
| NativeWind       | -         | Styling Tailwind             |
| HeroUI Native    | beta      | Composants UI                |

---

## 📁 Structure du Projet

```
linkedin/
├── app/
│   ├── (tabs)/
│   │   ├── _layout.tsx      # Tab Navigator
│   │   ├── index.tsx        # Feed
│   │   ├── network.tsx      # Mon Réseau
│   │   ├── post.tsx         # Créer un post
│   │   ├── jobs.tsx         # Emplois
│   │   └── profile.tsx      # Profil
├── components/
│   ├── PostCard.tsx          # Card de publication
│   ├── PersonCard.tsx        # Card de contact suggéré
│   └── JobCard.tsx           # Card d'offre d'emploi
├── constants/
│   └── theme.ts             # Palette LinkedIn
├── data/
│   └── posts.ts, jobs.ts, profile.ts
└── global.css               # Variables CSS thème LinkedIn
```

---

## 🚀 Démarrage

```bash
cd linkedin
npm install
npx expo start
```

---

## 🎨 Palette de Couleurs LinkedIn

| Rôle              | Couleur              |
|-------------------|----------------------|
| Primaire (Bleu)   | `#0A66C2`            |
| Fond principal    | `#F3F2EF`            |
| Texte principal   | `#000000`            |
| Texte secondaire  | `#666666`            |
| Blanc card        | `#FFFFFF`            |
| Séparateur        | `#E0E0E0`            |

---

## 🧠 Défis & Solutions

| Défi | Solution |
|------|----------|
| Intégration des couleurs LinkedIn via thème global | `global.css` + `constants/theme.ts` avec variables CSS |
| Feed scrollable avec cards variées | `FlatList` avec composants distincts selon le type |
| Profil avec sections pliables | `useState` + animations de hauteur |
| Harmonisation du thème | Classes sémantiques via NativeWind |

---

## 📅 Date

**Jour 2** — Réalisé le `20 Février 2026`

---

*Partie de la série [Challenge Clone 5 Réseaux Sociaux](../README.md)*
