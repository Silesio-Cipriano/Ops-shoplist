import React, { ReactNode, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import uuid from 'react-native-uuid';

import { useNavigation, useRoute } from '@react-navigation/native';

import { BackButton } from '../../Components/BackButton';
import { StackNavigationProp } from '@react-navigation/stack';

import {
  Container,
  Content,
  IconArea,
  CategoryArea,
  CategoryTitle,
  CategoryButton,
  InputArea,
  TitleButton,
} from './styles';
import { Input } from '../../Components/Input';
import { ButtonAction } from '../../Components/ButtonAction';
import { ModalIcons } from '../../Components/ModalIcons';
import { SvgProps } from 'react-native-svg';
import { Alert } from 'react-native';
import { iconData } from '../../utils/iconData';
import { dataKey } from '../../utils/dataKey';
interface IconProps {
  id?: string;
  Icon?: ReactNode;
}

interface CategorySelectedProps {
  id?: string;
  title?: string;
}

interface ListProps {
  id: string;
  name: string;
  spendingLimit: number;
  icon: string;
  category: string;
  cost?: string;
}

type Params = any;

export function CreateList() {
  const dataListKey = dataKey.list;


  const navigation = useNavigation<StackNavigationProp<any>>();

  const route = useRoute();
  const { categorySelected } = route.params as Params;

  function handleChangeScreen() {
    navigation.navigate('Categories', { categorySelected });
  }



  const [categoryListSelected, setCategoryListSelected] = useState({
    id: "-1",
    title: "Escolher"
  });

  if (categoryListSelected.id !== categorySelected?.id) {
    setCategoryListSelected(categorySelected);
  }


  const data = iconData;
  const [visibleModal, setVisibleModal] = useState(false);
  const [iconSelected, setIconSelected] = useState<IconProps>(data[0]);

  const theme = useTheme();
  const [buttonStatus, setButtonStatus] = useState(true);
  const [indexStatus, setIndexStatus] = useState(0);

  function handleChangeIconCategory(index?: number) {
    setIndexStatus(index);
    setIconSelected(data[index]);
    handleModalVisible();
  }

  function handleModalVisible() {
    setVisibleModal(!visibleModal);
  }
  function handleStatusChangeFalse() {
    setButtonStatus(false);
  }
  function handleStatusChangeTrue() {
    setButtonStatus(true);
  }
  const [name, setName] = useState("");
  const [spendingLimit, setSpendingLimit] = useState("");

  async function handleAddList() {
    const newList: ListProps = {
      id: uuid.v4().toString(),
      name: name,
      spendingLimit: Number(spendingLimit),
      icon: iconSelected.id,
      category: categoryListSelected.id
    }

    try {
      const data = await AsyncStorage.getItem(dataListKey);
      const currentData = data ? JSON.parse(data) : [];
      const dataUpdate = [
        ...currentData,
        newList
      ]
      await AsyncStorage.setItem(dataListKey, JSON.stringify(dataUpdate));
      console.log("Salvo");
    } catch (error) {
      console.log(error);
      Alert.alert("Nao foi possivel adicionar categoria");
    }

    navigation.navigate("Home");
  }

  function handleBackScreen() {
    navigation.goBack();
  }


  function handleTextChange(text: string) {
    setName(text);
    if (text) {
      handleStatusChangeFalse();
    } else {
      handleStatusChangeTrue();
    }
  }
  function handleTextCostChange(text: string) {
    setSpendingLimit(text);
    if (text) {
      handleStatusChangeFalse();
    } else {
      handleStatusChangeTrue();
    }
  }





  return (
    <Container>
      <Content>
        <BackButton name="Nova Lista" onPress={() => handleBackScreen()} />
        <IconArea onPress={handleModalVisible}>
          {iconSelected.Icon}
        </IconArea>
        <InputArea>
          <Input name={name} titlePlaceholder='Nome' handleTextChange={handleTextChange} />
          <Input name={spendingLimit} titlePlaceholder='Limite de gasto' handleTextChange={handleTextCostChange} />
        </InputArea>
        <CategoryArea>
          <CategoryTitle>Categoria</CategoryTitle>
          <CategoryButton onPress={handleChangeScreen}>
            <TitleButton>{categoryListSelected.title}</TitleButton>
            <Feather name="chevron-right" size={34} color={theme.colors.inative} />
          </CategoryButton>
        </CategoryArea>
        <ModalIcons fModalVisible={handleModalVisible} visible={visibleModal} fChangeIcon={handleChangeIconCategory} />
      </Content>
      <ButtonAction title="Criar lista" disabled={buttonStatus} onPress={() => { handleAddList() }} />
    </Container>
  );
}