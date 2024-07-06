import React from "react";
import { Image, Box, HStack, Button, Card, Flex } from "@chakra-ui/react";
import Delivery from "../assets/Delivery.svg";

const featuredItems = [
  {
    name: "Greek salad",
    getImageSrc: () => require("../assets/greek salad.jpg"),
    price: "12.99",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
  },
  {
    name: "Bruchetta",
    getImageSrc: () => require("../assets/bruchetta.jpg"),
    price: "5.99",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
  },
  {
    name: "Lemon Dessert",
    getImageSrc: () => require("../assets/lemon dessert.jpg"),
    price: "5.00",
    description:
      "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];

function Featured() {
  return (
    <section id="featured">
      <Box
        w="100vw"
        h={'110vh'}
        pt={'40px'}
        pb={'40px'}
        pr={"15vw"}
        pl={"15vw"}
        className="featuredContainer"
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        direction={"column"}
      >
        <Flex direction={"column"}>
          <HStack justifyContent={"space-between"} alignItems={"center"}>
            <h1 className="bigHeader">This week’s specials!</h1>
            <Button
              colorScheme={"yellow"}
              color={"#333333"}
              h={42}
              w={131}
              fontSize={"1rem"}
              boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
            >
              Order Online
            </Button>
          </HStack>

          <Box
            mt={20}
            display="grid"
            gridTemplateColumns="repeat(3,minmax(0,1fr))"
            gridGap={8}
          >
            {featuredItems.map((item) => (
              <Card
                key={item.name}
                borderTopRadius={16}
                backgroundColor={"#D9D9D9"}
                boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px'}
              >
                <Image
                  src={item.getImageSrc()}
                  alt={item.name}
                  borderTopRadius={16}
                  h={200}
                />
                <Flex
                  direction={"column"}
                  p={5}
                  gap={5}
                  alignContent={"first-baseline"}
                >
                  <HStack justifyContent={"space-between"}>
                    <h1 className={"cardHeader"}>{item.name}</h1>
                    <h2 className={"cardPrice"}>${item.price}</h2>
                  </HStack>
                  <p className={"cardText"}>{item.description}</p>
                  <a href="#">
                    <HStack position={"absolute"} bottom={3}>
                      <p className={"orderDelivery"}>Order a delivery</p>
                      <Image src={Delivery} alt={"Delivery"} h={"15px"} />
                    </HStack>
                  </a>
                </Flex>
              </Card>
            ))}
          </Box>
        </Flex>
      </Box>
    </section>
  );
}

export default Featured;
