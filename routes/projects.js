
const express = require('express');
const router = express.Router();
const data = require('../data.json');
const httpStatus = require('http-status-codes');

router.get('/:id', (req, res) => {
    const id = req.params.id;
    if (id >= data.projects.length) {
        console.error(`Project ${id} does not exist.`)
        return res.redirect('/').render('index', { projects: data.projects, notFound: true });
    }
    res.render('project', { project: data.projects[req.params.id]});
});

module.exports = router;
