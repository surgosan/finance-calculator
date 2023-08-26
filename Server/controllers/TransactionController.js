const {Transaction} = require('../models');
const AccountController = require('./AccountController');
const {Account} = require('../models');
const errors = require('./errors');

module.exports = {
    async getTransactions (req, res) {
        try {
            const transactions = await Transaction.findAll();

            if(transactions.length === 0)
            {
                const error = errors.notFound('No accounts to display.');
                res.status(error.status).send({
                    error: error.message
                })
            } else { res.send(transactions) }
        } catch (error) {
            const message = 'Could not fetch transactions.';
            errors.errorHandler(res, error, message);
        }
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
              const error = errors.notFound('No accounts to display.');
              res.status(error.status).send({
                  error: error.message
              })
          } else { res.send(transactions) }
      } catch (error) {
          const message = 'Could not fetch transactions.';
          errors.errorHandler(res, error, message);
      }
    },

    async newTransaction (req, res) {
        try {
            const { account } = req.body;
            const accountObject = await AccountController.getAccount(account);

            if(!account)
            {
                res.send('Account recipient not found');
            } else {
                const transaction = await Transaction.create(req.body);
                res.send(`${transaction.name} added to ${accountObject.name}`);
            }
        } catch (error) {
            const message = 'Could not create transaction.';
            errors.errorHandler(res, error, message);
        }
    }
}