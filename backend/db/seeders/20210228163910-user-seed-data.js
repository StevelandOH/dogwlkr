'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            'Users',
            [
                {
                    email: 'stephen@aol.com',
                    imgUrl:
                        '/Users/stephen/Desktop/dogwlkr/backend/db/seed-data/stephen.jpg',
                    username: 'StevelandOH',
                    hashedPassword: bcrypt.hashSync('stephen'),
                },
                {
                    email: 'demo@user.io',
                    imgUrl: '',
                    username: 'Demo-lition',
                    hashedPassword: bcrypt.hashSync('password'),
                },
            ],
            {}
        );
    },

    down: (queryInterface, Sequelize) => {
        const Op = Sequelize.Op;
        return queryInterface.bulkDelete(
            'Users',
            {
                username: {
                    [Op.in]: ['Demo-lition'],
                },
            },
            {}
        );
    },
};
