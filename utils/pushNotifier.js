/**
 * utils/pushNotifier.js
 * ------------------------------------
 * Gestion des notifications PUSH (FCM)
 * Stack compatible : Flutter + Render + Neon
 */

const admin = require('../config/firebase'); // Firebase Admin SDK

/**
 * Notification générique
 */
async function sendPushNotification({ token, title, body, data = {} }) {
  if (!token) {
    console.warn('⚠️ Aucun FCM token fourni, notification ignorée.');
    return;
  }

  try {
    await admin.messaging().send({
      token,
      notification: {
        title,
        body,
      },
      data: {
        ...data,
        click_action: 'FLUTTER_NOTIFICATION_CLICK',
      },
    });

    console.log('✅ Notification push envoyée');
  } catch (error) {
    console.error('❌ Erreur notification push:', error.message);
  }
}

/**
 * 🔵 STATUT : EN TRAITEMENT (Agent)
 */
async function notifyEnTraitement(demande) {
  const citoyen = demande.citoyen;

  if (!citoyen || !citoyen.fcmToken) {
    console.warn('⚠️ Citoyen ou token FCM manquant');
    return;
  }

  return sendPushNotification({
    token: citoyen.fcmToken,
    title: '📄 Demande en traitement',
    body: `Votre demande "${demande.typeDemande.replace('_', ' ')}" est en cours de traitement.`,
    data: {
      demandeId: String(demande.id),
      statut: 'en_traitement',
    },
  });
}

/**
 * ✅ STATUT : VALIDÉE (Bourgmestre)
 */
async function notifyValidee(demande) {
  const citoyen = demande.citoyen;

  if (!citoyen || !citoyen.fcmToken) {
    console.warn('⚠️ Citoyen ou token FCM manquant');
    return;
  }

  return sendPushNotification({
    token: citoyen.fcmToken,
    title: '✅ Demande validée',
    body: `Votre demande "${demande.typeDemande.replace('_', ' ')}" a été validée.`,
    data: {
      demandeId: String(demande.id),
      statut: 'validee',
    },
  });
}

module.exports = {
  sendPushNotification,
  notifyEnTraitement,
  notifyValidee,
};