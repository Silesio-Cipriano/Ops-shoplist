import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
interface CircleProps {
  selected: boolean;
}

export const Container = styled.View`
 padding:0 24px;
`;

export const Content = styled.View`
  margin-top:24px;
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
color: ${({ theme }) => theme.colors.primary};
font-size:${RFValue(20)}px;
`
export const StatusButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content:space-between;
  margin-top:12px;
`
export const TitleButton = styled.Text`
font-family: ${({ theme }) => theme.fonts.Primary500};
color: ${({ theme }) => theme.colors.inative};
font-size:${RFValue(20)}px;
`
export const SelectedBtn = styled.View`
  flex-direction: row;
  align-items: center;
`


export const Circle = styled.View<CircleProps>`
  width: 31px;
  height:31px;
  background-color:${({ theme, selected }) => selected ? theme.colors.primary : theme.colors.text.primary};
  border:1px solid ${({ theme, selected }) => !selected ? theme.colors.primary : "transparent"};
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