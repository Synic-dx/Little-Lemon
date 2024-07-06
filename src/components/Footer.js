import React from "react";
import logo from "../assets/footerLogo.png";
import {
  HStack,
  Link as ChakraLink,
  VStack,
  Image,
  Box
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

const Contact = () => {
  return (
    <VStack alignItems={"flex-start"} className={props.className}>
      <a href="#">
        <address>123 Citrus Lane</address>
      </a>
      <a href="#">
      123-456-7890
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
      <Box w="100vw" className="footerContainer" pr={'15vw'} pl={'15vw'} pt={'40px'} pb={'40px'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
        <HStack justifyItems={"space-between"} alignItems={"center"} gap={"10vw"}>
          <Image src={logo} alt="Little Lemon Logo" w={'9.2489vw'}/>

          <HStack alignItems={'first-baseline'} gap={"100px"}>
            <VStack alignItems={"flex-start"} gap={8}>
              <h1 className="footerText">SITEMAP</h1>

              <VStack alignItems={"flex-start"} className="footerText">
                <ChakraLink as={ReactRouterLink} to="/Little-Lemon">
                  Home
                </ChakraLink>

                <a href="#">About</a>

                <a href="#">Menu</a>

                <ChakraLink as={ReactRouterLink} to="/Little-Lemon/booking">
                  Reservations
                </ChakraLink>

                <a href="#">Order Online</a>

                <a href="#">Login</a>
              </VStack>
            </VStack>

            <VStack alignItems={"flex-start"} gap={8}>
              <h1 className="footerText">CONTACT</h1>
              <Contact className="footerText"/>
            </VStack>

            <VStack alignItems={"flex-start"} gap={8}>
              <h1 className="footerText">SOCIAL MEDIA LINKS</h1>
              <Contact className="footerText"/>
            </VStack>
          </HStack>
        </HStack>
      </Box>
    </footer>
  );
}

export default Footer;
