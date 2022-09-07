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
import { useAuth } from '../../hooks/auth';



export function Register() {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const { signIn } = useAuth();
  const [buttonStatus, setButtonStatus] = useState(true);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const {dataMessage}=useAuth();
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
      createdAt:new Date(),
    }
    try {
      await AsyncStorage.setItem(dataUserKey, JSON.stringify(user));
      signIn();
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
          {/* <Think>“Ola, chamo-me ops”</Think> */}
          <EmojiLying />
          <Message>
            {dataMessage.register.reg01.message}
          </Message>

          <ButtonAction title={dataMessage.register.reg01.btnMessage} disabled={false} onPress={nextPage} />
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
            {dataMessage.register.reg02.message}
          </Message>

          <InputArea>
            <InputInit value={name} typeNumeric={false} titlePlaceholder={dataMessage.register.reg02.inputPlaceholder} changeText={handleTextNameChange} handleStatusFalse={() => handleStatusChangeFalse()} handleStatusTrue={() => handleStatusChangeTrue()} />
          </InputArea>

          <ButtonAction title={dataMessage.register.reg02.btnMessage} disabled={false} onPress={saveName} />
        </Content>

      </>
    )
  }



  function Reg03() {
    return (
      <>
        <BackWithIcon backOnb={prevPage} />
        <Content>
          <Think></Think>
          <EmojiUpside />
          <Message>
            {dataMessage.register.reg03.message}
          </Message>
          <InputArea>
            <InputInit value={age} typeNumeric={true} titlePlaceholder={dataMessage.register.reg03.inputPlaceholder} changeText={handleTextAgeChange} handleStatusFalse={() => handleStatusChangeFalse()} handleStatusTrue={() => handleStatusChangeTrue()} />
          </InputArea>
          <ButtonAction title={dataMessage.register.reg03.btnMessage} disabled={false} onPress={saveAge} />

        </Content>
      </>

    )
  }
  function Reg04() {
    return (
      <>
        <BackWithIcon backOnb={prevPage} />
        <Content>
          <Think></Think>
          <EmojiEyes />
          <Message>
            {dataMessage.register.reg04.message}
            <Think>{name}</Think>
          </Message>

          <ButtonAction title={dataMessage.register.reg04.btnMessage} disabled={false} onPress={handleChangeScreen} />
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