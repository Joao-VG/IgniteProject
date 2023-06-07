import React from "react";
import { VStack, Text, Button, IButtonProps } from "native-base";

type Props = IButtonProps & {
  tittle: String;
  isActive?: Boolean;
  type: "open" | "close";
};

export function Filter({ tittle, isActive = false, type, ...rest }: Props) {
  const colorType = type === "open" ? "green.100" : "blue.300 ";

  return (
    <Button
      variant={"outline"}
      borderWidth={isActive ? 2 : 0}
      borderColor={colorType}
      flex={1}
      size={"sm"}
      {...rest}
    >
      <Text color={isActive ? colorType : "gray:300"} fontSize={"xs"} textTransform={"upperCase"}>
        {tittle}
      </Text>
    </Button>
  );
}
