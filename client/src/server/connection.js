import api from './api';

export default  {

//Account Functions
    fetchAccounts() {
      new api().get("/account/display");
    },
    newAccount(acc) {
        new api().post("/account/new", acc);
    },
    fetchAccount(id) {
        new api().post("/account/fetch", id);
    },
    deleteAccount(id) {
        new api().delete("/account/destroy", id);
    },
    editAccount(acc) {
        new api().put(acc);
    },

//Transaction Functions
    fetchTransactions() {
        new api().get('/transaction/display');
    },
    transactionCount() {
        new api().get('/transaction/count');
    },
    fetchTransaction(id) {
        new api().post('/transaction/byId', id);
    },
    transactionSet(page) {
        new api().post('/transaction/pages', page);
    },
    fetchTransactionByAccount(account_id) {
        new api().post('/transaction/byAccount', account_id);
    },
    transactionByUser(user_id) {
        new api().post('/transaction/byUser', user_id);
    },
    transactionByUserSet(user_id, page) {
        new api().post('/transaction/byUserSet', user_id, page);
    },
    transactionByDate(date_start, date_end) {
        new api().post('/transaction/byDate', date_start, date_end);
    },
    newTransaction(transaction) {
        new api().post('/transaction/new', transaction)
    },
    deleteTransactionById(id) {
        new api().delete('/transaction/deleteById', id);
    },
    deleteTransactionsByAccount(account_id) {
        new api().delete('/transaction/deleteByAccount', account_id);
    },
    editTransaction(transaction) {
        new api().put('/transaction/edit', transaction);
    },

//user functions
    fetchUsers() {
        new api().get('/user/fetch');
    },
    userById(id) {
        new api().post('/user/byId', id);
    },
    newUser(credentials) {
        new api().post('/user/new', credentials);
    },
    verifyUser(credentials) {
        new api().post('/user/verify', credentials);
    },
    deleteUser(id) {
        new api().delete('/user/delete', id);
    },
    editUser(user) {
        new api().put('/user/edit', user);
    }
}