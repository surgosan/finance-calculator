const { Account } = require('../models');
const errors = require('./errors');

module.exports = {
    async newAccount (req, res)
    {
        try {
            const newAccount = await Account.create(req.body);
            res.send(`${newAccount.name} has been added to accounts`);
        } catch (error) {
            const message = 'An error has occurred';
            errors.errorHandler(res, error, message);
        }
    },

    async deleteAccount (req, res)
    {
        try {
            const { id } = req.body;
            await Account.destroy({ where: { id } });
            res.send('Account removed.')
        } catch (error) {
            const message = 'Could not delete account.';
            errors.errorHandler(res, error, message);
        }
    },

    async displayAccounts(req, res)
    {
        try {
            const accounts = await Account.findAll();

            if(accounts.length === 0) {
                const error = errors.notFound('No accounts to display.');
                res.status(error.status).send({
                    error: error.message
                })
            } else {res.send(accounts)}
        } catch (error) {
            const message = 'Could not display accounts.';
            errors.errorHandler(res, error, message);
        }
    },

    async fetchAccount (req, res)
    {
        try {
            const { id } = req.body;
            const account = await Account.findByPk(id);
            res.send(account);
        } catch (error) {
            const message = 'Could not fetch account.';
            errors.errorHandler(res, error, message);
        }
    },

    async getAccount(id)
    {
        try {
            return await Account.findByPk(id);
        } catch {
            return null;
        }
    },

    async editAccount (req, res) {
        try {
            const { id } = req.body;
            const account = await Account.findByPk(id);

            if(account) {
                await Account.update(req.body, {
                    where: {id: id}
                });
                res.send('Account updated successfully.');
            } else {
                res.send('Account not found.')
            }
        } catch (error) {
            const message = 'Could not edit account.';
            errors.errorHandler(res, error, message);
        }
    }
}