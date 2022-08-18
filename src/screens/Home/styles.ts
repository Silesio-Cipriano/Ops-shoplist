import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
 padding:48px 0;
`;
export const Header = styled.View`
padding:0 24px;
`;
export const Top = styled.View`
  flex-direction: row;
  justify-content:space-between;
  `
export const Greeting = styled.View``
export const Hello = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Primary400};
  font-size:${RFValue(32)}px;
  color:${({ theme }) => theme.colors.primary};
`
export const NameUser = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Primary600};
  font-size:${RFValue(32)}px;
  color:${({ theme }) => theme.colors.primary};
`
export const SettingButton = styled.TouchableOpacity``;


export const Bottom = styled.View`
  margin-top:${RFValue(24)}px;
`
export const TitleDay = styled.Text`
 font-family: ${({ theme }) => theme.fonts.Primary600};
  font-size:${RFValue(17)}px;
  color:${({ theme }) => theme.colors.primary};
`
export const SubTitleDay = styled.Text`
 font-family: ${({ theme }) => theme.fonts.Primary400};
  font-size:${RFValue(17)}px;
  color:${({ theme }) => theme.colors.primary};
`
export const ListCategory = styled.View`
  
  /* margin-left:10px; */
  margin-top:24px;
`;
export const Content = styled.View`
padding:0 24px;

`;
export const Message = styled.Text`
 font-family: ${({ theme }) => theme.fonts.Primary500};
  font-size:${RFValue(24)}px;
  color:${({ theme }) => theme.colors.primary};
  margin-bottom:38px;
`;

export const ListItems = styled.View`
margin-top:16px;
  height:${RFPercentage(43)}px;
`;

export const NoItemArea = styled.View`
justify-content: center;
align-items: center;
`