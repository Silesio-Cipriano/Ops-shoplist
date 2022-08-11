import styled from 'styled-components/native';

export const Container = styled.TouchableHighlight`
 border:.5px solid ${({ theme }) => theme.colors.primary};
 /* width:310px; */
 width: 100%;
 height: 100px;
 padding:0 12px 16px;
 border-radius:4px;
 justify-content:space-between;
 margin-bottom:12px;
 background-color: ${({ theme }) => theme.colors.alert};
`;

export const IconArea = styled.View`
 margin-left:85%;
 margin-top:8px;
 height:100%;
 align-items: center;
 justify-content:center;
`