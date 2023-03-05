
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.bulkInsert('products', [
      {
        id: 1,
        name: '1" CAJA 24 UNID',
        sku: 1731,
        model: 1,
        price: 735
      },
      {
        id: 2,
        name: '1,5" CAJA 24 UNID',
        sku: 0032,
        model: 1,
        price: 840
      },
      {
        id: 3,
        name: '2" CAJA 24 UNID',
        sku: 1729,
        model: 1,
        price: 1155
      },
      {
        id: 4,
        name: '2,5" CAJA 24 UNID',
        sku: 1730,
        model: 1,
        price: 1449
      },
      {
        id: 5,
        name: '3" CAJA 24 UNID',
        sku: 1728,
        model: 1,
        price: 1910
      },
      {
        id: 6,
        name: '4" CAJA 12 UNID',
        sku: 1727,
        model: 1,
        price: 1889
      },
    ], {});
  
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('products', null, {});
  }
};
