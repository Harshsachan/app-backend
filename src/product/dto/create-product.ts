import { Field, ID, InputType, Int } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";
import { Column, Index } from "typeorm";
import { PrimaryGeneratedColumn } from "typeorm/decorator/columns/PrimaryGeneratedColumn";

@InputType()
export class CreateProductInput{

    @PrimaryGeneratedColumn() 
    @Index({unique:true})
    @Field(type=> Int)
    id:number;

    @IsNotEmpty()
    @Column()
    @Field(type=> ID)
    product_id:string;

    @IsNotEmpty()
    @Column()
    @Field()
    name: string;

    @IsNotEmpty()
    @Column()
    @Field()
    company: string;

    @IsNotEmpty()
    @Column()
    @Field()
    description: string;
    

    @Column({nullable:true})
    @Field({nullable:true})
    createdAt: string;

    @IsNotEmpty()
    @Column()
    @Field(type=> Int)
    price: number;

    @IsNotEmpty()
    @Column()
    @Field()
    seller:string;
}

