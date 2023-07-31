import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
import { Column } from 'typeorm';
import { CreateDateColumn } from 'typeorm';

@InputType()
export class CreateOrderInput {
  @Field(() => [Product])
  @IsNotEmpty()
  products: Product[];

  @CreateDateColumn()
  created_at: Date;

  @Field()
  @IsNotEmpty()
  customer_full_name: string;

  @Field()
  @IsNotEmpty()
  customer_number: number;

  @Field()
  @IsNotEmpty()
  customer_email: string;

  @Field()
  @IsNotEmpty()
  address: string;
}


@InputType()
class Product {
  @Field(() => Int)
  @IsNotEmpty()
  id: number;

  @Field(() => Int)
  @IsNotEmpty()
  price: number;

  @Field()
  @IsNotEmpty()
  size: string;
}
