const express = require('express');
const router = express.Router();

/**
 * Router for handling the about page.
 */
router.get('/', (req, res) => {
    return res.render('about');
});

module.exports = router;