import React, { useState } from 'react';
import { TextInputProps } from 'react-native';

import {
  Container
} from './styles';

interface InputInitProps {
  titlePlaceholder: string;
  typeNumeric: boolean;
  value: string;
  changeText: (text: string) => void;
  handleStatusFalse: () => void;
  handleStatusTrue: () => void;
}
export function InputInit({ value, changeText, titlePlaceholder, handleStatusFalse, handleStatusTrue, typeNumeric = false }: InputInitProps) {


  return (
    <Container keyboardType={typeNumeric ? "numeric" : "default"}
      maxLength={typeNumeric ? 2 : 100}
      value={value}
      placeholder={titlePlaceholder}
      onChangeText={(text) => changeText(text)}
    />
  );
}