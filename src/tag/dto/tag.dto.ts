import { CursorConnection, FilterableField, IDField, KeySet } from "@nestjs-query/query-graphql";
import { ObjectType, GraphQLISODateTime, Field, Int, ID } from "@nestjs/graphql";
import { Snippet } from "src/snippet/dto/snippet.dto";

@ObjectType('Tag')
@KeySet(['id'])
@CursorConnection('snippets', () => Snippet, { disableUpdate: true, disableRemove: true })
export class Tag {
  @IDField(() => ID)
  id!: string;

  @FilterableField()
  name!: string;

  @FilterableField(()=>GraphQLISODateTime)
  created!: Date;
}