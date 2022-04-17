export enum ActionTypes {
  productsRequest = "PRODUCTS_REQUEST",
  productsState = "PRODUCTS_STATE",
}

export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  id_category: number;
  image: string;
  thumbnail: string;
}

export interface IProducts {
  products: IProduct[];
}
