import React from "react";
import { FlatList } from "react-native";
import { useSelector } from "react-redux";

import { Header } from "../../components/Header";
import { IState } from "../../store";
import { ICartState } from "../../store/modules/cart/types";
import { Product } from "./Product";
import { Footer } from "./Footer";

import { Container, Content, Title, Separator } from "./styles";

export const Cart = ({ navigation }: any) => {
  const cart = useSelector<IState, ICartState>((state) => state.cart);

  const subtotal = cart.items.reduce(
    (previousValue, currentValue) =>
      previousValue + currentValue.quantity * currentValue.product.price,
    0
  );

  const frete = 8;
  const total = subtotal + frete;

  return (
    <Container>
      <Header handleGoBack={() => navigation.goBack()} />

      <Content>
        <Title>Seu Pedido</Title>
        <FlatList
          data={cart.items}
          keyExtractor={(items) => items.product.id.toString()}
          renderItem={({ item }) => (
            <Product product={item.product} quantity={item.quantity} />
          )}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <Separator />}
          style={{ height: 440 }}
        />
      </Content>

      <Footer subtotal={subtotal} frete={frete} total={total} />
    </Container>
  );
};
