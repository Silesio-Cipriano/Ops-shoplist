import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
interface ButtonModalProps {
  typeDelete: boolean;
}

export const Container = styled.TouchableOpacity<ButtonModalProps>`
 width: 128px;
 height:58px;
 background-color: ${({ theme, typeDelete }) => typeDelete ? theme.colors.alert : theme.colors.primary};
 justify-content:center;
 align-items:center;
 border-radius:4px;
`;

export const Title = styled.Text<ButtonModalProps>`
  font-size:${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.Primary500};
  color: ${({ theme, typeDelete }) => typeDelete ? theme.colors.text.secondary : theme.colors.text.primary};
`;