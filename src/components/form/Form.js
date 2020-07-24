import React from "react";
import { View, StyleSheet } from "react-native";
import { Formik } from "formik";

function AppForm({ initialValues, onSubmit, validationSchema, children }) {
  return (
    <View style={styles.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {() => <>{children}</>}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30
  }
});

export default AppForm;
