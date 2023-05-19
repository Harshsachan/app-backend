import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateProductInput } from "./dto/create-product";
import { productDetails } from "./entities/product.entity";

@Injectable()
export class ProductService{
    constructor(@InjectRepository(productDetails) private productDetailsRepositry:Repository<productDetails> ){}

    createNewProduct(createNewProductInput : CreateProductInput):Promise<productDetails>{
        const newProduct=this.productDetailsRepositry.create(createNewProductInput)
        
        return this.productDetailsRepositry.save(newProduct);
    }

    async findAllProduct():Promise<productDetails[]>{
        return this.productDetailsRepositry.find()
    }
}