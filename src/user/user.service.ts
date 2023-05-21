import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateUserInput } from "./dto/create-user.input";
import { userDetails } from "./entities/user.entity";

@Injectable()
export class UserService{
  constructor(@InjectRepository(userDetails) private userDetailsRepositry:Repository<userDetails>) {}

  createUser(createUserInput:CreateUserInput):Promise<userDetails>{
    const newUser = this.userDetailsRepositry.create(createUserInput)
    return this.userDetailsRepositry.save(newUser);
  }
}