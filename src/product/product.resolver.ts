import { Resolver,Query, Mutation, Args } from "@nestjs/graphql";
import { Category } from "./category.enum";
import { CreateProductInput } from "./dto/create-product";
import { productDetails } from "./entities/product.entity";
import { ProductService } from "./product.service";

@Resolver(of=>productDetails)
export class ProductResolver{
    constructor(private productService: ProductService){}

    @Query(returns=>productDetails)
    product(){
        return {
           id:9,
           product_id: 'yure012',
            company:'Nike',
            name: 'Jorden',
            description:'Nike Air Jorden 2 wore by Harshit Sachan',
            price:50000,
            seller:'Sneaker Head',
            createdAt:(new Date()).toISOString(),
        };
    }

    @Query(returns=>[productDetails])
    findAllProduct():Promise<productDetails[]>{
            return this.productService.findAllProduct();
    }

    @Mutation(returns=>productDetails)
    createProduct(@Args('createProduct') createProduct:CreateProductInput):Promise<productDetails>{
        return this.productService.createNewProduct(createProduct);
    }

    @Query(() => [productDetails])
    async findProductsByCategory(
    @Args('category', { type: () => Category }) category: Category,
        ): Promise<productDetails[]> {
            return this.productService.findProductByCategory(category);
    }
    
}