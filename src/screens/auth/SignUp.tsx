import { Button, Layout, LayoutElement } from "@ui-kitten/components";
import { Formik, FormikProps } from "formik";
import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { useSafeArea } from "react-native-safe-area-context";

import { FormInput } from "../../components/FormInput";
import { ToolBar } from "../../components/Toolbar";
import { SignUpSchema, SignUpData } from "../../data/signup.model";
import { AppRoute } from "../../navigation/app.routes";
import { SignUpScreenProps } from "../../navigation/auth.navigator";

export function SignUpScreen(props: SignUpScreenProps): LayoutElement {
  const insets = useSafeArea();

  const navigateHome = () => {
    props.navigation.navigate(AppRoute.HOME);
  };

  const navigateSignIn = () => {
    props.navigation.navigate(AppRoute.SIGN_IN);
  };

  const onFormSubmit = (values: SignUpData): void => {
    navigateHome();
  };

  const renderForm = (props: FormikProps<SignUpData>) => (
    <>
      <FormInput
        id="email"
        style={styles.formControl}
        placeholder="Email"
        keyboardType="email-address"
      />
      <FormInput
        id="password"
        style={styles.formControl}
        placeholder="Password"
      />
      <FormInput
        id="username"
        style={styles.formControl}
        placeholder="Username"
      />

      <Button
        style={styles.submitButton}
        // @ts-ignore
        onPress={props.handleSubmit}
      >
        SIGN UP
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
          initialValues={SignUpData.empty()}
          validationSchema={SignUpSchema}
          onSubmit={onFormSubmit}
        >
          {renderForm}
        </Formik>
        <Button
          style={styles.haveAccountButton}
          appearance="ghost"
          status="basic"
          onPress={navigateSignIn}
        >
          Already have an account?
        </Button>
      </Layout>
    </>
  );
}

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
  submitButton: {
    marginVertical: 24,
  },
  haveAccountButton: {
    alignSelf: "center",
  },
});
