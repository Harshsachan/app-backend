import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
import { Column } from 'typeorm';

@InputType()
export class CreateOrderInput {

  @Column()
  @Field(type => [Int])
  @IsNotEmpty()
  product_ids: number[];

  @Column()
  @IsNotEmpty()
  @Field()
  user_email:string;
  
}
