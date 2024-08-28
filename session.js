const express = require('express');
const app = express();

var session = require('express-session');

app.use(session({
    resave: false,//agar session ki vale chg na ho to phirse save na krro
    saveUninitialized: false,//not save the data jo initialize ni h
    secret:"hellololo"
})); 