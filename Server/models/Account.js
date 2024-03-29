const { DataTypes} = require('sequelize');
const database = require('../db_connection');

const Account = database.define('Account',
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        name: {
            type: DataTypes.STRING(25),
            allowNull: false
        },

        type: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        balance: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },

        liability: {
            type: DataTypes.TINYINT(1),
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            default: -1
        }
    },
    {
        timestamps: false,
        freezeTableName: true,
        modelName: "Account",
        tableName: 'Account'
    })

module.exports = Account;