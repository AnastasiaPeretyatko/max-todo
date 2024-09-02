import { Avatar, Heading, HStack, Text } from "@chakra-ui/react";
import React from "react";

const Header = () => {
  return (
    <HStack
      bg="white"
      borderRadius="10px"
      paddingY={"12px"}
      paddingX={"16px"}
      color={"#9333ea"}
      justifyContent={'space-between'}
      width={'100%'}
    >
      <Heading size="lg">To-Do</Heading>
      <Text>UserName</Text>
      <Avatar size="md" name="Kent Dodds" src="#" />
    </HStack>
  );
};

export default Header;
