import React from 'react';
import { Feather } from '@expo/vector-icons';

import {
  Container,
  Button,
  Title,
} from './styles';
import { useTheme } from 'styled-components';

export function BackButton() {
  const theme = useTheme();
  return (
    <Container>
      <Button>
        <Feather name="chevron-left" size={40} color={theme.colors.primary
        } />
      </Button>
      <Title>Voltar</Title>
    </Container>
  );
}