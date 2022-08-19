import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.Modal`
`;


export const AreaModal = styled.View`
  background-color: rgba(13, 23, 31, 0.47);
  flex:1;
  margin-top:-84px;

  padding:0 24px;


`
export const HeaderModal = styled.View`
  flex-direction: row;
  justify-content:space-between;
  align-items: center;
  padding:14px 0;
`;
export const TitleModal = styled.Text`
  font-size:${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.Primary600};
  color: ${({ theme }) => theme.colors.secondary};
`;
export const BodyModal = styled.View`
padding:4px 24px 24px;
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
background-color:${({ theme }) => theme.colors.primary};
border-radius:4px;
`

interface CircleProps {
  selected: boolean;
}


export const Content = styled.View`
`;

export const InputGroup = styled.View`
  flex-direction: row;
  justify-content:space-between;
  width: 100%;
`;

export const StatusArea = styled.View`
  margin-top:24px;
`
export const Status = styled.Text`
text-align: left;
font-family: ${({ theme }) => theme.fonts.Primary600};
color: ${({ theme }) => theme.colors.text.primary};
font-size:${RFValue(20)}px;
`
export const StatusButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content:space-between;
  margin-top:12px;
`
export const TitleButton = styled.Text`
font-family: ${({ theme }) => theme.fonts.Primary400};
color: ${({ theme }) => theme.colors.text.primary};
font-size:${RFValue(18)}px;
margin-left:12px;
`
export const SelectedBtn = styled.View`
  flex-direction: row;
  align-items: center;
`


export const Circle = styled.View<CircleProps>`
  width: 31px;
  height:31px;
  background-color:${({ theme, selected }) => !selected ? "transparent" : theme.colors.text.primary};
  border:1px solid ${({ theme, selected }) => !selected ? theme.colors.secondary : "transparent"};
  border-radius:100px;
  margin-right:-2px;
  z-index:2;
  /* elevation:2; */
`
export const Rectangle = styled.View`
  width: 31px;
  height:12px;
  background-color:${({ theme }) => theme.colors.text.primary};
  border:1px solid ${({ theme }) => theme.colors.primary};
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 2px;
  border-top-right-radius: 2px;
`