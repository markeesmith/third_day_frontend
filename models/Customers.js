const Sequelize = require('sequelize');
const db        = require('../lib/db');

const Customers = db.define('Customers', {
    CustomerId: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    FirstName: {
        type: Sequelize.STRING
    },
    LastName: {
        type: Sequelize.STRING
    }
});

module.exports = Customers;