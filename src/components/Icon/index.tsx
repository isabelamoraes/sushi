import React from "react";
import { useTheme } from "styled-components";
import { MaterialIcons } from "@expo/vector-icons";

type Props = {
  name: "shopping-cart" | "chevron-left" | "chevron-right" | "add" | "remove";
  size?: number;
};

export const Icon = ({ name, size = 24 }: Props) => {
  const theme = useTheme();

  return <MaterialIcons name={name} size={size} color={theme.colors.white} />;
};
