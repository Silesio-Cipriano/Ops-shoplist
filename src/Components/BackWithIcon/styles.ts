import styled from 'styled-components/native';

export const Container = styled.View`
flex-direction:row;
justify-content: space-between;
align-items: center;
width: 100%;
`;

export const Left = styled.TouchableOpacity`
  width:45px;
  height:45px;

  align-items: center;
  justify-content:center;

  border-radius:4px;
  background-color:${({ theme }) => theme.colors.buttonBackBorder}
`
