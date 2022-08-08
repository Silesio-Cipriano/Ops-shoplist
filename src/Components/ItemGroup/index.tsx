import React from 'react';

import PopCornSvg from '../../assets/ItemGroup/Icon_popcorn.svg'
import {
  Container,
  Title
} from './styles';
interface CategoryItemProps {
  id: string;
  title: string;
}
export function ItemGroup({ id, title }: CategoryItemProps) {
  return (
    <Container>
      <PopCornSvg width={86} height={86} />
      <Title>
        {title}
      </Title>
    </Container>
  );
}