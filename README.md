# 🍔 Matt's Diner

Application moderne de commande en borne pour restaurant, construite avec React et une bibliothèque de composants que j'ai concue pour ce projet.

## 📋 Présentation du projet

Matt's Diner est une interface de borne en libre-service conçue pour la commande en restaurant. L'application utilise une bibliothèque de composants professionnelle pour offrir une expérience de commande fluide.

## 🛠️ Stack Technique

- **React 19** - Framework frontend
- **Vite** - Outil de build et serveur de développement
- **Bibliothèque de composants personnalisée** - [matts-dinner-component-library](https://github.com/Kamat99302/Matt-s-Dinner-Component-Library)
- **CSS3** 

## ✨ Fonctionnalités

- Implémentation depuis le design Figma
- Interface borne kiosk (optimisée 1080x1920)
- Architecture de composants réutilisables

## 🚀 Démarrage

### Prérequis

- Node.js (v18 ou supérieur)
- npm ou yarn

### Installation

1. **Cloner le repository**
   ```bash
   git clone https://github.com/[ton-username]/matts-dinner.git
   cd matts-dinner
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Lier la bibliothèque de composants** (pour le développement local)
   ```bash
   # Dans le dossier de la bibliothèque
   cd ../matts-dinner-component-library
   npm link

   # Retour dans le dossier de l'app
   cd ../matts-dinner
   npm link matts-dinner-component-library
   ```

4. **Démarrer le serveur de développement**
   ```bash
   npm run dev
   ```

5. **Ouvrir le navigateur**
   ```
   http://localhost:5173
   ```

## 📁 Structure du projet

```
matts-dinner/
├── src/
│   ├── assets/          # Images et fichiers statiques
│   │   └── images/      # Images de fond, icônes
│   ├── components/      # Composants React
│   │   └── StartScreen/ # Composant page d'accueil
│   ├── App.jsx          # Composant principal
│   ├── App.css          # Styles globaux
│   └── main.jsx         # Point d'entrée
├── public/              # Assets publics
├── package.json         # Dépendances et scripts
└── vite.config.js       # Configuration Vite
```

## Design

L'application suit un design Figma réalisé par mes soins (https://www.figma.com/design/ceIg17J56YuNfSHVxKf4do/INTERFACE-DE-COMMANDE-KIOSK?node-id=0-1&t=J2B7rN6n1zAiqlx1-1)

## Bibliothèque de composants

Ce projet utilise ma bibliothèque React qui inclut :
- Button (multiples variantes et tailles)
- Header
- ProductCard
- CartItemCard
- LanguageSelector
- QuantitySelector
- Et plus encore...

[Voir la documentation de la bibliothèque](https://github.com/Kamat99302/Matt-s-Dinner-Component-Library)

## 🔧 Scripts disponibles

### `npm run dev`
Démarre le serveur de développement avec rechargement automatique

### `npm run build`
Crée un build de production optimisé

### `npm run preview`
Prévisualise le build de production localement

### `npm run lint`
Lance ESLint pour vérifier la qualité du code

## Statut du développement

**Progression actuelle :**
- ✅ Configuration et setup du projet
- ✅ Intégration de la bibliothèque de composants
- ✅ Implémentation de l'écran d'accueil
- 🔄 Navigation du menu (en cours)
- ⏳ Fonctionnalité panier (prévu)
- ⏳ Récapitulatif de commande (prévu)
- ⏳ Flux de paiement (prévu)

## 📝 Parcours d'apprentissage

Ce projet fait partie de mon parcours d'apprentissage en tant qu'étudiant développeur frontend. Apprentissages clés :
- Construction et distribution de bibliothèques de composants React
- Configuration de bibliothèque (Vite, exports npm)
- Gestion et bundling des assets
- Composition et réutilisabilité des composants
- Patterns React modernes (hooks, context, routing)

## 👨‍💻 Auteur

**Matt** - Étudiant Développeur Frontend
- Actuellement en Bachelor via ISCOD
- Recherche alternance Développeur Frontend React (avril 2026)
- [LinkedIn](https://www.linkedin.com/in/matthieu-juan-55568337a/)
- [Portfolio](https://portfoliomattreact.netlify.app/)

## 🤝 Contribution

Ceci est un projet d'apprentissage, mais les retours et suggestions sont les bienvenus !

## 📄 Licence

Ce projet est à but éducatif.


