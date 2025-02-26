import { vars, useColorScheme } from 'nativewind'
import { useEffect } from 'react'
import { Appearance, View } from 'react-native'

const themes: any = {
    'light': vars({
      '--color-primary': 'red',
      '--color-secondary': 'white'
    }),
    'dark': vars({
      '--color-primary': 'blue',
      '--color-secondary': 'dark'
    })
}

export function Theme(props) {
  const { colorScheme, setColorScheme } = useColorScheme()

  return (
    <View style={themes[colorScheme]}>
      {props.children}
    </View>
  )
}