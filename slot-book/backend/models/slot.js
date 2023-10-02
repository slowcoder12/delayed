const Sequelize = require('sequelize');

const sequelize = require('../database/database');

const Booking = sequelize.define('Booking', {
    name: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
     
    },
    slotTime: {
      type: Sequelize.STRING,
      
    },
  });

  module.exports = Booking;