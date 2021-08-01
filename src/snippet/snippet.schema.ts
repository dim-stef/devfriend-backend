import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document, SchemaTypes, Types } from 'mongoose';

//export type SnippetDocument = Snippet & Document;

@Schema({ timestamps: { createdAt: 'created', updatedAt: 'updated' } })
export class SnippetEntity extends Document {
  @Prop({ required: true })
  type!: string;

  @Prop()
  language?: string;

  @Prop({ required: true })
  body!: string;

  @Prop([{ type: SchemaTypes.ObjectId, ref: 'TagEntity' }])
  tags!: Types.ObjectId[];

  @Prop({ default: Date.now })
  created?: Date;
}

export const SnippetEntitySchema = SchemaFactory.createForClass(SnippetEntity);
