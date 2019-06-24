
const express = require('express');
const router = express.Router();
const data = require('../data.json');

router.get('/:id', (req, res) => {
    res.locals = data.projects[req.params.id];
    res.render('project');
});

module.exports = router;
