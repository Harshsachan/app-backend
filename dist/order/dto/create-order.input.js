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
exports.CreateOrderInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("typeorm");
let CreateOrderInput = class CreateOrderInput {
};
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(type => [graphql_1.Int]),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Array)
], CreateOrderInput.prototype, "product_ids", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(type => graphql_1.Int),
    __metadata("design:type", Number)
], CreateOrderInput.prototype, "total_price", void 0);
__decorate([
    (0, typeorm_2.CreateDateColumn)(),
    __metadata("design:type", Date)
], CreateOrderInput.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateOrderInput.prototype, "customer_full_name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreateOrderInput.prototype, "coupon", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], CreateOrderInput.prototype, "customer_number", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateOrderInput.prototype, "customer_email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateOrderInput.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 2 }),
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], CreateOrderInput.prototype, "size", void 0);
CreateOrderInput = __decorate([
    (0, graphql_1.InputType)()
], CreateOrderInput);
exports.CreateOrderInput = CreateOrderInput;
//# sourceMappingURL=create-order.input.js.map