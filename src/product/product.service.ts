import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateProductInput } from "src/product/dto/create-product";
import { productDetails } from "./entities/product.entity";
import { Category } from "./category.enum";
import { RrDetails } from "../rating&review/entities/createRR.entity";
import { RrService } from "../rating&review/rr.service";


@Injectable()
export class ProductService{
    constructor(
        @InjectRepository(productDetails) private productDetailsRepositry:Repository<productDetails>,
        private  rrService: RrService,
    ){}

    async createNewProduct(createNewProductInput : CreateProductInput):Promise<productDetails>{
        const newProduct=this.productDetailsRepositry.create(createNewProductInput)
        
        return this.productDetailsRepositry.save(newProduct);
    }

    async findAllProduct(): Promise<productDetails[]> {
        const products = await this.productDetailsRepositry.find({});
        const productIds = products.map((product) => product.id);
      
        const ratingPromises = productIds.map((productId) =>
          this.rrService.getAverageRatingByProductId(productId)
        );
      
        const ratings = await Promise.all(ratingPromises);
      
        // Assign the ratings to the products
        for (let i = 0; i < products.length; i++) {
          products[i].averageRating = ratings[i];
        }
      
        return products;
      }
      

    async findProductByCategory(category:Category):Promise<productDetails[]>{
        const products=this.productDetailsRepositry.find({where:{category}})
        for(const product of await products){
            product.averageRating=await this.rrService.getAverageRatingByProductId(product.id);
        }
        return products;
    }

    async findProductById(id:number):Promise<productDetails>{
        const singleProduct=this.productDetailsRepositry.findOneOrFail({where:{id}});
        const averageRating= await this.rrService.getAverageRatingByProductId((await singleProduct).id);
        (await singleProduct).averageRating=averageRating;
        return singleProduct
    }
}