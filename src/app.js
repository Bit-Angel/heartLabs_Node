const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');

const Handlebars = require("handlebars");
const template = Handlebars.compile("Name: {{name}}");
console.log(template({ name: "Arturo" }));

const app = express();

//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname,'views'));
app.set('view engine','.hbs');


//middlewares
app.use(morgan('dev'));

//routes
app.use(require('./routes/index'));
// static files
app.use(express.static(path.join(__dirname,'public')));



module.exports = app;