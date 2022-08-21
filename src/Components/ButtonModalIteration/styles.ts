import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
 width: 100%;
 height:58px;
 background-color: ${({ theme }) => theme.colors.primary};
 justify-content:center;
 align-items:center;
 border-radius:4px;
`;

export const Title = styled.Text`
  font-size:${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.Primary500};
  color: ${({ theme }) => theme.colors.text.primary};
`;