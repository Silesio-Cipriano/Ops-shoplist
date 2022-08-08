import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
width: 120px;
 height: 38px;
 border-radius:2px;
 background-color: ${({ theme }) => theme.colors.cardBackground};
 border:.2px solid ${({ theme }) => theme.colors.primary};
 justify-content:center;
 align-items: center;
 margin-left:12px;
`;
export const Title = styled.Text`
 font-family: ${({ theme }) => theme.fonts.Jost400};
  font-size:${RFValue(18)}px;
  color:${({ theme }) => theme.colors.primary};
`;