import React from 'react';

import {
  Container,
  Title
} from './styles';

interface ButtonModalProps {
  name: string;
  onPress: () => void;
  typeDelete: boolean;
}

export function ButtonModal({ name, onPress, typeDelete }: ButtonModalProps) {
  return (
    <Container onPress={onPress} typeDelete={typeDelete}>
      <Title typeDelete={typeDelete}>{name}</Title>
    </Container>
  );
}