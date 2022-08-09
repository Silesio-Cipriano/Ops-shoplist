import React from 'react';

import {
  Container
} from './styles';


interface InputNumberProps {
  name: string;
  titlePlaceholder: string;
  handleTextChange: (text: string) => void;
}

export function InputNumber({ name, titlePlaceholder, handleTextChange }: InputNumberProps) {
  return (
    <Container
      value={name}
      placeholder={titlePlaceholder}
      onChangeText={(text) => handleTextChange(text)}
    />
  );
}