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
    <Box margin="auto">
      <Flex
        borderRadius="10px"
        paddingTop="20px"
        h="70vh"
        w="800px"
        bg="#f9f9fc"
        flexDir="column"
      >
        <Grid
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
        >
          <Flex
            padding="20px"
            marginTop="20px"
            justifyContent="center"
            borderRadius="10px"
            bg="white"
          >
            <Grid w="100%" templateRows="0.7fr 1fr 1fr 0.5fr">
              <Grid
                w="100%"
                borderBottom="2px dashed #EBEDF3"
                justifyContent="center"
                h="80px"
                templateRows="1fr 1fr"
              >
                <Text
                  fontFamily="sans-serif"
                  display="inline-block"
                  fontSize="30px"
                  whiteSpace="break-spaces"
                >
                  {header}
                </Text>
                <Flex justifyContent="center">
                  <Text
                    fontFamily="sans-serif"
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
              <Grid marginLeft="30px" templateRows="1fr 1fr">
                <Text fontSize="18px" fontWeight="bold" marginLeft="40px">
                  {ending}
                </Text>
                <Text fontSize="18px" fontWeight="bold">
                  {signature}
                </Text>
              </Grid>
            </Grid>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Home;
