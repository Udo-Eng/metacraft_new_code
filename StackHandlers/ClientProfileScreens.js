import React from "react";
// import Home from "../screens/ClientProfile/Home";
import RequestFormScreen from "../screens/ClientProfile/RequestFormScreen";
// import AboutArtisianScreen from "../screens/ClientProfile/AboutArtisian";
// import ConfirmRequestScreen from "../screens/ClientProfile/ConfirmRequest";
// import ConFirmingRequestScreen from "../screens/ClientProfile/LoadingScreens/ConFirmingRequest";
import RequestDetialsScreen from "../screens/ClientProfile/RequestDetails";
// import FindingArtisianScreen from "../screens/ClientProfile/LoadingScreens/FindingArtisian";
import Requests from "../screens/ClientProfile/Requests";
import SubmitBid from "../screens/ClientProfile/NewRequest/SubmitBid";
import BidSuccess from "../screens/ClientProfile/NewRequest/BidSuccess";
import Quote from "../screens/ClientProfile/UpcomingRequest/Quote";
import Inspection from "../screens/ClientProfile/UpcomingRequest/Inspection";
import NewClientRequest from "../screens/ClientProfile/NewRequest/NewClientRequest";
import UpcomingClientRequest from "../screens/ClientProfile/UpcomingRequest/UpcomingClientRequest";
import QuoteSubmitted from "../screens/ClientProfile/UpcomingRequest/QuoteSubmitted";
import StartJob from "../screens/ClientProfile/OngoingRequest/StartJob";
import JobComplete from "../screens/ClientProfile/OngoingRequest/JobComplete";

const ClientProfileScreens = (Stack) => {
  return (
    <>
      {/* Client Home Screen  */}
      {/* <Stack.Screen
      <Stack.Screen
        options={{ headerShown: false }}
        name="home"
        component={Home}
      />

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
      {/* Request Screen */}
      <Stack.Screen name="Requests" component={Requests} />
      <Stack.Screen name="Client Request" component={NewClientRequest} />
      <Stack.Screen name="Submit Bid" component={SubmitBid} />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Bid Sent"
        component={BidSuccess}
      />
      <Stack.Screen name="Request Details" component={UpcomingClientRequest} />
      <Stack.Screen name="Inspection" component={Inspection} />
      <Stack.Screen name="Quote for Repair" component={Quote} />
      <Stack.Screen name="Quote Submitted" component={QuoteSubmitted} />
      <Stack.Screen name="Start Job" component={StartJob} />
      <Stack.Screen name="Job Complete" component={JobComplete} />
    </>
  );
};

export default ClientProfileScreens;
