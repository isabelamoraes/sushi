import styled, { css } from "styled-components/native";

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})<{ isActive: boolean }>`
  background: ${({ theme, isActive }) =>
    isActive ? theme.colors.primaryOpacity30 : theme.colors.black300};
  ${({ isActive }) =>
    isActive &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.primaryOpacity50};
    `};

  padding: 0 16px;
  height: 34px;
  border-radius: 17px;

  justify-content: center;
  margin-right: 10px;
`;

export const Item = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
`;
