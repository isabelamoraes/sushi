import { AxiosResponse } from "axios";
import { all, takeLatest, select, call, put } from "redux-saga/effects";
import api from "../../../services/api";
import { IState } from "../..";
import { categoriesState } from "./actions";
import { ActionTypes, ICategories } from "./types";

function* categoriesRequestSagas() {
  try {
    const categoriesResponse: AxiosResponse<ICategories> = yield call(
      api.get,
      "categories"
    );

    if (categoriesResponse.data) {
      yield put(categoriesState(categoriesResponse.data));
    }
  } catch (error) {
    console.log(error);
  }
}

export default all([
  takeLatest(ActionTypes.categoriesRequest, categoriesRequestSagas),
]);
