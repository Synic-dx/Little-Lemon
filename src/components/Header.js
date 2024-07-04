import React from "react";
import logo from "../assets/Logo.svg";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import { HStack, Image, Box } from "@chakra-ui/react";

function Header() {
  return (
    <header>
      <Box w='100%'>
      <HStack gap={20}>
        <Link to="/">
        <Image src={ logo } alt='Logo' />
        </Link>
        <Nav />
      </HStack>
      </Box>
    </header>
  );
}

export default Header;
