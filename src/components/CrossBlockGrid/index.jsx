import { Box, Flex, Grid } from "@chakra-ui/react";
import React, { useEffect } from "react";
// import { questions } from "./data";
const Card = ({ onClick, active }) => {
  return (
    <Flex justifyContent="center">
      <Box
        borderRadius="10px"
        width="full"
        height={150}
        bgColor={active ? "red" : "blue.600"}
        onClick={onClick}
      ></Box>
    </Flex>
  );
};

const CrossBlockGrid = ({
  numberOfCards,
  activeCards,
  selectedCards,
  setSelectedCards,
  started,
  setStarted,
}) => {
  useEffect(() => {
    activeCards.forEach((index, i) => {
      setTimeout(() => {
        setSelectedCards([index]);
      }, (i + 1) * 300);
    });
    setTimeout(() => {
      setSelectedCards([]);
      setStarted(true);
    }, (activeCards.length + 1) * 300);
  }, [setSelectedCards, setStarted, activeCards]);
  return (
    <Grid
      // width="600px"
      // height="400px"
      templateColumns="repeat(5, 1fr)"
      dir="ltr"
      gap={4}
    >
      {Array.from(new Array(numberOfCards))
        .map((_, i) => i)
        .map((index) => (
          <Card
            active={(selectedCards || []).indexOf(index) !== -1}
            key={index}
            onClick={() => {
              if (!started) return;
              const newSelectedCards = selectedCards.slice();
              if (selectedCards.indexOf(index) === -1) {
                newSelectedCards.push(index);
              }
              setSelectedCards(newSelectedCards);
            }}
          />
        ))}
    </Grid>
  );
};

export default CrossBlockGrid;
