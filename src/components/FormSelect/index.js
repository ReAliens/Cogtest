import React, { useCallback, useEffect, useState } from "react";
import Select, { components } from "react-select";
import { useFormContext, Controller } from "react-hook-form";
import { FormControl, FormLabel, Text } from "@chakra-ui/react";
import customStyles from "./styles";

const SingleValue = ({ children, ...props }) => (
  <components.SingleValue {...props}>{children}</components.SingleValue>
);

const handleErrors = (errors, id) => {
  if (!errors || !id) return "";
  const [parentId, ...nested] = id?.split?.(".") || [];
  if (!nested?.length) return errors[id]?.message;
  return handleErrors(errors[parentId], nested?.join("."));
};

const FormSelect = ({
  options,
  id,
  defaultValue,
  onChange,
  containerProps,
  labelSize,
  labelWeight,
  label,
  validation,
  notRequiredLabel,
  ...props
}) => {
  const [value, setValue] = useState(defaultValue);
  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  const changeInput = useCallback(
    (newValue) => {
      setValue(newValue);
      onChange(newValue);
    },
    [onChange]
  );
  const { control, errors } = useFormContext?.() || {};

  return (
    <>
      <FormControl {...containerProps}>
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
        <Controller
          as={Select}
          name={id}
          isClearable
          value={value}
          rules={validation}
          components={{ SingleValue }}
          options={options}
          onChange={changeInput}
          control={control}
          styles={customStyles}
          dir="rtl"
          {...props}
        />
        {handleErrors(errors, id) && (
          <Text dir="rtl" fontSize="sm" mt={2} color="red">
            {handleErrors(errors, id)}
          </Text>
        )}
      </FormControl>
    </>
  );
};

export default FormSelect;
