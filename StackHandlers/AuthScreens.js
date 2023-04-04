import React from "react";
import SignUp from "../screens/Auth/SignUp";
import SignIn from "../screens/Auth/SignIn";
import SuccessScreen from "../screens/Auth/Success";
import VerifyPhoneNumber from "../screens/Auth/VerifyPhoneNumber";

const AuthScreens = (Stack) => {
  return (
    <>
      <Stack.Screen
        options={{ headerShown: false }}
        name="signin"
        component={SignIn}
      />

      <Stack.Screen
        options={{ headerShown: false }}
        name="signup"
        component={SignUp}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="verifyphonenumber"
        component={VerifyPhoneNumber}
      />

      <Stack.Screen
        options={{ headerShown: false }}
        name="success"
        component={SuccessScreen}
      />
    </>
  );
};



export default AuthScreens;