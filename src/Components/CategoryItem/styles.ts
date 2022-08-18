import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
interface CategoryItemProps {
  status: boolean;
}
export const Container = styled.TouchableOpacity<CategoryItemProps>`
width: 120px;
 height: 38px;
 border-radius:2px;
 background-color: ${({ theme, status }) => status ? theme.colors.iconBackground : theme.colors.cardBackground};
 border:.2px solid ${({ theme }) => theme.colors.primary};
 justify-content:center;
 align-items: center;
 margin-left:12px;
`;
export const Title = styled.Text`
 font-family: ${({ theme }) => theme.fonts.Primary400};
  font-size:${RFValue(18)}px;
  color:${({ theme }) => theme.colors.primary};
`;