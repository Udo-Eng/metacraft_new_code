// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
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
       
        <Stack.Screen  options={{headerShown : false}} name="accountselection" component={AccountSelectionScreen} />
        <Stack.Screen  options={{headerShown : false}} name="artisanonboarding" component={ArtisanOnBoardingScreen} />
         <Stack.Screen  options={{headerShown : false}} name="clientonboarding" component={ClientOnBoardingScreen} />
         <Stack.Screen  options={{headerShown : false}} name="signin" component={SignIn} />
        {/* 
        <Stack.Screen  options={{headerShown : false}} name="signup" component={SignUp} />
        <Stack.Screen  options={{headerShown : false}} name="verifyphonenumber" component={VerifyPhoneNumber} />
        <Stack.Screen  options={{headerShown : false}} name="success" component={SuccessScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
