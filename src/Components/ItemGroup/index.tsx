import React, { ReactNode } from 'react';

import PopCornSvg from '../../assets/ItemGroup/Icon_popcorn.svg'
import {
  Container,
  Title
} from './styles';
interface CategoryItemProps {
  id: string;
  title: string;
  icon: ReactNode;
  onPress: () => void;
}
export function ItemGroup({ id, title, icon, onPress }: CategoryItemProps) {
  return (
    <Container onPress={onPress}>
      {icon}
      <Title>
        {title}
      </Title>
    </Container>
  );
}