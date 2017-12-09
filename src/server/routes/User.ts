import {Router, Request, Response} from 'express';
const users: Router = Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

users.get('/', function(req: Request, res: Response) {
    res.send('hello world');
});

users.post('/', jsonParser, function(req: Request, res: Response) {
    console.log(req.body);
});

export default users;