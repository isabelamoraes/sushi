import React, { useEffect } from "react";
import { FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { IState } from "../../../store";
import { categoriesRequest } from "../../../store/modules/category/actions";
import { ICategories } from "../../../store/modules/category/types";

import { FilterItem } from "./FilterItem";

type Props = {
  activeCategory: number;
  changeActiveCategory: (category: number) => void;
};

export const Categories = ({ activeCategory, changeActiveCategory }: Props) => {
  const dispatch = useDispatch();

  const categories = useSelector<IState, ICategories>(
    (state) => state.category
  );

  useEffect(() => {
    dispatch(categoriesRequest());
  }, [dispatch]);

  return (
    <FlatList
      horizontal
      data={categories.categories}
      keyExtractor={(categories) => categories.id.toString()}
      renderItem={({ item }) => (
        <FilterItem
          item={item}
          isActive={item.id === activeCategory}
          changeActiveCategory={changeActiveCategory}
        />
      )}
      contentContainerStyle={{ paddingLeft: 24, paddingRight: 14 }}
      showsHorizontalScrollIndicator={false}
    />
  );
};
