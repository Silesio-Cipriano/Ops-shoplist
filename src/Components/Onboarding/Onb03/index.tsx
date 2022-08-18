import React from 'react';
import Image from '../../../assets/onboarding/funGroup.svg';
import { BackWithIcon } from '../../BackWithIcon';
import { Footer } from '../Footer';

import {
  Container,
  Title,
  Subtitle,
  Message,
} from './styles';

export function Onb03() {
  return (
    <Container>
      <Image width={300} />
      <Title>Organize sua compras</Title>
      <Message>“Organize seus eventos, festas e encontros usando apenas o smarthphone”</Message>
    </Container>
  );
}