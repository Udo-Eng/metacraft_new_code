import React from "react";
import ArtisanOnBoardingScreen from "../screens/onBoardingScreens/ArtisanOnBoardingScreen";
import ClientOnBoardingScreen from "../screens/onBoardingScreens/ClientOnBoardingScreen";
import AccountSelectionScreen from "../screens/AccountSelectionScreen";


 const OnBoardingScreens = (Stack) => {
  return (
    <>
      <Stack.Screen
        options={{ headerShown: false }}
        name="accountselection"
        component={AccountSelectionScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="artisanonboarding"
        component={ArtisanOnBoardingScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="clientonboarding"
        component={ClientOnBoardingScreen}
      />
    </>
  );
};


export default  OnBoardingScreens;
