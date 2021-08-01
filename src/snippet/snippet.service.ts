import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import {Model, FilterQuery} from 'mongoose';
// import { Snippet, SnippetSchema, SnippetDocument } from "./snippet.schema";

// @Injectable()
// export class SnippetService {
//   constructor(
//     @InjectModel(Snippet.name)
//     private snippetModel: Model<SnippetDocument>
//   ){}

//   async create(input: CreateQuery<Snippet>): Promise<Snippet> {
//     return this.snippetModel.create()
//   }
// }