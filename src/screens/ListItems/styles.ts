import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
 flex: 1;
 justify-content:space-between;
 padding-bottom: 32px;
 background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  padding: 32px 24px;
`
export const ButtonBack = styled.View`
  flex-direction:row;
  justify-content:space-between;
  align-items: center;
`
export const Name = styled.Text`
  font-size:${RFValue(18)}px;
  color:${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.Jost600};
  width: 80px;
  padding-left:10px;
`;
export const Left = styled.TouchableOpacity`
  flex-direction:row;
`;
export const Icon = styled.TouchableOpacity`
`
export const Top = styled.View`
  margin-top:12px;
`
export const Limit = styled.Text`
  font-size:${RFValue(18)}px;
  color:${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.Jost600};
`
export const Limited = styled.Text`
  font-size:${RFValue(18)}px;
  color:${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.Jost400};
`
export const Cost = styled.Text`
  font-size:${RFValue(18)}px;
  color:${({ theme }) => theme.colors.alert};
  font-family: ${({ theme }) => theme.fonts.Jost400};
`
export const Item = styled.Text`
  font-size:${RFValue(18)}px;
  color:${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.Jost400};
`
export const Content = styled.View` 
  justify-content: center;
  align-items: center;
  margin:0 24px;

  height:310px;
`;
export const Footer = styled.View`
  padding:0 24px;
`;