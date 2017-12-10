import * as mongoose from 'mongoose';
import {Schema} from 'mongoose';
import {RepositoryBase} from './RepositoryBase';
// load environment variables
require('dotenv').config();

export interface IIssueModel extends mongoose.Document {
  author: string;
  authorProfileUrl: string;
  imageUrl: string;
  description: string;
  latitude: number,
  longitude: number,
  upvotes: number;
  downvotes: number;
  comments: string[],
  createdAt: Date;
  modifiedAt: Date;
}

const schema = new Schema({
  author: {
     type: String,
	   required: true
  },
  authorProfileUrl: {
    type: String,
    required: true
  },
  imageUrl: {
	   type: String,
	   required: true
  },
  description: {
	   type: String,
	   required: true
  },
  latitude: {
    type: Number,
    required: true
  },
  longitude: {
    type: Number,
    required: true
  },
  upvotes: {
      type: Number,
      required: false,
  },
  downvotes: {
      type: Number,
      required: false
  },
  comments: {
    type: [String],
    required: false
  },
  createdAt: {
	   type: Date,
	   required: false
  },
  modifiedAt: {
	   type: Date,
	   required: false
  }
});

schema.pre('save',function (this, next) {
  if (this) {
    let doc = <IIssueModel>this._doc;
    let now = new Date();
    if (!doc.createdAt) {
      doc.createdAt = now;
    }
    doc.modifiedAt = now;
    doc.upvotes = 0;
    doc.downvotes = 0;
  }
  next();
  return this;
});

export const IssueSchema = mongoose.model<IIssueModel>('issue', schema, 'issues', true);

export class IssueModel {

  private _IssueModel: IIssueModel;

  constructor(IssueModel: IIssueModel) {
    this._IssueModel = IssueModel;
  }
  
  
  static createIssue(Issue: IIssueModel) : Promise<IIssueModel> {
    let promise = new Promise<IIssueModel>((resolve, reject) => {
      let repo = new IssueRepository();
      repo.create(Issue, (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });    
    });
    
    return promise;
  }
  
  static findIssues(author: string):  Promise<mongoose.Document[]> {
    let promise = new Promise<mongoose.Document[]>((resolve, reject) => {
      let repo = new IssueRepository();

      repo.find({author: author}).sort({createdAt: -1}).exec((err, res) => {
        if (err) {
          reject(err);
        } else {
          if (res.length) {
            resolve(res);
          } else {
            resolve(undefined);
          }
        }
      });
    });
    
    return promise;    
  }

  static getAll():  Promise<mongoose.Document[]> {
    let promise = new Promise<mongoose.Document[]>((resolve, reject) => {
      let repo = new IssueRepository();
      repo.find({}).sort({createdAt: -1}).exec((err, res) => {
        if (err) {
          reject(err);
        } else {
          if (res.length) {
            resolve(res);
          } else {
            resolve(undefined);
          }
        }
      });
    });
    
    return promise;    
  }
}

Object.seal(IssueModel);

export class IssueRepository extends RepositoryBase<IIssueModel> {
  constructor() {
    super(IssueSchema);
  }
}

Object.seal(IssueRepository);
mongoose.connect(process.env.DB_URL!);
