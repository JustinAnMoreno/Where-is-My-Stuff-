// Require modules
const express = require("express");
const morgan = require("morgan");
const port = process.env.PORT || '3000';const methodOverride = require("method-override");
const usersRouter = require('./routes/users');
const session = require('express-session');
const indexRouter = require("./routes/index");
const ordersRouter = require("./routes/orders");

// Set up express app
const app = express();

// Connect to DB
require("./config/database");

// Configure the app with app.set()
app.set("view engine", "ejs");

// Mount middleware with app.use()
app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

// Mount routes with app.use()
app.use("/", indexRouter);
app.use("/orders", ordersRouter);
app.use('/users', usersRouter);
app.use(session({
  secret: 'supersecret',
  resave: false,
  saveUninitialized: false
}));


////////// Express Session Playground //////////

app.get('/first-route', function(req, res) { // any route will work
  req.session.favFood = 'pizza';
  res.send(req.session);
});




////////////////////////////////////////////////


// Mount routes with app.use()
app.use('/', indexRouter);


// Tell App to listen
app.listen(port, function () {
  console.log(`Express is listening on port:${port}`);
});
