import { Button, CheckBox, Layout, IconProps } from "@ui-kitten/components";
import { Formik, FormikProps } from "formik";
import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableWithoutFeedback,
} from "react-native";

import { EyeIcon, EyeOffIcon } from "../../assets/Icons";
import { FormInput } from "../../components/FormInput";
import { SignInData, SignInSchema } from "../../data/signin.model";
import { AppRoute } from "../../navigation/app.routes";
import { SignInScreenProps } from "../../navigation/auth.navigator";

export function SignInScreen(props: SignInScreenProps) {
  const [shouldRemember, setShouldRemember] = React.useState(false);
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  const onFormSubmit = (values: SignInData): void => {
    navigateHome();
  };

  const navigateHome = (): void => {
    props.navigation.navigate(AppRoute.HOME);
  };

  const navigateSignUp = (): void => {
    props.navigation.navigate(AppRoute.SIGN_UP);
  };

  const navigateResetPassword = (): void => {
    props.navigation.navigate(AppRoute.RESET_PASSWORD);
  };

  const onPasswordIconPress = (): void => {
    setPasswordVisible(!passwordVisible);
  };

  const renderIcon = (props: IconProps) => (
    <TouchableWithoutFeedback onPress={onPasswordIconPress}>
      {passwordVisible ? <EyeIcon {...props} /> : <EyeOffIcon {...props} />}
    </TouchableWithoutFeedback>
  );

  const renderForm = (props: FormikProps<SignInData>): React.ReactFragment => (
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
        secureTextEntry={!passwordVisible}
        accessoryRight={renderIcon}
      />
      <View style={styles.resetPasswordContainer}>
        <CheckBox
          style={styles.formControl}
          checked={shouldRemember}
          onChange={setShouldRemember}
        >
          Remember Me
        </CheckBox>
        <Button
          appearance="ghost"
          status="basic"
          onPress={navigateResetPassword}
        >
          Forgot password?
        </Button>
      </View>
      <Button
        style={styles.submitButton}
        // @ts-ignore
        onPress={props.handleSubmit}
      >
        SIGN IN
      </Button>
    </>
  );

  return (
    <>
      <ImageBackground
        style={styles.appBar}
        source={require("../../assets/image-background.jpeg")}
      />
      <Layout style={styles.formContainer}>
        <Formik
          initialValues={SignInData.empty()}
          validationSchema={SignInSchema}
          onSubmit={onFormSubmit}
        >
          {renderForm}
        </Formik>
        <Button
          style={styles.noAccountButton}
          appearance="ghost"
          status="basic"
          onPress={navigateSignUp}
        >
          Don't have an account?
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
  resetPasswordContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  formControl: {
    marginVertical: 4,
  },
  submitButton: {
    marginVertical: 24,
  },
  noAccountButton: {
    alignSelf: "center",
  },
});
