import 'styled-components'

import theme from './theme'
import darkTheme from './darkTheme'

declare module 'styled-components/native' {
  type ThemeType = typeof theme
  type ThemeType = typeof darkTheme

  export interface DefaultTheme extends ThemeType { }
}
