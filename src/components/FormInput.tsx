import { Input, InputProps } from "@ui-kitten/components";
import { useFormikContext } from "formik";
import React from "react";

import { AlertTriangleIcon } from "../assets/Icons";

interface FormInputProps extends InputProps {
  id: string;
}

export function FormInput({ id, ...inputProps }: FormInputProps) {
  const formContext = useFormikContext();

  // @ts-ignore
  const { [id]: error } = formContext.errors;

  const fieldProps: Partial<InputProps> = {
    status: error && "danger",
    captionIcon: error && AlertTriangleIcon,
  };

  return (
    <Input
      {...inputProps}
      {...fieldProps}
      caption={error}
      onChangeText={formContext.handleChange(id)}
    />
  );
}
