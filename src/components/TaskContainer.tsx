import { VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import TaskItem from "./TaskItem";

const TaskContainer = () => {
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
    >
      {
        list.map((item) => 
          <TaskItem
            key={item.id}
            task={item}
            handleChangeChecked={handleChangeChecked}
            deleteTask={deleteTask}
          />
        )
      }
    </VStack>
  );
};

export default TaskContainer;
