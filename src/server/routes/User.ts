import {Router, Request, Response} from 'express';
import * as mongoose from 'mongoose';
import {UserModel, IUserModel} from '../models/User';
import * as PasswordHash from 'password-hash';
const users: Router = Router();

mongoose.connect(process.env.DB_URL!);

users.get('/', function(req: Request, res: Response) {
    console.log('users get');
    res.send('hello world');
});

users.post('/', function(req: Request, res: Response, next) {
    let userData = req.body as IUserModel;
    userData.password = PasswordHash.generate(userData.password);
    UserModel.createUser(userData).then((user) => {
        console.log(user.pictureUrl);
        res.json({id: user._id, profilePictureUrl: user.pictureUrl});
        next();
    }).catch((err) => {
        console.log(err);
    });
});

export default users;