'use strict';

const express = require('express');
const routes = require('./routes');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();

// Middleware to expose request payload on req.body
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/media', routes.media);

app.listen(PORT,HOST);
console.log(`Running on http://${HOST}:${PORT}`);