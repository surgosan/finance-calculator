const AccountController = require('./controllers/AccountController');

module.exports = (app) => {
    app.post('/account/new', AccountController.newAccount);
}