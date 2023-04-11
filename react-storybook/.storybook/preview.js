import { addDecorator, addParameters } from '@storybook/react'
import Center from '../src/components/Center/Center'
import { ThemeProvider, createTheme, colors } from '@mui/material'
import { orange, yellow } from '@mui/material/colors'
import { withConsole } from "@storybook/addon-console"
import { withKnobs } from "@storybook/addon-knobs"
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport"
import { withA11y } from "@storybook/addon-a11y"




const theme = createTheme({
  palette: {
    success: {
      light: '#757ce8',
      main: '#3db372',
      dark: '#8fbc8f',
      contrastText: '#fff',
    },
    error: {
      light: '#757ce8',
      main: '#e53935',
      dark: '#e57373',
      contrastText: '#fff',
    }
  }
})


addDecorator(story => (
  <ThemeProvider theme={theme}>
    <Center>{story()}</Center>
  </ThemeProvider>
))


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}


addDecorator((storyFn, context) => withConsole()(storyFn)(context))

addDecorator(withKnobs)

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  }
})

addDecorator(withA11y)