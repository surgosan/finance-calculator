const AccountController = require('./controllers/AccountController');
const TransactionController = require('./controllers/TransactionController');

module.exports = (app) => {
    app.get('/account/display', AccountController.displayAccounts);
    app.post('/account/new', AccountController.newAccount);
    app.post('/account/fetch', AccountController.fetchAccount);
    app.delete('/account/destroy', AccountController.deleteAccount);
    app.put('/account/edit', AccountController.editAccount);

    app.post('/transaction/new', TransactionController.newTransaction);
}