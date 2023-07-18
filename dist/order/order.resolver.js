"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const create_order_input_1 = require("./dto/create-order.input");
const order_entity_1 = require("./entities/order.entity");
const order_service_1 = require("./order.service");
let OrderResolver = class OrderResolver {
    constructor(orderService) {
        this.orderService = orderService;
    }
    async createNewOrder(createOrderInput) {
        try {
            const { product_ids } = createOrderInput, rest = __rest(createOrderInput, ["product_ids"]);
            await Promise.all(product_ids.map(async (product_id) => {
                const orderInput = Object.assign(Object.assign({}, rest), { product_ids: [product_id] });
                await this.orderService.createNewOrder(orderInput);
            }));
            return "Orders Placed";
        }
        catch (e) {
            throw new Error("Failed to place orders");
        }
    }
    findOrderByUserMail(customer_email) {
        return this.orderService.findOrderByUserMail(customer_email);
    }
};
__decorate([
    (0, graphql_1.Mutation)(returns => String),
    __param(0, (0, graphql_1.Args)('createOrderInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_order_input_1.CreateOrderInput]),
    __metadata("design:returntype", Promise)
], OrderResolver.prototype, "createNewOrder", null);
__decorate([
    (0, graphql_1.Query)(returns => [order_entity_1.OrderDetails]),
    __param(0, (0, graphql_1.Args)('customer_email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrderResolver.prototype, "findOrderByUserMail", null);
OrderResolver = __decorate([
    (0, graphql_1.Resolver)(of => order_entity_1.OrderDetails),
    __metadata("design:paramtypes", [order_service_1.OrderService])
], OrderResolver);
exports.OrderResolver = OrderResolver;
//# sourceMappingURL=order.resolver.js.map