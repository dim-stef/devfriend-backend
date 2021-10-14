import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { databaseProviders } from './database/database.providers';
import { UserService } from './user/user.service';
import { UserResolver } from './user/user.resolver';
import { UserModule } from './user/user.module';
import { SnippetModule } from './snippet/snippet.module';
import { userProviders } from './user/user.providers';
import { TagModule } from './tag/tag.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    GraphQLModule.forRoot({ autoSchemaFile: 'schema.gql' }),
    ConfigModule.forRoot(),
    //DatabaseModule,
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get('MONO_DB_CONNECTION_STRING'),
      }),
      inject: [ConfigService],
    }),
    UserModule,
    TagModule,
    SnippetModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    //UserService,
    //UserResolver,
  ],
})
export class AppModule {}
