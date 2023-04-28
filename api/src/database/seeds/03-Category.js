'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.bulkInsert('categories', [
      {
        id: 1,
        name: 'HERRAJES',
        sub: null
      },
      {
        id: 2,
        name: 'BULONERÍA Y TORNILLERÍA',
        sub: null
      },
      {
        id: 3,
        name: 'fORJADOS',
        sub: null
      },
      {
        id: 4,
        name: 'FERRETERÍA',
        sub: null
      },
      {
        id: 5,
        name: 'CORTINERÍA',
        sub: null
      },
      {
        id: 6,
        name: 'SANITARIOS',
        sub: null
      },
      {
        id: 7,
        name: 'BISAGRAS',
        sub: 1
      },
      {
        id: 8,
        name: 'CARROS PARA PORTONES',
        sub: 1
      },
      {
        id: 9,
        name: 'CERRADURAS Y CANDADOS',
        sub: 1
      },
      {
        id: 10,
        name: 'COLGADORES Y SOPORTES',
        sub: null
      },
      {
        id: 11,
        name: 'ESCUADRAS Y ESQUINEROS',
        sub: 1
      },
      {
        id: 12,
        name: 'FALLEBAS',
        sub: 1
      },
      {
        id: 13,
        name: 'MANIJAS/TIRADORES/CORREDERAS',
        sub: 1
      },
      {
        id: 14,
        name: 'PLANCHUELAS',
        sub: 1
      },
      {
        id: 15,
        name: 'PASADORES',
        sub: 1
      },
      {
        id: 16,
        name: 'MENSULAS',
        sub: 1
      },
      {
        id: 17,
        name: 'PICAPORTES',
        sub: 1
      },
      {
        id: 18,
        name: 'PORTA CANDADOS',
        sub: 1
      },
      {
        id: 19,
        name: 'RUEDAS',
        sub: 1
      },
      {
        id: 20,
        name: 'ARANDELAS',
        sub: 2
      },
      {
        id: 21,
        name: 'BULON CABEZA REDONDA C/CUADRADO',
        sub: 2
      },
      {
        id: 22,
        name: 'BULON CABEZA TANQUE/PITONES',
        sub: 2
      },
      {
        id: 23,
        name: 'TARUGOS CON Y SIN TOPE',
        sub: 2
      },
      {
        id: 24,
        name: 'TIRAFONDO CABEZA HEXAGONAL',
        sub: 2
      },
      {
        id: 25,
        name: 'TORNILLOS DRYWALL MADERA(NEGRO)',
        sub: 2
      },
      {
        id: 26,
        name: 'TORNILLOS FIX(DORADOS)',
        sub: 2
      },
      {
        id: 27,
        name: 'TORNILLOS P/TECHOS',
        sub: 2
      },
      {
        id: 28,
        name: 'TUERCAS/VARILLAS',
        sub: 2
      },
      {
        id: 29,
        name: 'EXHIBIDORES/FORJADOS',
        sub: 3
      },
      {
        id: 30,
        name: 'ANAFES/CALENTADORES/REGULADORES',
        sub: 4
      },
      {
        id: 31,
        name: 'GANCHOS P/ESTIRAR TEJIDOS Y MOSQUITEROS',
        sub: 4
      },
      {
        id: 32,
        name: 'PUNTA P/TALADOR/DISCOS/FIELTROS',
        sub: 4
      },
      {
        id: 33,
        name: 'TANZA P/BORDEADORAS/ZOCALOS/BALDES Y TERRAJAS',
        sub: 4
      },
      {
        id: 34,
        name: 'TORNIQUETES/ABRAZADERAS/FLEJES',
        sub: 4
      },
      {
        id: 35,
        name: 'BARRALES/SOPORTES/PERCHEROS',
        sub: 5
      },
      {
        id: 36,
        name: 'BOTONES Y REPUESTOS/BOYAS',
        sub: 6
      },
      {
        id: 37,
        name: 'CANILLAS/LLAVES/TEFLON',
        sub: 6
      },
      {
        id: 38,
        name: 'CONEXION P/INODORO Y CONOS/PUENTES BRAZOS',
        sub: 6
      },
      {
        id: 39,
        name: 'DESBORDE P/DEPOSITO Y MOCHILA',
        sub: 6
      },
      {
        id: 40,
        name: 'EQUIPOS COMPLETOS P/MOCHILAS',
        sub: 6
      },
      {
        id: 41,
        name: 'DESCARGA AGUA CON FLAPPER Y DESPLAZADORES P/INODOROS',
        sub: 6
      },
      {
        id: 42,
        name: 'FUELLES/VALVULAS/SOPAPA/SIFON',
        sub: 6
      },
      {
        id: 43,
        name: 'GRAMPAS/CALEFONES',
        sub: 6
      },
      {
        id: 44,
        name: 'MANGUERAS DE RIEGO/MANGUERAS PARA LAVARROPA',
        sub: 6
      },
      {
        id: 45,
        name: 'MANIJAS/PALANCAS',
        sub: 6
      },
      {
        id: 46,
        name: 'MOCHILAS/DEPOSITOS',
        sub: 6
      },
      {
        id: 47,
        name: 'OBTURADORES P/DEPOSITO-MOCHILA',
        sub: 6
      },
      {
        id: 48,
        name: 'SOPORTE P/ASIENTOS / TAPA CAMARA Y REJILLAS',
        sub: 6
      },
      {
        id: 49,
        name: 'TAPAS P/INODOROS Y TAPAS Y CONTRATAPAS',
        sub: 6
      },
      {
        id: 50,
        name: 'TORNILLOS P/MOCHILAS-INODORO',
        sub: 6
      },
      {
        id: 51,
        name: 'VALVULAS ENTRADA DE AGUA Y REPUESTO',
        sub: 6
      },
      {
        id: 52,
        name: 'FLEXIBLES Y ACOPLE RÁPIDO',
        sub: 6
      },
    ], {});
  
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('categories', null, {});
  }
};