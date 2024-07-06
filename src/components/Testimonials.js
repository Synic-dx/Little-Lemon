import { Box, VStack, Card, Avatar, HStack, Flex } from "@chakra-ui/react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const reviews = [
  {
    name: "John Doe",
    rating: 4,
    review: "The food was delicious and the service was great.",
    date: "2024-05-01",
    getAvatarSrc: () => require("../assets/JohnDoe.jpg"),
  },
  {
    name: "Quin Lee",
    rating: 5,
    review: "I had a wonderful experience at this restaurant!",
    date: "2024-05-03",
    getAvatarSrc: () => require("../assets/QuinLee.jpg"),
  },
  {
    name: "Rahul Roy",
    rating: 4,
    review: "The atmosphere was cozy and the staff were friendly.",
    date: "2024-05-05",
    getAvatarSrc: () => require("../assets/RahulRoy.jpg"),
  },
  {
    name: "Alice Williams",
    rating: 5,
    review: "I highly recommend this restaurant for any meal of the day!",
    date: "2024-05-07",
    getAvatarSrc: () => require("../assets/AliceWilliams.jpg"),
  },
];

function Testimonials() {
  return (
    <section id="testimonials">
      <Box
        w="100vw"
        h={'95vh'}
        pr={"15vw"}
        pl={"15vw"}
        className="testimonialContainer"
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
      >
        <VStack gap={10}>
          <h1 className="bigHeader">Our customers love us!</h1>

          <Box
            mt={20}
            display="grid"
            gridTemplateColumns="repeat(4,minmax(0,1fr))"
            gridGap={8}
          >
            {reviews.map((item) => (
              <Card key={item.name} borderRadius={16} backgroundColor={"white"} p={5} display="flex" flexDirection="column" gap={3} boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px'}>
                  <HStack>
                    <Avatar src={item.getAvatarSrc()}/>
                  <Flex direction="column">
                    <h1 className="cardTitle">{item.name}</h1>
                    <h2 className="cardText">{item.date}</h2>
                  </Flex>
                  </HStack>

                  <HStack gap={"3px"} marginBottom={2}>
                    {[...Array(item.rating)].map((index) => (
                      <FontAwesomeIcon
                        icon={faStar}
                        color="#F4CE14"
                        key={index}
                      />
                    ))}
                  </HStack>
                  <h2 className="reviewText">{item.review}</h2>
              </Card>
            ))}
          </Box>
        </VStack>
      </Box>
    </section>
  );
}

export default Testimonials;
