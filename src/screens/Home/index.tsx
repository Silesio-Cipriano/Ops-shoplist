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
  NoItemArea,
} from './styles';
interface CategoryItemProps {
  id: string;
  title: string;
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
}

interface ListProps {
  id: string;
  name: string;
  icon: string;
  category: string;
}

export function Home() {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const dataListKey = '@opslist:Lists'
  const dataCategoriesKey = '@opslist:categories'




  function handleChangeScreen() {
    const categorySelected = {
      id: "-1",
      title: "Escolher"
    };
    navigation.navigate('CreateList', { categorySelected });
  }


  const [dataList, setListData] = useState<ListHomeProps[]>({} as ListHomeProps[]);
  const [categories, setCategories] = useState<CategoryItemProps[]>({} as CategoryItemProps[]);

  const isFocused = useIsFocused();

  useEffect(() => {
    async function loadData() {
      const data = await AsyncStorage.getItem(dataListKey);
      const categories = await AsyncStorage.getItem(dataCategoriesKey);
      let categoriesF: CategoryItemProps[] = JSON.parse(categories)
      let dataF: ListProps[] = JSON.parse(data!);
      let dataFormatted: ListHomeProps[] = [];

      dataF.map((data) => {
        iconData.map((icon) => {
          console.log("Data: " + data.icon + "===" + icon.id);
          if (data?.icon === icon?.id) {
            const newIcon = icon;
            const newData: ListHomeProps = {
              id: data.id,
              name: data.name,
              icon: newIcon,
              category: data.category
            }
            dataFormatted.push(newData);
          }
        })
      });
      setListData(dataFormatted);

      console.log(dataFormatted);
      setCategories(JSON.parse(categories!));
    }
    loadData();

    // async function removeAll() {
    //   await AsyncStorage.removeItem(dataListKey);
    // }
    // removeAll();
  }, [isFocused]);

  function handleList(listId: string) {
    navigation.navigate("ListItems", { listId })
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
            renderItem={({ item }) =>
              <CategoryItem title={item.title} />
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
                  < ItemGroup id={item.id} title={item.name} icon={item.icon.Icon} onPress={() => handleList(item.id)} />
                }
              />
            </ListItems>
          </> :
          <NoItemArea>
            <NoItemSvg width={140} />
            <Message>Sem item</Message>
          </NoItemArea>
        }

        <ButtonAction title="Adicionar lista" disabled={false} onPress={handleChangeScreen} />

      </Content>

    </Container>
  );
}