'use strict';
import { Color } from '../models'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await Color.bulkCreate([
      {name: 'Purple'},
      {name: 'Green'},
      {name: 'Orange'}
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Colors", {
      name: ['Purple', 'Green', 'Orange']
    })
  }
};
