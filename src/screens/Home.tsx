import React from "react";
import { HStack, Heading, IconButton, VStack, Text } from "native-base";
import { SignOut } from "phosphor-react-native";
import { Filter } from "../Components/Filter";

export function Home() {
  return (
    <VStack flex={1} pb={2} bgColor={"gray.700"}>
      <HStack
        w="full"
        justifyContent="space-between"
        alignItems="center"
        bg="blueGray.600"
        pt={8}
        pb={1}
        px={5}
      >
        <Heading color={"white"}>Stralo</Heading>
        <IconButton icon={<SignOut color="white" size={26} />}></IconButton>
      </HStack>

      <VStack flex={1} px={6}>
        <HStack
          w={"full"}
          mb={8}
          mt={4}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Heading>Chamados</Heading>
          <Text color={"gray.200"}>3</Text>
        </HStack>

        <HStack>
            <Filter tittle="Drivers" type="open"/>
            <Filter tittle="Vehicles" type="close"/>
        </HStack>
      </VStack>


    </VStack>
  );
}
