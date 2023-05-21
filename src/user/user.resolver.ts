import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { CreateUserInput } from "./dto/create-user.input";
import { userDetails } from "./entities/user.entity";
import { UserService } from "./user.service";

@Resolver(of=>userDetails)
export class UserResolver{
  constructor(private userService:UserService){}

  @Mutation(returns=>userDetails)
  createUser(@Args('createUserInput') createUserInput:CreateUserInput):Promise<userDetails>{
    return this.userService.createUser(createUserInput);
  }
}