import React from 'react'
import Home from './src/screens/Home'
import { ThemeProvider } from './src/context/ThemeContext'
import { StatusBar } from 'react-native'

const App = () => {
 
  return (
    <ThemeProvider>
      <StatusBar barStyle={"dark-content"}/>
      <Home/>
    </ThemeProvider>
  )
}

export default App

