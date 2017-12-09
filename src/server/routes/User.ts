import {Router, Request, Response} from 'express';
const users: Router = Router();

users.get('/', function(req: Request, res: Response) {
    res.send('hello world');
});

export default users;