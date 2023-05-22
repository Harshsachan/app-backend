import { Field, Int, ObjectType } from '@nestjs/graphql';
import { BeforeInsert, Column, Entity, ObjectIdColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity()
@ObjectType()
export class userDetails {
  @ObjectIdColumn()
  _id: string;

  @Column({ unique: true ,nullable:false})
  @Field()
  uhid: string;
  
  

  @Column()
  @Field()
  f_name: string;

  @Column()
  @Field()
  l_name: string;

  @Column({unique:true})
  @Field()
  email: string;

  @Column({ length: 20 })
  @Field()
  number: string;

  @Column()
  @Field()
  house_no: string;

  @Column()
  @Field()
  street: string;

  @Column()
  @Field()
  area: string;

  @Column()
  @Field()
  city: string;

  @Column()
  @Field()
  state: string;

  @Column()
  @Field(type=>Int)
  pincode: number;

  @BeforeInsert()
  generateUHID() {
    // Generate the UHID here (e.g., using a UUID library or any custom logic)
    this.uhid = uuidv4();
  }
}
