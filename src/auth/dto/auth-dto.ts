import { InputType, Int, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ObjectIdColumn } from 'typeorm';

@InputType()
export class AuthDto {
    
  @IsNotEmpty()
  @Field()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @Field()
  password:string;
}
