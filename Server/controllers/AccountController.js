const { Account } = require('../models');
const errors = require('./errors');

function errorHandler(res, error, message) {
    const errorMessage = error.message || message;
    const errorResponse = errors.internalServerError(errorMessage);

    res.status(errorResponse.status).send({
        error: errorResponse.message
    })
};


module.exports = {
    async newAccount (req, res)
    {
        try {
            const newAccount = await Account.create(req.body);
            res.send(`${Account.name} has been added to accounts`);
        } catch (error) {
            const message = 'An error has occurred';
            errorHandler(res, error, message);
        }
    }
}