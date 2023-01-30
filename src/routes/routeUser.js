const express = require('express');

const user = require('../controllers/user.controller');

const auth = require('../middlewares/auth.middleware');

const { nameValid,
    emailValid,
    passwordLeng,
    registeredEmail } = require('../middlewares/user.middleware');

const router = express.Router();

router.post('/', nameValid,
    emailValid,
    passwordLeng,
    registeredEmail, user.userServ);

router.get('/', auth.validateTokens, user.getAll);

router.get('/:id', auth.validateTokens, user.getById);

module.exports = router;