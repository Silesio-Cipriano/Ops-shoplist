import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 150px;
  height: 150px;
  padding:0 12px;
  margin-top:12px;
  border-radius:2px;
  border:.2px solid ${({ theme }) => theme.colors.primary};;
  justify-content:center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.cardBackground};
`;
export const Title = styled.Text`
text-align: center;
  font-size:${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.Jost400};
  color: ${({ theme }) => theme.colors.primary};
`;