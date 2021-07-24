import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { databaseProviders } from './database/database.providers';
import { UserService } from './user/user.service';
import { UserResolver } from './user/user.resolver';
import { UserModule } from './user/user.module';
import { userProviders } from './user/user.providers';
import configuration from './config/configuration';
import { MONO_DB_CONNECTION_STRING } from './constants';

@Module({
  imports: [
    GraphQLModule.forRoot({ autoSchemaFile: 'schema.gql' }),
    ConfigModule.forRoot({
      load: [configuration],
    }),
    //DatabaseModule,
    MongooseModule.forRoot(MONO_DB_CONNECTION_STRING),
    UserModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    //UserService,
    //UserResolver,
  ],
})
export class AppModule {}
