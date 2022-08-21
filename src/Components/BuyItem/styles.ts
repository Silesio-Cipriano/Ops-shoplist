import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface ListItemsProps {
  status: boolean;
}
export const Container = styled.TouchableOpacity<ListItemsProps>`
 border:${({ status }) => status ? 0 : .5}px solid ${({ theme }) => theme.colors.secondary};
 background-color: ${({ theme, status }) => status ? theme.colors.secondary : theme.colors.background};
 /* width:310px; */
 width: 100%;
 height: 100px;
 padding:0 0 ${RFValue(6)}px;
 border-radius:4px;
 justify-content:space-between;
 margin-bottom:${RFValue(12)}px;
`;
export const Line = styled.View`
flex-direction: row;
  background-color: ${({ theme }) => theme.colors.text.primary};
  width: 10px;
  height:18px;
  margin-left:95%;
  align-items:flex-end;
`
export const Top = styled.View`
  flex-direction: row;
  padding:0 12px;
`
export const Title = styled.Text<ListItemsProps>`
  font-size:${RFValue(18)}px;
  color: ${({ theme, status }) => status ? theme.colors.text.secondary : theme.colors.text.primary};

  font-family: ${({ theme }) => theme.fonts.Primary700};
`

export const LineCentral = styled.View`
width: 90%;
height: 5px;
padding:8px 0;
justify-content:center;
margin:0 auto;
`
export const Bottom = styled.View`
  flex-direction: row;
  justify-content:space-between;
  padding:0 12px;

`
export const BottomElement = styled.View``;
export const Quantite = styled.Text<ListItemsProps>`
  font-size:${RFValue(14)}px;
  color: ${({ theme, status }) => status ? theme.colors.text.secondary : theme.colors.text.primary};

  font-family: ${({ theme }) => theme.fonts.Primary600};

`
export const Qtd = styled.Text<ListItemsProps>`
  font-size:${RFValue(14)}px;
  color: ${({ theme, status }) => status ? theme.colors.text.secondary : theme.colors.text.primary};
  font-family: ${({ theme }) => theme.fonts.Primary400};
`