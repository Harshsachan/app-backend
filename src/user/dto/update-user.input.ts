import { CreateUserInput } from './create-user.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsNumber } from 'class-validator';
import { Column } from 'typeorm';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  
  @IsEmail()
  @IsNotEmpty()
  @Field()
  email: string;

  @Column()
  @Field({ nullable: true })
  f_name :string;

  @Column()
  @Field({ nullable: true })
  l_name :string;

  @IsNumber()
  @Column({ length: 20 })
  @Field({ nullable: true })
  number :number;
  
  @Column()
  @Field({ nullable: true })
  house_no: string;

  @Column()
  @Field({ nullable: true })
  street: string;

  @Column()
  @Field({ nullable: true })
  area: string;

  @Column()
  @Field({ nullable: true })
  city: string;

  @Column()
  @Field({ nullable: true })
  state: string;

  @IsNumber()
  @Column()
  @Field({ nullable: true })
  pincode: number;
  
}

