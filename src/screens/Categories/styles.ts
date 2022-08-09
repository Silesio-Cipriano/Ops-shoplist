import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  padding:80px 24px 0;
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
  width:100%;
  height:34px;
  margin-top:8px;
  margin-bottom:8px;
  padding:4px;
`
export const FlexDirection = styled.View`
  flex-direction: row;
`
export const BtnAddCategory = styled.TouchableOpacity`
  padding:8px;
  background-color: ${({ theme }) => theme.colors.iconBackground};
  border-radius:2px;
  width: 100%;
  align-items: center;
  height:40px;
  margin-top:6px;
  border:.2px solid ${({ theme }) => theme.colors.primary};
`

export const CategoriesList = styled.View`
  margin-top:14px;
  height:280px;
`;