import { Box, Flex, Grid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
// import { questions } from "./data";
const Card = ({ onClick, active }) => {
  return (
    <Flex justifyContent="center">
      <Box
        width={100}
        height={150}
        bgColor={active ? "yellow" : "red"}
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
        console.log("SETTING SELECTED", index);
      }, (i + 1) * 500);
    });
    setTimeout(() => {
      setSelectedCards([]);
      setStarted(true);
      console.log("CLEARING");
    }, (activeCards.length + 1) * 500);
  }, [setSelectedCards, setStarted, activeCards]);
  return (
    <Grid templateColumns="repeat(4, 1fr)" dir="ltr" gap={4}>
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
