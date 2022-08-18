import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.Modal`

`;


export const AreaModal = styled.View`
  background-color: rgba(13, 23, 31, 0.47);
  flex:1;
  padding:0 24px;
`
export const HeaderModal = styled.View`
  flex-direction: row;
  justify-content:space-between;
  align-items: center;
`;
export const TitleModal = styled.Text`
  font-size:${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.Primary600};
  color: ${({ theme }) => theme.colors.primary};
`;
export const BodyModal = styled.View`
padding:0 24px;
margin-top:200px;
background-color: ${({ theme }) => theme.colors.background};
border-radius:4px;
`;

export const IconsArea = styled.View``;

export const IconList = styled.TouchableOpacity`
width: 82px;
height:82px;
justify-content:center;
align-items: center;
margin-bottom:24px;
background-color:${({ theme }) => theme.colors.iconBackground};
border-radius:4px;
`

export const Content = styled.View`
margin:32px 0;
`
export const Message = styled.Text`
  font-size:${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.Primary400};
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
`
export const Title = styled.Text`
 font-size:${RFValue(20)}px;
 text-align: center;
  font-family: ${({ theme }) => theme.fonts.Primary600};
  color: ${({ theme }) => theme.colors.primary};
`
export const AlertMessage = styled.Text`
 font-size:${RFValue(20)}px;
 text-align: center;
  font-family: ${({ theme }) => theme.fonts.Primary400};
  color: ${({ theme }) => theme.colors.alert};
`
export const ButtonGroup = styled.View`
  margin-top:24px;  
  flex-direction: row;
  justify-content:space-between;
`;