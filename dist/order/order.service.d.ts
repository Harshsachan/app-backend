import { Repository } from "typeorm";
import { CreateOrderInput } from "src/order/dto/create-order.input";
import { OrderDetails } from "./entities/order.entity";
export declare class OrderService {
    private orderDetailsRepositry;
    constructor(orderDetailsRepositry: Repository<OrderDetails>);
    createNewOrder(createOrderInput: CreateOrderInput): Promise<void>;
    findOrderByUserMail(user_email: string): Promise<OrderDetails[]>;
}
