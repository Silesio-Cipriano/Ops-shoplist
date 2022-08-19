import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Message = styled.Text`
 font-family: ${({ theme }) => theme.fonts.Primary700};
  font-size:${RFValue(24)}px;
  color:${({ theme }) => theme.colors.text.primary};
  margin-bottom:38px;
`;