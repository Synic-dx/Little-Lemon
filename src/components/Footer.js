import React from "react";
import logo from "../assets/Logo.svg";
import {
  HStack,
  Link as ChakraLink,
  VStack,
  Image,
  Box,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

const Contact = () => {
  return (
    <VStack alignItems={"flex-start"}>
      <a href="#" target="_blank">
        Address
      </a>
      <a href="#" target="_blank">
        Phone Number
      </a>
      <a href="#" target="_blank">
        Email
      </a>
    </VStack>
  );
};

function Footer() {
  return (
    <footer>
      <Box w="100vw" className="footerContainer" p={'10vh'}>
        <HStack justifyContent={"center"} alignItems={"center"} gap={"10vw"}>
          <Image src={logo} alt="Little Lemon Logo" />

          <HStack gap={'100px'}>
            <VStack alignItems={"flex-start"} gap={8}>
              <h1>Doormat Navigation</h1>

              <VStack alignItems={"flex-start"}>
                <ChakraLink as={ReactRouterLink} to="/">
                  Home
                </ChakraLink>

                <a href="#">About</a>

                <a href="#">Menu</a>

                <ChakraLink as={ReactRouterLink} to="/booking">
                  Reservations
                </ChakraLink>

                <a href="#">Order Online</a>

                <a href="#">Login</a>
              </VStack>
            </VStack>

            <VStack alignItems={"flex-start"} gap={8}>
              <h1>Contact</h1>
              <Contact />
            </VStack>

            <VStack alignItems={"flex-start"} gap={8}>
              <h1>Social Media Links</h1>
              <Contact />
            </VStack>
          </HStack>
        </HStack>
      </Box>
    </footer>
  );
}

export default Footer;
