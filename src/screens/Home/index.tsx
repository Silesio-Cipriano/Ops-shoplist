import React, { ReactNode, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { FlatList } from 'react-native';
import FilterSvg from '../../assets/home/Filter.svg'
import NoItemSvg from '../../assets/NoItem.svg'
import { ButtonAction } from '../../Components/ButtonAction';
import { CategoryItem } from '../../Components/CategoryItem';
import { ItemGroup } from '../../Components/ItemGroup';
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


  const [data, setData] = useState<ListHomeProps[]>({} as ListHomeProps[]);
  const [categories, setCategories] = useState<CategoryItemProps[]>({} as CategoryItemProps[]);


  useEffect(() => {
    async function loadData() {
      const data = await AsyncStorage.getItem(dataListKey);
      const categories = await AsyncStorage.getItem(dataCategoriesKey);
      setData(JSON.parse(data!));
      setCategories(JSON.parse(categories!));
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

      <Content>
        {/* <NoItemSvg />
        <Message>Sem item</Message> */}
        <ListItems>

          <FlatList<ListHomeProps>
            data={data}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            renderItem={({ item }) =>
              < ItemGroup id={item.id} title={item.name} />
            }
          />
        </ListItems>
        <ButtonAction title="Adicionar lista" disabled={false} onPress={handleChangeScreen} />

      </Content>

    </Container>
  );
}