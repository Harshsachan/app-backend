import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
import { Column } from 'typeorm';
import { CreateDateColumn } from 'typeorm';

@InputType()
export class CreateOrderInput {

  @Column()
  @Field(type => [Int])
  @IsNotEmpty()
  product_ids: number[];

  @Column()
  @Field(type=>Int)
  total_price: number;

  @CreateDateColumn()
  created_at: Date;

  @Column()
  @Field()
  customer_full_name :string;

  @Column()
  @Field()
  customer_number:number;

  @Column()
  @Field()
  customer_email:string;
  
  @Column()
  @Field()
  address:string


  // @Column()
  // @IsNotEmpty()
  // @Field()
  // user_email:string;
  
}
