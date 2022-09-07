import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
 padding:32px 24px;
 align-items: center;
 background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.View`
 align-items: center;
  width: 100%; 
  height:100%;
  margin-top:${RFPercentage(10)}px;
`
export const Think = styled.Text`
margin-bottom:20px;
  font-size:${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.Primary600};
  color: ${({ theme }) => theme.colors.text.inative};
  text-align: center;
`

export const Message = styled.Text`
  margin:20px 0;
  font-size:${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.Primary600};
  color: ${({ theme }) => theme.colors.text.primary};
  text-align: center;
`

export const InputArea = styled.View`
  margin:0 0 12px;
  width: 100%;
`;