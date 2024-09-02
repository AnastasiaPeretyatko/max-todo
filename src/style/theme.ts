// theme.ts (Version 2 needs to be a tsx file, due to usage of StyleFunctions)
import { background, extendTheme } from '@chakra-ui/react'
import { color } from 'framer-motion'

// Version 1: Using objects
const theme = extendTheme({
  styles: {
    global: {
      // styles for the body
      body: {
        width: '100vw',
        height: '100vh',
        background: 'none',
        bgGradient:'linear(to-tl, #b9d5ff  0%, #f6d1fc 100%)',
      },
    },
  },
  colors: {
    PRIMARY_PURPLE: '#9333ea',
    MENU_GRAY: '#6b7280',
    TASK_CONTAINER: '#f4f4f4',
  }
})

export default theme