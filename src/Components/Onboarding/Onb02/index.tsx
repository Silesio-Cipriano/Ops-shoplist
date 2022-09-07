import React from 'react';
import Image from '../../../assets/onboarding/noteListWoman.svg';
import { useAuth } from '../../../hooks/auth';
import { BackWithIcon } from '../../BackWithIcon';

import {
  Container,
  Title,
  Subtitle,
  Message,
} from './styles';

export function Onb02() {
  const {dataMessage}=useAuth();
  return (
    <Container>
      <Image width={280} />
      <Title>{dataMessage.onboarding.onb02.title}</Title>
      <Message>{dataMessage.onboarding.onb02.message}</Message>
    </Container>
  );
}