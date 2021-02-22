'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Pets', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            name: {
                allowNull: false,
                type: Sequelize.STRING(30),
            },
            imgUrl: {
                type: Sequelize.STRING(1000),
            },
            breed: {
                type: Sequelize.STRING(30),
            },
            birthday: {
                type: Sequelize.STRING(20),
            },
            userId: {
                type: Sequelize.INTEGER,
                references: { model: 'Users' },
                allowNull: false,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.fn('now'),
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.fn('now'),
            },
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Pets');
    },
};
