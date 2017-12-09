import * as mongoose from 'mongoose';
import {Schema} from 'mongoose';
import {RepositoryBase} from './RepositoryBase';
// load environment variables
require('dotenv').config();

export interface IUserModel extends mongoose.Document {
  name: string;
  email: string;
  password: string;
  pictureUrl: string;
  createdAt?: Date;
  modifiedAt?: Date;
}

const schema = new Schema({
  name: {
	   type: String,
	   required: true
  },
  email: {
	   type: String,
	   required: true
  },
  password: {
	   type: String,
	   required: true
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
    let doc = <IUserModel>this._doc;
    let now = new Date();
    if (!doc.createdAt) {
      doc.createdAt = now;
    }
    doc.modifiedAt = now;
  }
  next();
  return this;
});

export const UserSchema = mongoose.model<IUserModel>('user', schema, 'users', true);

export class UserModel {

  private _userModel: IUserModel;

  constructor(userModel: IUserModel) {
    this._userModel = userModel;
  }
  get name(): string {
    return this._userModel.name;
  }

  get email(): string {
    return this._userModel.email;
  }

  get password(): string {
    return this._userModel.password;
  }

  get pictureUrl(): string {
    return this._userModel.pictureUrl;
  }
  
  static createUser(user: IUserModel) : Promise<IUserModel> {
    let promise = new Promise<IUserModel>((resolve, reject) => {
      let repo = new UserRepository();
      repo.create(user, (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });    
    });
    
    return promise;
  }
  
  static findUser(name: string) :  Promise<mongoose.Document> {
    let promise = new Promise<mongoose.Document>((resolve, reject) => {
      let repo = new UserRepository();

      repo.find({name : name }).sort({createdAt: -1}).limit(1).exec((err, res) => {
        if (err) {
          reject(err);
        } else {
          if (res.length) {
            resolve(res[0]);
          } else {
            resolve(undefined);
          }
        }
      });
    });
    
    return promise;    
  }
}

Object.seal(UserModel);

export class UserRepository extends RepositoryBase<IUserModel> {
  constructor() {
    super(UserSchema);
  }
}

Object.seal(UserRepository);
console.log(process.env.DB_URL);
mongoose.connect(process.env.DB_URL!);
