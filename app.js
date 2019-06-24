const express = require('express');
const app = express();
const port = 3000;

const staticContent = "public";
const data = require('./data.json');
const about = require ('./routes/about');
const projects = require('./routes/projects');

const httpStatus = require('http-status-codes');

app.set('view engine', 'pug');
app.use('/static', express.static('public'));

app.get('/', (req, res) => {
    res.locals = data.projects;
    res.render('index');
});

app.use('/about', about);
app.use('/projects', projects);

// Error Handler
app.use(function(err, req, res, next) {
    console.error(err);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send(`An unexpected error occurred: ${err}`);
});

// Page Not Found
app.get('*', function(req, res){
    res.status(httpStatus.NOT_FOUND).send('Page Not Found');
});

app.listen(port);
console.log('listening on http://localhost:3000');