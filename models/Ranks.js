const Sequelize = require('sequelize');
const db        = require('../lib/db');

const Ranks = db.define('Ranks', {
    RankId: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    GalleryId: {
        type: Sequelize.INTEGER
    }
});

module.exports = Ranks;