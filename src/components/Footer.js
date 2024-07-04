import React from "react";
import logo from "../assets/Logo.svg";
import { HStack, Link as ChakraLink, VStack } from "@chakra-ui/react";
import { Link as ReactRouterLink } from 'react-router-dom'

const Contact = () => {
  return (
    <VStack>
      <a href="TBD" target="_blank">
        Address
      </a>
      <a href="TBD" target="_blank">
        Phone Number
      </a>
      <a href="TBD" target="_blank">
        Email
      </a>
    </VStack>
  );
};

function Footer() {
  return (
    <footer>
      <HStack>
        <img src={logo} alt="Little Lemon Logo" />

        <VStack>
          <h1>Doormat Navigation</h1>

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

        <VStack>
          <h1>Contact</h1>
          <Contact />
        </VStack>

        <VStack>
          <h1>Social Media Links</h1>
          <Contact />
        </VStack>
      </HStack>
    </footer>
  );
}

export default Footer;
