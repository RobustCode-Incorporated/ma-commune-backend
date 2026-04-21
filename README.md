# e-Services

## 📖 Introduction

**e-Services** est une solution numérique mobile et web conçue pour faciliter la gestion et la délivrance de documents administratifs.  
Initialement développée pour accompagner la **digitalisation des services publics** dans les pays africains, elle est désormais adaptée également aux **entreprises et institutions** disposant d’un processus interne de génération de documents (cartes de service, attestations, certificats, etc.).

Grâce à e-Services, les citoyens et employés peuvent effectuer leurs demandes de documents directement depuis une application mobile, suivre leur avancement en temps réel, et recevoir leurs documents générés automatiquement.

---

## 🎯 Objectifs du projet

- Simplifier les démarches administratives et réduire les files d’attente.  
- Offrir aux institutions un outil moderne de gestion des demandes et de génération de documents.  
- Promouvoir la digitalisation des services dans les pays en développement.  
- Créer une passerelle entre le citoyen, l’administration et l’entreprise.

---

## 📱 Fonctionnalités principales

-  **Création de compte** : inscription sécurisée de l’utilisateur (citoyen ou employé).  
-  **Dépôt de demandes** : soumission des demandes de documents en ligne.  
-  **Suivi du statut** : consultation du niveau d’avancement (en cours, validé, rejeté).  
-  **Génération automatique de documents** : production des fichiers PDF (actes, cartes, certificats, etc.).  
-  **Notifications en temps réel** : alertes sur la progression des demandes.  
-  **Interface administrateur web** : gestion centralisée des utilisateurs, demandes et documents.  
-  **Application mobile citoyenne** : disponible sur Android et iOS.

---

##  Technologies utilisées

| Couche | Technologie |
|--------|--------------|
| Backend | **Node.js / Express.js** |
| Frontend web (Admin) | **Vue.js** |
| Mobile (Citoyen) | **Flutter** |
| Base de données | **PostgreSQL** |
| API | **RESTful API sécurisée par JWT** |

---

##  Architecture du projet  e-services/
├── backend/             # API Node.js (Express)
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   └── config/
├── frontend/            # Interface web (Vue.js)
│   ├── src/
│   └── public/
├── mobile/              # Application mobile Flutter
│   ├── lib/
│   ├── android/
│   └── ios/
└── README.md  ---

##  Installation & Lancement

### 🔧 Prérequis
- Node.js >= 18
- PostgreSQL >= 14
- Flutter >= 3.0
- npm / yarn

###  Étapes d’installation

```bash
# 1. Cloner le dépôt
git clone https://github.com/robustcode/e-services.git
cd e-services

# 2. Installer les dépendances backend
cd backend
npm install

# 3. Configurer la base de données
cp .env.example .env
# (modifier les variables selon votre configuration PostgreSQL)

# 4. Lancer le serveur backend
npm start

# 5. Lancer le frontend web (admin)
cd ../frontend
npm install
npm run serve

# 6. Lancer l'application mobile Flutter
cd ../mobile
flutter pub get
flutter run
 Captures d’écran
<img width="2560" height="1440" alt="Screenshot 2025-10-13 at 18 33 12" src="https://github.com/user-attachments/assets/d2168861-8c6d-4a95-8a74-fe3c38782789" />
