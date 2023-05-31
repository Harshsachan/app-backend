import { Field, ID, Int, ObjectType } from "@nestjs/graphql";
import { Column, Entity, Index, ObjectIdColumn, PrimaryGeneratedColumn } from "typeorm";


import { Category } from "../category.enum";

@Entity()
// @ObjectType('obj.name') can be used to import this type any where using obj.name
@ObjectType()
export class productDetails{
    @ObjectIdColumn()
    _id:string;

    @PrimaryGeneratedColumn() 
    @Index({unique:true})
    @Field(type=> Int)
    id:number;

    @Column()
    @Field()
    name: string;

    @Column()
    @Field()
    company: string;

    @Column()
    @Field()
    description: string;

    @Column()
    @Field()
    image: string;
    
    @Column({nullable:true})
    @Field({nullable:true})
    createdAt: string;

    @Column()
    @Field(type=> Int)
    price: number;

    @Column()
    @Field()
    seller:string;

    @Column()
    @Field(()=>Category)
    category:Category;
}