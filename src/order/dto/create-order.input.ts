import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
import { Column } from 'typeorm';

@InputType()
export class CreateOrderInput {

  @Column()
  @IsNotEmpty()
  @Field(type=>Int)
  product_id:number;

  @Column()
  @IsNotEmpty()
  @Field()
  user_email:string;
  
}
