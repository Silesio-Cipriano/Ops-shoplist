import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top:34px;
  width:100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  width:45px;
  height:45px;
  align-items: center;
  justify-content: center;
background-color: ${({ theme }) => theme.colors.buttonBackBorder};
`;
export const Title = styled.Text`
  font-family:${({ theme }) => theme.fonts.Primary600};
  font-size:${RFValue(20)}px;
  color:${({ theme }) => theme.colors.text.primary};
`;