'use strict';
module.exports = (sequelize, DataTypes) => {
    const Activity = sequelize.define(
        'Activity',
        {
            petId: {
                allowNull: false,
                type: DataTypes.INTEGER,
            },
            type: {
                allowNull: false,
                type: DataTypes.STRING,
                validate: {
                    len: [1, 20],
                },
            },
            date: {
                allowNull: false,
                type: DataTypes.STRING,
            },
            time: {
                allowNull: false,
                type: DataTypes.STRING,
            },
            distance: {
                type: DataTypes.STRING,
            },
            focus: {
                type: DataTypes.STRING,
                validate: {
                    len: [1, 50],
                },
            },
            duration: {
                type: DataTypes.STRING,
            },
            notes: {
                type: DataTypes.TEXT,
            },
        },
        {}
    );
    Activity.associate = function (models) {
        Activity.belongsTo(models.Pet, { foreignKey: 'petId' });
    };
    return Activity;
};
