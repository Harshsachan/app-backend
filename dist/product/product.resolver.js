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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const create_product_1 = require("./dto/create-product");
const product_entity_1 = require("./entities/product.entity");
const product_service_1 = require("./product.service");
let ProductResolver = class ProductResolver {
    constructor(productService) {
        this.productService = productService;
    }
    product() {
        return {
            id: 9,
            product_id: 'yure012',
            company: 'Nike',
            name: 'Jorden',
            description: 'Nike Air Jorden 2 wore by Harshit Sachan',
            price: 50000,
            seller: 'Sneaker Head',
            createdAt: (new Date()).toISOString(),
        };
    }
    findAllProduct() {
        return this.productService.findAllProduct();
    }
    createProduct(createProduct) {
        return this.productService.createNewProduct(createProduct);
    }
};
__decorate([
    (0, graphql_1.Query)(returns => product_entity_1.productDetails),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductResolver.prototype, "product", null);
__decorate([
    (0, graphql_1.Query)(returns => [product_entity_1.productDetails]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "findAllProduct", null);
__decorate([
    (0, graphql_1.Mutation)(returns => product_entity_1.productDetails),
    __param(0, (0, graphql_1.Args)('createProduct')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_product_1.CreateProductInput]),
    __metadata("design:returntype", Promise)
], ProductResolver.prototype, "createProduct", null);
ProductResolver = __decorate([
    (0, graphql_1.Resolver)(of => product_entity_1.productDetails),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductResolver);
exports.ProductResolver = ProductResolver;
//# sourceMappingURL=product.resolver.js.map