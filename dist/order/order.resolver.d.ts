import { CreateOrderInput } from "./dto/create-order.input";
import { OrderDetails } from "src/order/entities/order.entity";
import { OrderService } from "./order.service";
export declare class OrderResolver {
    private orderService;
    constructor(orderService: OrderService);
    createNewOrder(createOrderInput: CreateOrderInput): Promise<string>;
    findOrderByUserMail(customer_email: string): Promise<OrderDetails[]>;
}
