import React, { ReactNode, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import uuid from 'react-native-uuid';

import { useNavigation, useRoute } from '@react-navigation/native';

import { BackButton } from '../../Components/BackButton';
import { StackNavigationProp } from '@react-navigation/stack';


import PopCornSvg from '../../assets/ItemGroup/Icon_popcorn.svg'
import CreditCardSvg from '../../assets/ItemGroup/Shopingin-Fly-Shopingin-Fly-Credit Machine.svg'
import CoinSvg from '../../assets/ItemGroup/Shopingin-Isometric-Shopingin-Isometric-Coin.svg'
import EggSvg from '../../assets/ItemGroup/Icon_eggs.svg'
import PaperBagSvg from '../../assets/ItemGroup/Shopingin-Isometric-Paperbag.svg'
import BreadSvg from '../../assets/ItemGroup/Icon_bread.svg'

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
}

type Params = any;

export function CreateList() {
  const dataKey = '@opslist:Lists'


  const navigation = useNavigation<StackNavigationProp<any>>();

  const route = useRoute();
  const { categorySelected } = route.params as Params;

  function handleChangeScreen() {
    navigation.navigate('Categories', { categorySelected });
  }


  function handleChangeBackScreen() {
    navigation.goBack();
  }

  const [categoryListSelected, setCategoryListSelected] = useState({
    id: "-1",
    title: "Escolher"
  });

  if (categoryListSelected.id !== categorySelected?.id) {
    setCategoryListSelected(categorySelected);
  }


  const data = [{
    id: uuid.v4().toString(),
    Icon: <PopCornSvg width={66} />
  }, {
    id: uuid.v4().toString(),
    Icon: <CreditCardSvg width={66} />
  }, {
    id: uuid.v4().toString(),
    Icon: <CoinSvg width={66} />
  }, {
    id: uuid.v4().toString(),
    Icon: <EggSvg width={66} />
  }, {
    id: uuid.v4().toString(),
    Icon: <PaperBagSvg width={66} />
  }, {
    id: uuid.v4().toString(),
    Icon: <BreadSvg width={66} />
  }
  ]
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
      const data = await AsyncStorage.getItem(dataKey);
      const currentData = data ? JSON.parse(data) : [];
      const dataUpdate = [
        ...currentData,
        newList
      ]
      await AsyncStorage.setItem(dataKey, JSON.stringify(dataUpdate));
      console.log("Salvo");
    } catch (error) {
      console.log(error);
      Alert.alert("Nao foi possivel adicionar categoria");
    }

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
        <BackButton name="Nova Lista" />
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