import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { Alert, FlatList } from 'react-native';
import uuid from 'react-native-uuid';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  Container,
  Category,
  InputCategory,
  Input,
  BtnAddCategory,
  CategoriesList,
} from './styles';
import { CategoryElement } from '../../Components/CategoryElement';
import { ButtonAction } from '../../Components/ButtonAction';

interface CategoryElementProps {
  id: string;
  title: string;
  selected: boolean;
}

interface CategorySelectedProps {
  id?: string;
  title?: string;
}

export function Categories() {
  const dataKey = '@opslist:categories'

  const navigation = useNavigation<StackNavigationProp<any>>();

  const [data, setData] = useState<CategoryElementProps[]>();
  const [text, setText] = useState("");
  const [categorySelected, setCategorySelected] = useState<CategorySelectedProps>({
    id: "-1",
    title: "Escolher"
  });
  const [disableButton, setDisableButton] = useState(true);

  function handleChangeScreen() {

    navigation.navigate('CreateList', { categorySelected });
  }

  async function handleAddCategory() {
    let newCategory = {
      id: uuid.v4().toString(),
      title: text,
      selected: false,
    }
    if (text != null) {
      try {
        const data = await AsyncStorage.getItem(dataKey);
        const currentData = data ? JSON.parse(data) : [];
        const dataUpdate = [
          ...currentData,
          newCategory
        ]
        await AsyncStorage.setItem(dataKey, JSON.stringify(dataUpdate));
        setData(dataUpdate);
        console.log("Salvo");
      } catch (error) {
        console.log(error);
        Alert.alert("Nao foi possivel adicionar categoria");
      }
      setText("");
    }


  }

  function selectedElement(indexElement: number) {
    let dataTemp = data;

    setDisableButton(false);
    dataTemp.map(function (data, index) {
      if (indexElement === index) {
        data.selected = true
        setCategorySelected({
          id: data.id,
          title: data.title
        })
      } else {
        data.selected = false
      }


      return data;
    })
    setData([...dataTemp]);
  }
  useEffect(() => {
    async function loadData() {
      const data = await AsyncStorage.getItem(dataKey);
      setData(JSON.parse(data!));
      console.log(JSON.parse(data!));
    }
    loadData();

    // async function removeAll() {
    //   await AsyncStorage.removeItem(dataKey);
    // }
    // removeAll();
  }, []);
  return (
    <Container>
      <Category>Categoria</Category>

      <InputCategory>
        <Input
          value={text}
          placeholder={"Nova categoria"}
          onChangeText={setText}
        />

        <BtnAddCategory onPress={handleAddCategory}>
          <Feather name="plus" size={24} />
        </BtnAddCategory>

      </InputCategory>
      <CategoriesList>
        <FlatList<CategoryElementProps>
          style={{ flex: 1 }}
          data={data}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={({ item, index }) =>
            <CategoryElement title={item.title} onPress={() => selectedElement(index)} selected={item.selected} />
          }
        />
      </CategoriesList>

      <ButtonAction disabled={disableButton} title="Continuar" onPress={handleChangeScreen} />
    </Container>
  );
}