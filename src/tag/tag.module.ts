import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryMongooseModule } from '@nestjs-query/query-mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { TagEntity, TagEntitySchema } from './tag.schema';
import { Tag } from './dto/tag.dto';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [
        NestjsQueryMongooseModule.forFeature([
          {document: TagEntity, name: TagEntity.name, schema: TagEntitySchema}
        ])
      ],
      resolvers: [{DTOClass: Tag, EntityClass: TagEntity}]
    })
  ]
})

export class TagModule {}
