'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Employees', [
      {
        name: 'Kyle Lowry',
        code: 'F100',
        profession: 'Drywall Installer',
        color: '#FF6600',
        city: 'Brampton',
        branch: 'Abacus',
        assigned: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'DeMar DeRozan',
        code: 'F101',
        profession: 'Drywall Installer',
        color: 'yellow',
        city: 'Brampton',
        branch: 'Pillsworth',
        assigned: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Fred Van Vleet',
        code: 'F102',
        profession: 'Drywall Installer',
        color: 'green',
        city: 'Bolton',
        branch: 'Abacus',
        assigned: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jonas Valanciunas',
        code: 'F103',
        profession: 'Drywall Installer',
        color: '#333333',
        city: 'Bolton',
        branch: 'Pillsworth',
        assigned: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Chris Bosh',
        code: 'F104',
        profession: 'Drywall Installer',
        color: '#FF6600',
        city: 'Brampton',
        branch: 'Abacus',
        assigned: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Marcus Camby',
        code: 'F105',
        profession: 'Runner',
        color: 'red',
        city: 'Brampton',
        branch: 'Pillsworth',
        assigned: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Vince Carter',
        code: 'F106',
        profession: 'Runner',
        color: 'red',
        city: 'Toronto',
        branch: 'Abacus',
        assigned: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
