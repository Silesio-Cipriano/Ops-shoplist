import React, { ReactNode } from 'react';
import { Feather } from '@expo/vector-icons'
import { useTheme } from 'styled-components';
import PopCornSvg from '../../assets/ItemGroup/Icon_popcorn.svg'
import {
  Container,
  Title,
  Info,
  Limited,
  Cost,
  More,
} from './styles';
interface CategoryItemProps {
  id: string;
  title: string;
  icon: ReactNode;
  onPress: () => void;
}
export function ItemGroup({ id, title, icon, onPress }: CategoryItemProps) {
  const theme = useTheme();
  return (
    <Container activeOpacity={1} onPress={onPress}>
      {icon}
      <Info>
        <Title>
          {title}
        </Title>
        <More>
          <Limited>
            Limite: 20000 Mtn
          </Limited>
          <Cost>
            |  Itens: 6
          </Cost>
        </More>
      </Info>
      <Feather name="chevron-right" size={24} color={theme.colors.secondary} />
    </Container>
  );
}