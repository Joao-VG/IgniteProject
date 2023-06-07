
import {VStack,Heading, Icon} from "native-base"
import {useState} from "react"
import React from "react"
import {User,Key} from "phosphor-react-native"

import { Input } from "../Components/Input"
import { Button } from "../Components/Button"
function SignIn() {

    const [state,setState] = useState('')
    const [login,setLogin] = useState('')
    const [password,setPassword]=useState('')

    return (
        <VStack flex={1} alignItems={"center"} bg="gray.900" px={8} pt={24}>

            <Heading color="white" fontSize="3xl">Stralo</Heading>

            <Heading color={"white"} fontSize={"xl"} mt={20} mb={6}> 
                Acesse sua conta {state}
            </Heading>
            <Input 
            placeholder="Login"
            mb={4}
            InputLeftElement={<Icon  as={<User color={"white"} />}  ml={4} /> }
            onChangeText={setLogin}
            />
            <Input 
            mb={10}
            placeholder="Senha" 
            InputLeftElement={<Icon as={<Key color="white"/>} 
            ml={4}/>}
            secureTextEntry
            onChangeText={setPassword}
            />

            <Button title="Sign In" w="full" mb={5} onPress={()=>{console.log(login,password)}}/>
            <Button title="Create account"   w="full" bg="blue.500" _pressed={{bg:"blue.300"}} />

        </VStack>
    )
}

export default SignIn