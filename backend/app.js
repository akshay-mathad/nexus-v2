const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const pool = require('./db'); // Import the database connection

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();
const PORT = 3005;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// Example route to get all users from the database
app.get('/users', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users'); // Query the database
    res.json(result.rows); // Send the result as JSON
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Example route to add a new user
app.post('/users', async (req, res) => {
  const { name, email } = req.body; // Assuming you're sending name and email in the request body
  try {
    const result = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *', [name, email]);
    res.status(201).json(result.rows[0]); // Send the newly created user as JSON
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
