import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, ObjectIdColumn } from 'typeorm';
import { CreateDateColumn } from 'typeorm';



@Entity()
@ObjectType()
export class OrderDetails {
  @ObjectIdColumn()
  @Field()
  _id: string;

  @Column('simple-array')
  @Field(() => [Product_det])
  products: Product_det[];


  @CreateDateColumn()
  @Field()
  created_at: Date;

  @Column()
  @Field()
  customer_full_name: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  coupon?: string;

  @Column()
  @Field()
  customer_number: number;

  @Column()
  @Field()
  customer_email: string;

  @Column()
  @Field()
  address: string;
}
@ObjectType()
class Product_det {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  price: number;

  @Field()
  size: string;
}

// - [ ] Product Id - Post
// - [ ] Product info - get
// - [ ] Size Ordered - post
// - [ ]  Individual Price - get
// - [ ] Total Price of Order -post
// - [ ] User Details(Name , Number , Email ) -post
// - [ ] Order Details ( Address ) -post 
// - [ ] Order Details (Time ) -post
// - [ ] 
