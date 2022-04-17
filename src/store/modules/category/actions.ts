import { ActionTypes, ICategories } from "./types";

export function categoriesRequest() {
  return {
    type: ActionTypes.categoriesRequest,
    payload: {},
  };
}

export function categoriesState(categories: ICategories) {
  return {
    type: ActionTypes.categoriesState,
    payload: {
      categories,
    },
  };
}
