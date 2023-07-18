import * as argon2 from 'argon2';

import {  HttpException, HttpStatus, Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import {  Repository } from "typeorm";
import { AuthDto } from "../auth/dto/auth-dto";
import { authDetails } from "src/auth/entites/auth.entity";
import { userDetails } from "src/user/entities/user.entity";

@Injectable()
export class AuthService{
  constructor(@InjectRepository(authDetails) private authDetailsRepositry:Repository<authDetails>,
  @InjectRepository(userDetails) private userDetailsRepository: Repository<userDetails>,
  ) {}

  async signUp(authDto:AuthDto):Promise<authDetails>{
    const {email,password}= authDto;

    //first check whether the using coming to us is registered with us or not
    const userCheck = await this.authDetailsRepositry.findOne({where:{email}})
    if(userCheck){
      throw new HttpException("User with this email already exists ", HttpStatus.FORBIDDEN);
    }
    
    //Hashed the password using argon2
    const hashedPassword= await argon2.hash(password);

    // creating the user using hashed passowrd nd email
    const newUserLogin = this.authDetailsRepositry.create({
      email,
      password:hashedPassword,
    })

    // creating the user using authdto without hashing password
    //const newUserLogin =this.authDetailsRepositry.create(authDto)
  
    return this.authDetailsRepositry.save(newUserLogin)
  }

  async logIn(authDto:AuthDto):Promise<userDetails>{
    const {email,password}= authDto;


    const user = await this.authDetailsRepositry.findOne({where:{email}});

    if(!user)
    {
      throw new NotFoundException('This Email is not registered with  us')
    }
    

    // verify the password using argon2
    const isPasswordValid = await argon2.verify((await user).password,password)


    if(!isPasswordValid){
      throw new UnauthorizedException('Incorrect Password'); 
    }

    return this.userDetailsRepository.findOneOrFail({where:{email}});

  }
}