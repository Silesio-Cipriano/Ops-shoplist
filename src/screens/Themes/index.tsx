import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { BackButton } from '../../Components/BackButton';
import { ButtonAction } from '../../Components/ButtonAction';
import { CategoryElement } from '../../Components/CategoryElement';
import { ElementSelect } from '../../Components/ElementSelect';

import {
  Container,
  Content,
} from './styles';
interface ThemesProps {
  id: string;
  name: string;
  selected: boolean;
}
export function Themes() {
  const dataTheme: ThemesProps[] = [
    {
      id: "1",
      name: "Claro",
      selected: true
    },
    {
      id: "2",
      name: "Escuro/Dracula",
      selected: false
    }
  ]
  const navigation = useNavigation<StackNavigationProp<any>>();

  function handleBackScreen() {
    navigation.goBack();
  }


  return (
    <Container>
      <BackButton name='Temas' onPress={handleBackScreen} />
      <Content>
        <FlatList<ThemesProps>
          data={dataTheme}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={({ item, index }) =>
            <ElementSelect title={item.name} onPress={() => { }} selected={item.selected} />
          }
        />
        <ButtonAction title="Salvar" disabled={false} onPress={() => { }} />
      </Content>
    </Container>
  );
}