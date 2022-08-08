import React, { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback } from 'react-native';
import SmileFace from '../../../assets/register/SmileFace.svg';
import { BackButton } from '../../../Components/BackButton';
import { ButtonAction } from '../../../Components/ButtonAction';
import { InputInit } from '../../../Components/InputInit';
import {
  Container, Title, Content
} from './styles';

export function InsertName() {
  const [buttonStatus, setButtonStatus] = useState(true);
  function handleStatusChangeFalse() {
    setButtonStatus(false);
  }
  function handleStatusChangeTrue() {
    setButtonStatus(true);
  }
  return (
    <Container>
      <BackButton name="Voltar" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Content>
            <SmileFace width={90} height={90} />
            <Title>Como podemos{'\n'}
              chamar você?</Title>
            <InputInit typeNumeric={false} titlePlaceholder="Digite um nome" handleStatusFalse={() => handleStatusChangeFalse()} handleStatusTrue={() => handleStatusChangeTrue()} />
            <ButtonAction disabled={buttonStatus} title="Continuar" />
          </Content>
        </TouchableWithoutFeedback>

      </KeyboardAvoidingView >
    </Container>
  );
}