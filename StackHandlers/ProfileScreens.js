import React from "react";
import Home from "../screens/Home";
import SelectID from "../screens/IDVerification/SelectID";
import IDForm from "../screens/IDVerification/IDForm";
import ArtisianProfile from "../screens/Profile/ArtisianProfile";
import PersonalInfo from "../screens/Profile/PersonalInfo";
import ReferAndEarn from "../screens/Profile/ReferAndEarn";
import Settings from "../screens/Profile/Settings";
import Security from "../screens/Profile/SettingsScreen/Security";
import Language from "../screens/Profile/SettingsScreen/Language";
import PasswordReset from "../screens/Profile/SettingsScreen/PasswordReset";
import EmailNotifications from "../screens/Profile/Notifications/EmailNotifications";
import Notifications from "../screens/Profile/Notifications/Notifications";
import PushNotifications from "../screens/Profile/Notifications/PushNotifications";

const ProfileScreens = (Stack) => {
  return (
    <>
      <Stack.Screen
        options={{ headerShown: false }}
        name="home"
        component={Home}
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
      />
      <Stack.Screen
        options={{
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: "#F2F2F2",
          },
          headerTitle: "Profile",
        }}
        name="ArtisianProfile"
        component={ArtisianProfile}
      />

      <Stack.Screen
        options={{
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: "#F2F2F2",
          },
          headerTitle: "Personal information",
        }}
        name="personalInfo"
        component={PersonalInfo}
      />

      <Stack.Screen
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
      />

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
      />

      <Stack.Screen
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
      />

      <Stack.Screen
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
      />

      <Stack.Screen
        options={{
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: "#F2F2F2",
          },
          headerTitle: "Push Notifications",
        }}
        name="pushNotifications"
        component={PushNotifications}
      />

      <Stack.Screen
        options={{
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: "#F2F2F2",
          },
          headerTitle: "Email Notifications",
        }}
        name="emailNotifications"
        component={EmailNotifications}
      />

      <Stack.Screen
        options={{
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: "#F2F2F2",
          },
          headerTitle: "Language",
        }}
        name="language"
        component={Language}
      />

      <Stack.Screen
        options={{
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: "#F2F2F2",
          },
          headerTitle: "Password Reset",
        }}
        name="passwordreset"
        component={PasswordReset}
      />
    </>
  );
};

export default ProfileScreens;
