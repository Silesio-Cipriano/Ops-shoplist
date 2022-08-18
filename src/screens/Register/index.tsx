import React, { useState } from 'react';
import { Alert, Keyboard, KeyboardAvoidingView, Platform } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Logo from '../../assets/Logo.svg';
import EmojiLying from '../../assets/emoji/lying-face.svg';
import EmojiSimiling from '../../assets/emoji/smiling-face-with-smiling-eyes.svg';
import EmojiUpside from '../../assets/emoji/upside-down-face.svg';
import EmojiEyes from '../../assets/emoji/beaming-face-with-smiling-eyes.svg';
import { BackWithIcon } from '../../Components/BackWithIcon';
import { ButtonAction } from '../../Components/ButtonAction';
import { InputInit } from '../../Components/InputInit';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Think,
  Message,
  InputArea,
  Content
} from './styles';
import { StackNavigationProp } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { dataKey } from '../../utils/dataKey';



export function Register() {
  const navigation = useNavigation<StackNavigationProp<any>>();

  const [buttonStatus, setButtonStatus] = useState(true);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  function handleStatusChangeFalse() {
    setButtonStatus(false);
  }
  function handleStatusChangeTrue() {
    setButtonStatus(true);
  }

  const [index, setIndex] = useState(0);
  function nextPage() {
    if (index < 3) {
      setIndex(index + 1);
    }
  }
  function prevPage() {
    if (index > 0) {
      setIndex(index - 1);
    }
  }

  function saveName() {
    if (!name) {
      Alert.alert("Digite um nome");
    } else {
      nextPage();
    }
  }

  function saveAge() {
    if (!age) {
      Alert.alert("Digite uma idade");
    } else {
      nextPage();
    }

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
  const dataUserKey = dataKey.user;

  async function handleChangeScreen() {
    const user = {
      id: 1,
      name: name,
      age: age,
    }
    try {

      await AsyncStorage.setItem(dataUserKey, JSON.stringify(user));
      navigation.navigate("Home");

    } catch (error) {
      console.log(error);
      Alert.alert("Nao foi possivel adicionar categoria");
    }

  }

  function Reg01() {
    return (
      <>
        <Logo />
        <Content>
          <Think>“Ola, chamo-me ops e sou um{"\n"}humano igual
            voce”</Think>
          <EmojiLying />
          <Message>
            Estou aqui para{"\n"}te ajudar
          </Message>

          <ButtonAction title={"Continuar"} disabled={false} onPress={nextPage} />
        </Content>
      </>

    )
  }
  function Reg02() {
    return (
      <>
        <BackWithIcon backOnb={prevPage} />
        <Content>
          {/* <Think>“Tomara que tenha um nome
            ruim”</Think> */}
          <EmojiSimiling />
          <Message>
            Como posso
            chamar voce?
          </Message>

          <InputArea>
            <InputInit value={name} typeNumeric={false} titlePlaceholder="Digite um nome" changeText={handleTextNameChange} handleStatusFalse={() => handleStatusChangeFalse()} handleStatusTrue={() => handleStatusChangeTrue()} />
          </InputArea>

          <ButtonAction title={"Continuar"} disabled={false} onPress={saveName} />
        </Content>

      </>
    )
  }



  function Reg03() {
    return (
      <>
        <BackWithIcon backOnb={prevPage} />
        <Content>
          <Think>“O mais novo sera o chefe”</Think>
          <EmojiUpside />
          <Message>
            Eu tenho 0 anos{"\n"}
            qual é a tua idade?
          </Message>
          <InputArea>
            <InputInit value={age} typeNumeric={true} titlePlaceholder="Digite um nome" changeText={handleTextAgeChange} handleStatusFalse={() => handleStatusChangeFalse()} handleStatusTrue={() => handleStatusChangeTrue()} />
          </InputArea>
          <ButtonAction title={"Continuar"} disabled={false} onPress={saveAge} />

        </Content>
      </>

    )
  }
  function Reg04() {
    return (
      <>
        <BackWithIcon backOnb={prevPage} />
        <Content>
          <Think>“Tem um nome bonito, mas
            eu sou o mais novo hahaha,
            me chama de ops o rei das compras”</Think>
          <EmojiEyes />
          <Message>
            Seja bem-vindo{"\n"}
            <Think>{name}</Think>
          </Message>

          <ButtonAction title={"Continuar"} disabled={false} onPress={handleChangeScreen} />
        </Content>
      </>
    )
  }

  const functions = [Reg01(), Reg02(), Reg03(), Reg04()];

  return (

    <Container>
      {functions[index]}
    </Container>

  );
}