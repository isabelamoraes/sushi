import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAnimationState } from "moti";

import { Header } from "../../components/Header";
import { Icon } from "../../components/Icon";
import { IState } from "../../store";
import { IProducts } from "../../store/modules/product/types";
import { productsRequest } from "../../store/modules/product/actions";
import { addProductToCart } from "../../store/modules/cart/actions";
import { Categories } from "./Categories";
import { Info } from "./Info";
import { Price } from "./Price";

import {
  Container,
  Content,
  Footer,
  ArrowRight,
  ArrowLeft,
  ButtonAddToCart,
  ButtonText,
} from "./styles";

const fromInitialState = {
  opacity: 0,
  translateX: 400,
};

export const Home = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const [activeCategory, setActiveCategory] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [from, setFrom] = useState(fromInitialState);

  const navigateCart = () => {
    navigation.navigate("Cart");
  };

  const products = useSelector<IState, IProducts>((state) => state.product);

  useEffect(() => {
    dispatch(productsRequest(activeCategory));
    setCurrentIndex(0);
    setFrom(fromInitialState);
  }, [dispatch, activeCategory]);

  const productsLenght = products.products.length;
  const currentProduct = products.products[currentIndex];

  const setPreviousProduct = () => {
    currentIndex === 0
      ? setCurrentIndex(productsLenght - 1)
      : setCurrentIndex((state) => state - 1);

    setFrom({
      opacity: 0,
      translateX: -400,
    });
  };

  const setNextProduct = () => {
    currentIndex === productsLenght - 1
      ? setCurrentIndex(0)
      : setCurrentIndex((state) => state + 1);

    setFrom(fromInitialState);
  };

  const updateCartAnimationState = useAnimationState({
    start: {
      width: 30,
      height: 30,
    },
    end: {
      width: 20,
      height: 20,
    },
  });

  function handlePressIn() {
    updateCartAnimationState.transitionTo("start");
    dispatch(addProductToCart(currentProduct));
  }

  function handlePressOut() {
    updateCartAnimationState.transitionTo("end");
  }

  const MotiInfo = () => {
    return <Info from={from} product={currentProduct} />;
  };

  const MotiPrice = () => {
    return <Price from={from} product={currentProduct} />;
  };

  return (
    <Container>
      <Header
        handleCart={navigateCart}
        updateCartAnimationState={updateCartAnimationState}
      />

      <Categories
        activeCategory={activeCategory}
        changeActiveCategory={setActiveCategory}
      />

      {productsLenght > 0 && (
        <Content>
          <MotiInfo />

          <Footer>
            <ArrowLeft onPress={setPreviousProduct}>
              <Icon name="chevron-left" />
            </ArrowLeft>

            <MotiPrice />

            <ArrowRight onPress={setNextProduct}>
              <Icon name="chevron-right" />
            </ArrowRight>
          </Footer>

          <ButtonAddToCart onPress={handlePressIn} onPressOut={handlePressOut}>
            <ButtonText>Adicionar ao carrinho</ButtonText>
          </ButtonAddToCart>
        </Content>
      )}
    </Container>
  );
};
