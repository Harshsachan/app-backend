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
exports.UpdateUserInput = void 0;
const create_user_input_1 = require("./create-user.input");
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
let UpdateUserInput = class UpdateUserInput extends (0, graphql_1.PartialType)(create_user_input_1.CreateUserInput) {
};
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UpdateUserInput.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateUserInput.prototype, "f_name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateUserInput.prototype, "l_name", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, typeorm_1.Column)({ length: 2 }),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], UpdateUserInput.prototype, "number", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateUserInput.prototype, "house_no", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateUserInput.prototype, "street", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateUserInput.prototype, "area", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateUserInput.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateUserInput.prototype, "state", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], UpdateUserInput.prototype, "pincode", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, typeorm_1.Column)({ length: 2 }),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], UpdateUserInput.prototype, "size", void 0);
UpdateUserInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateUserInput);
exports.UpdateUserInput = UpdateUserInput;
//# sourceMappingURL=update-user.input.js.map