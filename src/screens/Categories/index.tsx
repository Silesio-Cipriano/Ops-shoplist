import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { Alert, FlatList } from 'react-native';
import uuid from 'react-native-uuid';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  Container,
  InputCategory,
  Input,
  BtnAddCategory,
  CategoriesList,
} from './styles';
import { CategoryElement } from '../../Components/CategoryElement';
import { ButtonAction } from '../../Components/ButtonAction';
import { dataKey } from '../../utils/dataKey';
import { SwipeListView } from 'react-native-swipe-list-view';
import { CategoryDelete } from '../../Components/CategoryDelete';
import { BackButton } from '../../Components/BackButton';

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
  const dataCategoriesKey = dataKey.categories;

  const navigation = useNavigation<StackNavigationProp<any>>();

  const [data, setData] = useState<CategoryElementProps[]>();
  const [text, setText] = useState("");
  const category = {
    id: "-1",
    title: "Escolher"
  };
  const [categorySelected, setCategorySelected] = useState<CategorySelectedProps>(
    category
  );
  const [disableButton, setDisableButton] = useState(true);

  function handleChangeScreen() {
    console.log(categorySelected);
    navigation.navigate('CreateList', { categorySelected });
  }

  function backScreen() {
    setCategorySelected(
      category
    )
    handleChangeScreen();
  }

  async function handleAddCategory() {

    let newCategory = {
      id: uuid.v4().toString(),
      title: text,
      selected: false,
    }

    if (text.length > 3) {
      try {
        const data = await AsyncStorage.getItem(dataCategoriesKey);
        const currentData = data ? JSON.parse(data) : [];
        const dataUpdate = [
          newCategory,
          ...currentData
        ]
        await AsyncStorage.setItem(dataCategoriesKey, JSON.stringify(dataUpdate));
        setData(dataUpdate);
      } catch (error) {
        console.log(error);
        Alert.alert("Nao foi possivel adicionar categoria");
      }
      setText("");
    }


  }
  async function deleteCategory(id: string) {
    let dataTemp = data;
    dataTemp = dataTemp.filter(data => {
      return data.id !== id;
    })
    setData([...dataTemp]);
    try {
      await AsyncStorage.setItem(dataCategoriesKey, JSON.stringify(dataTemp));
    } catch (error) {
      Alert.alert("Nao foi possivel deletar")
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
      const data = await AsyncStorage.getItem(dataCategoriesKey);
      setData(JSON.parse(data!));
    }
    loadData();

    // async function removeAll() {
    //   await AsyncStorage.removeItem(dataCategoriesKey);
    // }
    // removeAll();
  }, []);
  return (
    <Container>
      <BackButton name="Categorias" onPress={() => backScreen()} />

      <InputCategory>
        <Input
          value={text}
          placeholder={"Nova categoria"}
          onChangeText={setText}
        />


      </InputCategory>

      <BtnAddCategory onPress={handleAddCategory}>
        <Feather name="plus" size={24} />
      </BtnAddCategory>

      <CategoriesList>
        <SwipeListView<CategoryElementProps>
          style={{ flex: 1 }}
          data={data}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={({ item, index }) =>
            <CategoryElement title={item.title} onPress={() => selectedElement(index)} selected={item.selected} />
          }
          leftOpenValue={50}
          rightOpenValue={-70}
          disableRightSwipe={true}
          renderHiddenItem={({ item, index }) => <CategoryDelete onDelete={() => deleteCategory(item.id)} />}
        />
      </CategoriesList>

      <ButtonAction disabled={disableButton} title="Continuar" onPress={handleChangeScreen} />
    </Container >
  );
}