import React, { useState } from 'react';

import {
  Container,
  Title,
} from './styles';

interface CategoryItemProps {
  title: string;
  status: boolean;
  onPress: () => void;
}
export function CategoryItem({ title, status, onPress }: CategoryItemProps) {
  return (
    <Container onPress={onPress} status={status}>
      <Title>{title}</Title>
    </Container>
  );
}