const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const fs = require('fs');

router.get('/user', (req, res) => {
    res.json({
        data: "creating or updating user",
    });
})

module.exports = router;