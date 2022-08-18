import React from 'react';
import Image from '../../../assets/onboarding/legWoman.svg';
import { BackWithIcon } from '../../BackWithIcon';

import {
  Container,
  Title,
  Subtitle,
  Message,
} from './styles';

export function Onb01() {
  return (
    <Container>
      <Title>Gerencie suas{"\n"}compras de forma{"\n"}rapida e facil</Title>
      <Image width={250} />
      <Subtitle>Planifique</Subtitle>
      <Message>“O Risco vem de você não saber o que está fazendo.” – Warren Buffett</Message>
    </Container>
  );
}