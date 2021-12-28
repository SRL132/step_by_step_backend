const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const fs = require('fs');
//middleware
const { authCheck } = require("../middleware/auth")

//Controller
const { createOrUpdateUser } = require('../controllers/auth.js');
router.post('/create-or-update-user', authCheck, createOrUpdateUser);

module.exports = router;