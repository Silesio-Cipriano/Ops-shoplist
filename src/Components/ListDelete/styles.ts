import styled from 'styled-components/native';
interface ListDeleteProps {
  mode: boolean;
}
export const Container = styled.TouchableHighlight<ListDeleteProps>`
 border:.5px solid ${({ theme }) => theme.colors.primary};
 /* width:310px; */
 width: 100%;
 height: 100px;
 padding:0 12px 16px;
 border-radius:4px;
 justify-content:space-between;
 margin-bottom:${({ mode }) => mode ? "12px" : "0"};
 margin-top:${({ mode }) => mode ? "0" : "12px"};;
 background-color: ${({ theme }) => theme.colors.alert};
`;

export const IconArea = styled.View`
 margin-left:85%;
 margin-top:8px;
 height:100%;
 align-items: center;
 justify-content:center;
`