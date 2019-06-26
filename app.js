const express = require('express');
const app = express();
const port = 3000;

const data = require('./data.json');
const about = require ('./routes/about');
const projects = require('./routes/projects');

const httpStatus = require('http-status-codes');

/**
 * Use Pug for Template Engine
 */
app.set('view engine', 'pug');
app.use('/static', express.static('public'));

/**
 * Handler for main page
 */
app.get('/', (req, res) => {
    const projectsData = data;
    res.render('index', { projects: projectsData.projects });
});

/**
 * Middleware for about page and projects pages
 */
app.use('/about', about);
app.use('/projects', projects);

/**
 * Page Not Found
 */
app.use((req, res, next) => {
    const error = new Error();
    error.status = httpStatus.NOT_FOUND;
    error.message = 'The page you are looking for does not exist.';
    throw error;
});

/**
 * Error Handler
 */
app.use(function(err, req, res, next) {
    if (err.statusCode === httpStatus.NOT_FOUND) {
        error.status = httpStatus.NOT_FOUND;
        error.message = 'The page you are looking for does not exist.';
    }
    console.error(err);
    res.render('error', { err });
});

app.listen(port, () => {
    console.log('listening on http://localhost:3000');
});