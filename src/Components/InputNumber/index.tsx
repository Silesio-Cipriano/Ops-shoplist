import React from 'react';
import { useTheme } from 'styled-components';

import {
  Container
} from './styles';


interface InputNumberProps {
  name: string;
  titlePlaceholder: string;
  handleTextChange: (text: string) => void;
}

export function InputNumber({ name, titlePlaceholder, handleTextChange }: InputNumberProps) {
  const theme =useTheme();
  return (
    <Container keyboardType={"numeric"}
      value={name}
      placeholder={titlePlaceholder}
      placeholderTextColor={theme.colors.text.inative}
      onChangeText={(text) => handleTextChange(text)}
    />
  );
}