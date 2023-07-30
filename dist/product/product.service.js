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
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const product_entity_1 = require("./entities/product.entity");
const rr_service_1 = require("../rating&review/rr.service");
let ProductService = class ProductService {
    constructor(productDetailsRepositry, rrService) {
        this.productDetailsRepositry = productDetailsRepositry;
        this.rrService = rrService;
    }
    async createNewProduct(createNewProductInput) {
        const newProduct = this.productDetailsRepositry.create(createNewProductInput);
        return this.productDetailsRepositry.save(newProduct);
    }
    async findAllProduct() {
        const products = this.productDetailsRepositry.find();
        for (const product of await products) {
            product.averageRating = await this.rrService.getAverageRatingByProductId(product.id);
        }
        return products;
    }
    async findProductByCategory(category) {
        const products = this.productDetailsRepositry.find({ where: { category } });
        for (const product of await products) {
            product.averageRating = await this.rrService.getAverageRatingByProductId(product.id);
        }
        return products;
    }
    async findProductById(id) {
        const singleProduct = this.productDetailsRepositry.findOneOrFail({ where: { id } });
        const averageRating = await this.rrService.getAverageRatingByProductId((await singleProduct).id);
        (await singleProduct).averageRating = averageRating;
        return singleProduct;
    }
};
ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(product_entity_1.productDetails)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        rr_service_1.RrService])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map