const { DataTypes } = require('sequelize');
const db        = require('../lib/db');

const Testimonials = db.define('Testimonials', {
    TestimonialId: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    CustomerId: {
        type: DataTypes.INTEGER
    },
    Text: {
        type: DataTypes.TEXT
    }
});

module.exports = Testimonials;