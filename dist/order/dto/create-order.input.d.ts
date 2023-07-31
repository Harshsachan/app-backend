export declare class CreateOrderInput {
    products: Product[];
    created_at: Date;
    customer_full_name: string;
    customer_number: number;
    customer_email: string;
    address: string;
}
declare class Product {
    id: number;
    price: number;
    size: string;
}
export {};
