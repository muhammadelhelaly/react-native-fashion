import React, { useState } from "react";
import { UIManager, findNodeHandle } from "react-native";
import { useFormikContext } from "formik";

import TextInput from "./TextInput";
import ErrorMessage from "./ErrorMessage";

function AppFormField({ name, width, ...otherProps }) {
  const {
    setFieldTouched,
    setFieldValue,
    errors,
    touched,
    values
  } = useFormikContext();

  const [focusedInputPosition, setFocusedInputPosition] = useState({});

  return (
    <>
      <TextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={text => setFieldValue(name, text)}
        value={values[name]}
        width={width}
        valid={errors[name] === undefined && touched[name]}
        invalid={errors[name] && touched[name]}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormField;
