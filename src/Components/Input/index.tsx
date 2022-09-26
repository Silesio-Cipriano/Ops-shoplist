import React, { useState } from 'react';
import { useTheme } from 'styled-components';

import {
  Container
} from './styles';

interface InputProps {
  name: string;
  titlePlaceholder: string;
  handleTextChange: (text: string) => void;
  typeNumeric: boolean;
}

export function Input({ name, titlePlaceholder, handleTextChange, typeNumeric }: InputProps) {
  const theme=useTheme();
  
  return (
    <Container keyboardType={typeNumeric ? "numeric" : "default"}
      maxLength={typeNumeric ? 12 : 100}
      value={name}
      placeholder={titlePlaceholder}
      placeholderTextColor={theme.colors.text.inative}

      onChangeText={(text) => handleTextChange(text)}
    />
  );
}