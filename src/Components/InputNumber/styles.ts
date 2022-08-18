import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TextInput`
  width:140px;
  height:45px;
  font-size:${RFValue(20)}px;
  font-family:${({ theme, value }) => value ? theme.fonts.Primary600 : theme.fonts.Primary400};
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors.primary};
  color:${({ theme }) => theme.colors.primary};
  margin-bottom:12px;
`;