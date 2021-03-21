import React from "react";
import { FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

const handleErrors = (errors, id) => {
  if (!errors) return "";
  const [parentId, ...nested] = id?.split(".");
  if (!nested?.length) return errors[id]?.message;
  return handleErrors(errors[parentId], nested?.join("."));
};

const FormInput = ({
  id,
  label,
  type,
  validation,
  notRequiredLabel,
  labelSize,
  labelWeight,
  containerProps,
  placeholder,
  width,
  maxW,
  ...props
}) => {
  const { register, errors } = useFormContext();

  return (
    <FormControl maxW="100%" {...containerProps}>
      {label ? (
        <FormLabel
          htmlFor={id}
          dir="rtl"
          color={handleErrors(errors, id) ? "red" : "blackAlpha"}
          fontSize={labelSize}
          fontWeight={labelWeight}
        >
          {label}
          {validation?.required ? "*" : notRequiredLabel}
        </FormLabel>
      ) : null}
      <Input
        w="100%"
        type={type}
        id={id}
        name={id}
        aria-describedby={`${id}-helper-text`}
        ref={register(validation)}
        isInvalid={!!handleErrors(errors, id)}
        errorBorderColor="red"
        dir="rtl"
        placeholder={placeholder}
        {...props}
      />
      {handleErrors(errors, id) && (
        <Text dir="rtl" fontSize="sm" mt={2} color="red">
          {handleErrors(errors, id)}
        </Text>
      )}
    </FormControl>
  );
};

export default FormInput;
