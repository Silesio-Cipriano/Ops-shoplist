import React from 'react';
import { Feather } from '@expo/vector-icons';

import {
  Container, IconArea
} from './styles';

interface ListDeleteProps {
  onDelete: () => void;
}

export function ListDelete({ onDelete }: ListDeleteProps) {
  return (
    <Container onPress={onDelete} underlayColor={"#828182"} activeOpacity={1}>
      <IconArea>
        <Feather name="trash" size={28} color="white" />
      </IconArea>
    </Container>
  );
}