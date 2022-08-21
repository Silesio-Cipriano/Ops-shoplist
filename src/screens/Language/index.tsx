import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { FlatList } from 'react-native';
import { BackButton } from '../../Components/BackButton';
import { ButtonAction } from '../../Components/ButtonAction';
import { CategoryElement } from '../../Components/CategoryElement';
import { ElementSelect } from '../../Components/ElementSelect';

import {
  Container,
  Content
} from './styles';
interface LanguageProps {
  id: string;
  name: string;
  selected: boolean;
}
export function Language() {
  const dataLanguage: LanguageProps[] = [
    {
      id: "1",
      name: "America",
      selected: false
    },
    {
      id: "2",
      name: "Brazil",
      selected: false
    },
    {
      id: "3",
      name: "Mocambique",
      selected: true
    },
    {
      id: "4",
      name: "Portugal",
      selected: false
    }
  ]

  const navigation = useNavigation<StackNavigationProp<any>>();


  function handleBackScreen() {
    navigation.goBack();
  }

  return (
    <Container>
      <BackButton name='Pais/Lingua' onPress={handleBackScreen} />
      <Content>
        <FlatList<LanguageProps>
          data={dataLanguage}
          showsHorizontalScrollIndicator={false}
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