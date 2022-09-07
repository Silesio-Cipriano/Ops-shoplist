import React from 'react';
import Image from '../../../assets/onboarding/legWoman.svg';
import { useAuth } from '../../../hooks/auth';
import { portugues } from '../../../utils/Languages/portugues';
import { BackWithIcon } from '../../BackWithIcon';

import {
  Container,
  Title,
  Subtitle,
  Message,
} from './styles';

export function Onb01() {
  const {dataMessage}=useAuth();
  return (
    <Container>
      <Title>{dataMessage.onboarding.onb01.title}</Title>
      <Image width={250} />
      <Subtitle>{dataMessage.onboarding.onb01.subtitle}</Subtitle>
      <Message>{dataMessage.onboarding.onb01.message}</Message>
    </Container>
  );
}