import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Column, Entity, ObjectIdColumn } from "typeorm";

@Entity()
@ObjectType()
export class RrDetails{
    @ObjectIdColumn()
    _id: string;

    @Column({ nullable: true})
    @Field({ nullable: true })
    rating :number;

    @Column({ nullable: true })
    @Field({ nullable: true })
    review :string;

    @Column()
    @Field()
    customer_full_name :string;
 
    @Column()
    @Field()
    customer_email:string;

    @Column()
    @Field(type => Int)
    product_ids: number;  

}