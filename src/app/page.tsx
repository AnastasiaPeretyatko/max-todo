"use client"

import Header from "@/components/Header";
import MenuContainer from "@/components/MenuContainer";
import TaskContainer from "@/components/TaskContainer";
import { Flex, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";


export type ListType = {
  id: number,
  title: string,
  isCompleted: boolean
}

export default function Home() {
  const [list, setList] = useState<ListType[]>([])
  // const [isActive, setIsActive] = useState<string>('')
  const [isAllChecked, setIsAllChecked] = useState<boolean>(false)

  const addTask = (title: string) => {
    const task: ListType = {
      id: Date.now(),
      title: title,
      isCompleted: false,
    }
    setList(prev => [...prev, task])
    // setIsActive('')
  }

  const deleteTask = (id: number) => {
    const array = list.filter(item => item.id !== id)
    setList(array)
  }

  const deleteAllOnClick = () => {
    setList([])
  }

  const handleChangeChecked = (id: number) => {
    const tasks = list.map(task => task.id === id
      ? { ...task, isCompleted: !task.isCompleted }
      : task
    )

    setList(tasks)
  }

  useEffect(() => {
    const tasks = list.map(task => ({ ...task, isCompleted: isAllChecked }))
    setList(tasks)
  }, [isAllChecked])

  return (
    <>
      <HStack
        width={"100%"}
        height={"100%"}
        alignItems={"center"}
        justify={"center"}
        gap={"163px"}
      >
        <Flex>
          <Heading fontSize={"96px"}>
            To-Do
            <Text as="span" color="PRIMARY_PURPLE">
              UI
            </Text>
          </Heading>
        </Flex>

        <VStack width={"672px"} gap={"31px"}>
          <Header />
          <HStack gap={'21px'} alignItems={'flex-start'}>
            <MenuContainer addTask={addTask} />
            <TaskContainer
              deleteTask={deleteTask}
              list={list}
              handleChangeChecked={handleChangeChecked}
            />
          </HStack>
        </VStack>
      </HStack>
    </>
  );
}
