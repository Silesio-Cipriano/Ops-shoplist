import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
  Container,
  Title
} from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  disabled: boolean;
  onPress: () => void;
}
export function ButtonAction({ title, disabled, onPress }: ButtonProps) {
  return (
    <Container disabled={disabled} onPress={onPress}>
      <Title disabled={disabled}>{title}</Title>
    </Container>
  );
}