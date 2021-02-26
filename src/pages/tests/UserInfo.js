import { Box, Flex, Grid, Radio, RadioGroup, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import StartTestButton from "../../components/Button";
import FormInput from "../../components/formInput";
import FormSelect from "../../components/FormSelect";

const UserInfo = () => {
  const [radioValue, setRadioValue] = useState();
  const history = useHistory();
  console.log(radioValue);
  const methods = useForm();
  const { handleSubmit } = methods;

  const submit = (data) => {
    console.log(data);
    history.push("/tests/stroop");
  };
  console.log("data");
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
          <Text>تسجيل البيانات</Text>
        </Flex>
        <Flex
          justifyContent="center"
          paddingBottom="100px"
          marginTop="30px"
          bg="#E4E6EF"
          paddingX="20px"
          h="100%"
        >
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(submit)}>
              <Grid
                padding="20px"
                marginTop="20px"
                justifyContent="center"
                w="100%"
                borderRadius="10px"
                bg="white"
                templateRows="repeat(auto,1fr)"
                gap={5}
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
                  />
                </Flex>
                <Flex w="100%">
                  <FormSelect
                    id="stage"
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
                        message:'اقل عمر يمكن ادخاله خمس سنوات'
                      },
                    }}
                  />
                </Flex>
                <Flex>
                  <FormInput
                    id="email"
                    placeholder="البريد الإلكترونى"
                    type="email"
                    label=" البريد الإلكترونى"
                  />
                </Flex>
                <Flex>
                  <RadioGroup
                    id="gender"
                    dir="rtl"
                    onChange={setRadioValue}
                    value={radioValue}
                  >
                    <Flex
                      flexDir="row"
                      justifyItems="self-start"
                      direction="rtl"
                    >
                      <Radio dir="rtl" value="male">
                        ذكر
                      </Radio>
                      <Radio dir="rtl" value="female">
                        أنثى
                      </Radio>
                    </Flex>
                  </RadioGroup>
                </Flex>
                <StartTestButton
                  buttonText="تسجيل"
                  onClick={handleSubmit(submit)}
                />
              </Grid>
            </form>
          </FormProvider>
        </Flex>
      </Flex>
    </Box>
  );
};

export default UserInfo;
