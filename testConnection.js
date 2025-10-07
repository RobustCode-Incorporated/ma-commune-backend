// testConnection.js
require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT || 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // nécessaire pour Neon
      },
    },
    logging: console.log,
  }
);

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Connexion à la base Neon PostgreSQL réussie !');
  } catch (error) {
    console.error('❌ Erreur de connexion à la base Neon PostgreSQL :', error.message);
  } finally {
    await sequelize.close();
  }
};

testConnection();