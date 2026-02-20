# 💬 Jour 1 — Clone WhatsApp

> **Challenge #1** de la série *Clone des 5 Grands Réseaux Sociaux*  
> Reproduire l'interface mobile de **WhatsApp** avec React Native & Expo.

---

## 📋 Description

Ce projet est un clone fonctionnel de l'interface WhatsApp. Il reproduit fidèlement les écrans principaux de l'application, incluant la liste des conversations, les stories (statuts), les appels et un écran de chat complet avec gestion des messages.

---

## ✅ Fonctionnalités Implémentées

### Navigation
- [x] Bottom Tab Navigation (Chats, Status, Calls)
- [x] Header avec icônes d'action (recherche, menu)
- [x] Navigation vers un chat individuel

### Écran Chats
- [x] Liste des conversations avec avatar, nom, dernier message et horodatage
- [x] Badges de messages non lus
- [x] Messages épinglés
- [x] FAB (Floating Action Button) pour nouveau chat

### Écran Status / Story
- [x] Mon statut avec option d'ajout
- [x] Statuts récents des contacts
- [x] Visionneuse de stories avec barre de progression
- [x] Gestion des tap zones (précédent / suivant)
- [x] Affichage des légendes

### Écran Chat Individuel
- [x] Bulles de messages (envoyé / reçu)
- [x] Indicateurs de lecture (✓✓)
- [x] Horodatage des messages
- [x] Zone de saisie avec icônes (emoji, pièce jointe, micro)
- [x] En-tête de conversation avec statut en ligne

### Écran Appels
- [x] Liste des appels récents (entrants, sortants, manqués)
- [x] Icônes de type d'appel (vidéo / audio)

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
whatsapp/
├── app/
│   ├── (tabs)/
│   │   ├── _layout.tsx      # Tab Navigator
│   │   ├── index.tsx        # Écran Chats
│   │   ├── story.tsx        # Écran Status/Stories
│   │   └── calls.tsx        # Écran Appels
│   ├── chat/
│   │   └── [id].tsx         # Chat individuel
│   └── status/
│       └── [id].tsx         # Visionneuse de story
├── components/
│   ├── ChatRow.tsx           # Ligne de conversation
│   ├── StoryRow.tsx          # Ligne de statut
│   └── ...
├── data/
│   ├── chats.ts             # Données mock des conversations
│   └── stories.ts           # Données mock des statuts
└── assets/
    └── images/              # Avatars et médias
```

---

## 🚀 Démarrage

```bash
cd whatsapp
npm install
npx expo start
```

Scanne le QR code avec **Expo Go** sur ton téléphone, ou appuie sur `a` pour Android / `i` pour iOS simulator.

---

## 📸 Aperçu des Écrans

| Chats | Status | Chat Individuel |
|-------|--------|-----------------|
| Liste des conversations | Stories des contacts | Bulles de messages |

---

## 🎨 Palette de Couleurs

| Rôle              | Couleur         |
|-------------------|-----------------|
| Primaire          | `#075E54` (Teal)|
| Secondaire        | `#128C7E`        |
| Accent            | `#25D366` (Vert)|
| Fond messages reçus | `#FFFFFF`     |
| Fond messages envoyés | `#DCF8C6`  |
| Fond principal    | `#ECE5DD`        |

---

## 🧠 Défis & Solutions

| Défi | Solution |
|------|----------|
| Barre de progression des stories | `Animated.Value` avec interpolation |
| Navigation par tap zone (left/right) | `TouchableOpacity` avec zones distinctes |
| Indicateurs ✓✓ de lecture | Rendu conditionnel avec icônes colorées |
| Données mock réalistes | Fichiers TypeScript dans `data/` |

---

## 📅 Date

**Jour 1** — Réalisé le `20 Février 2026`

---

*Partie de la série [Challenge Clone 5 Réseaux Sociaux](../README.md)*
