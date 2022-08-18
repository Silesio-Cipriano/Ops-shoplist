import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components/native'
import theme from './src/global/styles/theme'
import { Onboarding } from './src/screens/Onboarding'
import 'react-native-gesture-handler';
import {
  useFonts,
  Nunito_400Regular,
  Nunito_500Medium,
  Nunito_600SemiBold,
  Nunito_700Bold
} from '@expo-google-fonts/nunito';
import { InsertName } from './src/screens/Register/InsertName';
import { InsertAge } from './src/screens/Register/InsertAge';
import { Home } from './src/screens/Home';
import { CreateList } from './src/screens/CreateList';
import { Categories } from './src/screens/Categories';
import { Routes } from './src/routes';
import { AuthProvider } from './src/hooks/auth';
import { ListItems } from './src/screens/ListItems';
import { CreateItem } from './src/screens/CreateItem';

export default function App() {
  const [fontsLoader] = useFonts({
    Nunito_400Regular,
    Nunito_500Medium,
    Nunito_600SemiBold,
    Nunito_700Bold
  })
  if (!fontsLoader) {
    return <></>
  }
  return (
    <ThemeProvider theme={theme}>
      <StatusBar backgroundColor={'transparent'} barStyle="dark-content" translucent />

      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  )
}