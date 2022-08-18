import React from 'react';
import Logo from '../../assets/Logo.svg';

import { Feather } from '@expo/vector-icons';


import {
  Container,
  Left
} from './styles';

interface BackWithIconProps {
  backOnb: () => void;
}

export function BackWithIcon({ backOnb }: BackWithIconProps) {
  return (
    <Container>
      <Left onPress={backOnb}>
        <Feather name="chevron-left" size={24} />
      </Left>
      <Logo />
    </Container>
  );
}