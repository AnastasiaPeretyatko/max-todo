import { Button, Checkbox, HStack, IconButton } from "@chakra-ui/react";
import AlertDialogComponent from "./AlertDialogComponent";
import { ListType } from '@/app/page';
import { useState } from 'react';
import { CheckIcon } from '@chakra-ui/icons';

type Props = {
  task: ListType
  handleChangeChecked: (id: number) => void
  deleteTask: (id: number) => void
}

const TaskItem = ({ task, handleChangeChecked, deleteTask }: Props) => {
  const [isActive, setIsActive] = useState(task.isCompleted)
  const onClickDelete = () => {
    deleteTask(task.id)
  }

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
        borderColor="PRIMARY_PURPLE"
        onClick={() => {handleChangeChecked(task.id)
          setIsActive(!isActive)
        }}
      >
        {isActive ? <CheckIcon /> : null}
      </Button>

      {/* <Checkbox checked={task.isCompleted}
        onChange={() => handleChangeChecked(task.id)}
      /> */}

      <p style={{ flex: "1" }}>{task.title}</p>

      <p>Date</p>      //TODO Сделать дату

      <AlertDialogComponent onClickDelete={onClickDelete} /> //TODO добавить удаление в компонент
    </HStack>
  );
};

export default TaskItem;
