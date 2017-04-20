'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    let data = [{
      name:'Dyan Kastutara',
      email:'dyan.kastutara@gmail.com',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },{
      name:'Parel Hutahaean',
      email:'parel.hutahaean@gmail.com',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },{
      name:'Uci Lubis',
      email:'uci.lubis@gmail.com',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },{
      name:'Edim Dendi',
      email:'edim.dendi@gmail.com',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },{
      name:'Akbar Sakapertana',
      email:'akbar.sakapertana@gmail.com',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }]

    return queryInterface.bulkInsert('Users', data, {});
  },

  down: function (queryInterface, Sequelize) {
    // return queryInterface.bulkDelete('Users', null, {});
  }
};
