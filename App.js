import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnBoardingScreens from "./StackHandlers/OnboardingScreens";
import AuthScreens from "./StackHandlers/AuthScreens";
import ProfileScreens from "./StackHandlers/ProfileScreens";
import WalletScreens from "./StackHandlers/WalletScreens";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useLayoutEffect, useState } from "react";
import * as SplashScreen from 'expo-splash-screen';

const Stack = createNativeStackNavigator();

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

function App() {
  const [isLoading,setIsLoading] = useState(true);
  const [isFirstLaunch, setIsFirstLaunch] = useState(false);

  useLayoutEffect(() => {
   
    // AsyncStorage.removeItem("isFirstLaunch").then(()=>{
      AsyncStorage.getItem("isFirstLaunch").then(async (value) => {
        
        if (value === null) {
          setIsFirstLaunch(true);
          AsyncStorage.setItem("isFirstLaunch", "true");
        
        } else {
          setIsFirstLaunch(false);
          
        }

        // Set the Loading State to false 
          setIsLoading(false); 
          
          // Remove the SplashScreen 
          await SplashScreen.hideAsync();

      });

      

    // });

   
  }, []);



  if(isLoading) return null;

  return (
    !isLoading && <NavigationContainer>
      <Stack.Navigator>
        {/* ON BOARDING AND SIGNUP  */}
        {isFirstLaunch && OnBoardingScreens(Stack)}

        {/* AUTH SCREENS  */}
        {AuthScreens(Stack)}

        {/* PROFILE SCREENS FOR ARTISIANS */}

        {ProfileScreens(Stack)}

        {WalletScreens(Stack)}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
