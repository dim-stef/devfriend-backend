import { Field, ObjectType } from '@nestjs/graphql';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export const SnippetSchema = new mongoose.Schema({
  type: String,
  url: String,
  body: String,
  date: { type: Date, default: Date.now },
})