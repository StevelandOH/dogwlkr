'use strict';
const { Validator } = require('sequelize');
const bcrypt = require('bcryptjs');
const { check } = require('express-validator');

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        'User',
        {
            imgUrl: {
                type: DataTypes.STRING,
                validate: {
                    len: [1, 1000],
                },
            },
            username: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [4, 30],
                    isNotEmail(value) {
                        if (Validator.isEmail(value)) {
                            throw new Error('Username cannot be email');
                        }
                    },
                },
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [3, 256],
                    isNotEmail(value) {
                        if (!Validator.isEmail(value)) {
                            throw new Error('Not valid email');
                        }
                    },
                },
            },
            hashedPassword: {
                type: DataTypes.STRING.BINARY,
                allowNull: false,
                validate: {
                    len: [60, 60],
                },
            },
        },
        {
            defaultScope: {
                attributes: {
                    exclude: [
                        'hashedPassword',
                        'email',
                        'createdAt',
                        'updatedAt',
                    ],
                },
            },
            scopes: {
                currentUser: {
                    attributes: { exclude: ['hashedPassword'] },
                },
                loginUser: {
                    attributes: {},
                },
            },
        }
    );
    User.associate = function (models) {
        User.hasMany(models.Pet, { foreignKey: 'userId' });
        User.hasMany(models.Route, { foreignKey: 'userId' });
        User.hasMany(models.Activity, { foreignKey: 'userId' });
    };
    User.prototype.toSafeObject = function () {
        const { id, imgUrl, username, email } = this;
        return { id, imgUrl, username, email };
    };
    User.prototype.validatePassword = function (password) {
        return bcrypt.compareSync(password, this.hashedPassword.toString());
    };
    User.login = async function ({ credential, password }) {
        const { Op } = require('sequelize');
        const user = await User.scope('loginUser').findOne({
            where: {
                [Op.or]: {
                    username: credential,
                    email: credential,
                },
            },
        });
        if (user && user.validatePassword(password)) {
            return await User.scope('currentUser').findByPk(user.id);
        }
    };
    User.signup = async function ({ username, email, password }) {
        const hashedPassword = bcrypt.hashSync(password);
        const user = await User.create({
            username,
            email,
            hashedPassword,
        });
        return await User.scope('currentUser').findByPk(user.id);
    };
    return User;
};
