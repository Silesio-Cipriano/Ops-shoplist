import React, { ReactNode, useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SwipeListView } from 'react-native-swipe-list-view';
import uuid from 'react-native-uuid';

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
  Footer,
  IconBack
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
import { ModalNewItem } from '../../Components/ModalNewItem';
import { ModalLimitedSpending } from '../../Components/ModalLimitedSpending';

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
interface ListProps {
  id: string;
  name: string;
  icon: IconProps;
  category: string;
  spendingLimit?: string;
  cost?: string;
}
interface Item {
  name: string;
  quantity: string,
  price: string,
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



  function handleEditList(list: ListProps) {
    navigation.navigate('EditList', { list });
  }
  async function buyItem(index: number, id: string, status: boolean, itemTotal: string) {
    let newCost = 0;
    listItems.map(item => {
      if (item.status === true || item.id === id) {
        newCost = newCost + Number(item.total);
      }
      return;
    })
    if (Number(list.spendingLimit) < newCost && status === false) {
      handleLimitedCost();
      newCost = 0;
      return;
    } else {
      let newList = listItems;
      const change = newList[index].status;
      if (change == true)
        newCost = newCost - Number(itemTotal);

      newList[index].status = !change;
      setListItems([...newList]);
      try {
        let data = await AsyncStorage.getItem(dataItemsKey);
        const currentData: ListItemsProps[] = data ? JSON.parse(data) : [];
        let currData = currentData.filter(data => {
          if (data.id === id) {
            data.status = !change;
          }
          return data;
        });

        await AsyncStorage.setItem(dataItemsKey, JSON.stringify(currData));

        setCost(newCost);
        list.cost = newCost.toString();
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
      let newCost = 0;
      newListItems.map(item => {
        if (item.status === true) {
          newCost = newCost + Number(item.total);
        }
        return;
      })

      setCost(newCost);
      list.cost = Number(newCost);
      setListItems(newListItems);

    } catch (error) {
      Alert.alert("Nao foi capaz de criar o item");
    }

  }
  const [statusButton, setButtonStatus] = useState(false);


  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [selectedItem, setSelectedItem] = useState(false);
  const [modalNewItemStatus, setModalNewItemStatus] = useState(false);
  const [modalEditItemStatus, setModalEditItemStatus] = useState(false);
  const [modalLimitedCostStatus, setModalLimitedCostStatus] = useState(false);
  function handleLimitedCost() {
    setModalLimitedCostStatus(!modalLimitedCostStatus);
  }
  function clearItemStatus() {
    setName("");
    setPrice("");
    setQuantity("");
    setSelectedItem(false);
  }
  function handleNameText(text: string) {
    setName(text);
    actionButton();
  }

  function actionButton() {
    if (name !== "" && price !== "" && quantity !== "") {
      setButtonStatus(false);
    } else {
      setButtonStatus(true);
    }
  }

  function handleModalNewItemVisible() {
    setModalNewItemStatus(!modalNewItemStatus)
  }
  const [idItem, setIdItem] = useState("");
  function handleModalEditItemVisible(item?: ListItemsProps) {
    if (item) {
      setIdItem(item.id);
      setName(item.name);
      setPrice(item.price);
      setQuantity(item.quantity);
      setSelectedItem(item.status);
    }
    setModalEditItemStatus(!modalEditItemStatus)
  }

  function handleSelectedItem() {
    setSelectedItem(!selectedItem);
  }

  function handlePriceText(text: string) {
    text = text.replace(/[^0-9]/g, '');
    setPrice(text);
    actionButton();
  }
  async function handleEditItem() {
    const total = Number(price) * Number(quantity);
    const costTotal = (Number(cost) + total);
    if (Number(list.spendingLimit) < costTotal && selectedItem) {
      handleLimitedCost();
    } else {
      const newItem: ListItemsProps = {
        id: idItem,
        name: name,
        price: price,
        quantity: quantity,
        total: total.toString(),
        listId: list.id,
        status: selectedItem
      };


      try {
        const data = await AsyncStorage.getItem(dataItemsKey);
        const currentData: ListItemsProps[] = data ? JSON.parse(data) : [];
        let newListItem = currentData.filter(item => {
          if (item.id === newItem.id) {
            item.name = newItem.name;
            item.price = newItem.price;
            item.quantity = newItem.quantity;
            item.total = newItem.total;
            item.status = newItem.status;
          }
          return item;
        })
        await AsyncStorage.setItem(dataItemsKey, JSON.stringify(newListItem));
        handleModalEditItemVisible();
        loadData();
      } catch (error) {
        Alert.alert("Nao foi capaz de criar o item");
      }
    }
  }
  async function handleAddItemList() {
    const total = Number(price) * Number(quantity);
    const costTotal = (Number(cost) + total);
    if (Number(list.spendingLimit) < costTotal && selectedItem) {
      handleLimitedCost();
    } else {
      const newItem: ListItemsProps = {
        id: uuid.v4().toString(),
        name: name,
        price: price,
        quantity: quantity,
        total: total.toString(),
        listId: list.id,
        status: selectedItem
      };

      try {
        const data = await AsyncStorage.getItem(dataItemsKey);
        const currentData = data ? JSON.parse(data) : [];
        const dataUpdate = [
          ...currentData,
          newItem
        ]
        await AsyncStorage.setItem(dataItemsKey, JSON.stringify(dataUpdate));
        handleModalNewItemVisible();
      } catch (error) {
        Alert.alert("Nao foi capaz de criar o item");
      }
      loadData();
    }

  }

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
    list.cost = newCost.toString();
    setListItems(newListItems);
    clearItemStatus();
  }


