import React from "react";
import { MotiView } from "moti";
import { Image } from "react-native";
import { IProduct } from "../../../store/modules/product/types";
import { Description, Title } from "../styles";

type Props = {
  from: {
    opacity: number;
    translateX: number;
  };
  product: IProduct;
};

export const Info = ({ from, product }: Props) => {
  return (
    <MotiView
      from={from}
      animate={{
        opacity: 1,
        translateX: 0,
      }}
      transition={{
        loop: false,
        type: "timing",
        duration: 600,
        delay: 0,
      }}
      style={{ alignItems: "center" }}
    >
      <Image
        source={{ uri: product.image }}
        style={{ width: 240, height: 164 }}
      />
      <Title>{product.title}</Title>
      <Description>{product.description}</Description>
    </MotiView>
  );
};
