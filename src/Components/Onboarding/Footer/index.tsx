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
  title:string;
}
export function Footer({ onNext, skip,title}: FooterProps) {
  return (
    <Container >
      <ButtonJump onPress={skip}>
        <Title>{title}</Title>
      </ButtonJump>
      <ButtonNext onPress={onNext}>
        <Feather name="chevron-right" size={39} />
      </ButtonNext>
    </Container>
  );
}