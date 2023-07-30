import { Category } from "../category.enum";
export declare class productDetails {
    _id: string;
    id: number;
    name: string;
    company: string;
    description: string;
    image: string;
    createdAt: string;
    price: number;
    seller: string;
    category: Category;
    averageRating?: number;
}
