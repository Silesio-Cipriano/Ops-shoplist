import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
interface CategoryItemProps {
  status: boolean;
}
export const Container = styled.TouchableOpacity<CategoryItemProps>`
 height: 38px;
 border-radius:2px;
 background-color: ${({ theme, status }) => status ? theme.colors.primary : "transparent"};
 border: ${({ status }) => status ? "0" : ".5px"} solid ${({ theme }) => theme.colors.secondary};
 justify-content:center;
 align-items: center;
 margin-left:12px;
`;
export const Title = styled.Text`
 font-family: ${({ theme }) => theme.fonts.Primary400};
  font-size:${RFValue(18)}px;
  margin:0 24px;
  color:${({ theme }) => theme.colors.text.primary};
`;