export declare class OrderDetails {
    _id: string;
    products: Product_det[];
    created_at: Date;
    customer_full_name: string;
    coupon?: string;
    customer_number: number;
    customer_email: string;
    address: string;
}
declare class Product_det {
    id: number;
    price: number;
    size: string;
}
export {};
