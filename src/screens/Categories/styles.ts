import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  padding:0 ${RFValue(24)}px 0;
  background-color: ${({ theme }) => theme.colors.background}
`;


export const InputCategory = styled.View`
  flex-direction: row;
  justify-content:space-between;
  align-items: center;
  margin-top:${RFValue(24)}px;
  border-bottom-width: 1px;
`
export const Input = styled.TextInput`
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.Primary500};
  color: ${({ theme }) => theme.colors.text.primary};
  width:100%;
  height:${RFValue(34)}px;
  margin-top:${RFValue(8)}px;
`
export const FlexDirection = styled.View`
  flex-direction: row;
`
export const BtnAddCategory = styled.TouchableOpacity`
  padding:${RFValue(8)}px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius:2px;
  width: 100%;
  align-items: center;
  height:${RFValue(40)}px;
  margin-top:${RFValue(6)}px;
  border:.2px solid ${({ theme }) => theme.colors.primary};
`

export const CategoriesList = styled.View`
  margin-top:${RFValue(14)}px;
  height:280px;
`;