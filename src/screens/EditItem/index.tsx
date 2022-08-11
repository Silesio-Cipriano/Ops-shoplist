import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { BackButton } from '../../Components/BackButton';
import { ButtonAction } from '../../Components/ButtonAction';
import { Input } from '../../Components/Input';
import { InputNumber } from '../../Components/InputNumber';
import uuid from 'react-native-uuid';

import {
  Container,
  Content,
  InputGroup,
  StatusArea,
  Status,
  StatusButton,
  TitleButton,
  SelectedBtn,
  Circle,
  Rectangle,
} from './styles';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackNavigationProp } from '@react-navigation/stack';
import { dataKey } from '../../utils/dataKey';

type Params = any;

interface ListItemsProps {
  id: string;
  title: string;
  quantity: string,
  price: string,
  total: string,
  listId?: string;
  status: boolean;
}



export function EditItem() {
  const dataItemsKey = dataKey.items;

  const navigation = useNavigation<StackNavigationProp<any>>();


  const route = useRoute();
  const { item } = route.params as Params;
  const listId = item.listId;
  const [name, setName] = useState(item.name);
  const [price, setPrice] = useState(item.price);
  const [quantity, setQuantity] = useState(item.quantity);


  function handleBackScreen() {
    navigation.goBack();
  }

  function handleNameText(text: string) {
    setName(text);
    if (text) {
      handleStatusChangeFalse();
    } else {
      handleStatusChangeTrue();
    }
  }

  function handlePriceText(text: string) {
    text = text.replace(/[^0-9]/g, '');
    setPrice(text);
    if (text) {
      handleStatusChangeFalse();
    } else {
      handleStatusChangeTrue();
    }
  }

  function handleQuantityText(text: string) {
    text = text.replace(/[^0-9]/g, '');
    setQuantity(text);
    if (text) {
      handleStatusChangeFalse();
    } else {
      handleStatusChangeTrue();
    }
  }

  const [buttonStatus, setButtonStatus] = useState(true);
  const [selected, setSelected] = useState(true);

  function handleStatusChangeFalse() {
    setButtonStatus(false);
  }

  function handleStatusChangeTrue() {
    setButtonStatus(true);
  }

  function handleSelected() {
    setSelected(!selected);
  }
  async function handleEditItemList() {
    const total = Number(price) * Number(quantity);

    const newItem: ListItemsProps = {
      id: uuid.v4().toString(),
      title: name,
      price: price,
      quantity: quantity,
      total: total.toString(),
      listId: listId,
      status: selected
    };

    console.log(newItem);

    // try {
    //   const data = await AsyncStorage.getItem(dataItemsKey);
    //   const currentData = data ? JSON.parse(data) : [];
    //   const dataUpdate = [
    //     ...currentData,
    //     newItem
    //   ]
    //   console.log(dataUpdate);
    //   await AsyncStorage.setItem(dataItemsKey, JSON.stringify(dataUpdate));
    //   navigation.goBack();
    // } catch (error) {
    //   Alert.alert("Nao foi capaz de criar o item");
    // }

  }

  return (
    <Container>
      <BackButton name="Editar" onPress={() => handleBackScreen()} />
      <Content>
        <Input name={name} titlePlaceholder='Nome' handleTextChange={handleNameText} />
        <InputGroup>
          <InputNumber name={price} titlePlaceholder={"Preço"} handleTextChange={handlePriceText} />
          <InputNumber name={quantity} titlePlaceholder={"Quantidade"} handleTextChange={handleQuantityText} />
        </InputGroup>
        <StatusArea>
          <Status>Categoria</Status>
          <StatusButton onPress={handleSelected}>
            <TitleButton>Comprado</TitleButton>
            <SelectedBtn>
              <Circle selected={selected} />
              {/* <Rectangle /> */}
            </SelectedBtn>
          </StatusButton>
        </StatusArea>
      </Content>
      <ButtonAction title={"Salvar"} disabled={buttonStatus} onPress={handleEditItemList} />
    </Container>
  );
}