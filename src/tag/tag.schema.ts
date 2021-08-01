import { Field, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from 'mongoose';
import { Document, SchemaTypes, Types } from 'mongoose';
import { SnippetEntity } from "src/snippet/snippet.schema";

@ObjectType()
@Schema({timestamps: {createdAt: 'created', updatedAt: 'updated'}})
export class TagEntity extends Document {
  @Field()
  @Prop({ required: true })
  name!: string;
}

export const TagEntitySchema = SchemaFactory.createForClass(TagEntity);
TagEntitySchema.virtual('snippets', {
  ref: 'SnippetEntity',
  localField: '_id',
  foreignField: 'tags',
});