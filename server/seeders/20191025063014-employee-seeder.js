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
        id: 1,
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
        id: 2,
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
        id: 3,
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
        id: 4,
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
        id: 5,
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
        id: 6,
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
        id: 7,
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
