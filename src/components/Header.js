import React from "react";
import logo from "../assets/Logo.svg";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import { HStack, Image, Box } from "@chakra-ui/react";

function Header() {
  return (
    <header>
      <Box w='100vw'>
      <HStack justifyContent={'center'} alignItems={'center'} gap={'10vw'}>
        <Link to="/">
        <Image src={ logo } alt='Logo' p={1}/>
        </Link>
        <Nav />
      </HStack>
      </Box>
    </header>
  );
}

export default Header;
