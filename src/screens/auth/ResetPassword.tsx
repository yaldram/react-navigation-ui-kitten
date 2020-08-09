import { Button, Layout, LayoutElement } from "@ui-kitten/components";
import { Formik, FormikProps } from "formik";
import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { useSafeArea } from "react-native-safe-area-context";

import { FormInput } from "../../components/FormInput";
import { ToolBar } from "../../components/Toolbar";
import {
  ResetPasswordData,
  ResetPasswordSchema,
} from "../../data/reset-password.model";
import { AppRoute } from "../../navigation/app.routes";
import { ResetPasswordScreenProps } from "../../navigation/auth.navigator";

export const ResetPasswordScreen = (
  props: ResetPasswordScreenProps
): LayoutElement => {
  const insets = useSafeArea();

  const onFormSubmit = (values: ResetPasswordData): void => {
    navigateSignIn();
  };

  const navigateSignIn = (): void => {
    props.navigation.navigate(AppRoute.SIGN_IN);
  };

  const renderForm = (
    props: FormikProps<ResetPasswordData>
  ): React.ReactFragment => (
    <>
      <FormInput
        id="email"
        style={styles.formControl}
        placeholder="Email"
        keyboardType="email-address"
      />
      <Button
        style={styles.button}
        // @ts-ignore
        onPress={props.handleSubmit}
      >
        DONE
      </Button>
    </>
  );

  return (
    <>
      <ImageBackground
        style={[styles.appBar, { paddingTop: insets.top }]}
        source={require("../../assets/image-background.jpeg")}
      >
        <ToolBar appearance="control" onBackPress={props.navigation.goBack} />
      </ImageBackground>
      <Layout style={styles.formContainer}>
        <Formik
          initialValues={ResetPasswordData.empty()}
          validationSchema={ResetPasswordSchema}
          onSubmit={onFormSubmit}
        >
          {renderForm}
        </Formik>
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({
  appBar: {
    height: 192,
  },
  formContainer: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  formControl: {
    marginVertical: 4,
  },
  button: {
    marginVertical: 24,
  },
});
