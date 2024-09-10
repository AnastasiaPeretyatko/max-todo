import { VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import TaskItem from "./TaskItem";
import { ListType } from '@/app/page';

const TaskContainer = ({ deleteTask, list, handleChangeChecked, changeTaskTitle}: { changeTaskTitle: ((newTitle: string ,id: number) => void), deleteTask: (id: number) => void, list: ListType[], handleChangeChecked: (id: number) => void }) => {
  return (
    <VStack
      bg="TASK_CONTAINER"
      borderRadius="10px"
      paddingY={"31px"}
      paddingX={"18px"}
      justifyContent={"flex-start"}
      gap={"7px"}
      width={"466px"}
      height={"312px"}
      overflow={"auto"}
      overflowX={"hidden"}
    >
      {
        list.map((item) =>
          <TaskItem
            key={item.id}
            task={item}
            handleChangeChecked={handleChangeChecked}
            deleteTask={deleteTask}
            changeTaskTitle={changeTaskTitle}
          />
        )
      }
    </VStack>
  );
};

export default TaskContainer;
