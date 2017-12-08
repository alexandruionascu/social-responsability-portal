"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
// load environment variables
require('dotenv').config();
//var express = require('express');
var app = express();
app.use(express.static('public'));
app.get('/hello', function (req, res) {
    res.send('hello world');
});
console.log(process.env.EXPRESS_PORT);
app.listen(process.env.EXPRESS_PORT);
