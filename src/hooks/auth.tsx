import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, ReactNode, useContext, useState } from "react";
import { portugues } from "../utils/Languages/portugues";
import { dataKey } from "../utils/dataKey";
import { english } from "../utils/Languages/english";

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
}

const AuthContext = createContext({} as IAuthContextProps);



function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>({} as User);
  const [dataMessage,setDataMessage]=useState<Language>(portugues);
  

  function changeLanguage(language:Number){
    switch (language) {
      case 1:
      setDataMessage(portugues);
        break;
      case 2:
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
  return (

    <AuthContext.Provider value={{ user, signIn,dataMessage,changeLanguage}}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}


export { AuthProvider, useAuth }