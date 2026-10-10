import { ObjectId } from "mongoose";
import {
  ProductColliction,
  ProductSize,
  ProductStatus,
} from "../enums/product.enum";

export interface Product {
  _id: ObjectId;
  productStatus: ProductStatus;
  productColliction: ProductColliction;
  productName: string;
  productPrice: number;
  productLeftCount: number;
  productSize: ProductSize;
  productVolume: number;
  productDesc?: string;
  productImages: string[];
  productViews: number;
}
export interface ProductInput {
  productStatus?: ProductStatus;
  productColliction: ProductColliction;
  productName: string;
  productPrice: number;
  productLeftCount: number;
  productSize?: ProductSize;
  productVolume?: number;
  productDesc?: string;
  productImages?: string[];
  productViews?: number;
}
export interface ProductUpdateInput {
  _id: ObjectId;
  productStatus?: ProductStatus;
  productColliction?: ProductColliction;
  productName?: string;
  productPrice?: number;
  productLeftCount?: number;
  productSize?: ProductSize;
  productVolume?: number;
  productDesc?: string;
  productImages?: string[];
  productViews?: number;
}