  function handleQuantityText(text: string) {
    text = text.replace(/[^0-9]/g, '');
    setQuantity(text);
    actionButton();
  }

  useEffect(() => {

    loadData();
  }, [isFocused])

  return (
    <Container>
      <Header>
        <ButtonBack>
          <Left onPress={handleBackScreen}>
            <IconBack>
              <Feather name="chevron-left" size={34} color={useTheme().colors.secondary} />
            </IconBack>
            <Name>{list.name}</Name>
          </Left>
          <Icon onPress={() => handleEditList(list)}>
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
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id}
            leftOpenValue={50}
            rightOpenValue={-70}
            renderItem={({ item, index }) =>
              <BuyItem id={item.id} name={item.name} price={Number(item.price)} quantity={Number(item.quantity)} total={Number(item.total)} status={item.status} onPress={() => buyItem(index, item.id, item.status, item.total)} onLongPress={() => handleModalEditItemVisible(item)} />
            }
            disableRightSwipe={true}
            renderHiddenItem={({ item, index }) => <ListDelete mode={true} onDelete={() => deleteItem(item.id)} />}
          /> :
          <NoItem />
        }
        <ModalNewItem
          titleModal='Novo Item'
          titleButton="Criar"
          addItem={handleAddItemList}
          name={name}
          price={price}
          quantity={quantity}
          selected={selectedItem}
          handleSelected={handleSelectedItem}
          visible={modalNewItemStatus}
          fModalVisible={handleModalNewItemVisible}
          handleName={handleNameText}
          handlePrice={handlePriceText}
          handleQuantity={handleQuantityText} />

        <ModalNewItem
          titleModal='Editar Item'
          titleButton="Salvar"
          addItem={handleEditItem}
          name={name}
          price={price}
          quantity={quantity}
          selected={selectedItem}
          handleSelected={handleSelectedItem}
          visible={modalEditItemStatus}
          fModalVisible={handleModalEditItemVisible}
          handleName={handleNameText}
          handlePrice={handlePriceText}
          handleQuantity={handleQuantityText} />
        <ModalLimitedSpending visible={modalLimitedCostStatus} listName={list.name} available={Number(list.spendingLimit) - Number(cost)} fModalVisible={handleLimitedCost} />
      </Content>
      <Footer>
        <ButtonAction title={"Adicionar Item"} disabled={false} onPress={handleModalNewItemVisible} />
      </Footer>
    </Container>
  );
}