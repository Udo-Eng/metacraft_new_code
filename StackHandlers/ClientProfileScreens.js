import React from "react";
// import Home from "../screens/ClientProfile/Home";
import RequestFormScreen from "../screens/ClientProfile/RequestFormScreen";
// import AboutArtisianScreen from "../screens/ClientProfile/AboutArtisian";
// import ConfirmRequestScreen from "../screens/ClientProfile/ConfirmRequest";
// import ConFirmingRequestScreen from "../screens/ClientProfile/LoadingScreens/ConFirmingRequest";
import RequestDetialsScreen from "../screens/ClientProfile/RequestDetails";
// import FindingArtisianScreen from "../screens/ClientProfile/LoadingScreens/FindingArtisian";

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


      {/* 
      <Stack.Screen
        options={{
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: "#F2F2F2",
          },
          headerTitle: "We found you a stylist",
        }}
        name="aboutArtisian"
        component={AboutArtisianScreen}
      /> */}

      {/* CONFIRMING REQUEST FORM  */}
      {/* <Stack.Screen
        options={{
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: "#F2F2F2",
          },
          headerTitle: "Confirm Request",
        }}
        name="confirmRequest"
        component={ConfirmRequestScreen}
      /> */}


      {/* REQUEST DETAILS SCREEN RequestDetialsScreen */}

       {/* <Stack.Screen
        options={{
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: "#F2F2F2",
          },
          headerTitle: "Request Details",
        }}
        name="requestDetails"
        component={RequestDetialsScreen}
      /> */}

      {/* LoadingScreen */}
      {/*    
      <Stack.Screen
        options={{ headerShown: false }}
        name="requestForm"
        component={ConFirmingRequestScreen}
      /> */}

      {/*Finding Artisian Loading Screen */}
      {/* <Stack.Screen
        options={{ headerShown: false }}
        name="requestForm"
        component={FindingArtisianScreen}
      /> */}
    </>
  );
};

export default ClientProfileScreens;
