import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface ListItemsProps {
  status: boolean;
}
export const Container = styled.TouchableOpacity<ListItemsProps>`
 border:.5px solid ${({ theme }) => theme.colors.primary};
 background-color: ${({ theme, status }) => status ? theme.colors.primary : "transparent"};
 /* width:310px; */
 width: 100%;
 height: 100px;
 padding:0 12px 16px;
 border-radius:4px;
 justify-content:space-between;
 margin-bottom:12px;
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

`
export const Title = styled.Text<ListItemsProps>`
  font-size:${RFValue(18)}px;
  color: ${({ theme, status }) => status ? theme.colors.text.primary : theme.colors.primary};

  font-family: ${({ theme }) => theme.fonts.Jost600};
`

export const LineCentral = styled.View``
export const Bottom = styled.View`
  flex-direction: row;
  justify-content:space-between;
`
export const BottomElement = styled.View``;
export const Quantite = styled.Text<ListItemsProps>`
  font-size:${RFValue(16)}px;
  color: ${({ theme, status }) => status ? theme.colors.text.primary : theme.colors.primary};

  font-family: ${({ theme }) => theme.fonts.Jost600};

`
export const Qtd = styled.Text<ListItemsProps>`
  font-size:${RFValue(14)}px;
  color: ${({ theme, status }) => status ? theme.colors.text.primary : theme.colors.primary};

  font-family: ${({ theme }) => theme.fonts.Jost400};
`