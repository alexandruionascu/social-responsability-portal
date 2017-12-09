import {Router, Request, Response} from 'express';
import {UserModel} from '../models/User';
const users: Router = Router();


users.get('/', function(req: Request, res: Response) {
    console.log('users get');
    res.send('hello world');
});

users.post('/', function(req: Request, res: Response) {
    console.log('users post');
    UserModel.createUser(req.body).then(() => {
        console.log('created');
    }).then(() => {
        res.sendStatus(200);
    });
});

export default users;