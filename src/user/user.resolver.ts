import { Args, Mutation, Resolver ,Query} from "@nestjs/graphql";
import { emit } from "process";
import { CreateUserInput } from "./dto/create-user.input";
import { UpdateUserInput } from "./dto/update-user.input";
import { userDetails } from "./entities/user.entity";
import { UserService } from "./user.service";

@Resolver(of=>userDetails)
export class UserResolver{
  constructor(private userService:UserService){}

  @Query(returns=>userDetails,{nullable:true})
  getUserDetailsByMail(@Args('email') email:string):Promise<userDetails>{
    return this.userService.getUserDetailsByMail(email);
  }

  @Mutation(returns=>userDetails)
  createUser(@Args('createUserInput') createUserInput:CreateUserInput):Promise<userDetails>{
    return this.userService.createUser(createUserInput);
  }

  @Mutation(returns=>userDetails)
  updateUserInfo(@Args('updateUserInput') updateUserInput:UpdateUserInput):Promise<userDetails>{
    return this.userService.updateUserInfo(updateUserInput);
  }


}