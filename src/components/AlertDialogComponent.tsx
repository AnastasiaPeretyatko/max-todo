import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

const AlertDialogComponent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  return (
    <>
      <Button onClick={onOpen}>
        <svg
          width="3"
          height="13"
          viewBox="0 0 3 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 11.5C3 11.8978 2.84196 12.2794 2.56066 12.5607C2.27936 12.842 1.89782 13 1.5 13C1.10218 13 0.720644 12.842 0.43934 12.5607C0.158035 12.2794 0 11.8978 0 11.5C0 11.1022 0.158035 10.7206 0.43934 10.4393C0.720644 10.158 1.10218 10 1.5 10C1.89782 10 2.27936 10.158 2.56066 10.4393C2.84196 10.7206 3 11.1022 3 11.5ZM3 6.5C3 6.89782 2.84196 7.27936 2.56066 7.56066C2.27936 7.84196 1.89782 8 1.5 8C1.10218 8 0.720644 7.84196 0.43934 7.56066C0.158035 7.27936 0 6.89782 0 6.5C0 6.10218 0.158035 5.72064 0.43934 5.43934C0.720644 5.15804 1.10218 5 1.5 5C1.89782 5 2.27936 5.15804 2.56066 5.43934C2.84196 5.72064 3 6.10218 3 6.5ZM3 1.5C3 1.89782 2.84196 2.27936 2.56066 2.56066C2.27936 2.84196 1.89782 3 1.5 3C1.10218 3 0.720644 2.84196 0.43934 2.56066C0.158035 2.27936 0 1.89782 0 1.5C0 1.10218 0.158035 0.720644 0.43934 0.43934C0.720644 0.158035 1.10218 0 1.5 0C1.89782 0 2.27936 0.158035 2.56066 0.43934C2.84196 0.720644 3 1.10218 3 1.5Z"
            fill="#6B7280"
          />
        </svg>
      </Button>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
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
                leftIcon={
                  <svg
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.4838 9.81401L17.8442 6.36835H18.4749C18.9522 6.36835 19.3391 6.06007 19.3391 5.67987V4.42343C19.3391 3.23852 18.129 2.27448 16.6417 2.27448H13.6356V1.95643C13.6356 0.877576 12.5339 0 11.1798 0H8.65922C7.3051 0 6.20355 0.877576 6.20355 1.95636V2.27441H3.19743C1.71009 2.27441 0.5 3.23845 0.5 4.42337V5.6798C0.5 6.06 0.886965 6.36828 1.3642 6.36828H1.99494L3.16919 17.596C3.31019 18.944 4.75078 20 6.44876 20H13.39C15.0678 20 16.4934 18.9688 16.6632 17.6437C19.0015 17.2595 20.765 15.6066 20.765 13.6316C20.7651 11.8956 19.4018 10.4094 17.4838 9.81401ZM7.93195 1.95636C7.93195 1.6369 8.25823 1.37697 8.65922 1.37697H11.1798C11.5809 1.37697 11.9072 1.6369 11.9072 1.95636V2.27441H7.93195V1.95636ZM2.22824 4.99145V4.42343C2.22824 3.99771 2.66296 3.65138 3.19734 3.65138H16.6416C17.176 3.65138 17.6107 3.99771 17.6107 4.42343V4.99145H2.22824ZM13.3901 18.623H6.44884C5.64262 18.623 4.95863 18.1217 4.89169 17.4816L3.72919 6.36835H16.1098L15.7782 9.53845C15.7265 9.53724 15.6751 9.53529 15.6231 9.53529C12.7878 9.53529 10.4812 11.3729 10.4812 13.6316C10.4812 15.6954 12.4072 17.4067 14.9022 17.6869C14.7272 18.2256 14.1078 18.623 13.3901 18.623ZM15.6231 16.3511C13.7408 16.3511 12.2095 15.1312 12.2095 13.6316C12.2095 12.1321 13.7408 10.9122 15.6231 10.9122C17.5053 10.9122 19.0366 12.1321 19.0366 13.6316C19.0366 15.1312 17.5053 16.3511 15.6231 16.3511Z"
                      fill="#F56497"
                    />
                  </svg>
                }
                paddingY={"8px"}
                paddingX={"55px"}
                bg="rgba(245, 100, 151, 0.06)"
                color="#f56497"
                _hover={{ bg: "rgb(187, 59, 106, 0.2)" }}
                _active={{
                  bg: "rgb(187, 59, 106, 0.2)",
                }}
                onClick={onClose} //TODO Функция удаления элемента
              >
                Delete
              </Button>

              <Button
                leftIcon={
                  <svg
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.5711 2.92989C13.6722 -0.968985 7.32809 -0.969256 3.42894 2.92989C-0.47021 6.82904 -0.469938 13.1732 3.42894 17.072C7.32782 20.9709 13.6719 20.9712 17.5711 17.072C21.4702 13.1729 21.47 6.82877 17.5711 2.92989ZM13.3556 13.9444L10.5 11.0888L7.5084 14.0804C7.20815 14.3807 6.72079 14.3807 6.42055 14.0804C6.1203 13.7802 6.1203 13.2928 6.42055 12.9926L9.41215 10.001L6.55653 7.14534C6.25628 6.84509 6.25628 6.35773 6.55653 6.05748C6.85678 5.75723 7.34414 5.75723 7.64438 6.05748L10.5 8.9131L13.2196 6.19346C13.5199 5.89321 14.0073 5.89321 14.3075 6.19346C14.6078 6.49371 14.6078 6.98107 14.3075 7.28132L11.5879 10.001L14.4435 12.8566C14.7437 13.1568 14.7437 13.6442 14.4435 13.9444C14.1432 14.2447 13.6559 14.2447 13.3556 13.9444Z"
                      fill="#6B7280"
                    />
                  </svg>
                }
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
