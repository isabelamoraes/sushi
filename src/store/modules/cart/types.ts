import { IProduct } from "../product/types";

export enum ActionTypes {
  addProductToCart = "ADD_PRODUCT_TO_CART",
  updateCart = "UPDATE_CART",
}

export interface ICartItem {
  product: IProduct;
  quantity: number;
}

export interface ICartState {
  items: ICartItem[];
}
