'use strict';
module.exports = (sequelize, DataTypes) => {
    const Pet = sequelize.define(
        'Pet',
        {
            name: {
                allowNull: false,
                type: DataTypes.STRING,
                validate: {
                    len: [1, 30],
                },
            },
            imgUrl: {
                type: DataTypes.STRING,
                validate: {
                    len: [1, 1000],
                },
            },
            breed: {
                type: DataTypes.STRING,
                validate: {
                    len: [1, 30],
                },
            },
            birthday: {
                type: DataTypes.STRING,
                validate: {
                    len: [1, 20],
                },
            },
            userId: {
                allowNull: false,
                type: DataTypes.INTEGER,
            },
        },
        {}
    );
    Pet.associate = function (models) {
        Pet.belongsTo(models.User, { foreignKey: 'userId' });
    };
    return Pet;
};
