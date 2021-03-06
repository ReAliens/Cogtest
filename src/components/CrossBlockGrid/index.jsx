import { Box, Flex, Grid, Icon } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";

const Card = ({ onClick, active, activeType }) => {
  return (
    <Flex justifyContent="center">
      <Box
        borderRadius="10px"
        width="full"
        height={150}
        bgColor={active && activeType === "flash" ? "red" : "blue.600"}
        onClick={onClick}
        margin="auto"
      >
        <Flex justifyContent="center" alignItems="center" height="100%">
          {active && activeType === "check" && (
            <Icon color="#0ddf3d" height="80px" width="80px" as={FaCheck} />
          )}
        </Flex>
      </Box>
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
  const [activeType, setActiveType] = useState("flash");
  useEffect(() => {
    activeCards.forEach((index, i) => {
      setTimeout(() => {
        setSelectedCards([index]);
      }, (i + 1) * 300);
    });
    setTimeout(() => {
      setSelectedCards([]);
      setStarted(true);
      setActiveType("check");
    }, (activeCards.length + 1) * 300);
  }, [setSelectedCards, setStarted, activeCards, setActiveType]);
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
            activeType={activeType}
          />
        ))}
    </Grid>
  );
};

export default CrossBlockGrid;
