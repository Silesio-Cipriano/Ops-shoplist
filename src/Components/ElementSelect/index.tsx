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

export function ElementSelect({ title, selected, onPress }: CategoryElementProps) {
  const [selecteds, setSelecteds] = useState(false);

  return (
    <Container onPress={onPress}>
      <Title>{title}</Title>
      <SelectedElement selected={selected} />
    </Container>
  );
}