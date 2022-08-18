import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, ReactNode, useContext, useState } from "react";
import { dataKey } from "../utils/dataKey";

interface AuthProviderProps {
  children: ReactNode;
}

interface User {
  id: string;
  name: string;
  idade: string;
}
interface IAuthContextProps {
  user: User;
  signIn(): Promise<void>;
}

const AuthContext = createContext({} as IAuthContextProps);


function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>({} as User);
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

    <AuthContext.Provider value={{ user, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth }