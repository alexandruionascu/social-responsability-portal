import * as express from 'express';
import * as mongoose from 'mongoose';
import {UserModel} from './models/User';

// load environment variables
require('dotenv').config();
//var express = require('express');
let app = express();

app.use(express.static('public'))

app.get('/hello', function(req, res){
  res.send('hello world');
});


//example usage
UserModel.findUser('Abel').then( (res) => {
  console.log(res);
});

mongoose.connection.on('error', function() {
  console.error.bind(console, 'connection error:')
});
mongoose.connection.on('open', function() {
  console.log('connected');

});


console.log(process.env.EXPRESS_PORT);
app.listen(process.env.EXPRESS_PORT);