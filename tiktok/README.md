# 🎵 Jour 5 — Clone TikTok

> **Challenge #5** de la série *Clone des 5 Grands Réseaux Sociaux*  
> Reproduire l'interface mobile de **TikTok** avec React Native & Expo.

---

## 📋 Description

Ce projet a pour objectif de cloner l'interface emblématique de TikTok : le fil de vidéos plein écran en scroll vertical, la page d'exploration, les notifs, le profil et la création de contenu.

---

## 🗓️ Statut : 📅 À venir

Ce challenge est le dernier de la série. Il sera démarré après la finalisation des challenges 3 et 4.

---

## 🎯 Fonctionnalités Prévues

### Navigation
- [ ] Bottom Tab Navigation (Home, Découvrir, +, Boîte de réception, Profil)

### Écran Principal (For You / Feed)
- [ ] Scroll vertical plein écran entre vidéos (FlatList / FlashList)
- [ ] Autoplay vidéo au focus
- [ ] Barre d'actions droite (like, commentaire, partage, son)
- [ ] Infos auteur et description en superposition
- [ ] Barre de progression de la vidéo

### Écran Découverte
- [ ] Barre de recherche
- [ ] Catégories de tendances
- [ ] Grille de vidéos tendances

### Création de Contenu
- [ ] Bouton d'enregistrement central
- [ ] Options de durée (15s, 60s, 3min)
- [ ] Sélection de son / effets

### Profil
- [ ] Grille de publications
- [ ] Stats (abonnés, abonnements, likes)
- [ ] Bouton Modifier le profil

### Boîte de Réception
- [ ] Notifications (likes, commentaires, abonnements)

---

## 🛠️ Stack Technique Prévue

| Outil            | Usage                        |
|------------------|------------------------------|
| React Native + Expo | Framework mobile          |
| Expo Router      | Navigation fichier-based     |
| TypeScript       | Typage statique              |
| NativeWind       | Styling Tailwind             |
| Expo AV          | Lecture vidéo                |
| FlashList        | Performances scroll vidéo    |
| Reanimated 2     | Animations fluides           |

---

## 🎨 Palette de Couleurs TikTok

| Rôle              | Couleur              |
|-------------------|----------------------|
| Fond principal    | `#000000`            |
| Texte principal   | `#FFFFFF`            |
| Accent rouge      | `#FE2C55`            |
| Accent cyan       | `#69C9D0`            |
| Icônes            | `#FFFFFF`            |
| Barre de progression | `#FFFFFF`         |

---

## 🧠 Défis Anticipés

| Défi | Solution envisagée |
|------|-------------------|
| Autoplay vidéo   | `Expo AV` avec `useIsFocused()` |
| Scroll fluide entre vidéos | `FlashList` + `viewabilityConfig` |
| Superposition UI sur vidéo | `position: absolute` |
| Barre de progression | `Animated.Value` sync avec `onPlaybackStatusUpdate` |

---

## 📅 Date Prévue

**Jour 5** — À démarrer après le `Jour 4 Instagram`

---

*Partie de la série [Challenge Clone 5 Réseaux Sociaux](../README.md)*
