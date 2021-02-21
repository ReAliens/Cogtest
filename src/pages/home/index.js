import { Box, Flex, Grid, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import StartTestButton from "../../components/Button";
import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa";

const Home = () => {
  return (
    <Box margin="auto">
      <Flex
        borderRadius="10px"
        paddingTop="20px"
        h="750px"
        w="1140px"
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
            الرئيسية
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
                  عزيزي الطالب / عزيزتي الطالبة
                </Text>
                <Flex justifyContent="center">
                  <Text
                    fontFamily="sans-serif"
                    display="inline-block"
                    fontSize="16px"
                    whiteSpace="break-spaces"
                  >
                    السلام عليكم ورحمة الله وبركاته
                  </Text>
                </Flex>
              </Grid>
              <Flex dir="rtl" alignItems="center">
                <Text fontSize="20px">
                  <Icon as={FaAngleDoubleRight} /> بين يديك مجموعة اختبارات تهدف
                  لقياس بعض القدرات المعرفية؛ وذلك بغرض البحث العلمي فقط، وحيث
                  أن لتجربتك الأهمية الكبرى في هذا الموضوع كونك أحد الطلاب؛ لذا
                  أرجو منك التكرم بالأداء على الاختبارات المعرفية التالية التي
                  تعتمد على السرعة والدقة، من خلال تخصيص بعضا من وقتك، علما بأن
                  ذلك لا يتطلب وقتا طويلا للأداء، قم بقراءة تعليمات كل اختبار
                  قراءة متأنية ثم سيعرض بعض المهام التجريبية (أمثلة) قبل البدأ
                  في كل اختبار للتأكد من استيعابك لطريقة الاختبار{" "}
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
                  . علماً بأن المعلومات التي ستجمع من استجابتك سيتم التعامل معها
                  بسرية تامة
                </Text>
                <Flex justifyContent="center">
                  <Text fontSize="18px" fontWeight="bold">
                    شاكرين ومقدرين حسن تعاونك
                  </Text>
                </Flex>
              </Grid>
              <Grid marginLeft="30px" templateRows="1fr 1fr">
                <Text fontSize="18px" fontWeight="bold" marginLeft="40px">
                  الباحث
                </Text>
                <Text fontSize="18px" fontWeight="bold">
                  علي مستور الزهراني
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
