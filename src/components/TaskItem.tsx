import React from "react";
import { Button, Checkbox, Flex, HStack, Icon } from "@chakra-ui/react";
import AlertDialogComponent from "./AlertDialogComponent";
import CheckGrayIcon from "./CheckGrayIcon";
import { ListType } from "./TaskContainer";

type Props = {
  task: ListType
  handleChangeChecked: (id: number) => void
  deleteTask: (id: number) => void
}

const TaskItem = ({ task, handleChangeChecked, deleteTask }: Props) => {
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
      <Checkbox checked={task.isCompleted}
                onChange={() => handleChangeChecked(task.id)}
            />

      <p style={{ flex: "1" }}>{task.title}</p>

      <p>Date</p>      //TODO Сделать дату

      <AlertDialogComponent/> //TODO добавить удаление в компонент
    </HStack>
  );
};

export default TaskItem;
