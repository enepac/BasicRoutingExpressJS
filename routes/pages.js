const express = require('express');
const router = express.Router();

//implementing routes
router.get("/", (req, res) => {
    res.send("this is the home page!");    
});

router.get("/About", (req, res) => {
    res.send("this is the about page!");    
});

module.exports = router;