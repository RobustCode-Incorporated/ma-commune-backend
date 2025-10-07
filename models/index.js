'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const db = {};

// Choix automatique de la configuration : si DATABASE_URL est défini, on l'utilise
let sequelize;
if (process.env.DATABASE_URL) {
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    logging: console.log, // mettre false pour désactiver
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // obligatoire sur Render/Neon
      },
    },
  });
} else {
  // fallback si tu veux continuer à utiliser config.json
  const env = process.env.NODE_ENV || 'development';
  const config = require(path.join(__dirname, '/../config/config.json'))[env];

  sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    port: config.port || 5432,
    dialect: 'postgres',
    logging: console.log,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  });
}

// Lecture automatique des modèles sauf administrateurGeneral.js
fs
  .readdirSync(__dirname)
  .filter(file =>
    file.indexOf('.') !== 0 &&
    file !== basename &&
    file.slice(-3) === '.js' &&
    file.indexOf('.test.js') === -1 &&
    file !== 'administrateurGeneral.js'
  )
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

// Import manuel du modèle AdministrateurGeneral
const AdministrateurGeneral = require('./administrateurGeneral')(sequelize, Sequelize.DataTypes);
db.AdministrateurGeneral = AdministrateurGeneral;

// Définition des associations
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;