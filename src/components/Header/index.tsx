import React from "react";
import { useSelector } from "react-redux";
import { UseAnimationState } from "moti";

import Logo from "../../assets/logo.svg";
import { ICartState } from "../../store/modules/cart/types";
import { IState } from "../../store";
import { Icon } from "../Icon";

import {
  Container,
  NavLogo,
  Cart,
  Quantity,
  QuantityValue,
  BackButton,
} from "./styles";

type PropsState = {
  width: number;
  height: number;
};

type Props = {
  handleGoBack?: () => void;
  handleCart?: () => void;
  updateCartAnimationState?: UseAnimationState<{
    start: PropsState;
    end: PropsState;
  }>;
};

export const Header = ({
  handleGoBack,
  handleCart,
  updateCartAnimationState,
}: Props) => {
  const cart = useSelector<IState, ICartState>((state) => state.cart);

  const quantity = cart.items.reduce(
    (previousValue, currentValue) => previousValue + currentValue.quantity,
    0
  );

  return (
    <Container>
      <NavLogo>
        {handleGoBack && (
          <BackButton onPress={handleGoBack} style={{ marginRight: 16 }}>
            <Icon name="chevron-left" />
          </BackButton>
        )}

        <Logo width={75} height={42} />
      </NavLogo>

      {handleCart && (
        <Cart onPress={handleCart}>
          {quantity > 0 && (
            <Quantity state={updateCartAnimationState}>
              <QuantityValue>{quantity}</QuantityValue>
            </Quantity>
          )}

          <Icon name="shopping-cart" />
        </Cart>
      )}
    </Container>
  );
};
