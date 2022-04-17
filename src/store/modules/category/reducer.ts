import { Reducer } from "redux";
import produce from "immer";

import { ActionTypes, ICategories } from "./types";

const INITIAL_STATE: ICategories = {
  categories: [],
};

const category: Reducer<ICategories> = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ActionTypes.categoriesState: {
        return action.payload;
      }
      default: {
        return draft;
      }
    }
  });
};

export default category;
