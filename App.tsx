
import { NativeBaseProvider } from "native-base"
import SignIn from "./src/screens/SignIn"
import Loading from "./src/Components/Loading"
import { StatusBar } from "react-native"
import React from "react"
import { Home } from "./src/screens/Home"

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={"transparent"}
        translucent
      />
      <Home/>

    </NativeBaseProvider>
  )
}