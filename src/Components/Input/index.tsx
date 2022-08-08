import React, { useState } from 'react';

import {
  Container
} from './styles';

interface InputProps {
  name: string;
  titlePlaceholder: string;
  handleTextChange: (text: string) => void;
}

export function Input({ name, titlePlaceholder, handleTextChange }: InputProps) {
  return (
    <Container
      value={name}
      placeholder={titlePlaceholder}
      onChangeText={(text) => handleTextChange(text)}
    />
  );
}