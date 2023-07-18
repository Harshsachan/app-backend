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
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDetails = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("typeorm");
let OrderDetails = class OrderDetails {
};
__decorate([
    (0, typeorm_1.ObjectIdColumn)(),
    __metadata("design:type", String)
], OrderDetails.prototype, "_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(type => [graphql_1.Int]),
    __metadata("design:type", Array)
], OrderDetails.prototype, "product_ids", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(type => graphql_1.Int),
    __metadata("design:type", Number)
], OrderDetails.prototype, "total_price", void 0);
__decorate([
    (0, typeorm_2.CreateDateColumn)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], OrderDetails.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], OrderDetails.prototype, "customer_full_name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], OrderDetails.prototype, "customer_number", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], OrderDetails.prototype, "customer_email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], OrderDetails.prototype, "address", void 0);
OrderDetails = __decorate([
    (0, typeorm_1.Entity)(),
    (0, graphql_1.ObjectType)()
], OrderDetails);
exports.OrderDetails = OrderDetails;
//# sourceMappingURL=order.entity.js.map