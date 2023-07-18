import { Repository } from "typeorm";
import { OrderDetails } from "./entities/order.entity";
export declare class OrderService {
    private orderDetailsRepositry;
    constructor(orderDetailsRepositry: Repository<OrderDetails>);
    createNewOrder(createOrderInput: {
        product_ids: number[];
        total_price: number;
        customer_full_name: string;
        customer_number: number;
        customer_email: string;
        address: string;
    }): Promise<void>;
    findOrderByUserMail(customer_email: string): Promise<OrderDetails[]>;
}
