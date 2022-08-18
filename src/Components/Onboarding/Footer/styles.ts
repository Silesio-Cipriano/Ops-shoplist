import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
 flex-direction: row;
 justify-content:space-between;
 align-items: center;
 width: 100%;
`;

export const ButtonNext = styled.TouchableOpacity`
width:73px;
height:58px;
justify-content:center;
align-items: center;
border-radius:8px;
background-color:${({ theme }) => theme.colors.primary};
`;

export const ButtonJump = styled.TouchableOpacity`
`;

export const FooterArea = styled.View`

`;

export const Title = styled.Text`
font-size:${RFValue(18)}px;
font-family: ${({ theme }) => theme.fonts.Primary500};
color: ${({ theme }) => theme.colors.text.inative}
`