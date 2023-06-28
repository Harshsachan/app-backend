import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
@ObjectType()
export class OrderDetails {
  @ObjectIdColumn()
  _id: string;

  @Column()
  @Field(type => [Int])
  product_ids: number[];

  @Column()
  @Field()
  user_email:string;
}
