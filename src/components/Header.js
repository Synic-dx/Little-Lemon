import React from "react";
import logo from "../assets/Logo.svg";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import { HStack, Image, Box } from "@chakra-ui/react";

function Header() {
  return (
    <header>
      <Box w='100vw' pr={'15vw'} pl={'15vw'}>
      <HStack justifyContent={'space-between'} alignItems={'center'} gap={'10vw'} p={2}>
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
