import {
  Box,
  Flex,
  Grid,
  Radio,
  RadioGroup,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useCallback, useContext, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import StartTestButton from "../../components/Button";
import FormInput from "../../components/formInput";
import FormSelect from "../../components/FormSelect";
import { UserInfoContext } from "../../contexts/userContext";
import useUserInfo from "../../hooks/useUserInfo";

const UserInfo = () => {
  const [radioValue, setRadioValue] = useState();
  const { userInfo, setUserInfo } = useContext(UserInfoContext);
  const { submitUserInfo, submitUserInfoLoading } = useUserInfo();
  const toast = useToast();
  const history = useHistory();
  const methods = useForm();
  const { handleSubmit, watch } = methods;
  const watchedStaging = watch(["stage"]);
  const submit = useCallback(
    async (values) => {
      const userINfo = {
        ...values,
        stage: values?.stage?.value,
        major: values?.type?.value || "",
        gender: radioValue,
      };
      const data = await submitUserInfo(userINfo);
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
        setUserInfo(data);
        toast({
          position: "top-right",
          description: `${data?.message}`,
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        history.push("/tests/stroop");
      }
    },
    [submitUserInfo, history, radioValue, setUserInfo, toast]
  );

  return (
    <Box height="100%" overflow="hidden">
      <Flex
        borderRadius="10px"
        paddingTop="20px"
        h="100%"
        overflow="auto"
        maxW="1000px"
        bg="#f9f9fc"
        flexDir="column"
        overflow="hidden"
      >
        <Flex marginX="20px" dir="rtl">
          <Text>تسجيل البيانات</Text>
        </Flex>
        <Flex
          justifyContent="center"
          paddingBottom="20px"
          marginTop="30px"
          bg="#E4E6EF"
          paddingX="20px"
          // h="70vh"
          borderRadius="10px"
          // overflow="auto"
        >
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(submit)}>
              <Grid
                // h="500px"
                paddingY="15px"
                marginTop="20px"
                justifyContent="center"
                w="800px"
                borderRadius="10px"
                bg="white"
                templateRows="repeat(7,1fr)"
                gap={2}
                // overflowY="auto"
              >
                <Flex top="0px" justifyContent="center" alignItems="center">
                  <Text fontWeight="bold" fontSize="22px">
                    تسجيل البيانات
                  </Text>
                </Flex>
                <Flex>
                  <FormInput
                    id="name"
                    placeholder="من فضلك ادخل اسمك"
                    type="text"
                    label="اسمك"
                    validation={{
                      required: {
                        value: true,
                        message: "هذا الحقل مطلوب",
                      },
                    }}
                    width="500px"
                  />
                </Flex>
                <Flex width="100%">
                  <FormSelect
                    id="stage"
                    name="stage"
                    placeholder="اختر المرحلة الدراسية"
                    label="المرحلة الدراسية"
                    options={[
                      { value: "primary", label: "ابتدائى" },
                      {
                        value: "middle",
                        label: "متوسط",
                      },
                      {
                        value: "secondary",
                        label: "ثانوي",
                      },
                      {
                        value: "master",
                        label: "دراسات عليا",
                      },
                    ]}
                    validation={{
                      required: {
                        value: true,
                        message: "هذا الحقل مطلوب",
                      },
                    }}
                  />
                </Flex>
                {watchedStaging?.stage?.value === "master" && (
                  <Flex w="100%">
                    <FormSelect
                      id="type"
                      placeholder=" من فضلك اختر التخصص "
                      label=" اختر التخصص"
                      options={[
                        { value: "humanScience", label: "علوم انسانية" },
                        {
                          value: "appliedScience",
                          label: "علوم تطبيقية",
                        },
                      ]}
                      validation={{
                        required: {
                          value: true,
                          message: "هذا الحقل مطلوب",
                        },
                      }}
                    />
                  </Flex>
                )}
                <Flex>
                  <FormInput
                    id="gpa"
                    placeholder="من فضلك ادخل المعدل الدراسى"
                    type="text"
                    label="المعدل الدراسى"
                    validation={{
                      required: {
                        value: true,
                        message: "هذا الحقل مطلوب",
                      },
                    }}
                    width="500px"
                  />
                </Flex>
                <Flex>
                  <FormInput
                    id="age"
                    placeholder="العمر"
                    type="number"
                    label=" العمر"
                    validation={{
                      required: {
                        value: true,
                        message: " هذا الحقل مطلوب ",
                      },
                      min: {
                        value: 5,
                        message: "اقل عمر يمكن ادخاله خمس سنوات",
                      },
                    }}
                    width="500px"
                  />
                </Flex>
                <Flex>
                  <FormInput
                    id="email"
                    placeholder="البريد الإلكترونى"
                    type="email"
                    label=" البريد الإلكترونى"
                    width="500px"
                  />
                </Flex>
                <Flex dir="rtl">
                  <RadioGroup
                    id="gender"
                    name="gender"
                    onChange={setRadioValue}
                    value={radioValue}
                  >
                    <Flex
                      flexDir="row"
                      justifyItems="self-start"
                      direction="rtl"
                      marginBottom="20px"
                    >
                      <Radio dir="rtl" value="m">
                        ذكر
                      </Radio>
                      <Radio dir="rtl" value="f">
                        أنثى
                      </Radio>
                    </Flex>
                  </RadioGroup>
                </Flex>
              </Grid>
              <Flex marginTop="10px" justifyContent="center">
                <StartTestButton
                  disabled={!radioValue}
                  isLoading={submitUserInfoLoading}
                  buttonText="تسجيل"
                  onClick={handleSubmit(submit)}
                />
              </Flex>
            </form>
          </FormProvider>
        </Flex>
      </Flex>
    </Box>
  );
};

export default UserInfo;
