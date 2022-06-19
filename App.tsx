import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components/native'
import theme from './src/global/styles/theme'
import { Onboarding } from './src/screens/Onboarding'

import {
  useFonts,
  Jost_400Regular,
  Jost_500Medium,
  Jost_600SemiBold,
  Jost_700Bold
} from '@expo-google-fonts/jost';

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
      <Onboarding />
    </ThemeProvider>
  )
}