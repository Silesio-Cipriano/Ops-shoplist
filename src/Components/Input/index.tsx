import React, { useState } from 'react';

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
  return (
    <Container keyboardType={typeNumeric ? "numeric" : "default"}
      maxLength={typeNumeric ? 12 : 100}
      value={name}
      placeholder={titlePlaceholder}
      onChangeText={(text) => handleTextChange(text)}
    />
  );
}