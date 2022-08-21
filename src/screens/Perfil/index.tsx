import React, { useState } from 'react';
import { BackButton } from '../../Components/BackButton';
import { ButtonAction } from '../../Components/ButtonAction';
import { InputInit } from '../../Components/InputInit';
import ImagePerfil from '../../assets/Settings/Perfil.svg'
import {
  Container,
  InitialData,
  Content,
  InputGroup,
} from './styles';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export function Perfil() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const navigation = useNavigation<StackNavigationProp<any>>();

  function handleBackScreen() {
    navigation.goBack();
  }



  function handleTextAgeChange(text: string) {
    if (true) {
      text = text.replace(/[^0-9]/g, '');
    }
    setAge(text);
  }

  function handleTextNameChange(text: string) {
    setName(text);
  }

  return (
    <Container>
      <BackButton name='Perfil' onPress={handleBackScreen} />
      <Content>
        <ImagePerfil />
        <InputGroup>
          <InputInit value={name} typeNumeric={false} titlePlaceholder="Digite um nome" changeText={handleTextNameChange} />
          <InputInit value={age} typeNumeric={true} titlePlaceholder="Digite uma idade" changeText={handleTextAgeChange} />
        </InputGroup>
        <ButtonAction title="Salvar" disabled={false} onPress={() => { }} />
        <InitialData>Desde 20/03/2022</InitialData>
      </Content>
    </Container>
  );
}