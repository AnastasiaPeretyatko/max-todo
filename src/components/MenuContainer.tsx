import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import CheckPurpleIcon from "./CheckPurpleIcon";
import CheckGrayIcon from "./CheckGrayIcon";
import ArrowsMenuIcon from "./ArrowsMenuIcon";
import CreateTaskModal from "./CreateTaskModal";

const MenuContainer = ({addTask}: {addTask: (title: string) => void}) => {
  return (
    <>
      <VStack justifyContent={'flex-start'} height={'100%'} paddingTop={'5px'}>
        <Button
          leftIcon={
            <svg
              width="18"
              height="20"
              viewBox="0 0 18 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 14.5C5.3 14.5 4.70833 14.2583 4.225 13.775C3.74167 13.2917 3.5 12.7 3.5 12C3.5 11.3 3.74167 10.7083 4.225 10.225C4.70833 9.74167 5.3 9.5 6 9.5C6.7 9.5 7.29167 9.74167 7.775 10.225C8.25833 10.7083 8.5 11.3 8.5 12C8.5 12.7 8.25833 13.2917 7.775 13.775C7.29167 14.2583 6.7 14.5 6 14.5ZM2 20C1.45 20 0.979 19.8043 0.587 19.413C0.195667 19.021 0 18.55 0 18V4C0 3.45 0.195667 2.97933 0.587 2.588C0.979 2.196 1.45 2 2 2H3V0H5V2H13V0H15V2H16C16.55 2 17.021 2.196 17.413 2.588C17.8043 2.97933 18 3.45 18 4V18C18 18.55 17.8043 19.021 17.413 19.413C17.021 19.8043 16.55 20 16 20H2ZM2 18H16V8H2V18Z"
                fill="#6b7280"
              />
            </svg>
          }
          justifyContent={'flex-start'}
          gap={'4px'}
          height="40px"
          width="185px"
          paddingY={"8px"}
          paddingX={"16px"}
          bg="none"
          color="MENU_GRAY"
          _hover={{
            bg: "rgba(147, 51, 234, 0.06);",
            color: "PRIMARY_PURPLE",
          }}
          _active={{
            bg: "rgba(38, 17, 58, 0.06);",
            color: "PRIMARY_PURPLE",
          }}

          //TODO Пофиксить смену иконок
          //TODO Функция сортировки на сегодня
        >
          Today
        </Button>

        <Menu>
          <MenuButton
            as={Button}
            width="185px"
            leftIcon={<CheckGrayIcon />}
            bg={"none"}
            color={'MENU_GRAY'}
            _hover={{ 
              bg: "rgba(147, 51, 234, 0.06)",
              color: "PRIMARY_PURPLE",
              leftIcon: '<CheckPurpleIcon />' //TODO Пофиксить смену иконок

            }}
            _active={{
              bg: "rgba(147, 51, 234, 0.06)",
              leftIcon: '<CheckPurpleIcon />' //TODO Пофиксить смену иконок
            }}
          >
            All
          </MenuButton>
          <MenuList
            padding={"7px"}
            minW={"0"}
            borderRadius="10px"
            border={"none"}
            bg="rgba(147, 51, 234)"
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
              icon={<CheckPurpleIcon />}
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
              icon={<CheckPurpleIcon />}
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
              icon={<CheckPurpleIcon />}
            >
              Undone
            </MenuItem>
          </MenuList>
        </Menu>

        <Button
          // leftIcon={'&#8645;'}
          justifyContent={'flex-start'}
          gap={'10px'}
          height="40px"
          width="185px"
          paddingY={"8px"}
          paddingX={"16px"}
          bg="none"
          color="MENU_GRAY"
          _hover={{
            bg: "rgba(147, 51, 234, 0.06);",
            color: "PRIMARY_PURPLE",
          }}
          _active={{
            bg: "rgba(147, 51, 234, 0.06);",
            color: "PRIMARY_PURPLE",
          }}

          //TODO Пофиксить смену иконок
          //TODO Функция сортировки на сегодня
        >
          <ArrowsMenuIcon/>
          Date
        </Button>

<CreateTaskModal addTask={addTask}/>

      </VStack>
    </>
  );
};

export default MenuContainer;
