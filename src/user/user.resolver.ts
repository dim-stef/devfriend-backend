import { Resolver, Args, Mutation, Query } from '@nestjs/graphql';
import { CreateUserInput } from './user.input';
import { UserService } from './user.service';
import { User, UserSchema} from './user.schema';

@Resolver(of => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Mutation(returns => User)
  async createUser(@Args('input') input: CreateUserInput) {
    return this.userService.create(input);
  }

  @Query(returns => [User])
  async users() {
    return this.userService.find();
  }
}
