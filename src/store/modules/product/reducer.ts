import { Reducer } from "redux";
import produce from "immer";

import { ActionTypes, IProduct, IProducts } from "./types";

const INITIAL_STATE: IProducts = {
  products: [],
};

const product: Reducer<IProducts> = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ActionTypes.productsState: {
        const { products, categoryId } = action.payload;

        if (categoryId === 0) return { products: products };

        const filterProducts = products.filter(
          (item: IProduct) => item.id_category === categoryId
        );

        return { products: filterProducts };
      }
      default: {
        return draft;
      }
    }
  });
};

export default product;
