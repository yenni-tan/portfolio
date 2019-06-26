
const express = require('express');
const router = express.Router();
const data = require('../data.json');

/**
 * Router for handling specific project details.
 */
router.get('/:id', (req, res) => {
    const id = req.params.id;
    if (!data.projects[id] || id >= data.projects.length) {
        console.error(`Project ${id} does not exist.`)
        return res.render('index', { projects: data.projects, notFound: true });
    }
    return res.render('project', { project: data.projects[req.params.id]});
});

module.exports = router;
