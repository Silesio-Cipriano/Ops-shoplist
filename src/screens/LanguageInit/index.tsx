import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { Alert, FlatList } from 'react-native';
import { BackButton } from '../../Components/BackButton';
import { BackWithIcon } from '../../Components/BackWithIcon';
import { ButtonAction } from '../../Components/ButtonAction';
import { CategoryElement } from '../../Components/CategoryElement';
import { ElementSelect } from '../../Components/ElementSelect';
import { useAuth } from '../../hooks/auth';
import { dataKey } from '../../utils/dataKey';

import {
  Container,
  Content
} from './styles';

interface LanguageProps {
  id: string;
  name: string;
  selected: boolean;
}
export function LanguageInit() {
  const dataLangKey=dataKey.lang;
  const {changeLanguage,defaultLang}=useAuth();
  defaultLang();
  const navigation = useNavigation<StackNavigationProp<any>>();
  const [dataLang,setDataLang]=useState<LanguageProps[]>([]);
  const [idLang,setIdLang]=useState("")
  function handleBackScreen() {
    navigation.goBack();
  }

  function handleChangeLang(id: string){
    let dataLanguage: LanguageProps[]=dataLang;
    dataLanguage.map(lang=>{
      if(lang.id===id){
        lang.selected=true;
        setIdLang(lang.id);
      }else{
        lang.selected=false;
      }
    })
  
    setDataLang([...dataLanguage])
  }

 async function handleSaveLang(){
  if(idLang){

    changeLanguage(Number(idLang));
    
    try {
      await AsyncStorage.setItem(dataLangKey, JSON.stringify(dataLang));
      
    } catch (error) {
      console.log(error);
      Alert.alert("Nao foi possivel adicionar categoria");
    }

    navigation.navigate("Register");
    
  }else{
    Alert.alert("Escolha o seu pais")
  }
  }
  async function loadData(){
    const lang = await AsyncStorage.getItem(dataLangKey);
    let dataLang: LanguageProps[] = lang ? JSON.parse(lang) : [];
    dataLang.map(l=>{
      if(l.selected===true)
        setIdLang(l.id)
    })
    setDataLang([...dataLang]);
  }

  useEffect(()=>{
  
    loadData();
  },[])

  return (
    <Container>
      <BackWithIcon backOnb={handleBackScreen} />
      <Content>
        <FlatList<LanguageProps>
          data={dataLang}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={({ item, index }) =>
            <ElementSelect title={item.name} onPress={() =>handleChangeLang(item.id)} selected={item.selected} />
          }
        />
        <ButtonAction title="Salvar" disabled={false} onPress={handleSaveLang} />
      </Content>
    </Container>
  );
}