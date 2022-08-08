import React from 'react';

import {
  Container,
  Title,
} from './styles';

interface CategoryItemProps {
  title: string;
}
export function CategoryItem({ title }: CategoryItemProps) {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
}