import { IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import TaskIcon from './TaskIcon'
import ChangeDateModal from './ChangeTitleModal'
import AlertDialogComponent from './AlertDialogComponent'
import { ListType } from '@/app/page'
import ChangeTitleModal from './ChangeTitleModal'

type Props = {
    task: ListType;
    deleteTask: (id: number) => void;
    changeTaskTitle:(newTitle: string,id: number)=> void;
  };

const TaskMenu = ({ task, deleteTask,changeTaskTitle }: Props) => {

    const onClickDelete = () => {
        deleteTask(task.id);
      };

  return (
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
        <ChangeTitleModal         
        key={task.id}
        task={task}
        changeTaskTitle={changeTaskTitle}/>
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
  )
}

export default TaskMenu
