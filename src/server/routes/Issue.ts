import {Router, Request, Response} from 'express';
import * as mongoose from 'mongoose';
import {IssueModel, IIssueModel} from '../models/Issue';
const issues: Router = Router();

mongoose.connect(process.env.DB_URL!);

issues.post('/', function(req: Request, res: Response, next) {
    let issueData = req.body as IIssueModel;
    IssueModel.createIssue(issueData).then((issue) => {
        res.json({id: issue._id});
        next();
    }).catch((err) => {
        console.log(err);
    });
});

export default issues;