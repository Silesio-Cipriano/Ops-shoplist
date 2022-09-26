import React, { ReactNode, useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { FlatList, TouchableOpacity } from 'react-native';
import uuid from 'react-native-uuid';

import Emoji from '../../assets/emoji/face-with-monocle.svg'


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
import { ButtonModal } from '../ButtonModal';
import { useIsFocused } from '@react-navigation/native';
interface ModalIconsProps {
  visible: boolean;
  fModalVisible: () => void;
  onDelete: (id:string) => void;
  idCategory:string;
}
export function ModalDelete({ visible, fModalVisible, onDelete,idCategory}: ModalIconsProps) {
  const theme = useTheme();
  function deleteNow(){
    onDelete(idCategory);
  }
  useEffect(()=>{},[useIsFocused])
  return (
    <Container statusBarTranslucent transparent visible={visible} animationType={'fade'}  >
      <AreaModal>
        <BodyModal>
          <Content>
            <Emoji />
            <Message>
              Ao apagar uma categoria, voce apaga todas as listas criadas com ela
            </Message>

          </Content>
          <ButtonGroup>
            <ButtonModal typeDelete={false} name={'Cancelar'} onPress={fModalVisible} />
            <ButtonModal typeDelete={true} name={'Deletar'} onPress={deleteNow} />
          </ButtonGroup>
        </BodyModal>
      </AreaModal>
    </Container >
  );
}