import React, { ReactNode } from 'react';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { Alert, FlatList, TouchableOpacity } from 'react-native';
import uuid from 'react-native-uuid';

import {
  Container,
  AreaModal,
  HeaderModal,
  TitleModal,
  BodyModal,
  IconsArea,
  IconList,
  Content,
  InputGroup,
  StatusArea,
  Status,
  StatusButton,
  TitleButton,
  SelectedBtn,
  Circle,
} from './styles';
import { Input } from '../Input';
import { InputNumber } from '../InputNumber';
import { dataKey } from '../../utils/dataKey';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ButtonAction } from '../ButtonAction';

interface Item {
  name: string;
  quantity: string,
  price: string,
}

interface ModalIconsProps {
  visible: boolean;
  titleModal: string;
  titleButton: string;
  fModalVisible: () => void;
  name: string;
  price: string;
  quantity: string;
  selected: boolean;
  handleName: (text: string) => void;
  handlePrice: (text: string) => void;
  handleQuantity: (text: string) => void;
  handleSelected: () => void;
  addItem: () => void;
}

export function ModalNewItem({ titleModal, titleButton, visible, fModalVisible, name, price, quantity, selected, handleName, handlePrice, handleQuantity, handleSelected, addItem }: ModalIconsProps) {
  const dataItemsKey = dataKey.items;

  const theme = useTheme();
  return (
    <Container statusBarTranslucent transparent visible={visible} animationType={'fade'}  >
      <AreaModal>
        <BodyModal>
          <HeaderModal>
            <TitleModal>{titleModal}</TitleModal>
            <TouchableOpacity onPress={fModalVisible}>
              <Feather name="x" size={26} color={theme.colors.secondary} />
            </TouchableOpacity>
          </HeaderModal>
          <Content>
            <Input typeNumeric={false} name={name} titlePlaceholder='Nome' handleTextChange={handleName} />
            <InputGroup>
              <InputNumber name={price} titlePlaceholder={"Preço"} handleTextChange={handlePrice} />
              <InputNumber name={quantity} titlePlaceholder={"Quantidade"} handleTextChange={handleQuantity} />
            </InputGroup>
            <StatusArea>
              <Status>Categoria</Status>
              <StatusButton onPress={() => handleSelected()}>
                <TitleButton>Comprado</TitleButton>
                <SelectedBtn>
                  <Circle selected={selected} />
                  {/* <Rectangle /> */}
                </SelectedBtn>
              </StatusButton>
            </StatusArea>
          </Content>
          <ButtonAction title={titleButton} disabled={false} onPress={() => addItem()} />
        </BodyModal>
      </AreaModal>
    </Container >
  );
}