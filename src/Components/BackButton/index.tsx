import React from 'react';
import { Feather } from '@expo/vector-icons';

import {
  Container,
  Button,
  Title,
} from './styles';

import { useTheme } from 'styled-components';
interface BackButtonProps {
  name: string;
  onPress: () => void;
}

export function BackButton({ name, onPress }: BackButtonProps) {
  const theme = useTheme();
  return (
    <Container >
      <Button onPress={onPress}>
        <Feather name="chevron-left" size={32} color={theme.colors.primary
        } />
      </Button>
      <Title>{name}</Title>
    </Container>
  );
}