import { Resolver,Query } from "@nestjs/graphql";
import { query } from "express";
import { productDetails } from "./entities/product.entity";

@Resolver(of=>productDetails)
export class ProductResolver{
   // constructor(private productService: ProductService){}

    @Query(returns=>productDetails)
    product(){
        return {
            id:7,
           product_id: 'yure012',
            company:'Nike',
            name: 'Jorden',
            description:'Nike Air Jorden 2 wore by Harshit Sachan',
            price:50000,
            seller:'Sneaker Head',
            createdAt:(new Date()).toISOString(),
        };
    }
    
}