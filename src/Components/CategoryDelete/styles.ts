import styled from 'styled-components/native';

export const Container = styled.TouchableHighlight`
 border:.5px solid ${({ theme }) => theme.colors.primary};
 /* width:310px; */
 width: 100%;
 padding:14px 12px;
 border-radius:4px;
 justify-content:space-between;
 background-color: ${({ theme }) => theme.colors.alert};
`;

export const IconArea = styled.View`
 margin-left:85%;
 margin-top:8px;
 align-items: center;
 justify-content:center;
`