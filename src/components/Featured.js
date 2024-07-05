import React from "react";
import { VStack, HStack, Image } from "@chakra-ui/react";
import Delivery from "../assets/Delivery.svg";

const featuredItems = [
  {
    name: "Greek salad",
    image: "../assets/greek salad.jpg",
    price: "12.99",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
  },
  {
    name: "Bruchetta",
    image: "../assets/bruchetta.svg",
    price: "5.99",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
  },
  {
    name: "Lemon Dessert",
    image: "../assets/lemon dessert.jpg",
    price: "5.00",
    description:
      "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];

const Card = ({ name, image, price, description }) => {
  return (
    <VStack>
      <Image src={image} alt={name} objectFit="cover" />
      <HStack>
        <h1 className="cardHeader">{name}</h1>
        <h2 className="cardPrice">{price}</h2>
      </HStack>
      <p className="cardText">{description}</p>
      <p className="orderDelivery">Order a Delivery {Delivery}</p>
    </VStack>
  );
};

function Featured() {
  return <section id="featured">Featured</section>;
}

export default Featured;
