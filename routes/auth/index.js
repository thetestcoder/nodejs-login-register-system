const express = require('express');
const router = express.Router();
const AuthController = require('../../app/controllers/AuthController')
// CONTROLLERS

router.get('/login', AuthController.loginView );
router.post('/login', AuthController.login);
router.get('/register', AuthController.registerView);
router.post('/register', AuthController.register);
router.get('/logout', AuthController.logout);

module.exports = router;