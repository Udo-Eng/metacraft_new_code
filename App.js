import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import SuccessScreen from "./screens/Auth/Success";
// import VerifyPhoneNumber from "./screens/Auth/VerifyPhoneNumber";
// import Home from "./screens/Home";
// import SignUp from "./screens/Auth/SignUp";
import SignIn from "./screens/Auth/SignIn";
// import SelectID from "./screens/IDVerification/SelectID";
// import IDForm from "./screens/IDVerification/IDForm";
// import ArtisanOnBoardingScreen from "./screens/onBoardingScreens/ArtisanOnBoardingScreen";
// import ClientOnBoardingScreen from "./screens/onBoardingScreens/ClientOnBoardingScreen";
// import AccountSelectionScreen from "./screens/AccountSelectionScreen";
// import ArtisianProfile from "./screens/Profile/ArtisianProfile";
// import PersonalInfo from "./screens/Profile/PersonalInfo";
// import ReferAndEarn from "./screens/Profile/ReferAndEarn";
// import Settings from "./screens/Profile/Settings";
// import Security from "./screens/Profile/SettingsScreen/Security";
// import Notifications from "./screens/Profile/Notifications/Notifications";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useEffect, useState } from "react";

const Stack = createNativeStackNavigator();

function App() {
  // const [isFirstLaunch, setIsFirstLaunch] = useState(true);

  // useEffect(() => {
  //   AsyncStorage.getItem("isFirstLaunch").then((value) => {
  //     if (value === null) {
  //       AsyncStorage.setItem("isFirstLaunch", "true");
  //       setIsFirstLaunch(false);
  //     } else {
  //       setIsFirstLaunch(true);
  //     }
  //   });
  // }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          options={{ headerShown: false }}
          name="signin"
          component={SignIn}
        />
        {/* <Stack.Screen
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
          name="home"
          component={Home}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="success"
          component={SuccessScreen}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name="selectId"
          component={SelectID}
        />
          <Stack.Screen
          options={{ headerShown: false }}
          name="idform"
          component={IDForm}
        /> */}

        {/* Profile Screen SetUp  */}
        {/* <Stack.Screen
          options={{
            headerTitleAlign: "center",
            headerShadowVisible: false,
            headerStyle:{
              backgroundColor: "#F2F2F2",
            },
            headerTitle: "Profile"
          }}
          name="ArtisianProfile"
          component={ArtisianProfile}
        /> */}

        {/* <Stack.Screen
          options={{
            headerTitleAlign: "center",
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: "#F2F2F2",
            },
            headerTitle: "Personal information",
          }}
          name="personal info"
          component={PersonalInfo}
        /> */}

        {/* <Stack.Screen
          options={{
            headerTitleAlign: "center",
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: "#F2F2F2",
            },
            headerTitle: "Refer and Earn!",
          }}
          name="referandearn"
          component={ReferAndEarn}
        /> */}
{/* 
        <Stack.Screen
          options={{
            headerTitleAlign: "center",
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: "#F2F2F2",
            },
            headerTitle: "Settings",
          }}
          name="settings"
          component={Settings}
        /> */}

        {/* <Stack.Screen
          options={{
            headerTitleAlign: "center",
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: "#F2F2F2",
            },
            headerTitle: "Notifications",
          }}
          name="notifications"
          component={Notifications}
        /> */}

        {/* <Stack.Screen
          options={{
            headerTitleAlign: "center",
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: "#F2F2F2",
            },
            headerTitle: "Security",
          }}
          name="security"
          component={Security}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
