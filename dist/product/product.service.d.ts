import { Repository } from "typeorm";
import { CreateProductInput } from "src/product/dto/create-product";
import { productDetails } from "./entities/product.entity";
import { Category } from "./category.enum";
export declare class ProductService {
    private productDetailsRepositry;
    constructor(productDetailsRepositry: Repository<productDetails>);
    createNewProduct(createNewProductInput: CreateProductInput): Promise<productDetails>;
    findAllProduct(): Promise<productDetails[]>;
    findProductByCategory(category: Category): Promise<productDetails[]>;
}
