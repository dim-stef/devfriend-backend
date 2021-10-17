import { Injectable, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, FilterQuery, CreateQuery } from 'mongoose';
import { User, UserDocument } from './user.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<UserDocument>,
  ) {}

  async create(input: CreateQuery<User>): Promise<User> {
    return this.userModel.create(input);
  }

  async findOne(query: FilterQuery<User>): Promise<User> {
    return this.userModel.findOne(query).lean();
  }

  async findOrCreate(query: FilterQuery<User>): Promise<User> {
    let user = this.findOne(query)
    if(user){
      return user;
    }else{
      return this.create(query)
    }
  }

  async find(): Promise<User[]> {
    return this.userModel.find().lean();
  }
}
