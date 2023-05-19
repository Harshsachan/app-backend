import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
@ObjectType()
export class OrderDetails {
  @ObjectIdColumn()
  _id: string;

  @Column()
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
