import React from "react";
import { Image } from "react-native";

import {
  Container,
  Content,
  Info,
  Price,
  Quantity,
  QuantityButton,
  CurrentQuantity,
  Total,
  Title,
  Description,
} from "./styles";

import { Icon } from "../../../components/Icon";
import { IProduct } from "../../../store/modules/product/types";
import { useDispatch } from "react-redux";
import { updateCart } from "../../../store/modules/cart/actions";

type Props = {
  product: IProduct;
  quantity: number;
};

export const Product = ({ product, quantity }: Props) => {
  const dispatch = useDispatch();
  const total = product.price * quantity;

  const updateQuantityCart = (newQuantity: number) => {
    dispatch(updateCart(product.id, newQuantity));
  };

  return (
    <Container>
      <Content>
        <Image
          source={{
            uri: product.thumbnail,
          }}
          style={{ width: 94, height: 64 }}
        />
        <Info>
          <Title>{product.title}</Title>
          <Description>
            R${" "}
            {product.price.toLocaleString("pt-BR", {
              style: "decimal",
              minimumFractionDigits: 2,
            })}
          </Description>
        </Info>
      </Content>

      <Price>
        <Quantity>
          <QuantityButton onPress={() => updateQuantityCart(quantity - 1)}>
            <Icon name="remove" size={20} />
          </QuantityButton>
          <CurrentQuantity>{quantity}</CurrentQuantity>
          <QuantityButton onPress={() => updateQuantityCart(quantity + 1)}>
            <Icon name="add" size={20} />
          </QuantityButton>
        </Quantity>
        <Total>
          R${" "}
          {total.toLocaleString("pt-BR", {
            style: "decimal",
            minimumFractionDigits: 2,
          })}
        </Total>
      </Price>
    </Container>
  );
};
