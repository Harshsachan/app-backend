import { ObjectType, Field, Int } from '@nestjs/graphql';
import { type } from 'os';
import { Column, Entity, ObjectIdColumn } from 'typeorm';
import { CreateDateColumn } from 'typeorm';

@Entity()
@ObjectType()
export class OrderDetails {
  @ObjectIdColumn()
  _id: string;

  @Column()
  @Field(type => [Int])
  product_ids: number[];

  @Column()
  @Field(type=>Int)
  total_price: number;

  @CreateDateColumn()
  @Field()
  created_at: Date;

  @Column()
  @Field()
  customer_full_name :string;

  @Column()
  @Field({nullable:true})
  coupon :string;

  @Column()
  @Field()
  customer_number:number;

  @Column()
  @Field()
  customer_email:string;

  @Column()
  @Field()
  address:string

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
