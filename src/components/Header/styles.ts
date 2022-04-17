import { MotiView } from "moti";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  padding: 24px;
  margin: 32px 0;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const NavLogo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const BackButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})``;

export const Cart = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})`
  height: 42px;
  justify-content: center;
  padding-top: 12px;
`;

export const Quantity = styled(MotiView)`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.primary};

  position: absolute;
  z-index: 1;
  margin-left: 14px;
  top: 6px;

  align-items: center;
  justify-content: center;
`;

export const QuantityValue = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white};
  font-size: 12px;
`;
