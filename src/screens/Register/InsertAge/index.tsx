import React, { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback } from 'react-native';
import Upsideface from '../../../assets/register/Upsideface.svg';
import { BackButton } from '../../../Components/BackButton';
import { ButtonAction } from '../../../Components/ButtonAction';
import { InputInit } from '../../../Components/InputInit';
import {
  Container, Title, Content
} from './styles';

export function InsertAge() {
  const [buttonStatus, setButtonStatus] = useState(true);
  function handleStatusChangeFalse() {
    setButtonStatus(false);
  }
  function handleStatusChangeTrue() {
    setButtonStatus(true);
  }
  return (
    <Container>
      <BackButton />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Content>
            <Upsideface width={90} height={90} />
            <Title>Qual é a tua{'\n'}
              idade?
            </Title>
            <InputInit typeNumeric={true} titlePlaceholder="Digite uma idade" handleStatusFalse={() => handleStatusChangeFalse()} handleStatusTrue={() => handleStatusChangeTrue()} />
            <ButtonAction disabled={buttonStatus} title="Continuar" />
          </Content>
        </TouchableWithoutFeedback>

      </KeyboardAvoidingView >
    </Container>
  );
}