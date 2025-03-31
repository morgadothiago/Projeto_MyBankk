import styled from "styled-components/native";
import { colors } from "../../themes/theme";

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.secondary};
  justify-content: center;
  align-items: center;
`;
export const Title = styled.Text`
  font-family: ${colors.fonts.Roboto_400Regular};
`;
