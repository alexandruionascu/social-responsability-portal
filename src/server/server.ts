import * as express from 'express';
import * as mongoose from 'mongoose';
import {UserModel} from './models/User';
import usersRoute from './routes/User';
const bodyParser = require('body-parser');
// load environment variables
require('dotenv').config();
let app = express();
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static('public'))
app.use('/users', usersRoute);



app.get('/hello', function(req, res){
  res.send('hello world');
});


//example usage
UserModel.findUser('Sefu').then((res) => {
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