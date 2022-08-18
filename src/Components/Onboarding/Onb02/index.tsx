import React from 'react';
import Image from '../../../assets/onboarding/noteListWoman.svg';
import { BackWithIcon } from '../../BackWithIcon';

import {
  Container,
  Title,
  Subtitle,
  Message,
} from './styles';

export function Onb02() {
  return (
    <Container>
      <Image width={280} />
      <Title>Organize sua compras</Title>
      <Message>“Nao esqueca mais o que comprar
        e quanto gastar”</Message>
    </Container>
  );
}