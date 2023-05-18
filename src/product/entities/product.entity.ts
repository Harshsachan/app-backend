import { Field, ID, Int, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
// @ObjectType('obj.name') can be used to import this type any where using obj.name
@ObjectType()
export class productDetails{
    @PrimaryGeneratedColumn() 
    @Field(type=> Int)
    id:number;

    @Column()
    @Field(type=> ID)
    product_id:string;


    @Column()
    @Field()
    name: string;

    @Column()
    @Field()
    company: string;

    @Column()
    @Field()
    description: string;
    
    @Column({nullable:true})
    @Field()
    createdAt: string;

    @Column()
    @Field(type=> Int)
    price: number;

    @Column()
    @Field()
    seller:string;
}