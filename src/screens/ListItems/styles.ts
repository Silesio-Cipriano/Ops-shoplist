import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
 flex: 1;
 justify-content:space-between;
 padding-bottom: ${RFValue(12)}px;
 background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  padding: ${RFValue(42)}px ${RFValue(24)}px 0;
`
export const ButtonBack = styled.View`
  flex-direction:row;
  justify-content:space-between;
  align-items: center;
`
export const Name = styled.Text`
  font-size:${RFValue(18)}px;
  color:${({ theme }) => theme.colors.text.primary};
  font-family: ${({ theme }) => theme.fonts.Primary600};
  width: 100px;
  padding-left:${RFValue(10)}px;
`;
export const Left = styled.TouchableOpacity`
  flex-direction:row;
  align-items: center;
`;

export const IconBack = styled.View`
  width:45px;
  height:45px;
  align-items: center;
  border-radius:4px;

  justify-content: center;
background-color: ${({ theme }) => theme.colors.buttonBackBorder};
`
export const Icon = styled.TouchableOpacity`

`
export const Top = styled.View`
  margin-top:12px;
`
export const Limit = styled.Text`
  font-size:${RFValue(14)}px;
  color:${({ theme }) => theme.colors.text.primary};
  font-family: ${({ theme }) => theme.fonts.Primary600};
`
export const Limited = styled.Text`
  font-size:${RFValue(14)}px;
  color:${({ theme }) => theme.colors.text.primary};
  font-family: ${({ theme }) => theme.fonts.Primary400};
`
export const Cost = styled.Text`
  font-size:${RFValue(14)}px;
  color:${({ theme }) => theme.colors.alert};
  font-family: ${({ theme }) => theme.fonts.Primary400};
`
export const Item = styled.Text`
  font-size:${RFValue(14)}px;
  color:${({ theme }) => theme.colors.text.primary};
  font-family: ${({ theme }) => theme.fonts.Primary400};
`
export const Content = styled.View` 
  justify-content: center;
  align-items: center;
  margin:0 24px;
  height:${RFPercentage(65)}px;
 padding-top:${RFValue(8)}px;

`;
export const Footer = styled.View`
  padding:0 24px;
`;