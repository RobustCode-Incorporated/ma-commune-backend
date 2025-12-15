const admin = require('firebase-admin');
const path = require('path');

// Chemin vers ton fichier JSON des clés de service Firebase
const serviceAccountPath = path.join(__dirname, '..', 'firebase-service-account.json');

admin.initializeApp({
  credential: admin.credential.cert(require(serviceAccountPath))
});

module.exports = admin;