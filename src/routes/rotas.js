const express = require('express');

const authRouter = require('./authRouter');
const routeUser = require('./routeUser');
const categoryRouter = require('./categoryRouter');
const postRouter = require('./postRouter');

const routers = express.Router();

routers.use('/login', authRouter);
routers.use('/user', routeUser);
routers.use('/categories', categoryRouter);
routers.use('/post', postRouter);

module.exports = routers;