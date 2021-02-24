'use strict';
module.exports = (sequelize, DataTypes) => {
    const Route = sequelize.define(
        'Route',
        {
            title: {
                allowNull: false,
                type: DataTypes.STRING,
                validate: {
                    len: [1, 20],
                },
            },
            mapImg: {
                type: DataTypes.STRING,
                validate: {
                    len: [1, 1000],
                },
            },
            photo: {
                type: DataTypes.STRING,
                validate: {
                    len: [1, 1000],
                },
            },
            description: {
                type: DataTypes.TEXT,
            },
            distance: {
                type: DataTypes.DECIMAL,
            },
            elevation: {
                type: DataTypes.DECIMAL,
            },
            userId: {
                allowNull: false,
                type: DataTypes.INTEGER,
            },
        },
        {}
    );
    Route.associate = function (models) {
        Route.belongsTo(models.User, { foreignKey: 'userId' });
    };
    return Route;
};
