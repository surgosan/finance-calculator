const {Transaction} = require('../models');
const AccountController = require('./AccountController');
const {Account} = require('../models');
const errors = require('./errors');

module.exports = {
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