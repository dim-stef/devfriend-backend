import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { DatabaseModule } from '../database/database.module';
import { userProviders } from './user.providers';
import { UserSchema, User } from './user.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: User.name, schema: UserSchema}])],
  providers: [UserService, UserResolver],
})
export class UserModule {}
