import React, { ReactNode, useEffect, useState } from 'react';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';

import { FlatList } from 'react-native';
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
} from './styles';
import { dataKey } from '../../utils/dataKey';
import { NoItem } from '../../Components/NoItem';
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


  function handleChangeScreen() {
    const categorySelected = {
      id: "-1",
      title: "Escolher"
    };
    navigation.navigate('CreateList', { categorySelected });
  }

  function filterList(category: string, index: number) {
    let listFiltred: ListHomeProps[] = [];
    if (category === categoryShow) {
      let newCategories = categories;
      newCategories[index].status = false;
      setCategories(newCategories)
      listFiltred = saveData;
    } else {
      listFiltred = saveData.filter(data => {
        let newCategories = categories;
        if (data.category === category) {
          newCategories = categories.map(data => {
            if (data.id === category) {
              data.status = !data.status;

            } else {
              data.status = false;
            }
            return data;
          })
        }
        setCategories(newCategories);
        return data.category === category;
      });
    }
    setCategoryShow(category)
    setDataList(listFiltred);
  }

  let dataFormatted: ListHomeProps[] = [];

  useEffect(() => {
    async function loadData() {
      const data = await AsyncStorage.getItem(dataListKey);
      const categories = await AsyncStorage.getItem(dataCategoriesKey);
      let categoriesF: CategoryItemProps[] = JSON.parse(categories)
      let dataF: ListProps[] = JSON.parse(data!);

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
      let newCategory: CategoryItemProps[] = JSON.parse(categories);
      newCategory = newCategory.filter(data => {
        data.status = false;
        return data;
      })
      setCategories(JSON.parse(categories!));
    }
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
        <Bottom>
          <TitleDay>
            Dia de compras
          </TitleDay>
          <SubTitleDay>
            Voce quer fazer compras para ?
          </SubTitleDay>
        </Bottom>
      </Header>
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
              <FlatList<ListHomeProps>
                data={dataList}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item.id}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                renderItem={({ item }) =>
                  < ItemGroup id={item.id} title={item.name} icon={item.icon.Icon} onPress={() => handleList(item)} />
                }
              />
            </ListItems>
          </> :
          <NoItem />
        }

        <ButtonAction title="Adicionar lista" disabled={false} onPress={handleChangeScreen} />

      </Content>

    </Container>
  );
}