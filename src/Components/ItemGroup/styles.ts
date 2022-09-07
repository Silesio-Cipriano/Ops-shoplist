import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  width: 100%;
  height: 100px;
  padding:0 8px;
  margin-top:12px;
  border-radius:2px;
  border:.5px solid ${({ theme }) => theme.colors.secondary};
  justify-content:space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  font-size:${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.Primary700};
  color: ${({ theme }) => theme.colors.text.primary};
`;


export const Info = styled.View`
flex-direction: column;
width: ${RFValue(200)}px;
`
export const Limited = styled.Text`
font-size:${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.Primary400};
  color: ${({ theme }) => theme.colors.text.primary};
`

export const Cost = styled.Text`
  font-size:${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.Primary400};
  color: ${({ theme }) => theme.colors.text.primary};
`
export const More = styled.View`
  flex-direction: row;
  margin-top:8px;
`