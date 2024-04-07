const express = require('express')
const router = express.Router();
const API_KEY = 


router.get('/', (req, res, next)=>{
    res.status(200).json({
        "message": "hello from common"
    });
});

// router.get('/:commonID', (req, res, next)=>{
//     const commonID = req.params.id;
// })

module.exports = router;