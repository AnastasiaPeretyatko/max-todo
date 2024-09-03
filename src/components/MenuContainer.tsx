import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import CheckIcon from "./CheckIcon";

import ArrowsMenuIcon from "./ArrowsMenuIcon";
import CreateTaskModal from "./CreateTaskModal";
import { CalendarIcon } from "@chakra-ui/icons";

const MenuContainer = ({ addTask }: { addTask: (title: string) => void }) => {
  return (
    <>
      <VStack justifyContent={"flex-start"} height={"100%"} paddingTop={"5px"}>
        <Button
          leftIcon={<CalendarIcon />}
          justifyContent={"flex-start"}
          gap={"4px"}
          height="40px"
          width="185px"
          paddingY={"8px"}
          paddingX={"16px"}
          bg="none"
          color="MENU_GRAY"
          _hover={{
            bg: "rgba(147, 51, 234, 0.06);",
            color: "PRIMARY_PURPLE",
            leftIcon: 'color="PRIMARY_PURPLE"',
          }}

          //TODO Функция сортировки на сегодня
        >
          Today
        </Button>

        <Menu>
          <MenuButton
            as={Button}
            width="185px"
            textAlign={"left"}
            leftIcon={<CheckIcon boxSize={5} />}
            bg={"none"}
            color={"MENU_GRAY"}
            _hover={{
              bg: "rgba(147, 51, 234, 0.06)",
              color: "PRIMARY_PURPLE",
              leftIcon: 'color="PRIMARY_PURPLE"',
            }}
            _expanded={{
              bg: "rgba(147, 51, 234, 0.06)",
              color: "PRIMARY_PURPLE",
              leftIcon: 'color="PRIMARY_PURPLE"',
            }}
          >
            All
          </MenuButton>
          <MenuList
            padding={"7px"}
            minW={"0"}
            borderRadius="10px"
            border={"none"}
            bg="#d3cafd"
            shadow={"none"}
          >
            <MenuItem
              width={"170px"}
              height={"40px"}
              borderRadius="10px"
              color={"PRIMARY_PURPLE"}
              bg={"none"}
              _hover={{ bg: "rgba(147, 51, 234, 0.06)" }}
              _active={{
                bg: "rgba(147, 51, 234, 0.06)",
              }}
              icon={<CheckIcon boxSize={5} color="PRIMARY_PURPLE" />}
            >
              All
            </MenuItem>
            <MenuItem
              width={"170px"}
              height={"40px"}
              borderRadius="10px"
              color={"PRIMARY_PURPLE"}
              bg={"none"}
              _hover={{ bg: "rgba(147, 51, 234, 0.06)" }}
              _active={{
                bg: "rgba(147, 51, 234, 0.06)",
              }}
              icon={<CheckIcon boxSize={5} color="PRIMARY_PURPLE" />}
            >
              Done
            </MenuItem>
            <MenuItem
              width={"170px"}
              height={"40px"}
              borderRadius="10px"
              color={"PRIMARY_PURPLE"}
              bg={"none"}
              _hover={{ bg: "rgba(147, 51, 234, 0.06)" }}
              _active={{
                bg: "rgba(147, 51, 234, 0.06)",
              }}
              icon={<CheckIcon boxSize={5} color="PRIMARY_PURPLE" />}
            >
              Undone
            </MenuItem>
          </MenuList>
        </Menu>

        <Button
          leftIcon={<ArrowsMenuIcon boxSize={5} />}
          justifyContent={"flex-start"}
          height="40px"
          width="185px"
          paddingY={"8px"}
          paddingX={"16px"}
          bg="none"
          color="MENU_GRAY"
          _hover={{
            bg: "rgba(147, 51, 234, 0.06);",
            color: "PRIMARY_PURPLE",
            leftIcon: 'color="PRIMARY_PURPLE"',
          }}

          //TODO Пофиксить смену иконок
          //TODO Функция сортировки на сегодня
        >
          Date
        </Button>

        <CreateTaskModal addTask={addTask} />
      </VStack>
    </>
  );
};

export default MenuContainer;
