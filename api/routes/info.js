const express = require('express');
const os = require('os');
const package = require('./../../package.json');
const router = express.Router();
router.get('/info', (req, res, next)=>{
    res.status(200).json({
        Name : package.name,
        Description : package.description
    })
})
 module.exports = router;
