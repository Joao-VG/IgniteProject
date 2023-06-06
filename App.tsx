
import { NativeBaseProvider } from "native-base"
import SignIn from "./src/screens/SignIn"
import Loading from "./src/Components/Loading"
import { StatusBar } from "react-native"
import React from "react"

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={"transparent"}
        translucent
      />
      <SignIn/>

    </NativeBaseProvider>
  )
}