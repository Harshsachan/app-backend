import { Field, InputType,Int } from "@nestjs/graphql";
import { IsInt, IsOptional, IsString, Length, Max, Min } from "class-validator";
import { Column } from 'typeorm';

@InputType()
export class CreateRating{
    @Field({ nullable: true,defaultValue:1 })
    @IsOptional()
    @Min(1)
    @Max(5)
    @IsInt()
    rating :number;

    @IsString()
    @Length(1, 100)
    @IsOptional()
    @Field({ nullable: true })
    review?: string;

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