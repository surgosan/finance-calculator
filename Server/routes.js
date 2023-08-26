const AccountController = require('./controllers/AccountController');
const TransactionController = require('./controllers/TransactionController');

module.exports = (app) => {
    app.get('/account/display', AccountController.displayAccounts);
    app.post('/account/new', AccountController.newAccount);
    app.post('/account/fetch', AccountController.fetchAccount);
    app.delete('/account/destroy', AccountController.deleteAccount);
    app.put('/account/edit', AccountController.editAccount);

    app.get('/transaction/display', TransactionController.getTransactions);
    app.post('/transaction/byId', TransactionController.transactionById);
    app.post('/transaction/pages', TransactionController.transactionPages);
    app.post('/transaction/byAccount', TransactionController.getTransactionsByAccount);
    app.post('/transaction/byDate', TransactionController.getTransactionsByDate);
    app.post('/transaction/new', TransactionController.newTransaction);
    app.delete('/transaction/deleteById', TransactionController.deleteById);
    app.delete('/transaction/deleteByAccount', TransactionController.deleteByAccount);
    app.put('/transaction/edit', TransactionController.editTransaction);
}