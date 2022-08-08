import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
 padding:0 24px;
`;

export const Content = styled.View`
 align-items: center;
 width: 100%;
 margin-bottom:84px;
`;

export const IconArea = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.iconBackground};
  align-items:center;
  width:92px;
  height:92px;
  border-radius:4px;
  border:1px solid ${({ theme }) => theme.colors.iconBackgroundBorder};
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
font-family: ${({ theme }) => theme.fonts.Jost600};
color: ${({ theme }) => theme.colors.primary};
font-size:${RFValue(20)}px;
`
export const CategoryButton = styled.TouchableOpacity`
 flex-direction: row;
 align-items: center;
 justify-content:space-between;
 margin:12px 0;
`

export const TitleButton = styled.Text`
font-family: ${({ theme }) => theme.fonts.Jost500};
color: ${({ theme }) => theme.colors.inative};
font-size:${RFValue(20)}px;
`