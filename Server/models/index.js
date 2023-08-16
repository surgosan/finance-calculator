const Sequelize = require('sequelize');

const Account = require('./Account');
const Transaction = require('./Transaction');
const User = require('./User');

const data = {
    Account,
    Transaction,
    User
}

data.sequelize = Sequelize;

module.exports = data;