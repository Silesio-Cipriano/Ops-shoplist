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
  NoItemArea,
} from './styles';
import { dataKey } from '../../utils/dataKey';
import { NoItem } from '../../Components/NoItem';
import { SwipeListView } from 'react-native-swipe-list-view';
import { ListDelete } from '../../Components/ListDelete';
import { useAuth } from '../../hooks/auth';
import { useTheme } from 'styled-components';
interface CategoryItemProps {
  id: string;
  title: string;
  status?: boolean | false;
}
interface ListItemsProps {
  id: string;
  name: string;
  quantity: string,
  price: string,
  total: string,
  listId?: string;
  status: boolean;
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
  const { user } = useAuth();
  const navigation = useNavigation<StackNavigationProp<any>>();
  const dataListKey = dataKey.list;
  const dataUserKey = dataKey.user;
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
    const dataItems = await AsyncStorage.getItem(dataItemsKey);
    const cat = await AsyncStorage.getItem(dataCategoriesKey);
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
    let newCategory: CategoryItemProps[] = cat ? JSON.parse(cat) : [];;
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
    else {

      setCategories(newCategory);

    }
  }

  function handleEditList(element: ListHomeProps) {
    const list: ListProps = {
      id: element.id,
      name: element.name,
      category: element.category,
      icon: element.icon.id,
      spendingLimit: element.spendingLimit
    }
    navigation.navigate('EditList', { list });
  }


  async function deleteList(id: string) {
    try {

      const data = await AsyncStorage.getItem(dataListKey);
      const dataItems = await AsyncStorage.getItem(dataItemsKey);
      let newDataItems: ListItemsProps[] = dataItems ? JSON.parse(dataItems) : []
      const categories = await AsyncStorage.getItem(dataCategoriesKey);

      newDataItems = newDataItems.filter(data => {
        return data.listId != id;
      })
      let newList: ListHomeProps[] = data ? JSON.parse(data) : [];
      newList = newList.filter(item => {
        if (item.id != id) return true;
        else return false;
      })
      await AsyncStorage.setItem(dataListKey, JSON.stringify(newList));
      await AsyncStorage.setItem(dataItemsKey, JSON.stringify(newDataItems));
    } catch (error) {
      Alert.alert("Erro ao deletar lista")
    }
    loadData();

  }


  function handleChangeScreen() {
    const categorySelected = {
      id: "-1",
      title: "Escolher"
    };
    navigation.navigate('CreateList', { categorySelected });
  }

  function handleSettingsScreen() {
    navigation.navigate('Settings');
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
    try {
      loadData();
    } catch (error) {
      console.log(error);
    }
    // async function removeAll() {
    //   await AsyncStorage.removeItem(dataUserKey);
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


  const theme = useTheme();
  return (
    <Container>
      <Header>
        <Top>
          <Greeting>
            <Hello>
              Olá,
            </Hello>
            <NameUser>
              {user.name.split(' ')[0]}
            </NameUser>
          </Greeting>
          <SettingButton onPress={handleSettingsScreen}>
            <FilterSvg width={38} height={38} />
          </SettingButton>
        </Top>

      </Header>
      <Body>
        {typeof categories?.length === "undefined" ?
          <></> : <ListCategory>
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
                  renderItem={({ item }) =>
                    < ItemGroup id={item.id} name={item.name} spendingLimit={item.spendingLimit} icon={item.icon.Icon} onPress={() => handleList(item)} onLongPress={() => handleEditList(item)} />
                  }

                  disableRightSwipe={true}
                  renderHiddenItem={({ item, index }) => <ListDelete mode={false} onDelete={() => deleteList(item.id)} />}
                />
              </ListItems>
            </> :
            <NoItemArea>
              <NoItem />
            </NoItemArea>
          }
        </Content>
      </Body>
      <BottomArea>
        <ButtonAction title="Nova lista" disabled={false} onPress={handleChangeScreen} />
      </BottomArea>
    </Container>


  );
}