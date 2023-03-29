import {
    StyleSheet,
    SafeAreaView,
    View,
  } from "react-native";
  import { COLORS, SIZES } from "../../constants";
  import data from "../../data/artisanOnboarding";
  import OnBoardingList from "../../components/onboarding/onBoardingList";

//   The Artisan Onboarding Screen 
  const ArtisanOnBoardingScreen = ({route}) => {

    
    return (
      <SafeAreaView style={styles.screen}>
        <View style={styles.innerContainer}>
          <OnBoardingList  data={data} />
        </View>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    screen: {
      flex: 1,
      alignItems: "center",
      width: SIZES.width,
      height: SIZES.height,
      backgroundColor: COLORS.backgroundColor,
    },
    innerContainer: {
      paddingTop: 50,
      width: SIZES.width < 350 ? 320 : 400,
      justifyContent: "center",
      alignItems: "center",
    },
  });
  
  export default  ArtisanOnBoardingScreen;
    
  