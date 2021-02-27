'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            'Pets',
            [
                {
                    name: 'Reggie Bentley',
                    imgUrl:
                        '/Users/stephen/Desktop/dogwlkr/backend/db/seed-data/Reggie.jpg',
                    breed: 'Australian Cattle Dog Mix',
                    birthday: 'April 10th, 2011',
                    userId: 1,
                },
            ],
            {}
        );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Pets', {});
    },
};
