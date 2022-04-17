import { AxiosResponse } from "axios";
import { all, takeLatest, select, call, put } from "redux-saga/effects";
import api from "../../../services/api";
import { IState } from "../..";
import { productsRequest, productsState } from "./actions";
import { ActionTypes, IProducts } from "./types";

type productsRequest = ReturnType<typeof productsRequest>;

function* productsRequestSagas({ payload }: productsRequest) {
  try {
    const { categoryId } = payload;

    const productsResponse: AxiosResponse<IProducts> = yield call(
      api.get,
      "products"
    );

    if (productsResponse.data) {
      yield put(productsState(productsResponse.data, categoryId));
    }
  } catch (error) {
    console.log(error);
  }
}

export default all([
  takeLatest(ActionTypes.productsRequest, productsRequestSagas),
]);
