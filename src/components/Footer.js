import React from "react";
import logo from "../assets/Logo.svg";
import {
  HStack,
  Link as ChakraLink,
  VStack,
  Image,
  Box
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

const Contact = (props) => {
  return (
    <VStack alignItems={"flex-start"} className={props.className}>
      <a href="#">
        <address>Chicago</address>
      </a>
      <a href="#">
        8901760XXX
      </a>
      <a href="#">
        littlelemon@gmail.com
      </a>
    </VStack>
  );
};

function Footer() {
  return (
    <footer>
      <Box w="100vw" className="footerContainer" p={"10vh"}>
        <HStack justifyContent={"center"} alignItems={"center"} gap={"10vw"}>
          <Image src={logo} alt="Little Lemon Logo" />

          <HStack gap={"100px"}>
            <VStack alignItems={"flex-start"} gap={8}>
              <h1 className="footerHeader">Doormat Navigation</h1>

              <VStack alignItems={"flex-start"} className="footerText">
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
              <h1 className="footerHeader">Contact</h1>
              <Contact className="footerText"/>
            </VStack>

            <VStack alignItems={"flex-start"} gap={8}>
              <h1 className="footerHeader">Social Media Links</h1>
              <Contact className="footerText"/>
            </VStack>
          </HStack>
        </HStack>
      </Box>
    </footer>
  );
}

export default Footer;
