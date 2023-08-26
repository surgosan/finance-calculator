// noinspection JSCheckFunctionSignatures

const {Transaction} = require('../models');
const AccountController = require('./AccountController');
const errors = require('./errors');
const { Op } = require('sequelize');

module.exports = {
    async getTransactions (req, res) {
        try {
            const transactions = await Transaction.findAll();

            if(transactions.length === 0)
            {
                errors.emptyReturn(res, 'No accounts to display.');
            } else { res.send(transactions) }
        } catch (error) { errors.errorHandler(res, error, 'Could not fetch transactions.') }
    },

    async transactionById (req, res) {
        try {
            const { id } = req.body;
            const transaction = await Transaction.findByPk(id);
            res.send(transaction);
        } catch( error) { errors.errorHandler(res, error, 'Could not fetch transactions.') }
    },

    async transactionPages (req, res) {
      try {
          const { page } = req.body;
          const itemsPerPage = 10;
          const offset = page * itemsPerPage;
          const limit = itemsPerPage;

          const transactions = await Transaction.findAll({
              offset,
              limit
          });

          if(transactions.length === 0)
          {
              errors.emptyReturn(res, 'No accounts to display.');
          } else { res.send(transactions) }
      } catch (error) { errors.errorHandler(res, error, 'Could not fetch transactions.') }
    },

    async getTransactionsByAccount (req, res) {
        try {
            const { account } = req.body;
            const transactions = await Transaction.findAll({
                where: {
                    [Op.or]: [
                        { account: account },
                        { account_recipient: account }
                    ]
                }
            });

            if(transactions.length === 0) {
                errors.emptyReturn(res, 'No transactions found');
            } else { res.send(transactions) }
        } catch (error) { errors.errorHandler(res, error, 'Could not fetch transactions.') }
    },

    async getTransactionsByDate (req, res) {
        try {
            const { dateStart, dateEnd } = req.body;
            const transactions = await Transaction.findAll({
                where: {
                    date: {
                        [Op.between]: [dateStart, dateEnd]
                    }
                }
            })

            res.send(transactions);
        } catch (error) { errors.errorHandler(res, error, 'Could not fetch transactions.') }
    },

    async newTransaction (req, res) {
        try {
            const { account, account_recipient } = req.body;
            const accountObject = await AccountController.getAccount(account);
            const accRecipient = await AccountController.getAccount(account_recipient);

            if(!account || !accountObject)
            {
                errors.emptyReturn(res, 'Account not found');
            } else if(account_recipient) {
                if(accRecipient) {
                    const transaction = await Transaction.create(req.body);
                    res.send(`${transaction.name} added to ${accountObject.name} and ${accRecipient.name}`);
                } else {
                    errors.emptyReturn(res, 'Account recipient not found.')
                }
            }
            else {
                const transaction = await Transaction.create(req.body);
                res.send(`${transaction.name} added to ${accountObject.name}`);
            }
        } catch (error) { errors.errorHandler(res, error, 'Could not create transaction.') }
    },

    async deleteById (req, res) {
        try {
            const { id } = req.body;
            await Transaction.destroy({ where: { id } });
            res.send('Transaction Deleted.')
        } catch (error) { errors.errorHandler(res, error, 'Could not delete transaction.') }
    },

    async deleteByAccount (req, res) {
        try {
            const { account } = req.body;
            const deletedCount = await Transaction.destroy({
                where: {
                    [Op.or]: [
                        {account: account},
                        {account_recipient: account}
                    ]
                }
            });

            if(deletedCount > 0) {
                res.send(`Deleted ${deletedCount} transactions.`)
            } else { res.send('No transactions to be deleted')}
        } catch (error) { errors.errorHandler(res, error, 'Could not delete transactions.') }
    },

    async editTransaction (req, res) {
        try {
            const { id } = req.body;
            const transaction = await Transaction.findByPk(id);

            if(transaction) {
                await Transaction.update(req.body, {
                    where: {id: id}
                });
                res.send(`${transaction.name} updated successfully.`)
            } else {
                res.send('Transaction not found.')
            }
        } catch (error) { errors.errorHandler(res, error, 'Could not delete transaction.') }
    }
}