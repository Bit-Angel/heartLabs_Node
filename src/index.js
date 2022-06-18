const app = require('./app');
const express = require('express');
const path = require('path');

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(require('./routes/index'));

app.listen(app.get('port'));
console.log('Server escuchando en el puerto ',app.get('port'));