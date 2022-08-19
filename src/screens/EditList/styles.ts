import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
 padding:0 24px;
 justify-content:space-between;
 align-items: center;
`;

export const Content = styled.View`
 align-items: center;
 width: 100%;
`;

export const IconArea = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primary};
  align-items:center;
  width:92px;
  height:92px;
  border-radius:4px;
  margin-top:8px;
  margin-bottom:30px;
`
export const IconSelected = styled.Image``

export const InputArea = styled.View`
  width: 100%;
`;

export const CategoryArea = styled.View`
width: 100%;
margin: 14px 0;
`
export const CategoryTitle = styled.Text`
text-align: left;
font-family: ${({ theme }) => theme.fonts.Primary600};
color: ${({ theme }) => theme.colors.text.primary};
font-size:${RFValue(20)}px;
`
export const CategoryButton = styled.TouchableOpacity`
 flex-direction: row;
 align-items: center;
 justify-content:space-between;
 margin:12px 0;
`

export const TitleButton = styled.Text`
font-family: ${({ theme }) => theme.fonts.Primary500};
color: ${({ theme }) => theme.colors.secondary};
font-size:${RFValue(16)}px;
opacity:0.6;
margin-left:12px;
`