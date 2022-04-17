import { ActionTypes, IProducts } from "./types";

export function productsRequest(categoryId: number) {
  return {
    type: ActionTypes.productsRequest,
    payload: { categoryId },
  };
}

export function productsState(products: IProducts, categoryId: number) {
  return {
    type: ActionTypes.productsState,
    payload: {
      products,
      categoryId,
    },
  };
}
