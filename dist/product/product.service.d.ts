import { Repository } from "typeorm";
import { CreateProductInput } from "src/product/dto/create-product";
import { productDetails } from "./entities/product.entity";
import { Category } from "./category.enum";
import { RrService } from "../rating&review/rr.service";
export declare class ProductService {
    private productDetailsRepositry;
    private rrService;
    constructor(productDetailsRepositry: Repository<productDetails>, rrService: RrService);
    createNewProduct(createNewProductInput: CreateProductInput): Promise<productDetails>;
    findAllProduct(): Promise<productDetails[]>;
    findProductByCategory(category: Category): Promise<productDetails[]>;
    findProductById(id: number): Promise<productDetails>;
}
