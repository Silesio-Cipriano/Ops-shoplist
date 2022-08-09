import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components/native'
import theme from './src/global/styles/theme'
import { Onboarding } from './src/screens/Onboarding'
import 'react-native-gesture-handler';
import {
  useFonts,
  Jost_400Regular,
  Jost_500Medium,
  Jost_600SemiBold,
  Jost_700Bold
} from '@expo-google-fonts/jost';
import { InsertName } from './src/screens/Register/InsertName';
import { InsertAge } from './src/screens/Register/InsertAge';
import { Home } from './src/screens/Home';
import { CreateList } from './src/screens/CreateList';
import { Categories } from './src/screens/Categories';
import { Routes } from './src/routes';
import { ListItems } from './src/screens/ListItems';
import { CreateItem } from './src/screens/CreateItem';

export default function App() {
  const [fontsLoader] = useFonts({
    Jost_400Regular,
    Jost_500Medium,
    Jost_600SemiBold,
    Jost_700Bold
  })
  if (!fontsLoader) {
    return <></>
  }
  return (
    <ThemeProvider theme={theme}>
      <StatusBar backgroundColor={'transparent'} barStyle="light-content" translucent />
      <Routes />
    </ThemeProvider>
  )
}