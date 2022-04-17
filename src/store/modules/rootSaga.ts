import { all } from "redux-saga/effects";

import category from "./category/sagas";
import product from "./product/sagas";

export default function* rootSaga() {
  yield all([category, product]);
}
