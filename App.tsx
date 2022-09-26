import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components/native'
import theme from './src/global/styles/theme'
import darkTheme from './src/global/styles/darkTheme'
import { Onboarding } from './src/screens/Onboarding'
import 'react-native-gesture-handler';
import "intl";
import "intl/locale-data/jsonp/pt-MZ";
import "intl/locale-data/jsonp/pt-BR";
import "intl/locale-data/jsonp/pt-PT";
import "intl/locale-data/jsonp/en-US";
import {
  useFonts,
  Nunito_400Regular,
  Nunito_500Medium,
  Nunito_600SemiBold,
  Nunito_700Bold
} from '@expo-google-fonts/nunito';
import { Home } from './src/screens/Home';
import { CreateList } from './src/screens/CreateList';
import { Categories } from './src/screens/Categories';
import { Routes } from './src/routes';
import { AuthProvider } from './src/hooks/auth';
import { ListItems } from './src/screens/ListItems';

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