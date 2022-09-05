const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const seedData = require('./seed-data');

const indexRouter = require('./routes/index');
const jobsRouter = require('./routes/jobs');

seedData()

const app = express();
const port = 3001

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/jobs', jobsRouter);

app.listen(port, () => {
  console.log(`API listening on port ${port}`)
})

module.exports = app;
