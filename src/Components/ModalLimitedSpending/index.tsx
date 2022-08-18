import React, { ReactNode } from 'react';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { FlatList, TouchableOpacity } from 'react-native';
import uuid from 'react-native-uuid';

import PopCornSvg from '../../assets/ItemGroup/Icon_popcorn.svg'
import CreditCardSvg from '../../assets/ItemGroup/Shopingin-Fly-Shopingin-Fly-Credit Machine.svg'
import CoinSvg from '../../assets/ItemGroup/Shopingin-Isometric-Shopingin-Isometric-Coin.svg'
import EggSvg from '../../assets/ItemGroup/Icon_eggs.svg'
import PaperBagSvg from '../../assets/ItemGroup/Shopingin-Isometric-Paperbag.svg'
import BreadSvg from '../../assets/ItemGroup/Icon_bread.svg'

import {
  Container,
  AreaModal,
  HeaderModal,
  TitleModal,
  BodyModal,
  IconsArea,
  IconList,
  Content,
  Message,
  Title,
  AlertMessage,
  ButtonGroup,
} from './styles';
import { ButtonModalIteration } from '../ButtonModalIteration';
interface ModalIconsProps {
  visible: boolean;
  item: string;
  spendingLimit: string;
  list: string;
  fModalVisible: () => void;
}
export function ModalLimitedSpending({ visible, item, spendingLimit, list, fModalVisible }: ModalIconsProps) {

  const theme = useTheme();
  return (
    <Container statusBarTranslucent transparent visible={visible} animationType={'fade'}  >
      <AreaModal>
        <BodyModal>
          <HeaderModal>
          </HeaderModal>
          <Content>
            <Title>{item}</Title>
            <Message>
              Você não pode comprar, excede o valor maximo <AlertMessage>disponível</AlertMessage> de {spendingLimit} Mzn para a lista
              <Title> {list}</Title>
            </Message>
            <ButtonGroup>
              <ButtonModalIteration name={'Continuar'} onPress={fModalVisible} />
            </ButtonGroup>
          </Content>
        </BodyModal>
      </AreaModal>
    </Container >
  );
}