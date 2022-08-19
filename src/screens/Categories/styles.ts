import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  padding:0 24px 0;
`;


export const InputCategory = styled.View`
  flex-direction: row;
  justify-content:space-between;
  align-items: center;
  margin-top:24px;
  border-bottom-width: 1px;
`
export const Input = styled.TextInput`
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.Primary500};
  color: ${({ theme }) => theme.colors.text.primary};
  width:100%;
  height:34px;
  margin-top:8px;
`
export const FlexDirection = styled.View`
  flex-direction: row;
`
export const BtnAddCategory = styled.TouchableOpacity`
  padding:8px;
  background-color: ${({ theme }) => theme.colors.primary};
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