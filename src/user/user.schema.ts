import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@ObjectType()
@Schema()
export class User {
  @Field()
  @Prop({ required: true })
  name: string;

  @Field()
  @Prop({ required: true })
  email: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
