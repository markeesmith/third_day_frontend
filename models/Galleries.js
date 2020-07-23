const Sequelize = require('sequelize');
const db        = require('../lib/db');

const Galleries = db.define('Galleries', {
    GalleryId: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    GalleryType: {
        type: Sequelize.STRING
    },
    GalleryNumItems: {
        type: Sequelize.INTEGER
    },
    GalleryPath: {
        type: Sequelize.STRING
    }
});

module.exports = Galleries;