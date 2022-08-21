import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content:space-between;
  margin-top:12px;
`;

export const Left = styled.View`
  flex-direction: row;
  align-items: center;
`
export const Icon = styled.View`
  background-color: ${({ theme }) => theme.colors.text.inative};
  width: 52px;
  height: 52px;
  align-items: center;
  justify-content:center;

  border-radius:4px;
  margin-right:${RFValue(24)}px;
`
export const Title = styled.Text`
  font-size:${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.Primary600};
  color: ${({ theme }) => theme.colors.text.primary};
`