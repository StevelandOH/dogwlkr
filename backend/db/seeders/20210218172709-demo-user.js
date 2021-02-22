'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            'Users',
            [
                {
                    email: 'demo@user.io',
                    imgUrl: '',
                    username: 'Demo-lition',
                    hashedPassword: bcrypt.hashSync('password'),
                },
                {
                    email: 'stephenszelpal@icloud.com',
                    imgUrl: '',
                    username: 'Stephen',
                    hashedPassword: bcrypt.hashSync('stephen'),
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
