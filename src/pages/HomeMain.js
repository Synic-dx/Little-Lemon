import React from "react";
import Hero from "../components/Hero";
import Featured from "../components/Featured";
import Testimonials from "../components/Testimonials";
import About from "../components/About";
import { VStack } from "@chakra-ui/react";

function HomeMain() {
  return (
  <main>
    <VStack>
      <Hero />
      <Featured />
      <Testimonials />
      <About />
    </VStack>
  </main>
  )
}

export default HomeMain;
