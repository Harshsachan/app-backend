"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const apollo_1 = require("@nestjs/apollo");
const path_1 = require("path");
const typeorm_1 = require("@nestjs/typeorm");
const product_module_1 = require("./product/product.module");
const product_entity_1 = require("./product/entities/product.entity");
const order_module_1 = require("./order/order.module");
const order_entity_1 = require("./order/entities/order.entity");
const user_module_1 = require("./user/user.module");
const user_entity_1 = require("./user/entities/user.entity");
const auth_module_1 = require("./auth/auth.module");
const auth_entity_1 = require("./auth/entites/auth.entity");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mongodb',
                url: 'mongodb+srv://harshitsachan:8400370072@sneaker.svqyffb.mongodb.net/?retryWrites=true&w=majority',
                synchronize: true,
                useUnifiedTopology: true,
                entities: [product_entity_1.productDetails, order_entity_1.OrderDetails, user_entity_1.userDetails, auth_entity_1.authDetails]
            }),
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                autoSchemaFile: (0, path_1.join)(process.cwd(), 'src/schema.gql'),
            }),
            product_module_1.ProductModule,
            order_module_1.OrderModule,
            user_module_1.UserModule,
            auth_module_1.AuthModule
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map