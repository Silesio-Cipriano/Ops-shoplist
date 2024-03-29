import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';


interface ButtonProps {
  disabled: boolean;
}

export const Container = styled.TouchableOpacity`
  width: 100%;
  height:68px;
  justify-content: center;
  align-items: center;
  background-color:${({ theme, disabled }) => disabled ? theme.colors.inative : theme.colors.primary};
  border-radius:4px;
  margin-top:12px;
`;

export const Title = styled.Text<ButtonProps>`
  font-family: ${({ theme }) => theme.fonts.Primary700};
  font-size:${RFValue(20)}px;
  color:${({ theme, disabled }) => disabled ? theme.colors.text.inative : theme.colors.secondaryAlternative};
`