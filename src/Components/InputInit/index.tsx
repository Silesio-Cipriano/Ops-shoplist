import React, { useState } from 'react';
import { TextInputProps } from 'react-native';

import {
  Container
} from './styles';

interface InputInitProps {
  titlePlaceholder: string;
  typeNumeric: boolean;
  handleStatusFalse: () => void;
  handleStatusTrue: () => void;
}
export function InputInit({ titlePlaceholder, handleStatusFalse, handleStatusTrue, typeNumeric = false }: InputInitProps) {
  const [name, setName] = useState<string>("");

  function handleTextChange(text: string) {
    if (typeNumeric) {
      text = text.replace(/[^0-9]/g, '');
    }
    setName(text);
    if (text) {
      handleStatusFalse()
    } else {
      handleStatusTrue()
    }
  }
  return (
    <Container keyboardType={typeNumeric ? "numeric" : "default"}
      value={name}
      placeholder={titlePlaceholder}
      onChangeText={(text) => handleTextChange(text)}
    />
  );
}