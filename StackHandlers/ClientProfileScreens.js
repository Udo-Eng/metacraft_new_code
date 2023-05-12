import React from "react";
import Home from "../screens/ClientProfile/Home";
import RequestFormScreen from "../screens/ClientProfile/RequestFormScreen";

const ClientProfileScreens = (Stack) => {
  return (
    <>
    {/* Client Home Screen  */}
      {/* <Stack.Screen
        options={{ headerShown: false }}
        name="home"
        component={Home}
      /> */}

      {/* RequestFormScreen */}
      <Stack.Screen
        options={{ headerShown: false }}
        name="requestForm"
        component={RequestFormScreen}
      />
    </>
  );
};

export default ClientProfileScreens;
