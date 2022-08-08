import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  padding:120px 24px 0;
`;

export const Category = styled.Text`
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.Jost600};
  color: ${({ theme }) => theme.colors.primary};
`
export const InputCategory = styled.View`
  flex-direction: row;
  justify-content:space-between;
  align-items: center;

  border-bottom-width: 1px;
`
export const Input = styled.TextInput`
 font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.Jost400};
  color: ${({ theme }) => theme.colors.primary};
`
export const BtnAddCategory = styled.TouchableOpacity`
  padding:8px;
  background-color: ${({ theme }) => theme.colors.iconBackground};
  border-radius:2px;
  margin-bottom:6px;
`

export const CategoriesList = styled.View`
  margin-top:24px;
  height:280px;
`;