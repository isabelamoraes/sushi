export enum ActionTypes {
  categoriesRequest = "CATEGORIES_REQUEST",
  categoriesState = "CATEGORIES_STATE",
}

export interface ICategory {
  id: number;
  title: string;
}

export interface ICategories {
  categories: ICategory[];
}
