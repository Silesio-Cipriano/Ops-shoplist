import React, { ReactNode } from 'react';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { FlatList, TouchableOpacity } from 'react-native';
import uuid from 'react-native-uuid';

import Emoji from '../../assets/emoji/anguished-face.svg'


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
  Think,
} from './styles';
import { ButtonModalIteration } from '../ButtonModalIteration';
import { useAuth } from '../../hooks/auth';
interface ModalIconsProps {
  visible: boolean;
  available: number;
  listName: string;
  fModalVisible: () => void;
}
export function ModalLimitedSpending({ visible, available, listName, fModalVisible }: ModalIconsProps) {
  const { user } = useAuth();
  const theme = useTheme();
  return (
    <Container statusBarTranslucent transparent visible={visible} animationType={'fade'}  >
      <AreaModal>
        <BodyModal>
          <HeaderModal>
          </HeaderModal>
          <Content>
            <Think>“{user.name.split(' ')[0]}, não compra ...  esta caro demais”</Think>
            <Emoji />
            <Message>
              O valor excede o limite disponivel para a lista {listName}
            </Message>
            <ButtonGroup>
              <ButtonModalIteration name={'Entendido'} onPress={fModalVisible} />
            </ButtonGroup>
            <AlertMessage>So tens disponivel {available} Mtn</AlertMessage>
          </Content>
        </BodyModal>
      </AreaModal>
    </Container >
  );
}