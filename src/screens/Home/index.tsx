import React, { ReactNode, useEffect, useState } from 'react';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';

import { Alert, FlatList } from 'react-native';
import FilterSvg from '../../assets/home/Filter.svg'
import NoItemSvg from '../../assets/NoItem.svg'
import { ButtonAction } from '../../Components/ButtonAction';
import { CategoryItem } from '../../Components/CategoryItem';
import { ItemGroup } from '../../Components/ItemGroup';

import { iconData } from '../../utils/iconData';

import {
  Container,
  Header,
  NameUser,
  Greeting,
  Hello,
  Content,
  Message,
  SettingButton,
  Top,
  Bottom,
  TitleDay,
  SubTitleDay,
  ListCategory,
  ListItems,
  Body,
  BottomArea,
} from './styles';
import { dataKey } from '../../utils/dataKey';
import { NoItem } from '../../Components/NoItem';
import { SwipeListView } from 'react-native-swipe-list-view';
import { ListDelete } from '../../Components/ListDelete';
interface CategoryItemProps {
  id: string;
  title: string;
  status?: boolean | false;
}
interface IconProps {
  id?: string;
  Icon?: ReactNode;
}
interface ListHomeProps {
  id: string;
  name: string;
  icon: IconProps;
  category: string;
  spendingLimit?: string;
}

interface ListProps {
  id: string;
  name: string;
  icon: string;
  category: string;
  spendingLimit?: string;
}

