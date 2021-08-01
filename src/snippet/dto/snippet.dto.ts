import { CursorConnection, FilterableField, IDField, KeySet } from "@nestjs-query/query-graphql";
import { ObjectType, GraphQLISODateTime, Field, Int, ID } from "@nestjs/graphql";
import { Tag } from "src/tag/dto/tag.dto";

@ObjectType('Snippet')
@KeySet(['id'])
@CursorConnection('tags', () => Tag)
export class Snippet {
  @IDField(() => ID)
  id!: string;

  @FilterableField()
  type!: string;

  @FilterableField({nullable: true})
  language?: string;

  @FilterableField()
  body!: string;

  @FilterableField(()=>GraphQLISODateTime)
  created!: Date;
}

/**
 * 
# Write your query or mutation here
mutation {
  createOneSnippet (
    input: {snippet: {type: "test", body:"test body"}}
  ){
    id
    type
    body
    created
  }
}
 */