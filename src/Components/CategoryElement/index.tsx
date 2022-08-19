import React, { useState } from 'react';

import {
  Container,
  Title,
  SelectedElement,
} from './styles';

interface CategoryElementProps {
  title: string;
  selected: boolean;
  onPress: () => void;
}

export function CategoryElement({ title, selected, onPress }: CategoryElementProps) {
  const [selecteds, setSelecteds] = useState(false);

  return (
    <Container activeOpacity={1} onPress={onPress}>
      <Title>{title}</Title>
      <SelectedElement selected={selected} />
    </Container>
  );
}