import React from 'react'
import { Helmet } from 'react-helmet'
import palx from '../../../palx/src'
import { Global } from '@emotion/core'
import { ThemeProvider } from 'theme-ui'
import { Link as GatsbyLink } from 'gatsby'
import {
  Box,
  Grid,
  Flex,
  Label,
  Input,
  Heading,
  Button,
  Text,
  Link,
} from '@theme-ui/components'

const theme = {
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#07c',
    gray: '#aaa',
    modes: {
      dark: {
        text: '#fff',
        background: '#000',
        primary: '#0cf',
        gray: '#555',
      },
    },
  },
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'inherit',
  },
  text: {
    heading: {
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
    }
  },
  buttons: {
    primary: {
      color: 'background',
      bg: 'text',
    }
  },
  forms: {
    input: {
      borderColor: 'gray',
    }
  }
}

export default props => {
  const [color, setColor] = React.useState('#07c')
  const [colo