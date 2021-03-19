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
  const { setUserInfo } = useContext(UserInfoContext);
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

      try {
        const data = await submitUserInfo(userINfo);
        setUserInfo(data);
        toast({
          position: "top-right",
          description: `${data?.message}`,
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        history.push("/tests/stroop");
      } catch (err) {
        console.log(err);
        toast({
          position: "top-right",
          title: "حدث خطأ",
          description:
            "حدث خطأ اثناء عملية تسجيل البيانات الرجاء المحاولة مرة اخرى",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    },
    [submitUserInfo, history, radioValue, setUserInfo, toast]
  );

  return (
    <Box margin="auto" overflowX="hidden" overflow="hidden">
      <Flex
        borderRadius="10px"
        paddingTop="20px"
        h="100%"
        minW="200px"
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
          borderRadius="10px"
        >
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(submit)}>
              <Grid
                paddingY="15px"
                paddingX="30px"
                marginTop="20px"
                justifyContent="center"
                // W="800px"
                w="70vw"
                borderRadius="10px"
                bg="white"
                templateRows="repeat(6,1fr)"
                gap={2}
              >
                <Flex top="0px" justifyContent="center" alignItems="center">
                  <Text fontWeight="bold" fontSize="22px">
                    تسجيل البيانات
                  </Text>
                </Flex>
                <Flex
                  w={["200px", "400px", "500px", "600px"]}
                  justifyContent="flex-end"
                >
                  <FormInput
                    id="name"
                    placeholder="من فضلك ادخل اسمك"
                    type="text"
                    label="اسمك  (اختيارى)"
                    labelSize={["12px", "14px", "16px", "16px"]}
                    validation={{
                      minLength: {
                        value: 3,
                        message: "يجب الا يقل الاسم عن ثلاثة اخرف",
                      },
                    }}
                  />
                </Flex>
                <Flex
                  w={["200px", "400px", "500px", "600px"]}
                  justifyContent="flex-end"
                >
                  <FormSelect
                    id="stage"
                    name="stage"
                    placeholder="اختر المرحلة الدراسية"
                    label="المرحلة الدراسية"
                    labelSize={["12px", "14px", "16px", "16px"]}
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
                  <Flex
                    w={["200px", "400px", "500px", "600px"]}
                    justifyContent="flex-end"
                  >
                    <FormSelect
                      id="type"
                      placeholder=" من فضلك اختر التخصص "
                      label=" اختر التخصص"
                      labelSize={["12px", "14px", "16px", "16px"]}
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
                <Flex
                  w={["200px", "400px", "500px", "600px"]}
                  justifyContent="flex-end"
                >
                  <FormInput
                    id="gpa"
                    placeholder="من فضلك ادخل المعدل الدراسى"
                    type="number"
                    label="المعدل الدراسى"
                    labelSize={["12px", "14px", "16px", "16px"]}
                    validation={{
                      required: {
                        value: true,
                        message: "هذا الحقل مطلوب",
                      },
                      min: {
                        value: 0,
                        message: "المعدل الدراسي يجب ان يكون بين الصفر والمائة",
                      },
                      max: {
                        value: 100,
                        message: "المعدل الدراسي يجب ان يكون بين الصفر والمائة",
                      },
                    }}
                  />
                </Flex>
                <Flex
                  w={["200px", "400px", "500px", "600px"]}
                  justifyContent="flex-end"
                >
                  <FormInput
                    id="age"
                    placeholder="العمر"
                    labelSize={["12px", "14px", "16px", "16px"]}
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
                      max: {
                        value: 100,
                        message: "اقصى عمر يمكن ادخاله مائة عام",
                      },
                    }}
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
                      <Radio marginRight="20px" dir="rtl" value="f">
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
