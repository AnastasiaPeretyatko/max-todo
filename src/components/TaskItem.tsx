import {
  Button,
  Checkbox,
  HStack,
  IconButton,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import AlertDialogComponent from "./AlertDialogComponent";
import { ListType } from "@/app/page";
import { useState } from "react";
import { CheckIcon, EditIcon, HamburgerIcon } from "@chakra-ui/icons";
import ChangeDateModal from "./ChangeDateModal";
import TaskIcon from "./TaskIcon";

type Props = {
  task: ListType;
  handleChangeChecked: (id: number) => void;
  deleteTask: (id: number) => void;
};

const TaskItem = ({ task, handleChangeChecked, deleteTask }: Props) => {
  const [isActive, setIsActive] = useState(task.isCompleted);
  const onClickDelete = () => {
    deleteTask(task.id);
  };

  // const [taskTade, setTaskTade] = useState<Date>()
  // const date = new Date(task.id);
  // setTaskTade(date)

  //-----------------------

  // function TaskDate() {
  //   const timestamp = task.id;
  //   const date = new Date(timestamp);

  //   const [currentTime, setCurrentTime] = useState(date);
  //   setCurrentTime(date);

  //   console.log(date);
  //    return (
  //        <Text>{currentTime}</Text>
  //   );
  // }

  //-----------------------

  // function formatDateTime = ({ task.id }: Props) => {
  //   // Создаем объект Date из таймстампа
  //   const date = new Date(task.id);

  //   // Форматируем дату и время
  //   const year = date.getFullYear();
  //   const month = (`0${date.getMonth() + 1}`).slice(-2);
  //   const day = (`0${date.getDate()}`).slice(-2);
  //   const hour = (`0${date.getHours()}`).slice(-2);
  //   const minute = (`0${date.getMinutes()}`).slice(-2);
  //   const second = (`0${date.getSeconds()}`).slice(-2);

  //   // Возвращаем отформатированную строку
  //   return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
  // }

  return (
    <HStack
      display="flex"
      flexDirection="row"
      gap="15px"
      alignItems="center"
      width="100%"
      paddingY="8px"
      paddingX="11px"
      borderRadius="10px"
      bg="rgba(147, 51, 234, 0.06);"
    >
      //TODO Сделать кастомный чекбокс
      <Button
        variant="unstyled"
        border="1px solid"
        borderRadius={"full"}
        height={5}
        width={5}
        minH={0}
        minW={0}
        borderColor="PRIMARY_PURPLE"
        textAlign={"center"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        onClick={() => {
          handleChangeChecked(task.id);
          setIsActive(!isActive);
        }}
      >
        {isActive ? <CheckIcon color={"PRIMARY_PURPLE"}/> : null}
      </Button>
      <p style={{ flex: "1" }}>{task.title}</p>
      <p>{task.id}</p> //TODO Сделать дату
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<TaskIcon />}
          variant="outline"
          bg={"none"}
          minW={0}
          minH={0}
          h={5}
          border={"none"}
          _hover={{
            bg: "none",
          }}
          _expanded={{
            bg: "none",
          }}
        />
        <MenuList
          display="flex"
          flexDirection="row"
          gap={2}
          width={"fit-content"}
          height={"fit-content"}
          minH={0}
          minW={0}
          paddingY={1}
          paddingX={2}
          borderRadius={10}
          borderWidth={0.25}
          borderColor={"PRIMARY_PURPLE"}
        >
          <MenuItem
            width={"auto"}
            padding={0}
            _hover={{
              bg: "none",
            }}
          >
            <ChangeDateModal />
          </MenuItem>

          <MenuItem
            width={"auto"}
            padding={0}
            _hover={{
              bg: "none",
            }}
          >
            <AlertDialogComponent onClickDelete={onClickDelete} />
          </MenuItem>
        </MenuList>
      </Menu>
    </HStack>
  );
};

export default TaskItem;
