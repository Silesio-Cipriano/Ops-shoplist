import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`

 padding:0 24px;
`;

export const Title = styled.Text`
  font-family:${({ theme }) => theme.fonts.Primary500};
  color: ${({ theme }) => theme.colors.primary};
  font-size:${RFValue(24)}px;
  text-align:center;
  margin: 18px 0 12px;
`;

export const Content = styled.View`
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding:48px 0;
`