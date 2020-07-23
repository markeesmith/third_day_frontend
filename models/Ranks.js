const { DataTypes } = require('sequelize');
const db        = require('../lib/db');

const Ranks = db.define('Ranks', {
    RankId: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    GalleryId: {
        type: DataTypes.INTEGER
    }
});

module.exports = Ranks;