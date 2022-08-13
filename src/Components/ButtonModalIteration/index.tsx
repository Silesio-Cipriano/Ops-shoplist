import React from 'react';

import {
  Container,
  Title
} from './styles';

interface ButtonModalIterationProps {
  name: string;
  onPress: () => void;
}

export function ButtonModalIteration({ name, onPress }: ButtonModalIterationProps) {
  return (
    <Container onPress={onPress}>
      <Title>{name}</Title>
    </Container>
  );
}