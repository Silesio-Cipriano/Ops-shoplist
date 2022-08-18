import React from 'react';
import Image from '../../../assets/onboarding/dayGame.svg';
import {
  Container,
  Title,
  Subtitle,
  Message,
} from './styles';

export function Onb04() {
  return (
    <Container>
      <Title>“Um dia sem risada é{"\n"}um dia desperdiçado”{"\n"}– Charlie Chaplin</Title>
      <Image width={250} />
      <Subtitle>“</Subtitle>
      <Message>Organize seus gastos</Message>
    </Container>
  );
}