'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
   await queryInterface.bulkInsert('teamsUsers',[
    {
        id:1,
        teamId:1,
        userId:1
    },
    {
      id:2,
      teamId:2,
      userId:2
  }
   ], {});
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('teamsusers', null, {});
    
  }
};