import { Flex, Text, useDisclosure, useToast } from "@chakra-ui/react";
import React, { useCallback, useContext, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import StartTestButton from "../../components/Button";
import { UserInfoContext } from "../../contexts/userContext";
import FormInput from "../formInput";
import useUpdateUserInfo from "../../hooks/useUpdateUserInfo";
import FinalResultModal from "../FinalResultModal";

const FinishPage = ({ testName, type }) => {
  const { userInfo } = useContext(UserInfoContext);
  const [finalData, setFinalData] = useState();
  const { onOpen, isOpen, onClose } = useDisclosure();
  const {
    submitUpdateUserInfo,
    submitUpdateUserInfoLoading,
  } = useUpdateUserInfo();
  const toast = useToast();
  const methods = useForm();
  const { handleSubmit } = methods;
  const submit = useCallback(
    async (values) => {
      const UpdatedUserInfo = {
        ...values,
        id: userInfo?.payload?.id,
      };

      const data = await submitUpdateUserInfo(UpdatedUserInfo);
      setFinalData(data);
      if (data?.message === "قيمة البريد الالكتروني مُستخدمة من قبل") {
        toast({
          position: "top-right",
          title: "حدث خطأ",
          description: `${data?.message}`,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      } else if (
        data?.message ===
        "يجب أن يكون البريد الالكتروني عنوان بريد إلكتروني صحيح البُنية"
      ) {
        toast({
          position: "top-right",
          title: "حدث خطأ",
          description: `${data?.message}`,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      } else {
        toast({
          position: "top-right",
          description: `${data?.message}`,
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        onOpen();
      }
    },
    [userInfo, submitUpdateUserInfo, toast, onOpen]
  );

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(submit)}>
          <Flex
            paddingTop="20px"
            h="100%"
            w="70vw"
            flexDir="column"
            borderRadius="20px"
          >
            <Flex
              justifyContent="center"
              borderRadius="20px"
              paddingBottom="20px"
              alignItems="center"
              marginTop="30px"
              bg="#E4E6EF"
              paddingX="20px"
              h="100%"
              flexDir="column"
            >
              <Flex
                flexDir="column"
                padding="20px"
                marginTop="50px"
                justifyContent="center"
                w="100%"
                borderRadius="10px"
                bg="white"
                dir="rtl"
              >
                <Flex justifyContent="center">
                  <Text dir="rtl">
                    تم انتهاء الاختبار بنجاح الرجاء تسجيل الخروج ﻹتمام تسجيل
                    الدرجة
                  </Text>
                </Flex>
                <Flex justifyContent="center">
                  <Text>
                    الرجاء تسجيل البريد الإلكترونى لمتابعة الاختبارات الجديدة
                  </Text>
                </Flex>

                <Flex
                  marginTop="20px"
                  justifyContent="center"
                  paddingX={["0px", "0px", "40px", "100px"]}
                >
                  <FormInput
                    id="email"
                    placeholder="البريد الإلكترونى "
                    labelSize={["12px", "14px", "16px", "16px"]}
                    label=" البريد الإلكرونى "
                    type="email"
                  />
                </Flex>
              </Flex>
              <Flex marginTop="20px">
                <StartTestButton
                  buttonText={
                    type === "lastExam" ? "تسجيل خروج" : "ابدأ الاختبار التالى"
                  }
                  isLoading={submitUpdateUserInfoLoading}
                  onClick={handleSubmit(submit)}
                />
              </Flex>
            </Flex>
          </Flex>
        </form>
      </FormProvider>
      <FinalResultModal
        isOpen={isOpen}
        onClose={onClose}
        endMessage={finalData?.message}
        score={finalData?.payload}
      />
    </>
  );
};

export default FinishPage;
