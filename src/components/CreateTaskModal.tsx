import {
  Button,
  FormControl,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import addTask from '@/components/TaskContainer';

const CreateTaskModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
      <Button
        marginTop={"123px"}
        leftIcon={
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 0C4.48615 0 0 4.48577 0 10C0 15.5142 4.48615 20 10 20C15.5138 20 20 15.5142 20 10C20 4.48577 15.5138 0 10 0ZM14.8077 10.7692H10.7692V15C10.7692 15.4246 10.4246 15.7692 10 15.7692C9.57539 15.7692 9.23077 15.4246 9.23077 15V10.7692H5.19231C4.76769 10.7692 4.42308 10.4246 4.42308 10C4.42308 9.57539 4.76769 9.23077 5.19231 9.23077H9.23077V5.38462C9.23077 4.96 9.57539 4.61538 10 4.61538C10.4246 4.61538 10.7692 4.96 10.7692 5.38462V9.23077H14.8077C15.2323 9.23077 15.5769 9.57539 15.5769 10C15.5769 10.4246 15.2323 10.7692 14.8077 10.7692Z"
              fill="#9333EA"
            />
          </svg>
        }
        justifyContent={"center"}
        gap={"10px"}
        height="40px"
        width="185px"
        paddingY={"8px"}
        paddingX={"16px"}
        bg="rgba(147, 51, 234, 0.06)"
        color="PRIMARY_PURPLE"
        _hover={{
          bg: "rgba(147, 51, 234, 0.06);",
          color: "PRIMARY_PURPLE",
        }}
        _active={{
          bg: "rgba(147, 51, 234, 0.06);",
          color: "PRIMARY_PURPLE",
        }}
        //TODO Функция добавления
        onClick={onOpen}
      >
        Add task
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay borderRadius={"10px"} />
        <ModalContent borderRadius={"10px"}>
          <ModalHeader
            height="48px"
            paddingY="14px"
            borderRadius="10px"
            fontSize="20px"
            lineHeight={"1"}
            fontWeight="700"
            font-size="20px"
            color="PRIMARY_PURPLE"
            bg="linear-gradient(220deg, #f5edfd 0%, #feeff5 100%)"
          >
            Create task
          </ModalHeader>

          <ModalBody pt="25px" pb={"22px"}>
            <FormControl>
              <Input
                borderRadius="10px"
                bg="#f3f3f3"
                width="388px"
                height="27px"
                ref={initialRef}
                placeholder="Enter text..."
              />
            </FormControl>
          </ModalBody>

          <ModalFooter pt="0" pb="17px" justifyContent={"center"} gap={"21px"}>
            <Button
              border-radius="5px"
              padding="8px"
              width="185px"
              height="40px"
              bg="rgba(103, 184, 203, 0.06)"
              font-weight="400"
              font-size="16px"
              color="#67b8cb"
              leftIcon={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    stroke="#67B8CB"
                    stroke-width="2"
                  />
                  <path
                    d="M8 12L11 15L16 9"
                    stroke="#67B8CB"
                    stroke-width="2"
                  />
                </svg>
              }
              onClick={addTask} //TODO функция добавления в массив
            >
              Save
            </Button>
            <Button
              border-radius="5px"
              padding="8px"
              width="185px"
              height="40px"
              bg="rgba(103, 184, 203, 0.06)"
              font-weight="400"
              font-size="16px"
              leftIcon={<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.5711 2.92995C13.6722 -0.968924 7.32809 -0.969195 3.42894 2.92995C-0.47021 6.8291 -0.469938 13.1732 3.42894 17.0721C7.32782 20.971 13.6719 20.9712 17.5711 17.0721C21.4702 13.1729 21.47 6.82883 17.5711 2.92995ZM13.3556 13.9445L10.5 11.0889L7.5084 14.0805C7.20815 14.3807 6.72079 14.3807 6.42055 14.0805C6.1203 13.7802 6.1203 13.2929 6.42055 12.9926L9.41215 10.001L6.55653 7.1454C6.25628 6.84515 6.25628 6.35779 6.55653 6.05754C6.85678 5.75729 7.34414 5.75729 7.64438 6.05754L10.5 8.91317L13.2196 6.19352C13.5199 5.89328 14.0073 5.89328 14.3075 6.19352C14.6078 6.49377 14.6078 6.98113 14.3075 7.28138L11.5879 10.001L14.4435 12.8566C14.7437 13.1569 14.7437 13.6443 14.4435 13.9445C14.1432 14.2448 13.6559 14.2448 13.3556 13.9445Z" fill="#6B7280" />
              </svg>}
              onClick={onClose}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateTaskModal;
