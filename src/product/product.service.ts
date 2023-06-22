import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateProductInput } from "src/product/dto/create-product";
import { productDetails } from "./entities/product.entity";
import { Category } from "./category.enum";

@Injectable()
export class ProductService{
    constructor(@InjectRepository(productDetails) private productDetailsRepositry:Repository<productDetails> ){}

    async createNewProduct(createNewProductInput : CreateProductInput):Promise<productDetails>{
        const newProduct=this.productDetailsRepositry.create(createNewProductInput)
        
        return this.productDetailsRepositry.save(newProduct);
    }

    async findAllProduct():Promise<productDetails[]>{
        return this.productDetailsRepositry.find()
    }

    async findProductByCategory(category:Category):Promise<productDetails[]>{
        return this.productDetailsRepositry.find({where:{category}});
    }

    async findProductById(id:number):Promise<productDetails>{
        return this.productDetailsRepositry.findOneOrFail({where:{id}});
    }
}