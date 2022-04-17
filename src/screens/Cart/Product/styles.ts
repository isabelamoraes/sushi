import styled from "styled-components/native";

export const Container = styled.View`
  flex:1
  flex-direction: row;
  align-items:center;
  justify-content: space-between;
  padding: 16px 0;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Info = styled.View`
  margin-left: 16px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  margin-bottom: 8px;
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
`;

export const Price = styled.View`
  align-items: center;
`;

export const Quantity = styled.View`
  margin-bottom: 8px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const QuantityButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})`
  background: ${({ theme }) => theme.colors.black300};
  width: 28px;
  height: 28px;
  border-radius: 14px;

  align-items: center;
  justify-content: center;
`;

export const CurrentQuantity = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white};
  font-size: 18px;

  margin: 0 12px;
`;

export const Total = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
`;
