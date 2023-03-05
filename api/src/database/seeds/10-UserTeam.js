'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.bulkInsert('usersTeams', [
      {
        id: 1,
        userId:1,
        teamId:1
      },
      {
        id: 2,
        userId:2,
        teamId:2
      },
    ], {});
  
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('usersTeams', null, {});
  }
};