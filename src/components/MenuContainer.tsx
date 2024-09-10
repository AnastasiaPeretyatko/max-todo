import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import CheckIcon from "./CheckIcon";

import ArrowsMenuIcon from "./ArrowsMenuIcon";
import CreateTaskModal from "./CreateTaskModal";
import { CalendarIcon } from "@chakra-ui/icons";

const MenuContainer = ({ addTask }: { addTask: (title: string) => void }) => {

  const [selectedItem, setSelectedItem] = useState<string>('');

  const [isActiveButton1, setIsActiveButton1] = useState(false);
  const [isActiveButton2, setIsActiveButton2] = useState(false);
  const [isActiveButton3, setIsActiveButton3] = useState(false);

  const handleClickButton1 = () => {
    setIsActiveButton1(!isActiveButton1);
  };

  const handleClickButton2 = () => {
    setIsActiveButton2(true);
  };

  const handleClickButton3 = () => {
    setIsActiveButton3(!isActiveButton3);
  };
  
  // const bgColor = isActiveButton1 ? "rgba(147, 51, 234, 0.06)" : 'none';
  // const textColor = isActiveButton1 ? "PRIMARY_PURPLE": 'MENU_GRAY';
  // const iconColor = isActiveButton1 ? 'color="PRIMARY_PURPLE"' : 'MENU_GRAY';

  return (
    <>
      <VStack justifyContent={"flex-start"} height={"100%"} paddingTop={"5px"}>
        <Button
          justifyContent={"flex-start"}
          gap={"4px"}
          height="40px"
          width="185px"
          paddingY={"8px"}
          paddingX={"16px"}
          bg={isActiveButton1 ? "rgba(147, 51, 234, 0.06)" : 'none'}
          color={isActiveButton1 ? "PRIMARY_PURPLE": 'MENU_GRAY'}
          leftIcon={<CalendarIcon color={isActiveButton1 ? "PRIMARY_PURPLE" : "MENU_GRAY"} _hover={{
            color: "PRIMARY_PURPLE",
          }}/>}
          _hover={{
            bg: "rgba(147, 51, 234, 0.06);",
            color: "PRIMARY_PURPLE",
            leftIcon: 'color="PRIMARY_PURPLE"/>',
          }}
          onClick={handleClickButton1}

          //TODO Функция сортировки на сегодня
        >
          Today
        </Button>

        <Menu>
          <MenuButton
            as={Button}
            width="185px"
            textAlign={"left"}
            bg={isActiveButton2 ? "rgba(147, 51, 234, 0.06)" : 'none'}
            color={isActiveButton2 ? "PRIMARY_PURPLE": 'MENU_GRAY'}
            leftIcon={<CheckIcon boxSize={5} color={isActiveButton2 ? "PRIMARY_PURPLE" : "MENU_GRAY"}/>}
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
            onClick={handleClickButton2}

          >
            {selectedItem !== '' ? selectedItem : 'All'}
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
              onClick={() => setSelectedItem('All')}
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
              onClick={() => setSelectedItem('Done')}

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
              onClick={() => setSelectedItem('Undone')}

            >
              Undone
            </MenuItem>
          </MenuList>
        </Menu>

        <Button
          justifyContent={"flex-start"}
          height="40px"
          width="185px"
          paddingY={"8px"}
          paddingX={"16px"}
          bg={isActiveButton3 ? "rgba(147, 51, 234, 0.06)" : 'none'}
          color={isActiveButton3 ? "PRIMARY_PURPLE": 'MENU_GRAY'}
          leftIcon={<ArrowsMenuIcon boxSize={5} color={isActiveButton3 ? "PRIMARY_PURPLE" : "MENU_GRAY"}/>}
          _hover={{
            bg: "rgba(147, 51, 234, 0.06);",
            color: "PRIMARY_PURPLE",
            leftIcon: 'color="PRIMARY_PURPLE"',
          }}
          onClick={handleClickButton3}

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
