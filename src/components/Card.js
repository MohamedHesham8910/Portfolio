import { Link, Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <Box borderRadius={8} backgroundColor='white' boxSizing='border-box'>
      <VStack align='left' spacing={5}>
        <Image fit='contain' htmlWidth="100%" src={imageSrc} borderRadius={8}/>
        <Heading padding={3} paddingTop={0} color='black' size='md'>{title}</Heading>
        <Text padding={3} paddingTop={0} color='gray' size='lg'>{description}</Text>
        <HStack padding={3} paddingTop={0}>
          <Link  href='#' color='black' size='lg'>
          See More 
          </Link>
          <FontAwesomeIcon color='black' icon={faArrowRight} size="1x" />
          </HStack>
      </VStack> 
    </Box>
  );
};

export default Card;
