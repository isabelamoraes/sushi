import React from "react";

import {
  ContainerFooter,
  Divider,
  Label,
  LabelTotal,
  Subtotal,
  Total,
  Value,
  ValueTotal,
} from "../styles";

type Props = {
  subtotal: number;
  frete: number;
  total: number;
};

export const Footer = ({ subtotal, frete, total }: Props) => {
  return (
    <ContainerFooter>
      <Subtotal>
        <Label>Subtotal</Label>
        <Value>
          R${" "}
          {subtotal.toLocaleString("pt-BR", {
            style: "decimal",
            minimumFractionDigits: 2,
          })}
        </Value>
      </Subtotal>
      <Subtotal>
        <Label>Entrega</Label>
        <Value>
          R${" "}
          {frete.toLocaleString("pt-BR", {
            style: "decimal",
            minimumFractionDigits: 2,
          })}
        </Value>
      </Subtotal>
      <Divider />
      <Total>
        <LabelTotal>Total</LabelTotal>
        <ValueTotal>
          R${" "}
          {total.toLocaleString("pt-BR", {
            style: "decimal",
            minimumFractionDigits: 2,
          })}
        </ValueTotal>
      </Total>
    </ContainerFooter>
  );
};
