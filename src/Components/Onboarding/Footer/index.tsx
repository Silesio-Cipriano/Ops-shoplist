import React from 'react';
import { Feather } from '@expo/vector-icons';

import {
  Container,
  ButtonJump,
  Title,
  ButtonNext
} from './styles';
interface FooterProps {
  onNext: () => void;
  skip: () => void;
}
export function Footer({ onNext, skip }: FooterProps) {
  return (
    <Container >
      <ButtonJump onPress={skip}>
        <Title>Saltar</Title>
      </ButtonJump>
      <ButtonNext onPress={onNext}>
        <Feather name="chevron-right" size={39} />
      </ButtonNext>
    </Container>
  );
}