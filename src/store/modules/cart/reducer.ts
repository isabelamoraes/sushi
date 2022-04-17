import { Reducer } from "redux";
import produce from "immer";

import { ActionTypes, ICartState } from "./types";

const INITIAL_STATE: ICartState = {
  items: [],
};

const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ActionTypes.addProductToCart: {
        const { product } = action.payload;

        const productInCartIndex = draft.items.findIndex(
          (item) => item.product.id === product.id
        );

        if (productInCartIndex >= 0) {
          draft.items[productInCartIndex].quantity++;
        } else {
          draft.items.push({
            product,
            quantity: 1,
          });
        }

        break;
      }
      case ActionTypes.updateCart: {
        const { productId, quantity } = action.payload;
        const cartItem = draft.items.length;

        const productInCartIndex = draft.items.findIndex(
          (item) => item.product.id === productId
        );

        if (quantity === 0) {
          if (cartItem === 1) return { items: [] };
          draft.items.splice(productInCartIndex, 1);
        } else {
          draft.items[productInCartIndex].quantity = quantity;
        }

        break;
      }
      default: {
        return draft;
      }
    }
  });
};

export default cart;
