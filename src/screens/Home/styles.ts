import { MotiView } from "moti";
import { Pressable } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.black500};
`;

export const Content = styled(MotiView)`
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;

  margin-top: 24px;
  margin-bottom: 16px;
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;

  margin-bottom: 56px;
`;

export const Footer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 100px;
`;

export const ArrowLeft = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})`
  width: 56px;
  height: 56px;
  border-top-end-radius: 32px;
  border-bottom-end-radius: 32px;

  background: ${({ theme }) => theme.colors.black300};

  align-items: center;
  justify-content: center;
`;

export const ArrowRight = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})`
  width: 56px;
  height: 56px;
  border-top-start-radius: 32px;
  border-bottom-start-radius: 32px;

  background: ${({ theme }) => theme.colors.black300};

  align-items: center;
  justify-content: center;
`;

export const Price = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white};
  font-size: 24px;
`;

export const ButtonAddToCart = styled(Pressable)`
  width: 216px;
  background: ${({ theme }) => theme.colors.primaryOpacity70};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 36px;

  padding: 16px 0;
  align-items: center;

  bottom: 44px;
`;

export const ButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
`;
