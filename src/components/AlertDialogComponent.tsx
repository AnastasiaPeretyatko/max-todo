import { DeleteIcon, SmallCloseIcon } from "@chakra-ui/icons";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

const AlertDialogComponent = ({
  onClickDelete,
}: {
  onClickDelete: () => void;
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef(null);

  return (
    <>
      <IconButton
        aria-label="delete task"
        icon={<DeleteIcon />}
        onClick={onOpen}
        minW={0}
        minH={0}
        h={5}
        color={"#f56497"}
        bg={"none"}

        border={"none"}
        _hover={{
          bg: "none",
        }}
      />

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isCentered
      >
        <AlertDialogOverlay borderRadius="10px">
          <AlertDialogContent borderRadius="10px">
            <AlertDialogHeader
              lineHeight={"1"}
              height="48px"
              paddingY="14px"
              borderRadius="10px"
              fontSize="20px"
              fontWeight="700"
              font-size="20px"
              color="PRIMARY_PURPLE"
              bg="linear-gradient(220deg, #f5edfd 0%, #feeff5 100%)"
            >
              Delete task
            </AlertDialogHeader>
            <AlertDialogBody
              pt="36px"
              pb="17px"
              fontSize="20px"
              fontWeight="700"
              color="PRIMARY_PURPLE"
            >
              Are you sure about deleting this task?
            </AlertDialogBody>
            <AlertDialogFooter pb="17px" pt="0" gap={"21px"}>
              <Button
                leftIcon={<DeleteIcon />}
                variant="primary"
                onClick={onClickDelete} //TODO Функция удаления элемента
              >
                Delete
              </Button>

              <Button
                leftIcon={<SmallCloseIcon />}
                paddingY={"8px"}
                paddingX={"55px"}
                ref={cancelRef}
                onClick={onClose}
              >
                Close
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default AlertDialogComponent;
