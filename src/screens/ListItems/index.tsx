import React, { useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  Container,
  Header,
  ButtonBack,
  Name,
  Left,
  Icon,
  Top,
  Limit,
  Limited,
  Cost,
  Item,
  Content,
  Footer
} from './styles';
import { iconData, formatIcon } from '../../utils/iconData';
import { useTheme } from 'styled-components';
import { BuyItem } from '../../Components/BuyItem';
import { FlatList } from 'react-native';
import { ButtonAction } from '../../Components/ButtonAction';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

interface ListItemsProps {
  id: string;
  title: string;
  quantity: number,
  price: number,
  total: number,
  listId?: string;
}

interface ListProps {
  id: string;
  name: string;
  icon: string;
  category: string;
}

type Params = any;

export function ListItems() {
  const dataListKey = '@opslist:Lists'
  const dataCategoriesKey = '@opslist:categories'
  const dataListItemsKey = '@opslist:listItems'

  const navigation = useNavigation<StackNavigationProp<any>>();
  const route = useRoute();
  const { listId } = route.params as Params;
  const icon = formatIcon(50, 50);

  const [data, setData] = useState<ListItemsProps[]>([
    {
      id: "1",
      title: "Pipoca",
      quantity: 10,
      price: 12,
      total: 120,
    },
    {
      id: "2",
      title: "Arroz",
      quantity: 10,
      price: 12,
      total: 120,
    },
    {
      id: "3",
      title: "Cenoura",
      quantity: 10,
      price: 12,
      total: 120,
    },
    {
      id: "4",
      title: "Cenoura",
      quantity: 10,
      price: 12,
      total: 120,
    },

  ]);
  const [listItem, setListItems] = useState<ListItemsProps[]>([]);

  useEffect(() => {
    async function loadData() {
      const items = await AsyncStorage.getItem(dataListItemsKey);
      let listItems: ListItemsProps[] = JSON.parse(items);
      listItems.filter(item => item.listId === listId);

      setListItems(listItems);
    }

    loadData();
  }, [])

  return (
    <Container>
      <Header>
        <ButtonBack>
          <Left>
            <Feather name="chevron-left" size={34} color={useTheme().colors.primary} />
            <Name>Lanche de domingo</Name>
          </Left>
          <Icon>
            {icon[0].Icon}
          </Icon>
        </ButtonBack>

        <Top>
          <Limit>Limite: <Limited>2000Mzn</Limited> | Gasto: <Cost>1000 Mzn </Cost></Limit>
          <Limit>Itens: <Item>8</Item></Limit>
        </Top>

      </Header>
      <Content>
        <FlatList<ListItemsProps>
          data={data}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={({ item, index }) =>
            <BuyItem id={item.id} title={item.title} price={item.price} quantity={item.quantity} total={item.total} />
          }
        />

      </Content>
      <Footer>
        <ButtonAction title={"Adicionar Item"} disabled={false} onPress={() => { }} />
      </Footer>
    </Container>
  );
}