import { IProduct } from "../product/types";
import { ActionTypes } from "./types";

export function addProductToCart(product: IProduct) {
  return {
    type: ActionTypes.addProductToCart,
    payload: {
      product,
    },
  };
}

export function updateCart(productId: number, quantity: number) {
  return {
    type: ActionTypes.updateCart,
    payload: {
      productId,
      quantity,
    },
  };
}

export function fetchingCart() {
  return {
    type: ActionTypes.updateCart,
    payload: {},
  };
}
