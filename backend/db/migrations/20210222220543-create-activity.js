'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Activities', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            petId: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: { model: 'Pets' },
            },
            type: {
                type: Sequelize.STRING(20),
                allowNull: false,
            },
            date: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            time: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            distance: {
                type: Sequelize.STRING,
            },
            focus: {
                type: Sequelize.STRING(50),
            },
            duration: {
                type: Sequelize.STRING,
            },
            notes: {
                type: Sequelize.TEXT,
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
        return queryInterface.dropTable('Activities');
    },
};
