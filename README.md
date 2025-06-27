# 🚗 Application CRUD React - Gestion de Flottes et Gestionnaires

Une application web moderne développée en React pour la gestion des flottes de véhicules et des gestionnaires. Cette application offre une interface intuitive pour effectuer toutes les opérations CRUD (Create, Read, Update, Delete) sur deux entités principales.

## 🛠️ Technologies Utilisées

### Frontend

- **React 19.1.0** - Bibliothèque JavaScript pour construire l'interface utilisateur
- **Vite 6.3.5** - Outil de build moderne et rapide
- **React Router DOM 7.1.3** - Gestion du routage côté client
- **Bootstrap 5.3.3** - Framework CSS pour un design responsive et moderne

### Outils et Utilitaires

- **Axios 1.10.0** - Client HTTP pour les appels API
- **SweetAlert2 11.15.10** - Bibliothèque pour les notifications et confirmations élégantes
- **ESLint** - Linter pour maintenir la qualité du code

## 🏗️ Architecture du Projet

L'application suit une architecture modulaire et organisée en couches :

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Pages/Views   │    │    Services     │    │   API Backend   │
│                 │    │                 │    │                 │
│  - Flotte       │◄──►│ - FlotteService │◄──►│ /api/Flottes    │
│  - Gestionnaire │    │ - GestService   │    │ /api/Gestion.   │
│  - Routing      │    │ - BaseService   │    │                 │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

### Couche de Présentation (Pages)

- **Components React** organisés par fonctionnalité
- **Hooks** pour la gestion d'état local
- **React Router** pour la navigation

### Couche de Services

- **BaseService** : Abstraction générique pour les opérations CRUD
- **Services spécialisés** : Logic métier spécifique à chaque entité
- **Client HTTP** : Configuration centralisée d'Axios

### API Backend

- **REST API** hébergée sur `http://localhost:5127/api`
- Endpoints standardisés pour chaque entité

## 📁 Structure des Dossiers

```
src/
├── 📁 pages/                    # Composants de pages
│   ├── 📁 flotte/              # Pages pour la gestion des flottes
│   │   ├── create.jsx          # Création d'une nouvelle flotte
│   │   ├── edit.jsx            # Modification d'une flotte
│   │   ├── home.jsx            # Liste des flottes
│   │   ├── view.jsx            # Détails d'une flotte
│   │   └── index.js            # Exports des composants
│   └── 📁 gestionnaire/        # Pages pour la gestion des gestionnaires
│       ├── create.jsx          # Création d'un nouveau gestionnaire
│       ├── edit.jsx            # Modification d'un gestionnaire
│       ├── home.jsx            # Liste des gestionnaires
│       ├── view.jsx            # Détails d'un gestionnaire
│       └── index.js            # Exports des composants
├── 📁 services/                # Couche de services
│   ├── baseService.js          # Service générique CRUD
│   ├── flotteService.js        # Service spécialisé flottes
│   ├── gestionnaireService.js  # Service spécialisé gestionnaires
│   ├── http.js                 # Configuration Axios
│   └── index.js                # Exports des services
├── 📁 assets/                  # Ressources statiques
├── App.jsx                     # Composant principal
└── main.jsx                    # Point d'entrée de l'application
```

## 🎯 Entités Gérées

### 🚙 Flotte

Représente un véhicule dans le parc automobile

- **ID** : Identifiant unique
- **Type Flotte** : Type/modèle du véhicule
- **Matricule Flotte** : Numéro d'immatriculation

### 👤 Gestionnaire

Représente un utilisateur/administrateur du système

- **ID** : Identifiant unique
- **CNI** : Numéro de carte d'identité
- **Titre** : Civilité (M., Mme, etc.)
- **Prénom** : Prénom du gestionnaire
- **Nom** : Nom de famille
- **Email** : Adresse électronique
- **Rôle** : Niveau d'accès (par défaut : "User")
- **Mot de passe** : Authentification (hashé côté backend)

