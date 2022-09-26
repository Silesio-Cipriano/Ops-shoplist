import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { Alert, FlatList, View } from 'react-native';
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
  CenterContent,
} from './styles';
import { CategoryElement } from '../../Components/CategoryElement';
import { ButtonAction } from '../../Components/ButtonAction';
import { dataKey } from '../../utils/dataKey';
import { SwipeListView } from 'react-native-swipe-list-view';
import { CategoryDelete } from '../../Components/CategoryDelete';
import { BackButton } from '../../Components/BackButton';
import { ModalDelete } from '../../Components/ModalDelete';

interface CategoryElementProps {
  id: string;
  title: string;
  selected: boolean;
}

interface CategorySelectedProps {
  id?: string;
  title?: string;
}

interface ListProps {
  id: string;
  name: string;
  icon: string;
  category: string;
  spendingLimit?: string;
}

export function Categories() {
  const dataCategoriesKey = dataKey.categories;

  const navigation = useNavigation<StackNavigationProp<any>>();
  const [modalVisible, setModalVisible] = useState(false);

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


  function handleModalVisible() {
    setModalVisible(!modalVisible);
  }

  function handleChangeScreen() {
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
  const dataListKey = dataKey.list;
  async function deleteCategory(id: string) {
    let dataTemp = data;
    dataTemp = dataTemp.filter(data => {
      return data.id !== id;
    })
    setData([...dataTemp]);
    try {
      const dataList = await AsyncStorage.getItem(dataListKey);
      let newDataList: ListProps[] = dataList ? JSON.parse(dataList) : [];
      
      newDataList = newDataList.filter(data => {
        if(data.category !== id){
        }else{
          data.category="";
        }

        return data.category !== id
      })
      await AsyncStorage.setItem(dataListKey, JSON.stringify(newDataList));

      await AsyncStorage.setItem(dataCategoriesKey, JSON.stringify(dataTemp));
    } catch (error) {
      Alert.alert("Nao foi possivel deletar")
    }

    setModalVisible(false);
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

  const [itemState,setItemState]=useState("");
  return (
    <Container>
      <BackButton name="Categorias" onPress={() => backScreen()} />
      <CenterContent>
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
          renderHiddenItem={({ item, index},rowKey) => 
          <>
          {/* <ModalDelete visible={modalVisible} idCategory={item.id} onDelete={()=>deleteCategory(item.id)} fModalVisible={handleModalVisible} /> */}
          {/* <ModalDelete visible={modalVisible} idCategory={item.id} onDelete={()=>{
            const newData=[...data];
             const index = data.findIndex(review => review.id === item.id);
             console.log("Index: ",index);
             newData.splice(index, 1);
            setData([...newData]);
            deleteCategory("")}} fModalVisible={handleModalVisible} /> */}
          <CategoryDelete onDelete={()=>deleteCategory(item.id)} />
          </>
          }
          renderItem={({ item, index }) =>
            <CategoryElement title={item.title} onPress={() => selectedElement(index)} selected={item.selected} />
          }
          leftOpenValue={50}
          rightOpenValue={-70}
          disableRightSwipe={true}

        />
      </CategoriesList>
      </CenterContent>
      <ButtonAction disabled={disableButton} title="Continuar" onPress={handleChangeScreen} />
    </Container >
  );
}