import { Box, Flex, Grid, Icon } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { useCurrentBreakpointName } from "react-socks";

const Card = ({ onClick, active, activeType, cardsNumber }) => {
  return (
    <Flex justifyContent="center">
      <Box
        borderRadius="10px"
        width={[45, 100, 100, 120]}
        height={[45, 100, 70, 70]}
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
  timeBetweenFlashes = 300,
}) => {
  const breakPointName = useCurrentBreakpointName();
  const [activeType, setActiveType] = useState("flash");
  useEffect(() => {
    setActiveType("flash");
    if (activeCards.length > 0) {
      activeCards.forEach((index, i) => {
        setTimeout(() => {
          setSelectedCards([index]);
        }, (i + 1) * timeBetweenFlashes);
      });
      setTimeout(() => {
        setSelectedCards([]);
        setStarted(true);
        setActiveType("check");
      }, (activeCards.length + 1) * timeBetweenFlashes);
    }
  }, [
    setSelectedCards,
    setStarted,
    setActiveType,
    activeCards,
    timeBetweenFlashes,
  ]);
  return (
    <Grid
      margin="auto"
      templateColumns={
        breakPointName === "medium"
          ? `repeat(${(numberOfCards / 3) >> 0}, 1fr)`
          : breakPointName === "small" || breakPointName === "xsmall"
          ? `repeat(${(numberOfCards / 5) >> 0}, 1fr)`
          : breakPointName === "large"
          ? `repeat(${(numberOfCards / 4) >> 0}, 1fr)`
          : `repeat(${(numberOfCards / 2) >> 0}, 1fr)`
      }
      dir="ltr"
      h="100%"
      gap={4}
    >
      {Array.from(new Array(numberOfCards))
        .map((_, i) => i)
        .map((index) => (
          <Card
            cardsNumber={numberOfCards}
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