export function Home() {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const dataListKey = dataKey.list;
  const dataCategoriesKey = dataKey.categories;
  const dataItemsKey = dataKey.items;
  const [categorySelected, setCategorySelected] = useState(false);

  const [dataList, setDataList] = useState<ListHomeProps[]>({} as ListHomeProps[]);
  const [saveData, setSaveData] = useState<ListHomeProps[]>({} as ListHomeProps[]);
  const [categories, setCategories] = useState<CategoryItemProps[]>({} as CategoryItemProps[]);
  const isFocused = useIsFocused();

  const [categoryShow, setCategoryShow] = useState("");

  const [changeAny, setChangeAny] = useState(false);

  async function loadData() {
    const data = await AsyncStorage.getItem(dataListKey);
    const categories = await AsyncStorage.getItem(dataCategoriesKey);
    let dataF: ListProps[] = data ? JSON.parse(data) : [];

    dataF.map((data) => {
      iconData.map((icon) => {
        if (data?.icon === icon?.id) {
          const newIcon = icon;
          const newData: ListHomeProps = {
            id: data.id,
            name: data.name,
            icon: newIcon,
            category: data.category,
            spendingLimit: data.spendingLimit,
          }
          dataFormatted.push(newData);
        }
      })
    });
    setSaveData(dataFormatted);
    setDataList(dataFormatted);
    let newCategory: CategoryItemProps[] = categories ? JSON.parse(categories) : [];;
    newCategory = newCategory.filter(data => {
      data.status = false;
      let val: boolean;
      for (let i = 0; i < dataFormatted.length; i++) {
        if (data.id === dataFormatted[i].category) {
          val = true;
          return true;
        }
      }
      if (val === true)
        return true;
      else return false;
    })
    if (newCategory.length != 0)
      setCategories(newCategory);

    // setCategories(JSON.parse(categories!));
  }

  async function deleteList(id: string) {
    try {

      const data = await AsyncStorage.getItem(dataListKey);
      const categories = await AsyncStorage.getItem(dataCategoriesKey);
      let newList: ListHomeProps[] = data ? JSON.parse(data) : [];
      newList = newList.filter(item => {
        if (item.id != id) return true;
        else return false;
      })
      console.log("Lista: " + newList);
      await AsyncStorage.setItem(dataListKey, JSON.stringify(newList));
    } catch (error) {
      Alert.alert("Erro ao deletar lista")
    }
    loadData();
    // let oldDataList: ListHomeProps[] = data ? JSON.parse(data) : [];
    // let oldCategories: CategoryItemProps[] = categories ? JSON.parse(categories) : [];
    // oldCategories = oldCategories.filter(data => {
    //   let val: boolean;
    //   for (let i = 0; i < oldDataList.length; i++) {
    //     if (data.id === oldDataList[i].category) {
    //       val = true;
    //       return true;
    //     }
    //   }
    //   if (val === true)
    //     return true;
    //   else return false;
    // })
    // console.log("Valores: ", oldCategories)
    // setCategories([...oldCategories]);
  }


  function handleChangeScreen() {
    const categorySelected = {
      id: "-1",
      title: "Escolher"
    };
    navigation.navigate('CreateList', { categorySelected });
  }


  function filterList(category: string, indexElement: number) {
    let dataTemp = categories;
    dataTemp.map(function (data, index) {
      if (indexElement === index) {
        if (data.status === true) {
          setDataList([...saveData]);
          data.status = !data.status

        } else {
          let listFiltred = saveData;
          listFiltred = listFiltred.filter(data => {
            return data.category === category;
          });
          setDataList(listFiltred);
          data.status = !data.status
        }
        // setCategoryShow(category)

      } else {
        data.status = false
      }
      return data;
    })

    setCategories([...dataTemp]);





  }


  let dataFormatted: ListHomeProps[] = [];

  useEffect(() => {

    loadData();

    // async function removeAll() {
    //   await AsyncStorage.removeItem(dataListKey);
    //   await AsyncStorage.removeItem(dataItemsKey);
    //   await AsyncStorage.removeItem(dataCategoriesKey);
    // }
    // removeAll();
  }, [isFocused]);

  function handleList(listHome: ListHomeProps) {
    const list = {
      id: listHome.id,
      name: listHome.name,
      spendingLimit: listHome.spendingLimit,
      icon: listHome.icon.id,
    }
    navigation.navigate("ListItems", { list })
  }




  return (
    <Container>
      <Header>
        <Top>
          <Greeting>
            <Hello>
              Olá,
            </Hello>
            <NameUser>
              Silesio
            </NameUser>
          </Greeting>
          <SettingButton>
            <FilterSvg width={42} height={42} />
          </SettingButton>
        </Top>
        {/* <Bottom>
          <TitleDay>
            Dia de compras
          </TitleDay>
          <SubTitleDay>
            Voce quer fazer compras para ?
          </SubTitleDay>
        </Bottom> */}
      </Header>
      <Body>
        {categories.length &&
          <ListCategory>
            <FlatList<CategoryItemProps>
              data={categories}
              horizontal
              contentContainerStyle={{
                paddingHorizontal: 12
              }}
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item.id}
              renderItem={({ item, index }) =>
                <CategoryItem title={item.title} status={item.status} onPress={() => filterList(item.id, index)} />
              }
            />
          </ListCategory>
        }
        <Content>
          {dataList.length ?
            <>
              <ListItems>
                <SwipeListView<ListHomeProps>
                  data={dataList}
                  showsHorizontalScrollIndicator={false}
                  showsVerticalScrollIndicator={false}
                  leftOpenValue={50}
                  rightOpenValue={-70}
                  keyExtractor={item => item.id}
                  // numColumns={2}
                  // columnWrapperStyle={{ justifyContent: 'space-between' }}
                  renderItem={({ item }) =>
                    < ItemGroup id={item.id} title={item.name} icon={item.icon.Icon} onPress={() => handleList(item)} />
                  }

                  disableRightSwipe={true}
                  renderHiddenItem={({ item, index }) => <ListDelete mode={false} onDelete={() => deleteList(item.id)} />}
                />
              </ListItems>
            </> :
            <NoItem />
          }
        </Content>
      </Body>
      <BottomArea>
        <ButtonAction title="Nova lista" disabled={false} onPress={handleChangeScreen} />
      </BottomArea>
    </Container>


  );
}