import React from 'react';
import Image from '../../../assets/onboarding/dayGame.svg';
import { useAuth } from '../../../hooks/auth';
import {
  Container,
  Title,
  Subtitle,
  Message,
} from './styles';

export function Onb04() {
  const {dataMessage}=useAuth();

  return (
    <Container>
      <Title>{dataMessage.onboarding.onb04.title}</Title>
      <Image width={250} />
      <Subtitle>{dataMessage.onboarding.onb04.subtitle}</Subtitle>
      <Message>{dataMessage.onboarding.onb04.message}</Message>
    </Container>
  );
}