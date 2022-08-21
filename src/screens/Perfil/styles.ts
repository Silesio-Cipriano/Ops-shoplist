import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
 flex: 1;
 padding:0 ${RFValue(24)}px;
 background-color: ${({ theme }) => theme.colors.background}

`;


export const InitialData = styled.Text`
width: 100%;
text-align: right;
margin-top:12px;
`
export const Content = styled.View`
  align-items: center;
  margin:24px 0;
`

export const InputGroup = styled.View`
  margin:${RFValue(12)}px 0;
  width: 100%;
`;