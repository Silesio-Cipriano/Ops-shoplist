import React, { ReactNode, useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SwipeListView } from 'react-native-swipe-list-view';
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
import { ListDelete } from '../../Components/ListDelete';
import { Alert, FlatList } from 'react-native';
import { ButtonAction } from '../../Components/ButtonAction';
import { useIsFocused, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { dataKey } from '../../utils/dataKey';
import { NoItem } from '../../Components/NoItem';

interface ListItemsProps {
  id: string;
  title: string;
  quantity: number,
  price: number,
  total: number,
  listId?: string;
  status?: boolean;
}
interface IconProps {
  id?: string;
  Icon?: ReactNode;
}
interface ListProps {
  id: string;
  name: string;
  icon: IconProps;
  category: string;
  spendingLimit?: string;
  cost?: string;
}

type Params = any;

export function ListItems() {
  const dataListKey = dataKey.list;
  const dataCategoriesKey = dataKey.categories;
  const dataItemsKey = dataKey.items;
  const isFocused = useIsFocused();
  const [listItems, setListItems] = useState<ListItemsProps[]>([]);
  const [cost, setCost] = useState(0);

  const navigation = useNavigation<StackNavigationProp<any>>();
  const route = useRoute();
  const { list } = route.params as Params;
  const [listData, setListData] = useState<ListProps>({} as ListProps);
  const icon = formatIcon(50, 50);

  const index = Number(list.icon) - 1;
  const iconOfList = icon[index];

  function handleBackScreen() {
    navigation.goBack();
  }

  function handleCreateItemScreen() {
    navigation.navigate('CreateItem', { list });
  }

  async function buyItem(index: number, id: string) {
    let newList = listItems;
    console.log(newList[index].status)
    const change = newList[index].status;
    newList[index].status = !change;
    setListItems([...newList]);

    let newCost = 0;
    listItems.map(item => {
      if (item.status === true) {
        newCost = newCost + Number(item.total);
      }
      return;
    })


    try {
      let data = await AsyncStorage.getItem(dataItemsKey);
      const currentData: ListItemsProps[] = data ? JSON.parse(data) : [];
      let currData = currentData.filter(data => {
        console.log("Da: ", data.id + "===id: ", id);
        if (data.id === id) {
          data.status = !change;
        }
        return data;
      });

      await AsyncStorage.setItem(dataItemsKey, JSON.stringify(currData));

      setCost(newCost);

      data = await AsyncStorage.getItem(dataItemsKey);
      let newData: ListItemsProps[] = data ? JSON.parse(data) : [];

      let newListItems = newData.filter(item => {
        return item.listId === list.id;
      });
      setListItems(newListItems);
    } catch (error) {
      Alert.alert("Nao foi capaz de criar o item");
    }


  }
  function editItem(item: ListItemsProps) {
    navigation.navigate("EditItem", { item });
  }

  async function deleteItem(id: string) {
    try {
      let data = await AsyncStorage.getItem(dataItemsKey);
      const currentData: ListItemsProps[] = data ? JSON.parse(data) : [];
      let newList = currentData;
      newList = newList.filter(item => {
        if (item.id != id) return true;
        else return false;
      })

      await AsyncStorage.setItem(dataItemsKey, JSON.stringify(newList));

      data = await AsyncStorage.getItem(dataItemsKey);
      let newData: ListItemsProps[] = data ? JSON.parse(data) : [];

      let newListItems = newData.filter(item => {
        return item.listId === list.id;
      });

      setListItems(newListItems);

    } catch (error) {
      Alert.alert("Nao foi capaz de criar o item");
    }

  }

  useEffect(() => {
    async function loadData() {
      const items = await AsyncStorage.getItem(dataItemsKey);

      let listItems: ListItemsProps[] = JSON.parse(items);
      let newListItems = listItems.filter(item => {

        return item.listId === list.id;
      });
      let newCost = 0;
      newListItems.map(item => {
        if (item.status === true) {
          newCost = newCost + Number(item.total);
        }
        return;
      })
      setCost(newCost);
      setListItems(newListItems);
    }

    loadData();
  }, [isFocused])

  return (
    <Container>
      <Header>
        <ButtonBack>
          <Left onPress={handleBackScreen}>
            <Feather name="chevron-left" size={34} color={useTheme().colors.primary} />
            <Name>{list.name}</Name>
          </Left>
          <Icon>
            {iconOfList.Icon}
          </Icon>
        </ButtonBack>

        <Top>
          <Limit>Limite: <Limited>{list.spendingLimit} Mzn</Limited> {cost != 0 && <>| Gasto: <Cost>{cost} Mzn </Cost></>}</Limit>
          <Limit>Itens: <Item>{listItems.length}</Item></Limit>
        </Top>

      </Header>
      <Content>
        {listItems.length ?
          <SwipeListView<ListItemsProps>
            data={listItems}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
            leftOpenValue={50}
            rightOpenValue={-70}
            renderItem={({ item, index }) =>
              <BuyItem id={item.id} title={item.title} price={item.price} quantity={item.quantity} total={item.total} status={item.status} onPress={() => buyItem(index, item.id)} onLongPress={() => { editItem(item) }} />
            }
            disableRightSwipe={true}
            renderHiddenItem={({ item, index }) => <ListDelete onDelete={() => deleteItem(item.id)} />}
          /> :
          <NoItem />
        }

      </Content>
      <Footer>
        <ButtonAction title={"Adicionar Item"} disabled={false} onPress={handleCreateItemScreen} />
      </Footer>
    </Container>
  );
}