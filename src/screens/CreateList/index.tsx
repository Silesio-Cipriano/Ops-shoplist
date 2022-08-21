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
  items: number;
}

type Params = any;

export function CreateList() {
  const dataListKey = dataKey.list;
  const data = iconData;
  const [visibleModal, setVisibleModal] = useState(false);
  const [iconSelected, setIconSelected] = useState<IconProps>(data[0]);

  const theme = useTheme();
  const [buttonStatus, setButtonStatus] = useState(true);
  const [indexStatus, setIndexStatus] = useState(0);


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



  function handleChangeIconCategory(index?: number) {
    setIndexStatus(index);
    setIconSelected(data[index]);
    handleModalVisible();
  }

  function handleModalVisible() {
    setVisibleModal(!visibleModal);
  }

  const [name, setName] = useState("");
  const [spendingLimit, setSpendingLimit] = useState("");

  async function handleAddList() {
    if (categoryListSelected.id === "-1") {
      Alert.alert("Adicionar categoria");
    } else {

      const newList: ListProps = {
        id: uuid.v4().toString(),
        name: name,
        spendingLimit: Number(spendingLimit),
        icon: iconSelected.id,
        category: categoryListSelected.id,
        items: 0
      }

      try {
        const data = await AsyncStorage.getItem(dataListKey);
        const currentData = data ? JSON.parse(data) : [];
        const dataUpdate = [
          ...currentData,
          newList
        ]
        await AsyncStorage.setItem(dataListKey, JSON.stringify(dataUpdate));
      } catch (error) {
        console.log(error);
        Alert.alert("Nao foi possivel adicionar categoria");
      }

      navigation.navigate("Home");
    }

  }

  function handleBackScreen() {
    navigation.goBack();
  }


  function handleTextChange(text: string) {
    setName(text);
    activeButton();
  }
  function handleTextCostChange(text: string) {
    text = text.replace(/[^0-9]/g, '');
    setSpendingLimit(text);
    activeButton();
  }

  function activeButton() {
    if (name !== "" && spendingLimit !== "") {
      setButtonStatus(false);
    } else {
      setButtonStatus(true);
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
          <Input typeNumeric={false} name={name} titlePlaceholder='Nome' handleTextChange={handleTextChange} />
          <Input typeNumeric={true} name={spendingLimit} titlePlaceholder='Limite de gasto' handleTextChange={handleTextCostChange} />
        </InputArea>
        <CategoryArea>
          <CategoryTitle>Categoria</CategoryTitle>
          <CategoryButton onPress={handleChangeScreen}>
            <TitleButton>{categoryListSelected.title}</TitleButton>
            <Feather name="chevron-right" size={34} color={theme.colors.text.primary} />
          </CategoryButton>
        </CategoryArea>
        <ModalIcons fModalVisible={handleModalVisible} visible={visibleModal} fChangeIcon={handleChangeIconCategory} />
      </Content>
      <ButtonAction title="Criar lista" disabled={buttonStatus} onPress={() => { handleAddList() }} />
    </Container>
  );
}