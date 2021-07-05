import { Field, ObjectType } from '@nestjs/graphql';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
});

@ObjectType()
export class User extends Document {
  @Field()
  name: string;

  @Field()
  email: string;
}
