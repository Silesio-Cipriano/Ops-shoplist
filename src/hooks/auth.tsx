import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, ReactNode, useContext, useState } from "react";
import { portugues } from "../utils/Languages/portugues";
import { dataKey } from "../utils/dataKey";
import { english } from "../utils/Languages/english";
import { Alert } from "react-native";

interface AuthProviderProps {
  children: ReactNode;
}

interface RegisterMessage{
  inputPlaceholder?: string;
      message?:string;
      btnMessage?:string;
}

interface OnboardingMessage{
  title:string;
  subtitle?:string;
  message:string;
}
interface Language{
  onboarding:{
    onb01:OnboardingMessage;
    onb02:OnboardingMessage;
    onb03:OnboardingMessage;
    onb04:OnboardingMessage;
    start:string;
    skip:string;
    continue:string;
  },
  register:{
    reg01:RegisterMessage;
    reg02:RegisterMessage;
    reg03:RegisterMessage;
    reg04:RegisterMessage;
  }
}


interface User {
  id: string;
  name: string;
  age: string;
  createdAt:Date;
}
interface IAuthContextProps {
  user: User;
  signIn(): Promise<void>;
  dataMessage: Language;
  changeLanguage:(language:Number)=>void;
  amountMyLocal:(language:Number)=>void;
  defaultLang:()=>void;
}

const AuthContext = createContext({} as IAuthContextProps);

interface LanguageProps {
  id: string;
  name: string;
  selected: boolean;
}

function AuthProvider({ children }: AuthProviderProps) {

  const dataLanguage: LanguageProps[] = [
    {
      id: "1",
      name: "Brazil",
      selected: false
    },
    {
      id: "2",
      name: "Portugal",
      selected: false
    },
    {
      id: "3",
      name: "Mocambique",
      selected: false
    },
  
  ]

  async function defaultLang(){
    console.log("Entrei defaultLang")
    const dataLangKey = dataKey.lang;

    try {
      await AsyncStorage.setItem(dataLangKey, JSON.stringify(dataLanguage));
    } catch (error) {
      console.log(error);
      Alert.alert("Nao foi possivel adicionar categoria");
    }
  }


  const [user, setUser] = useState<User>({} as User);
  const [dataMessage,setDataMessage]=useState<Language>(portugues);
  const [myLang,setMyLang]=useState<Number>(1);

  function changeLanguage(language:Number){
    setMyLang(language);

    switch (language) {
      case 1:
      setDataMessage(portugues);
        break;
      case 2:
      setDataMessage(portugues);
            break;
      case 3:
              setDataMessage(portugues);
                    break;
      default:
        break;
    }
  }
 
  async function signIn() {
    const dataUserKey = dataKey.user;
    try {
      const data = await AsyncStorage.getItem(dataUserKey);
      let getUser: User = data ? JSON.parse(data) : {};
      setUser(getUser);
    } catch (error) {
      console.log("Erro ao pegar usuario")
    }


  }



  function amountMyLocal(myAmount:Number){
    let amountLocal="pt-MZ";
    let amountMoney="MZN";
    if(myLang===1){
      amountLocal="pt-BR";
      amountMoney="BRL";
    }else if(myLang===2){
      amountLocal="pt-PT";
      amountMoney="EUR"; 
    }else{
      amountLocal="pt-MZ";
      amountMoney="MZN";
    }
    return Intl.NumberFormat(amountLocal, { style: 'currency', currency: amountMoney }).format(Number(myAmount))
  }

  return (

    <AuthContext.Provider value={{ user, signIn,dataMessage,changeLanguage,amountMyLocal,defaultLang}}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}


export { AuthProvider, useAuth }