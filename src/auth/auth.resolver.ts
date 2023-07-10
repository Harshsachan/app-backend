import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { userDetails } from "src/user/entities/user.entity";
import { AuthService } from "./auth.service";
import { AuthDto } from "../auth/dto/auth-dto";
import { authDetails } from "src/auth/entites/auth.entity";

@Resolver(of=>authDetails)
export class AuthResolver{
  constructor(private authService:AuthService){}

  @Mutation(returns=>authDetails)
  signUp(@Args('authDto') authDto:AuthDto):Promise<authDetails>{
    return this.authService.signUp(authDto);
  }
  @Mutation(returns=>userDetails)
  logIn(@Args('authDto') authDto:AuthDto):Promise<userDetails>{
    return this.authService.logIn(authDto);
  }
}