import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.black500};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
`;

export const Content = styled.View`
  padding: 0 24px 0 24px;
`;

export const Separator = styled.View`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.colors.black300};
`;

export const ContainerFooter = styled.View`
  background: ${({ theme }) => theme.colors.black300};
  width: 100%;
  padding: 24px;
  border-top-start-radius: 24px;
  border-top-end-radius: 24px;

  position: absolute;
  bottom: 0px;
`;

export const Subtotal = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 8px;
`;

export const Label = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
`;

export const Value = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
`;

export const Divider = styled.View`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.colors.white};

  margin: 8px 0;
`;

export const Total = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 8px;
`;

export const LabelTotal = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
`;

export const ValueTotal = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
`;
