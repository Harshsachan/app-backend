import { Category } from "./category.enum";
import { CreateProductInput } from "./dto/create-product";
import { productDetails } from "./entities/product.entity";
import { ProductService } from "./product.service";
export declare class ProductResolver {
    private productService;
    constructor(productService: ProductService);
    product(): {
        id: number;
        product_id: string;
        company: string;
        name: string;
        description: string;
        price: number;
        seller: string;
        createdAt: string;
    };
    findAllProduct(): Promise<productDetails[]>;
    createProduct(createProduct: CreateProductInput): Promise<productDetails>;
    findProductById(id: number): Promise<productDetails>;
    findProductsByCategory(category: Category): Promise<productDetails[]>;
}
