const Sequelize = require('sequelize');
const database = require('./db_connection');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors())
    // require('./routes')(app);
const port = 8081;

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'content-type');
    next();
});

database.sync()
    .then(() => {
        console.log("Connected");

        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    });