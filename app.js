const express= require ("express")

const bodyParser = require('body-parser')
const app= express ();

require('dotenv').config()

const PORT = process.env.PORT || 3030;


app.use(express.static(__dirname + "/public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//views

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// routes

app.use  ('/', require ('./routes/routes.js'))

//port

app.listen(PORT, () => {
    console.log( `app listening at http://localhost:${PORT}`);
  });