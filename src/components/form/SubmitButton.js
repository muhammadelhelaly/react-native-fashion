import React from "react";
import { View, StyleSheet } from "react-native";
import { useFormikContext } from "formik";

import Button from "./../Button";

function SubmitButton({ label }) {
  const { handleSubmit } = useFormikContext();

  return (
    <View style={styles.container}>
      <Button label={label} onPress={handleSubmit} variant="primary" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { justifyContent: "center", alignItems: "center", marginTop: 20 }
});

export default SubmitButton;
