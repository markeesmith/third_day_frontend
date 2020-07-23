const Sequelize = require('sequelize');
const db        = require('../lib/db');

const Testimonials = db.define('Testimonials', {
    TestimonialId: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    CustomerId: {
        type: Sequelize.INTEGER
    },
    Text: {
        type: Sequelize.STRING
    }
});

module.exports = Testimonials;