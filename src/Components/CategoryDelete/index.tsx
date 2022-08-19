import React from 'react';
import { Feather } from '@expo/vector-icons';

import {
  Container, IconArea
} from './styles';

interface CategoryDeleteProps {
  onDelete: () => void;
}

export function CategoryDelete({ onDelete }: CategoryDeleteProps) {
  return (
    <Container onPress={onDelete} underlayColor={"#828182"} activeOpacity={1}>
      <IconArea>
        <Feather name="trash" size={19} color="white" />
      </IconArea>
    </Container>
  );
}