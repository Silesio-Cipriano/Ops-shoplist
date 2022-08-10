import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
 justify-content: center;
  align-items: center;
`;

export const Message = styled.Text`
 font-family: ${({ theme }) => theme.fonts.Jost500};
  font-size:${RFValue(24)}px;
  color:${({ theme }) => theme.colors.primary};
  margin-bottom:38px;
`;