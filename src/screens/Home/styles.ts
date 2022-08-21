import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
 padding:${RFValue(48)}px 0 ${RFValue(12)}px;
 height: 100%;
 justify-content:space-between;
 background-color: ${({ theme }) => theme.colors.background};
`;
export const BottomArea = styled.View`
  padding:0 ${RFValue(24)}px;
`;
export const Body = styled.View`
`;
export const Header = styled.View`
padding:0 ${RFValue(24)}px;
`;
export const Top = styled.View`
  flex-direction: row;
  justify-content:space-between;
  `
export const Greeting = styled.View``
export const Hello = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Primary400};
  font-size:${RFValue(26)}px;
  color:${({ theme }) => theme.colors.text.primary};
`
export const NameUser = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Primary600};
  font-size:${RFValue(26)}px;
  color:${({ theme }) => theme.colors.text.primary};
`
export const SettingButton = styled.TouchableOpacity``;


export const Bottom = styled.View`
  margin-top:${RFValue(24)}px;
`
export const TitleDay = styled.Text`
 font-family: ${({ theme }) => theme.fonts.Primary600};
  font-size:${RFValue(17)}px;
  color:${({ theme }) => theme.colors.text.primary};
`
export const SubTitleDay = styled.Text`
 font-family: ${({ theme }) => theme.fonts.Primary400};
  font-size:${RFValue(17)}px;
   color:${({ theme }) => theme.colors.text.primary};
`
export const ListCategory = styled.View`
  margin-top:${RFValue(24)}px;
  margin-bottom:${RFValue(10)}px;
`;
export const Content = styled.View`
padding:0 ${RFValue(24)}px;

`;
export const Message = styled.Text`
 font-family: ${({ theme }) => theme.fonts.Primary500};
  font-size:${RFValue(24)}px;
   color:${({ theme }) => theme.colors.text.primary};
  margin-bottom:${RFValue(38)}px;
`;



export const ListItems = styled.View`
  margin-top:${RFValue(4)}px;
  justify-content:center;
  height:${RFValue(400)}px;
`;

export const NoItemArea = styled.View`
`