import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TextInput.attrs({
})`
  width:100%;
  height:45px;
  font-size:${RFValue(20)}px;
  font-family:${({ theme, value }) => value ? theme.fonts.Primary600 : theme.fonts.Primary400};
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors.secondary};
  color:${({ theme }) => theme.colors.secondary};
  margin-bottom:12px;
`;