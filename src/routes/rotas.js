const express = require('express');

const authRouter = require('./authRouter');
const routeUser = require('./routeUser');

const routers = express.Router();

routers.use('/login', authRouter);
routers.use('/user', routeUser);

module.exports = routers;