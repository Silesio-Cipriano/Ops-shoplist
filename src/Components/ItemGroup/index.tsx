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
  Content,
} from './styles';
interface CategoryItemProps {
  id: string;
  name: string;
  icon: ReactNode;
  spendingLimit: string;
  onPress: () => void;
  onLongPress: () => void;
}
export function ItemGroup({ id, name, icon, spendingLimit, onPress, onLongPress }: CategoryItemProps) {
  const theme = useTheme();
  return (
    <Container activeOpacity={1} onPress={onPress} onLongPress={onLongPress}>
      <Content>
        {icon}
        <Info>
          <Title>
            {name}
          </Title>
          <More>
            <Limited>
              Limite: {spendingLimit} Mtn
            </Limited>
          </More>
        </Info>
      </Content>

      <Feather name="chevron-right" size={24} color={theme.colors.secondary} />
    </Container>
  );
}