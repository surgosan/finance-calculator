const { DataTypes} = require('sequelize');
const database = require('../db_connection');

const Transaction = database.define('Transaction',
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        name: {
            type: DataTypes.STRING(50),
            allowNull: false
        },

        date: {
            type: DataTypes.DATE,
            allowNull: false
        },

        amount: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },

        note: {
            type: DataTypes.TEXT
        },

        category: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        account: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        account_recipient: {
            type: DataTypes.INTEGER
        },

        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })

module.exports = Transaction;