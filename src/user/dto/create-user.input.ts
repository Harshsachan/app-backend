import { InputType, Int, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsNumber } from 'class-validator';
import { type } from 'os';
import { Column } from 'typeorm';

@InputType()
export class CreateUserInput {
  
  @IsNotEmpty()
  @Column()
  @Field()
  f_name :string;

  @Column({ unique: true ,nullable:false})
  uhid: string;

  @IsNotEmpty()
  @Column()
  @Field()
  l_name :string;

  @IsEmail()
  @IsNotEmpty()
  @Column()
  @Field()
  email :string;

  @IsNotEmpty()
  @Column({ length: 20 })
  @Field()
  number :number;
  
  @IsNotEmpty()
  @Column()
  @Field()
  house_no: string;

  @IsNotEmpty()
  @Column()
  @Field()
  street: string;

  @IsNotEmpty()
  @Column()
  @Field()
  area: string;


  @IsNotEmpty()
  @Column()
  @Field()
  city: string;

  @IsNotEmpty()
  @Column()
  @Field()
  state: string;

  @IsNumber()
  @IsNotEmpty()
  @Column()
  @Field(type=>Int)
  pincode: number;
  
}
