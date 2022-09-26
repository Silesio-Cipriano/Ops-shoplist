import React, { useState } from 'react';
import { BackButton } from '../../Components/BackButton';
import { ButtonAction } from '../../Components/ButtonAction';
import { InputInit } from '../../Components/InputInit';
import ImagePerfil from '../../assets/Settings/Perfil.svg'
import { dataKey } from '../../utils/dataKey';

import {
  Container,
  InitialData,
  Content,
  InputGroup,
} from './styles';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useAuth } from '../../hooks/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

export function Perfil() {
  const dataUserKey = dataKey.user;
  const {user} = useAuth();
  const [name, setName] = useState(user.name);
  const [age, setAge] = useState(user.age);

  let date=new Date(user.createdAt);
  let createdAt=date.getDate().toString().padStart(2, '0')+"/"+(date.getMonth()+1).toString().padStart(2, '0')+"/"+date.getFullYear();
  
  const navigation = useNavigation<StackNavigationProp<any>>();

  function handleBackScreen() {
    navigation.goBack();
  }

  async function saveUser(){
    const updateUser = {
      id: 1,
      name: name,
      age: age,
      createdAt:user.createdAt
    }
    try {
      await AsyncStorage.setItem(dataUserKey, JSON.stringify(updateUser));
    } catch (error) {
      console.log(error);
      Alert.alert("Nao foi possivel adicionar categoria");
    }
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
        <ButtonAction title="Salvar" disabled={false} onPress={saveUser} />
        <InitialData>Desde {createdAt}</InitialData>
      </Content>
    </Container>
  );
}