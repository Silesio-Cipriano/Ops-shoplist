import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
  Container,
  Title
} from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  disabled: boolean;
}
export function ButtonAction({ title, disabled }: ButtonProps) {
  return (
    <Container disabled={disabled} >
      <Title>{title}</Title>
    </Container>
  );
}