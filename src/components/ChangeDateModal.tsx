import { EditIcon } from "@chakra-ui/icons";
import { Button, FormControl, IconButton, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import React from "react";

const ChangeDateModal = () => {
  // //const CreateTaskModal = ({ addTask }: { addTask: (title: string) => void }) => {

     const { isOpen, onOpen, onClose } = useDisclosure();
     const initialRef = React.useRef<HTMLInputElement>(null);
     const finalRef = React.useRef(null);

  //     // const onChangeInput = () => {
  //     //   if (initialRef.current) {
  //     //     if (initialRef.current.value !== ''){
  //     //       addTask(initialRef.current.value)
  //     //       onClose()
  //     //     }
  //     //   }
  //     // }

  return (
    <>
      <IconButton
        aria-label="Change task date"
        bg={"none"}
        minW={0}
        minH={0}
        h={5}
        color={"#8687e7"}
        icon={<EditIcon onClick={onOpen} />}
        border={"none"}
        _hover={{
          bg: "none",
        }}
      />

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
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
            Change task date
          </ModalHeader>

          <ModalBody pt="25px" pb={"22px"}>
            <FormControl>
              <Input
                type='Date'
                borderRadius="10px"
                bg="#f3f3f3"
                width="388px"
                height="27px"
                ref={initialRef}
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
              //onClick={onChangeInput} //TODO функция изменения даты
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
              leftIcon={
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.5711 2.92995C13.6722 -0.968924 7.32809 -0.969195 3.42894 2.92995C-0.47021 6.8291 -0.469938 13.1732 3.42894 17.0721C7.32782 20.971 13.6719 20.9712 17.5711 17.0721C21.4702 13.1729 21.47 6.82883 17.5711 2.92995ZM13.3556 13.9445L10.5 11.0889L7.5084 14.0805C7.20815 14.3807 6.72079 14.3807 6.42055 14.0805C6.1203 13.7802 6.1203 13.2929 6.42055 12.9926L9.41215 10.001L6.55653 7.1454C6.25628 6.84515 6.25628 6.35779 6.55653 6.05754C6.85678 5.75729 7.34414 5.75729 7.64438 6.05754L10.5 8.91317L13.2196 6.19352C13.5199 5.89328 14.0073 5.89328 14.3075 6.19352C14.6078 6.49377 14.6078 6.98113 14.3075 7.28138L11.5879 10.001L14.4435 12.8566C14.7437 13.1569 14.7437 13.6443 14.4435 13.9445C14.1432 14.2448 13.6559 14.2448 13.3556 13.9445Z"
                    fill="#6B7280"
                  />
                </svg>
              }
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

export default ChangeDateModal;
