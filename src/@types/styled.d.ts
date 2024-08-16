import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme

// AAqui estamos sobrescrevendo aa tipagem do TypeScript

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
