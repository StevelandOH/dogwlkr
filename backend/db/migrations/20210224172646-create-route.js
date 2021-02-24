'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Routes', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            title: {
                allowNull: false,
                type: Sequelize.STRING(20),
            },
            mapImg: {
                type: Sequelize.STRING(1000),
            },
            photo: {
                type: Sequelize.STRING(1000),
            },
            description: {
                type: Sequelize.TEXT,
            },
            distance: {
                type: Sequelize.DECIMAL(10, 2),
            },
            elevation: {
                type: Sequelize.DECIMAL(10, 0),
            },
            userId: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: { model: 'Users' },
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
        return queryInterface.dropTable('Routes');
    },
};
