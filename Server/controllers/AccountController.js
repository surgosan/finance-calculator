const { Account } = require('../models');
const errors = require('./errors');

module.exports = {
    async newAccount (req, res)
    {
        try {
            const newAccount = await Account.create(req.body);
            res.send(`${Account.name} has been added to accounts`);
        } catch (error) {
            const message = 'An error has occurred';
            errors.errorHandler(res, error, message);
        }
    }
}