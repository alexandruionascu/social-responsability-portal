import * as express from 'express';

// load environment variables
require('dotenv').config();
//var express = require('express');
let app = express();

app.use(express.static('public'))

app.get('/hello', function(req, res){
  res.send('hello world');
});

console.log(process.env.EXPRESS_PORT);
app.listen(process.env.EXPRESS_PORT);