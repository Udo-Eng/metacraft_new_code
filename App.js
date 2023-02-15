// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import OnBoardingScreen from "./screens/onBoardingScreens/onBoarding";
// import OnBoardingScreen from "./screens/onBoardingScreens/OnBoardingScreen";
// import OnBoardingScreen1 from "./screens/onBoarding1";
// import OnBoardingScreen2 from "./screens/onBoarding2";
// import GettingStarted from "./screens/GettingStarted";
// import SuccessScreen from "./screens/Success";
// import VerifyPhoneNumber from "./screens/VerifyPhoneNumber";
// import SignUp from "./screens/SignUp";
import SignIn from "./screens/SignIn";
import  ArtisanOnBoardingScreen from "./screens/onBoardingScreens/ArtisanOnBoardingScreen";
import  ClientOnBoardingScreen from "./screens/onBoardingScreens/ClientOnBoardingScreen";
import AccountSelectionScreen  from "./screens/AccountSelectionScreen";

const Stack = createNativeStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen  options={{headerShown : false}} name="onboardingscreen" component={OnBoardingScreen} /> */}
        {/* <Stack.Screen  options={{headerShown : false}} name="onboarding" component={OnBoardingScreen} /> */}
        <Stack.Screen  options={{headerShown : false}} name="accountselection" component={AccountSelectionScreen} />
        <Stack.Screen  options={{headerShown : false}} name="artisanonboarding" component={ArtisanOnBoardingScreen} />
         <Stack.Screen  options={{headerShown : false}} name="clientonboarding" component={ClientOnBoardingScreen} />
         <Stack.Screen  options={{headerShown : false}} name="signin" component={SignIn} />
        {/* <Stack.Screen  options={{headerShown : false}} name="onboardingfirst" component={OnBoardingScreen1} />
        <Stack.Screen  options={{headerShown : false}} name="onboardingsecond" component={OnBoardingScreen2} />
        <Stack.Screen  options={{headerShown : false}} name="gettingstarted" component={GettingStarted} /> 
        <Stack.Screen  options={{headerShown : false}} name="signup" component={SignUp} />
        <Stack.Screen  options={{headerShown : false}} name="verifyphonenumber" component={VerifyPhoneNumber} />
        
        <Stack.Screen  options={{headerShown : false}} name="success" component={SuccessScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
