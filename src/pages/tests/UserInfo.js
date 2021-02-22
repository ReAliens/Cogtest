import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import StartTestButton from "../../components/Button";
import FormInput from "../../components/formInput";

const UserInfo = () => {
  const methods = useForm();
  const { handleSubmit } = methods;
  const submit = (data) => {
    console.log(data);
  };
  console.log("data");
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
        <Flex marginX="20px" dir="rtl">
          <Text>الاختبارات</Text>
        </Flex>
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
            w="100%"
            borderRadius="10px"
            bg="white"
            flexDir="column"
          >
            <Flex top="0px" justifyContent="center" alignItems="center">
              <Text fontWeight="bold" fontSize="22px">
                تسجيل البيانات
              </Text>
            </Flex>
            <Flex>
              <FormProvider {...methods}>
                <form onSubmit={handleSubmit(submit)}>
                  <>
                    <FormInput id="test" name="test" />
                    <StartTestButton
                      buttonText="test"
                      onClick={handleSubmit(submit)}
                    />
                  </>
                </form>
              </FormProvider>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default UserInfo;
