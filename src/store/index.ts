import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import { ICartState } from "./modules/cart/types";
import { ICategories } from "./modules/category/types";
import { IProducts } from "./modules/product/types";
import rootReducer from "./modules/rootReducer";
import rootSaga from "./modules/rootSaga";

export interface IState {
  cart: ICartState;
  category: ICategories;
  product: IProducts;
}

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = createStore(rootReducer, applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);

export default store;
