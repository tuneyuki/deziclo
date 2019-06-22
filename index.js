const express = require('express');
var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// const db = require('./db');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



// const query = `
// DROP TABLE IF EXISTS inventory;
// CREATE TABLE inventory (id serial PRIMARY KEY, name VARCHAR(50), quantity INTEGER);
// INSERT INTO inventory (name, quantity) VALUES ('banana', 150);
// INSERT INTO inventory (name, quantity) VALUES ('orange', 154);
// INSERT INTO inventory (name, quantity) VALUES ('apple', 100);
// `;

// (async () => {
//   try {
//     const query = 'SELECT * FROM inventory;';
//     await client.connect();
//     const res = await client.query(query);
//     console.log(res.rows);
//     await client.end();
//   } catch(err) {
//     console.log(err);
//   } 
// })();

// client.query(query)
//   .then(res => console.log(res))
//   .catch(err => console.log(err));



app.use('/', require('./routes/index'));
app.use('/input', require('./routes/input'));
app.use('/table', require('./routes/table'));

// db.query('SELECT * FROM inventory;', (err, res) => {
//   console.log(res.rows);
// });


// app.get('/:id', async (req, res) => {
//   const { id } = req.params
//   const { rows } = await db.query('SELECT * FROM inventory WHERE id = $1', [id])
//   res.send(rows[0])
// });

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


app.listen(3000, console.log('Server litening port 3000...'));


