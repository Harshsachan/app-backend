import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
import { Column } from 'typeorm';

@InputType()
export class CreateOrderInput {
  @Column()
  @IsNotEmpty()
  @Field(type=>Int)
  id:number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  company: string;

  @Column()
  @Field(type=>Int)
  price:number;

  @Column()
  @Field()
  seller:string;
  
}
