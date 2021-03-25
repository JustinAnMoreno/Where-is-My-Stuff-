const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://Admin:idunno123@sei.fuetz.mongodb.net/whatscoming?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  }
);

// shortcut to mongoose.connection object
const db = mongoose.connection;

db.on("connected", function () {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});


// process.env.DATABASEURL,
