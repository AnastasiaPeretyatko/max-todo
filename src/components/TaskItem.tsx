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
import ChangeDateModal from "./ChangeTitleModal";
import TaskIcon from "./TaskIcon";
import TaskMenu from "./TaskMenu";

type Props = {
  task: ListType;
  handleChangeChecked: (id: number) => void;
  deleteTask: (id: number) => void;
  changeTaskTitle: (newTitle: string, id: number) => void;
};

const TaskItem = ({
  task,
  handleChangeChecked,
  deleteTask,
  changeTaskTitle,
}: Props) => {
  const [isActive, setIsActive] = useState(task.isCompleted);

  //TODO перенести в компонент TaskMenu
  const onClickDelete = () => {
    deleteTask(task.id);
  };

  const formatedDate = () => {
    const date = new Date(task.id);
    return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
  };

  //Текст в инпут
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(task.title);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      //функция записи нового title в массив List
      changeTaskTitle(e.target.value, task.id);

      setIsEditing(false);
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <HStack
      display="flex"
      flexDirection="row"
      gap="4"
      alignItems="center"
      width="100%"
      paddingY="2"
      paddingX="3"
      borderRadius="4"
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
        {isActive ? <CheckIcon color={"PRIMARY_PURPLE"} /> : null}
      </Button>
      {isEditing ? (
        <Input
          flex="1"
          value={value}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          autoFocus
        />
      ) : (
        <Text flex="1" onDoubleClick={handleDoubleClick}>
          {value}
        </Text>
      )}
      <Text>{formatedDate()}</Text>
      <TaskMenu
        key={task.id}
        task={task}
        deleteTask={deleteTask}
        changeTaskTitle={changeTaskTitle}
      />
    </HStack>
  );
};

export default TaskItem;
