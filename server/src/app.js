const path = require('path');
const morgan = require('morgan');
const express = require('express');

const moviesRouter = require('./routers/movies.router')


const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(morgan('combined'));
app.use(express.json());
app.use(moviesRouter);

module.exports = app;