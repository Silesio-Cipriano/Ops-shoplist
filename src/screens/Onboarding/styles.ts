import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
 flex: 1;
align-items: center;
 padding:32px 24px 0;
 background-color: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Jost700};
  font-size:${RFValue(28)}px;
  text-align: center;
  color:${({ theme }) => theme.colors.primary};
  margin:24px 0;
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Jost400};
  font-size:${RFValue(20)}px;
  text-align: center;
  color:${({ theme }) => theme.colors.primary};
  margin:${RFPercentage(5)}px;
`

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius:8px;
  width: 83px;
  height: 68px;
  background-color: ${({ theme }) => theme.colors.primary};
`;