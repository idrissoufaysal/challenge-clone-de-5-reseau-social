# 📘 Jour 3 — Clone Facebook

> **Challenge #3** de la série *Clone des 5 Grands Réseaux Sociaux*  
> Reproduire l'interface mobile de **Facebook** avec React Native & Expo.

---

## 📋 Description

Ce projet est un clone de l'interface mobile Facebook. Il cible les écrans principaux de l'application : le fil d'actualité avec les stories et publications, les notifications, le menu latéral et la messagerie (Messenger).

---

## ✅ Fonctionnalités Implémentées

### Navigation
- [x] Bottom Tab Navigation (Feed, Amis, Watch, Marketplace, Menu)
- [x] Header avec logo, barre de recherche et icônes d'action

### Écran Feed
- [x] Stories horizontales avec bouton d'ajout
- [x] Bouton de création de post (photo, story, live)
- [x] Cards de publications avec réactions (❤️ 👍 😂 ...)
- [x] Compteur de réactions et commentaires
- [x] Publications sponsorisées

### Écran Amis
- [x] Demandes d'amis reçues
- [x] Suggestions de personnes à connaître
- [x] Bouton Confirmer / Supprimer / Ajouter

### Composants
- [x] StoryCard — affichage des stories
- [x] PostCard — publication complète
- [x] ReactionBar — barre de réactions
- [x] FriendCard — suggestion d'ami

---

## 🛠️ Stack Technique

| Outil            | Version   | Usage                        |
|------------------|-----------|------------------------------|
| React Native     | -         | Framework mobile             |
| Expo             | SDK 52    | Toolchain & build            |
| Expo Router      | v3        | Navigation fichier-based     |
| TypeScript       | -         | Typage statique              |
| NativeWind       | -         | Styling Tailwind             |

---

## 📁 Structure du Projet

```
facebook/
├── app/
│   ├── (tabs)/
│   │   ├── _layout.tsx      # Tab Navigator
│   │   ├── index.tsx        # Feed
│   │   ├── friends.tsx      # Amis
│   │   ├── watch.tsx        # Vidéos Watch
│   │   └── menu.tsx         # Menu latéral
├── components/
│   ├── StoryCard.tsx         # Card Story Facebook
│   ├── PostCard.tsx          # Publication avec réactions
│   └── FriendCard.tsx        # Card de suggestion d'ami
├── data/
│   └── posts.ts, stories.ts
└── assets/
```

---

## 🚀 Démarrage

```bash
cd facebook
npm install
npx expo start
```

---

## 🎨 Palette de Couleurs Facebook

| Rôle              | Couleur              |
|-------------------|----------------------|
| Primaire (Bleu)   | `#1877F2`            |
| Fond principal    | `#F0F2F5`            |
| Texte principal   | `#1C1E21`            |
| Texte secondaire  | `#65676B`            |
| Blanc card        | `#FFFFFF`            |
| Icône active      | `#1877F2`            |
| Séparateur        | `#CED0D4`            |

---

## 🧠 Défis & Solutions

| Défi | Solution |
|------|----------|
| Système de réactions (like, love, haha...) | Long press → menu de réactions animé |
| Stories horizontales scrollables | `FlatList` horizontal |
| Feed mixte (posts, publicités, suggestions) | `FlatList` avec `keyExtractor` + item types |

---

## 📅 Date

**Jour 3** — En cours le `20 Février 2026`

---

*Partie de la série [Challenge Clone 5 Réseaux Sociaux](../README.md)*
