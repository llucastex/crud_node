const express = require("express");
const bodyParser = require("body-parser");
const Loaders = require('./database');
const router = require('./routes');

const app = express();

Loaders.startDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: false}));

app.use(router);

app.listen(3000, () => {
    console.log("Server is listening!");
});

