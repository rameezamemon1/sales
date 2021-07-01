import React from "react";
import { Flex, Spacer, Box, Button } from "@chakra-ui/react";

const Header = () => {
  return (
    <React.Fragment>
      <Box pb={2} borderBottom={"2px"} borderColor="#00B7C5">
        <Flex mx={20} pt={4} px={20}>
          <Box>
            <Button
              color="black"
              bg="white"
              mx={3}
              _hover={{
                color: "#00B7C5",
                bg: "white",
                textDecoration: "underline",
                textDecorationColor: "#00B7C5",
                textDecorationLine: "under",
                textUnderlineOffset: "6px",
                fontWeight: "500",
              }}
              _focus={{
                color: "#00B7C5",
                bg: "white",
                textDecoration: "underline",
                textDecorationColor: "#00B7C5",
                textDecorationLine: "under",
                textUnderlineOffset: "6px",
                fontWeight: "500",
              }}
              _active={{
                color: "#00B7C5",
                bg: "white",
                textDecoration: "underline",
                textDecorationColor: "#00B7C5",
                textDecorationLine: "under",
                textUnderlineOffset: "6px",
                fontWeight: "500",
              }}
            >
              Home
            </Button>
            <Button
              color="black"
              bg="white"
              mx={3}
              _hover={{
                color: "#00B7C5",
                bg: "white",
                textDecoration: "underline",
                textDecorationColor: "#00B7C5",
                textDecorationLine: "under",
                textUnderlineOffset: "6px",
                fontWeight: "500",
              }}
              _focus={{
                color: "#00B7C5",
                bg: "white",
                textDecoration: "underline",
                textDecorationColor: "#00B7C5",
                textDecorationLine: "under",
                textUnderlineOffset: "6px",
                fontWeight: "500",
              }}
              _active={{
                color: "#00B7C5",
                bg: "white",
                textDecoration: "underline",
                textDecorationColor: "#00B7C5",
                textDecorationLine: "under",
                textUnderlineOffset: "6px",
                fontWeight: "500",
              }}
            >
              Sale
            </Button>
            <Button
              color="black"
              bg="white"
              mx={3}
              _hover={{
                color: "#00B7C5",
                bg: "white",
                textDecoration: "underline",
                textDecorationColor: "#00B7C5",
                textDecorationLine: "under",
                textUnderlineOffset: "6px",
                fontWeight: "500",
              }}
              _focus={{
                color: "#00B7C5",
                bg: "white",
                textDecoration: "underline",
                textDecorationColor: "#00B7C5",
                textDecorationLine: "under",
                textUnderlineOffset: "6px",
                fontWeight: "500",
              }}
              _active={{
                color: "#00B7C5",
                bg: "white",
                textDecoration: "underline",
                textDecorationColor: "#00B7C5",
                textDecorationLine: "under",
                textUnderlineOffset: "6px",
                fontWeight: "500",
              }}
            >
              Join Sale
            </Button>
            <Button
              color="black"
              bg="white"
              mx={3}
              _hover={{
                color: "#00B7C5",
                bg: "white",
                textDecoration: "underline",
                textDecorationColor: "#00B7C5",
                textDecorationLine: "under",
                textUnderlineOffset: "6px",
                fontWeight: "500",
              }}
              _focus={{
                color: "#00B7C5",
                bg: "white",
                textDecoration: "underline",
                textDecorationColor: "#00B7C5",
                textDecorationLine: "under",
                textUnderlineOffset: "6px",
                fontWeight: "500",
              }}
              _active={{
                color: "#00B7C5",
                bg: "white",
                textDecoration: "underline",
                textDecorationColor: "#00B7C5",
                textDecorationLine: "under",
                textUnderlineOffset: "6px",
                fontWeight: "500",
              }}
            >
              Create Sale
            </Button>
            <Button
              color="black"
              bg="white"
              mx={3}
              _hover={{
                color: "#00B7C5",
                bg: "white",
                textDecoration: "underline",
                textDecorationColor: "#00B7C5",
                textDecorationLine: "under",
                textUnderlineOffset: "6px",
                fontWeight: "500",
              }}
              _focus={{
                color: "#00B7C5",
                bg: "white",
                textDecoration: "underline",
                textDecorationColor: "#00B7C5",
                textDecorationLine: "under",
                textUnderlineOffset: "6px",
                fontWeight: "500",
              }}
              _active={{
                color: "#00B7C5",
                bg: "white",
                textDecoration: "underline",
                textDecorationColor: "#00B7C5",
                textDecorationLine: "under",
                textUnderlineOffset: "6px",
                fontWeight: "500",
              }}
            >
              Claim Tokens
            </Button>
            <Button
              color="black"
              bg="white"
              mx={3}
              _hover={{
                color: "#00B7C5",
                bg: "white",
                textDecoration: "underline",
                textDecorationColor: "#00B7C5",
                textDecorationLine: "under",
                textUnderlineOffset: "6px",
                fontWeight: "500",
              }}
              _focus={{
                color: "#00B7C5",
                bg: "white",
                textDecoration: "underline",
                textDecorationColor: "#00B7C5",
                textDecorationLine: "under",
                textUnderlineOffset: "6px",
                fontWeight: "500",
              }}
              _active={{
                color: "#00B7C5",
                bg: "white",
                textDecoration: "underline",
                textDecorationColor: "#00B7C5",
                textDecorationLine: "under",
                textUnderlineOffset: "6px",
                fontWeight: "500",
              }}
            >
              Manage Sale
            </Button>
          </Box>
          <Spacer />
          <Box>
            <Button bg="#00B7C5" color="white" width="140px">
              Connect
            </Button>
          </Box>
        </Flex>
      </Box>{" "}
    </React.Fragment>
  );
};

export default Header;
