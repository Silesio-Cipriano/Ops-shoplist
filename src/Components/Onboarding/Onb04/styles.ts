import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
 flex: 1;
 align-items: center;
`;

export const Title = styled.Text`
font-size:${RFValue(28)}px;
font-family: ${({ theme }) => theme.fonts.Primary700};
color: ${({ theme }) => theme.colors.text.primary};
text-align: center;
`
export const Subtitle = styled.Text`
margin-top:-42px;
font-size:${RFValue(98)}px;
font-family: ${({ theme }) => theme.fonts.Primary700};
color: ${({ theme }) => theme.colors.text.primary};
`
export const Message = styled.Text`
margin-top:-42px;
font-size:${RFValue(18)}px;
font-family: ${({ theme }) => theme.fonts.Primary500};
color: ${({ theme }) => theme.colors.text.inative};
text-align: center;
`