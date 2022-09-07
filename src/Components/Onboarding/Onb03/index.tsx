import React from 'react';
import Image from '../../../assets/onboarding/funGroup.svg';
import { useAuth } from '../../../hooks/auth';
import { BackWithIcon } from '../../BackWithIcon';
import { Footer } from '../Footer';

import {
  Container,
  Title,
  Subtitle,
  Message,
} from './styles';

export function Onb03() {
  const {dataMessage}=useAuth();
  return (
    <Container>
      <Image width={300} />
      <Title>{dataMessage.onboarding.onb03.title}</Title>
      <Message>{dataMessage.onboarding.onb03.message}</Message>
    </Container>
  );
}