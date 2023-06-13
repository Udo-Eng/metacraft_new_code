import React from "react";
import ClientRequest from "../screens/ClientProfile/NewRequest/ClientRequest";
import Home from "../screens/ClientProfile/Home";
import RequestFormScreen from "../screens/ClientProfile/RequestFormScreen";
import Requests from "../screens/ClientProfile/Requests";
import SubmitBid from "../screens/ClientProfile/NewRequest/SubmitBid";
import BidSuccess from "../screens/ClientProfile/NewRequest/BidSuccess";

const ClientProfileScreens = (Stack) => {
  return (
    <>
      {/* Client Home Screen  */}
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

      {/* Request Screen */}
      <Stack.Screen name="Requests" component={Requests} />
      <Stack.Screen name="Client Request" component={ClientRequest} />
      <Stack.Screen name="Submit Bid" component={SubmitBid} />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Bid Sent"
        component={BidSuccess}
      />
    </>
  );
};

export default ClientProfileScreens;
