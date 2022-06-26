import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TextInput.attrs({
})`
  width:100%;
  height:45px;
  font-size:${RFValue(20)}px;
  font-family:${({ theme, value }) => value ? theme.fonts.Jost600 : theme.fonts.Jost500};
  text-align: center;
  border-bottom-width: 1.2px;
  border-color: ${({ theme }) => theme.colors.primary};
  color:${({ theme }) => theme.colors.primary};
`;