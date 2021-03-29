import { Box, Flex, Grid, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import StartTestButton from "../../components/Button";
import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa";
import { Breakpoint } from "react-socks";

const Home = ({
  title,
  header,
  welcome,
  intro,
  tip,
  ending,
  thanking,
  signature,
  email,
  copyright,
}) => {
  return (
    <>
      <Breakpoint large up>
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
                fontSize="18px"
              >
                {title}
              </Text>
            </Grid>
            <Flex
              justifyContent="center"
              paddingBottom="50px"
              marginTop="30px"
              bg="#E4E6EF"
              paddingX="20px"
              h="100%"
              borderRadius="10px"
              flexDir="column"
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
              <Flex justifyContent="flex-start" marginTop="20px">
                <Text fontWeight="bold" fontSize="16px" color="#2B6CB0">
                  <a href={`mailto:${email}`} target="_blank" rel="noreferrer">
                    {email}
                  </a>
                </Text>
              </Flex>
              <Flex justifyContent="center">
                <a href="https://devnile.com/" target="_blank" rel="noreferrer">
                  <Text fontWeight="bold">{copyright} </Text>
                </a>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Breakpoint>
      <Breakpoint medium down>
        <Box borderRadius="10px" margin="auto">
          <Flex
            borderRadius="10px"
            paddingTop="30px"
            h="100%"
            minW="200px"
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
                <StartTestButton
                  textSize="14px"
                  padding="10px"
                  width="100px"
                  buttonText="ابدأ الاختبار الآن"
                />
              </Link>
              <Text
                color="#181C32 "
                justifyContent="flex-end"
                alignItems="flex-end"
                fontWeight="bold"
                fontSize="14px"
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
              flexDir="column"
            >
              <Grid
                padding="20px"
                marginTop="20px"
                justifyContent="center"
                borderRadius="10px"
                bg="white"
                w="100%"
                h="100%"
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
                    fontSize="16px"
                    whiteSpace="break-spaces"
                  >
                    {header}
                  </Text>
                  <Flex justifyContent="center">
                    <Text
                      display="inline-block"
                      fontSize="14px"
                      whiteSpace="break-spaces"
                    >
                      {welcome}
                    </Text>
                  </Flex>
                </Grid>
                <Flex marginY="20px" dir="rtl" alignItems="center">
                  <Text fontSize="15px">
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
                  marginBottom="30px"
                >
                  <Text dir="rtl" fontSize="15px" fontWeight="bold">
                    {tip}
                  </Text>
                  <Flex justifyContent="center">
                    <Text dir="rtl" fontSize="15px" fontWeight="bold">
                      {thanking}
                    </Text>
                  </Flex>
                </Grid>
                <Grid
                  marginTop={["60px", "10px", "10px", "10px"]}
                  justifyContent="flex-start"
                  templateRows="1fr 1fr"
                >
                  <Text fontSize="14px" fontWeight="bold" marginLeft="50px">
                    {ending}
                  </Text>
                  <Text fontSize="14px" fontWeight="bold">
                    {signature}
                  </Text>
                </Grid>
              </Grid>
              <Flex justifyContent="flex-start" marginTop="20px">
                <Text fontWeight="bold" fontSize="14px" color="#2B6CB0">
                  <a href={`mailto:${email}`} target="_blank" rel="noreferrer">
                    {email}
                  </a>
                </Text>
              </Flex>
              <Flex justifyContent="center">
                <a href="https://devnile.com/" target="_blank" rel="noreferrer">
                  <Text fontWeight="bold" fontSize="12px" dir="rtl" mt="20px">
                    {copyright}{" "}
                  </Text>
                </a>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Breakpoint>
    </>
  );
};

export default Home;
