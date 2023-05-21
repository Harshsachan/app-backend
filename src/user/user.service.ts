import { Injectable,HttpStatus, HttpException, ForbiddenException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateUserInput } from "./dto/create-user.input";
import { userDetails } from "./entities/user.entity";

@Injectable()
export class UserService{
  constructor(@InjectRepository(userDetails) private userDetailsRepositry:Repository<userDetails>) {}

  async getUserDetailsByMail(email:string):Promise<userDetails| null>{
    return this.userDetailsRepositry.findOne({where:{email}}) ;
  }

  async createUser(createUserInput:CreateUserInput):Promise<userDetails>{
    const {email}=createUserInput;
    //Check if email esist in user DB or not
    const existingUser = await this.userDetailsRepositry.findOne({where:{ email }});
    if (existingUser) {
      //throw new ForbiddenException("User exist",HttpStatus.FORBIDDEN)
      throw new HttpException("User with this email already exists ", HttpStatus.FORBIDDEN);
      //throw new Error("User with this email already exists");
    }
    const newUser = this.userDetailsRepositry.create(createUserInput)
    return this.userDetailsRepositry.save(newUser);
  }
}