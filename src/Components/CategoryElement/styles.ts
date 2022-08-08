import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
interface CategoryElementProps {
  selected: boolean;
}

export const Container = styled.TouchableOpacity`
  border:1px solid ${({ theme }) => theme.colors.primary};
  padding:14px;
  flex-direction: row;
  justify-content:space-between;
  border-radius:4px;
  margin-bottom:14px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.Jost400};
  color: ${({ theme }) => theme.colors.primary};
`
export const SelectedElement = styled.View<CategoryElementProps>`
  padding:12px;
  border:1px solid ${({ theme, selected }) => selected ? "transparent" : theme.colors.primary};
  background-color: ${({ theme, selected }) => selected ? theme.colors.primary : "transparent"};
  border-radius:200px;
`