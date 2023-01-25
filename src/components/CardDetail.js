import React from "react";
import { Heading, HStack, Stack, Box, Image, Text, VStack, Card, CardBody } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const CardDetail = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  //console.log("Img src", imageSrc)
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <Card maxW='sm'>
      <CardBody>
        <Image src={imageSrc}
              alt={title}
              borderRadius='lg'
        />
            <Stack mt='6' spacing='3'>
              <VStack>
                <Heading size='md'>{title}</Heading>
                <Text>
                      {description}
                </Text>
          </VStack>
          <HStack>
              <Box as="span">
                <a href="#" variant='solid' colorScheme='black'>
                  See more
                </a>
              </Box>
              <Box as="span">
                  <FontAwesomeIcon icon={faArrowRight} size="1x"/>
              </Box>            
          </HStack>
        </Stack>
      </CardBody>
    </Card>
  )
};

export default CardDetail;
