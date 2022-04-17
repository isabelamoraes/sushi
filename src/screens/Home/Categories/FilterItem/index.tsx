import React from "react";

import { Container, Item } from "./styles";

type CategoryProps = {
  id: number;
  title: string;
};

type Props = {
  item: CategoryProps;
  isActive: boolean;
  changeActiveCategory: (category: number) => void;
};

export const FilterItem = ({ item, isActive, changeActiveCategory }: Props) => {
  return (
    <Container
      isActive={isActive}
      onPress={() => changeActiveCategory(item.id)}
    >
      <Item>{item.title}</Item>
    </Container>
  );
};
