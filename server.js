require('dotenv').config();

const express = require('express');
const cors = require('cors');
const path = require('path'); // Importation du module path

const db = require('./models'); // Import Sequelize et modèles

// Import des routes
const communeRoutes = require('./routes/communeRoutes');
const agentRoutes = require('./routes/agentRoutes');
const administrateurRoutes = require('./routes/administrateurRoutes');
const administrateurGeneralRoutes = require('./routes/administrateurGeneralRoutes');
const citoyenRoutes = require('./routes/citoyenRoutes');
const demandeRoutes = require('./routes/demandeRoutes');
const statutRoutes = require('./routes/statutRoutes');
const provinceRoutes = require('./routes/provinceRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');
const authRoutes = require('./routes/authRoutes');


const app = express();

// Middlewares globaux
app.use(cors());
app.use(express.json());

// **SERVIR LES FICHIERS STATIQUES DU DOSSIER 'documents'**
app.use('/documents', express.static(path.join(__dirname, 'documents')));

// **SERVIR LES IMAGES UPLOADEES**
app.use('/uploads', express.static(path.join(__dirname, 'public', 'uploads')));


app.use('/public', express.static(path.join(__dirname, 'public')));


// Route de test racine
app.get('/', (req, res) => {
  res.json({ message: 'API Ma Commune fonctionne ✅' });
});

// Déclaration des routes REST
app.use('/api/administrateurs', administrateurRoutes);
app.use('/api/administrateurs-generaux', administrateurGeneralRoutes);
app.use('/api/communes', communeRoutes);
app.use('/api/agents', agentRoutes);
app.use('/api/citoyens', citoyenRoutes);
app.use('/api/demandes', demandeRoutes);
app.use('/api/statuts', statutRoutes);
app.use('/api/provinces', provinceRoutes);
app.use('/api/dashboard', dashboardRoutes);

// Routes publiques pour l’authentification
app.use('/api/auth', authRoutes);


// *******************************************************************
// **** Démarrage du Serveur (Écoute du Port) ****
// Démarrage immédiat pour éviter le "Timed Out" de Render.
// La logique de DB s'exécute ensuite de manière asynchrone.
// *******************************************************************
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`🚀 Serveur lancé sur le port ${PORT}`);
    
    // *******************************************************************
    // **** Connexion et Synchro DB (Exécutée après le démarrage) ****
    // La synchronisation Sequelize ne bloque plus le démarrage de l'API.
    // *******************************************************************
    db.sequelize.sync({ alter: true }) // 'alter: true' ajuste les tables sans supprimer les données
      .then(() => {
        console.log('✅ Base de données synchronisée');
        return db.sequelize.authenticate();
      })
      .then(() => {
        console.log('✅ Connexion à la base réussie');
      })
      .catch(err => {
        // En cas d'échec de la connexion/synchronisation, on loggue l'erreur
        // mais on laisse l'API tourner. Les routes qui dépendent de la DB
        // échoueront, mais le service ne fera pas de timeout.
        console.error('❌ Erreur lors de la synchronisation ou connexion à la DB :', err.message || err);
      });
});
