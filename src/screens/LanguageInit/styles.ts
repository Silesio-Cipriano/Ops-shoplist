import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
 padding:${RFValue(36)}px ${RFValue(24)}px;
 flex: 1;
 background-color: ${({ theme }) => theme.colors.background};

`;

export const Content = styled.View`
margin-top:${RFValue(48)}px;
`;