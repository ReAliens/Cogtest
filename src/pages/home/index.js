import { Box, Flex, Grid, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import StartTestButton from "../../components/Button";
import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa";

const Home = ({
  title,
  header,
  welcome,
  intro,
  tip,
  ending,
  thanking,
  signature,
}) => {
  return (
    <Box borderRadius="10px" margin="auto">
      <Flex
        borderRadius="10px"
        paddingTop="30px"
        h="100%"
        minW="400px"
        bg="#F3F6F9"
        flexDir="column"
      >
        <Grid
          borderRadius="10px"
          paddingX="20px"
          h="30px"
          w="100%"
          display="flex"
          justifyContent="space-between"
          templateColumns="1fr 1fr"
          alignItems="center"
        >
          <Link to="/register">
            <StartTestButton buttonText="ابدأ الاختبار الآن" />
          </Link>
          <Text
            color="#181C32 "
            justifyContent="flex-end"
            alignItems="flex-end"
            fontWeight="bold"
            fontSize="16px"
          >
            {title}
          </Text>
        </Grid>
        <Flex
          justifyContent="center"
          paddingBottom="100px"
          marginTop="30px"
          bg="#E4E6EF"
          paddingX="20px"
          h="100%"
          borderRadius="10px"
        >
          <Grid
            padding="20px"
            marginTop="20px"
            justifyContent="center"
            borderRadius="10px"
            bg="white"
            w="100%"
            h="100%"
            templateRows="0.7fr 1fr 1fr 0.5fr"
          >
            <Grid
              w="100%"
              borderBottom="2px dashed #EBEDF3"
              justifyContent="center"
              h="80px"
              templateRows="1fr 1fr"
            >
              <Text
                display="inline-block"
                fontSize="30px"
                whiteSpace="break-spaces"
              >
                {header}
              </Text>
              <Flex justifyContent="center">
                <Text
                  display="inline-block"
                  fontSize="16px"
                  whiteSpace="break-spaces"
                >
                  {welcome}
                </Text>
              </Flex>
            </Grid>
            <Flex dir="rtl" alignItems="center">
              <Text fontSize="20px">
                <Icon as={FaAngleDoubleRight} />
                {intro}
                <Icon as={FaAngleDoubleLeft} />
              </Text>
            </Flex>
            <Grid
              height="70px"
              templateRows="1fr 1fr"
              alignItems="center"
              justifyContent="center"
              marginTop="30px"
            >
              <Text fontSize="18px" fontWeight="bold">
                {tip}
              </Text>
              <Flex justifyContent="center">
                <Text fontSize="18px" fontWeight="bold">
                  {thanking}
                </Text>
              </Flex>
            </Grid>
            <Grid
              justifyContent="flex-start"
              marginLeft="30px"
              templateRows="1fr 1fr"
            >
              <Text fontSize="18px" fontWeight="bold" marginLeft="50px">
                {ending}
              </Text>
              <Text fontSize="18px" fontWeight="bold">
                {signature}
              </Text>
            </Grid>
          </Grid>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Home;
