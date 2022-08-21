import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
 flex: 1;
 padding:0 ${RFValue(24)}px;
 background-color: ${({ theme }) => theme.colors.background}

`;

export const Slogan = styled.View`
  margin-top:${RFValue(48)}px;
  border:1px solid ${({ theme }) => theme.colors.secondary};
  border-radius:4px;
  align-items: center;
  justify-content:center;
  flex-direction: row;
  height:${RFValue(88)}px;
  margin-bottom:24px;
`
export const TitleSlogan = styled.Text`
 font-size:${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.Primary600};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-left:${RFValue(24)}px;
`

export const OptionArea = styled.View`
  margin-top:${RFValue(24)}px;
`

export const Footer = styled.View`
align-items: center;
`