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

export function EditList() {
  const dataListKey = dataKey.list;


  const navigation = useNavigation<StackNavigationProp<any>>();

  const route = useRoute();
  const { list } = route.params as Params;
  const oldList: ListProps = list;
  const [spendingLimit, setSpendingLimit] = useState(Number(oldList.spendingLimit) + "");
  const [name, setName] = useState(oldList.name);
  const data = iconData;
  const [visibleModal, setVisibleModal] = useState(false);
  const [iconSelected, setIconSelected] = useState<IconProps>(data[Number(oldList.icon) - 1]);

  const [categoryListSelected, setCategoryListSelected] = useState({
    id: "-1",
    title: "Escolher"
  });




  const theme = useTheme();
  const [buttonStatus, setButtonStatus] = useState(true);
  const [indexStatus, setIndexStatus] = useState(0);

  function handleChangeScreen() {
    navigation.navigate('Categories', { categoryListSelected });
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


  async function handleUpdateItem() {
    const newList: ListProps = {
      id: uuid.v4().toString(),
      name: name,
      spendingLimit: Number(spendingLimit),
      icon: iconSelected.id,
      category: "",
      items: 0,
    }

    try {
      const data = await AsyncStorage.getItem(dataListKey);
      let currentData: ListProps[] = data ? JSON.parse(data) : [];
      currentData = currentData.filter(item => {
        if (item.id === oldList.id) {
          item.spendingLimit = Number(spendingLimit);
          item.name = name;
          item.icon = newList.icon;
          newList.category = item.category;
          newList.id = item.id;
        }
        return item;
      })
      list.name = newList.name;
      list.spendingLimit = newList.spendingLimit;
      list.category = newList.category;
      list.icon = newList.icon;
      await AsyncStorage.setItem(dataListKey, JSON.stringify(currentData));
      navigation.goBack();
    } catch (error) {
      console.log(error);
      Alert.alert("Nao foi possivel adicionar categoria");
    }
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



  function handleChangeIconCategory(index?: number) {
    setIndexStatus(index);
    setIconSelected(data[index]);
    handleModalVisible();
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
        {/* <CategoryArea>
          <CategoryTitle>Categoria</CategoryTitle>
          <CategoryButton onPress={handleChangeScreen}>
            <TitleButton>{categoryListSelected.title}</TitleButton>
            <Feather name="chevron-right" size={34} color={theme.colors.text.primary} />
          </CategoryButton>
        </CategoryArea> */}
        <ModalIcons fModalVisible={handleModalVisible} visible={visibleModal} fChangeIcon={handleChangeIconCategory} />
      </Content>
      <ButtonAction title="Editar lista" disabled={false} onPress={() => { handleUpdateItem() }} />
    </Container>
  );
}