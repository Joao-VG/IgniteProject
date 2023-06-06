import {Center,Spinner} from "native-base"
import React from "react"



export default function Loading () {
    return (
        <Center flex={1} bg={"gray.900"}>
            <Spinner color={"blue.200"} size={"lg"}/>
        </Center>
    )
}