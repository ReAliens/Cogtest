import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import StartTestButton from "../../../../../components/Button";

const Introduction = () => {
  return (
    <Box margin="auto">
      <Flex
        borderRadius="10px"
        paddingTop="20px"
        h="100%"
        w="1140px"
        bg="#f9f9fc"
        flexDir="column"
      >
        <Flex marginX="20px" dir="rtl">
          <Text> اختبار الضبط التنفيذي </Text>
        </Flex>
        <Flex
          justifyContent="center"
          paddingBottom="100px"
          marginTop="30px"
          bg="#E4E6EF"
          paddingX="20px"
          h="100%"
          flexDir="column"
          dir="rtl"
        >
          <Flex
            padding="20px"
            marginTop="20px"
            justifyContent="center"
            w="100%"
            borderRadius="10px"
            bg="white"
            dir="rtl"
          >
            <Text dir="rtl">
              يتكون هذا الاختبار من فقرتين رئيسيتين <br /> الفقرة الاولى : مهام
              استروب و يعتمد هذا الاختبار على لون الحافز الذى يتم تقديمه سيتم
              عرض بعض الكلمات الملونة وعليك ان تختار الاجابة الصحيحة ما بين
              متعدد بناءاً على لون الكلمة مدة هذا الاختبار خمسة واربعون ثانية{" "}
              <br /> الفقرة الثانية :اختبار الاصدار يعتمد على قياس تأثير
              الملعومات المتضاربة داخل مجموعة التحفيز يجب على الممتحن فى هذا
              الاختبار التركيز على الموضوع المحفز مع تجاهل المحفزات المجاورة
            </Text>
          </Flex>
          <Flex>
            <Link to="/tests/5">
              <StartTestButton buttonText="ابدأ الاختبار" />
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Introduction;
