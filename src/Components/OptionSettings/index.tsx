import React, { ReactNode } from 'react';
import { Feather } from "@expo/vector-icons";
import {
  Container,
  Left,
  Icon,
  Title,
} from './styles';


interface OptionSettingsProps {
  title: string;
  icon: ReactNode;
  onPress: () => void;
}

export function OptionSettings({ title, icon, onPress }: OptionSettingsProps) {
  return (
    <Container onPress={onPress}>
      <Left>
        <Icon>
          {icon}
        </Icon>
        <Title>{title}</Title>
      </Left>
      <Feather name="chevron-right" size={24} />
    </Container>
  );
}