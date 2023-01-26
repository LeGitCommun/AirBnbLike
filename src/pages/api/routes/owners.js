const express = require('express');
const router = express.Router();

const ownerCtrl = require('../controllers/owners');

router.post('/signup', ownerCtrl.signup);
router.post('/login', ownerCtrl.login);

module.exports = router;