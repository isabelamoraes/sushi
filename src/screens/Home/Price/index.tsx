import React from "react";
import { MotiView } from "moti";
import { IProduct } from "../../../store/modules/product/types";
import { Price as Value } from "../styles";

type Props = {
  from: {
    opacity: number;
    translateX: number;
  };
  product: IProduct;
};

export const Price = ({ from, product }: Props) => {
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
      <Value>
        R${" "}
        {product.price.toLocaleString("pt-BR", {
          style: "decimal",
          minimumFractionDigits: 2,
        })}
      </Value>
    </MotiView>
  );
};
