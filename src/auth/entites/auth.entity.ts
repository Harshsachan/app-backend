import { Field, ObjectType } from "@nestjs/graphql";
import { Column, Entity, ObjectIdColumn } from "typeorm";

@Entity()
@ObjectType()
export class authDetails{
    @ObjectIdColumn()
    _id:string;

    @Field()
    @Column()
    email:string;

    @Field()
    @Column()
    password:string;
}