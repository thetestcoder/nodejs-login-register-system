const express = require('express');
const router = express.Router();
const AccountController = require('../../app/controllers/AccountController')
// CONTROLLERS

router.get('/account', AccountController.account);

module.exports = router;