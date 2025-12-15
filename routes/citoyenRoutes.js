const express = require('express');
const router = express.Router();
const citoyenController = require('../controllers/citoyenController');
const auth = require('../middleware/authMiddleware');

// 🔹 Nouvelle route : profil du citoyen connecté.
// DOIT être placée avant la route générique '/:id' pour éviter les conflits.
router.get('/me', auth(['citoyen']), citoyenController.getProfile);

router.post('/fcm-token',auth(['citoyen']),citoyenController.saveFcmToken);

// Accès aux agents ou admins
router.get('/', auth(['agent', 'admin']), citoyenController.getAllCitoyens);
router.get('/:id', auth(['agent', 'admin']), citoyenController.getCitoyenById);
router.post('/', auth(['agent', 'admin']), citoyenController.createCitoyen);
router.put('/:id', auth(['agent', 'admin']), citoyenController.updateCitoyen);
router.delete('/:id', auth(['admin']), citoyenController.deleteCitoyen); // suppression réservée à l’admin


module.exports = router;