import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TextInput.attrs({
})`
  margin-bottom:${RFValue(12)}px;
  width:100%;
  height:45px;
  font-size:${RFValue(20)}px;
  font-family:${({ theme, value }) => value ? theme.fonts.Primary600 : theme.fonts.Primary500};
  text-align: center;
  border-bottom-width: 1.2px;
  border-color: ${({ theme }) => theme.colors.secondary};
  color:${({ theme }) => theme.colors.text.primary};
`;