import React from 'react'
import { Box, HStack, VStack, Button, Image, Link as ChakraLink } from '@chakra-ui/react'
import { Link as ReactRouterLink} from 'react-router-dom'
import heroPic from '../assets/restauranfood.svg'

function Hero() {
  return (
    <section id="hero">
      <Box w="100vw" pt={8} pb={8} pr={'15vw'} pl={'15vw'} className="heroContainer" display={'flex'} alignItems={'center'} justifyContent={'center'} >
        <HStack>
          <VStack alignItems={'first-baseline'} gap={10}>
            <VStack alignItems={'first-baseline'}>
            <h1 className={'bigHeader title'} fontColor={'#F4CE14'}>Little Lemon</h1>
            <h2 className={'subHeader'}>Chicago</h2>
            </VStack>
            <p className={'sectionText'}>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <ChakraLink as={ReactRouterLink} to="/booking"><Button colorScheme='yellow' w={168} h={34} color={'#333333'}>Reserve a Table</Button></ChakraLink>
          </VStack>

          <Image src={heroPic} width={300} alt={'Restaurant Food'} ml={40}/>
        </HStack>
      </Box>
    </section>
  )
}

export default Hero