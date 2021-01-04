const express = require('express');

const router = express.Router();

const userController = require('../controllers/users-controllers');

router.get('/', userController.getUsers);

router.post('/signup', userController.signup);

router.post('/login', userController.login);

module.exports = router;