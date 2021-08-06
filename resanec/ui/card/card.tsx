import * as React from "react";
import { BoxProps, Box, Button, useColorModeValue } from "@chakra-ui/react";

export const Card: React.FC<BoxProps> = (props) => {
  const bgColor = useColorModeValue("white", "gray.900");
  const color = useColorModeValue("black", "white");

  return (
      <Box
          bg={bgColor}
          color={color}
          shadow="sm"
          rounded="lg"
          data-testid="card"
          {...props}
      >
        {props.children}
        <Button colorScheme="blue">Button</Button>
      </Box>
  );
};
export default Card;