## ⚡ Fonctionnalités

### 🔍 Opérations CRUD Complètes

- **Create** : Création de nouvelles entités avec validation
- **Read** : Affichage des listes et détails
- **Update** : Modification des entités existantes
- **Delete** : Suppression avec confirmation

### 🎨 Interface Utilisateur

- **Design responsive** avec Bootstrap
- **Navigation intuitive** avec React Router
- **Notifications élégantes** avec SweetAlert2
- **États de chargement** et gestion d'erreurs
- **Formulaires validés** côté client et serveur

### 🔧 Fonctionnalités Techniques

- **Gestion d'état** avec React Hooks
- **Appels API asynchrones** avec Axios
- **Validation des données** avant envoi
- **Gestion centralisée des erreurs**
- **Architecture modulaire** et réutilisable

## 🛡️ Services et API

### BaseService

Service générique fournissant les opérations CRUD de base :

```javascript
-getAll(endpoint) - // Récupérer toutes les entités
  getById(endpoint, id) - // Récupérer par ID
  create(endpoint, data) - // Créer une nouvelle entité
  update(endpoint, id, data) - // Mettre à jour
  deleteItem(endpoint, id); // Supprimer
```

### Services Spécialisés

- **FlotteService** : Validation des champs obligatoires (type, matricule)
- **GestionnaireService** : Validation complexe (email, mot de passe, données complètes)

### Configuration HTTP

- **Base URL** : `http://localhost:5127/api`
- **Content-Type** : `application/json`
- **Gestion centralisée** des headers et de la configuration

## 🚀 Installation et Lancement

### Prérequis

- Node.js (version 16+)
- npm ou yarn
- API Backend fonctionnelle sur le port 5127

### Installation

```bash
# Cloner le projet
git clone [repository-url]
cd Crud_react

# Installer les dépendances
npm install

# Lancer en mode développement
npm run dev

# Build pour la production
npm run build

# Prévisualiser le build
npm run preview
```

### Scripts Disponibles

- `npm run dev` : Serveur de développement avec hot-reload
- `npm run build` : Build optimisé pour la production
- `npm run lint` : Vérification du code avec ESLint
- `npm run preview` : Prévisualisation du build de production

## ⚙️ Configuration

### Variables d'Environnement

La configuration API est actuellement codée en dur dans `src/services/http.js`. Pour un environnement de production, il est recommandé d'utiliser des variables d'environnement :

```javascript
// Exemple de configuration flexible
const baseURL = import.meta.env.VITE_API_URL || "http://localhost:5127/api";
```

### Endpoints API Attendus

- `GET /api/Flottes` - Liste des flottes
- `POST /api/Flottes` - Créer une flotte
- `PUT /api/Flottes/{id}` - Modifier une flotte
- `DELETE /api/Flottes/{id}` - Supprimer une flotte
- `GET /api/Gestionnaires` - Liste des gestionnaires
- `POST /api/Gestionnaires` - Créer un gestionnaire
- `PUT /api/Gestionnaires/{id}` - Modifier un gestionnaire
- `DELETE /api/Gestionnaires/{id}` - Supprimer un gestionnaire

## 🎯 Points d'Amélioration Futurs

- 🔐 **Authentification** : Système de login/logout
- 🔍 **Recherche et filtrage** : Fonctionnalités de recherche avancée
- 📊 **Pagination** : Pour les grandes listes de données
- 🌐 **Internationalisation** : Support multi-langues
- 📱 **PWA** : Application web progressive
- 🧪 **Tests** : Tests unitaires et d'intégration
- 📈 **Analytics** : Suivi des actions utilisateur

## 👥 Contribution

Ce projet suit une architecture claire et modulaire. Pour contribuer :

1. Respecter la structure des dossiers existante
2. Utiliser les services pour les appels API
3. Maintenir la cohérence du style avec Bootstrap
4. Tester les fonctionnalités avant soumission

---

_Développé avec ❤️ en React - Architecture CRUD moderne et scalable_
