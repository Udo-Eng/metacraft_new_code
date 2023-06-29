import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Star from "../../assets/Logo/Star.svg";
import Location from "../../assets/Logo/Location.svg";
import Person from "../../assets/Logo/Person.svg";
import HairStylist from "../../assets/Logo/HairStylist.svg";
import PrimaryButton from "../../components/ui/PrimaryButton";


// THE ABOUT ARTISAN SCREEN WOULD REFACTOR SCREEN LATER TO CREATE REUSABLE COMPONENTS 

import React from "react";

const AboutArtisianScreen = () => {
  let works = [
    { path: "../../assets/Logo/styles/Style1.png" },
    { path: "../../assets/Logo/styles/Style2.png" },
    { path: "../../assets/Logo/styles/style3.png" },
    { path: "../../assets/Logo/styles/style4.png" },
    { path: "../../assets/Logo/styles/style5.png" },
    { path: "../../assets/Logo/styles/style6.png" },
  ];

  const renderFeaturedWorkItem = ({ item }) => {
    let path = item.path ? "../../assets/Logo/styles/Style1.png" : item.path;

    return (
      <>
        <View style={styles.featuredWorkImageContainer}>
          {/* { item.path && <Image source={require((path))} />} */}
        </View>
      </>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
     
      {/* Summary Component for Artisan */}
      <View style={styles.artisanSummary}>
        <Image
          source={require("../../assets/Logo/ArtisianImage.png")}
          style={styles.image}
        />
        <View>
          <Text style={styles.name}>Comfor Mama aka Akpioghene</Text>


          {/* first details component */}
          <View style={styles.innerSummaryContainer}>
            <View style={styles.artisanDetailsContainer}>
              <HairStylist width={16} height={16} color={"#828282"} />
              <Text style={styles.detail}>Hair Stylist</Text>
            </View>
            <View style={styles.artisanDetailsContainer}>
              <Location width={16} height={16} color={"#828282"} />
              <Text style={styles.detail}>Ifako- Gbagada</Text>
            </View>
          </View>

          {/* Second details component */}
          <View style={styles.innerSummaryContainer}>
            <View style={styles.artisanDetailsContainer}>
              <Star width={16} height={16} color={"#828282"} />
              <Text style={styles.detail}>(0.0)</Text>
            </View>

            <View style={styles.artisanDetailsContainer}>
              <Person width={16} height={16} color={"#828282"} />
              <Text style={styles.detail}>Total Jobs: (0)</Text>
            </View>
          </View>
        </View>
      </View>

      {/* About Component for Artisan  */}

      <View style={styles.aboutContainer}>
        <Text style={styles.title}>About Stylist</Text>
        <View style={styles.aboutInnerContainer}>
          <Text style={styles.description}>
            Certified stylist with over 5 years of experience
          </Text>
        </View>
      </View>

      {/* Featured Works  */}
      <View style={styles.featuredWorks}>
        <Text style={styles.title}>Artisan’s featured works</Text>

        {/* works grid display */}

        <View style={styles.works}>
          <View style={styles.featuredWorkImageContainer}>
            <Image source={require("../../assets/Logo/styles/Style1.png")} />
          </View>

          <View style={styles.featuredWorkImageContainer}>
            <Image source={require("../../assets/Logo/styles/Style2.png")} />
          </View>

          <View style={styles.featuredWorkImageContainer}>
            <Image source={require("../../assets/Logo/styles/style3.png")} />
          </View>

          <View style={styles.featuredWorkImageContainer}>
            <Image source={require("../../assets/Logo/styles/style4.png")} />
          </View>

          <View style={styles.featuredWorkImageContainer}>
            <Image source={require("../../assets/Logo/styles/style5.png")} />
          </View>

          <View style={styles.featuredWorkImageContainer}>
            <Image source={require("../../assets/Logo/styles/style6.png")} />
          </View>
        </View>
      </View>

      {/* Artisan Review Section */}

      <View>
        <Text style={styles.title}>Artisan’s Reviews (15)</Text>
        {/* Review 1 */}
        <View style={styles.reviewBox}>
          <Text style={styles.reviewText}>
            Very professional and fast absolutely recomment
          </Text>
          <View style={styles.starRatingBox}>
            {/* Star rating Box */}
            <Star width={16} height={16} color={"#828282"} />
            <Star width={16} height={16} color={"#828282"} />
            <Star width={16} height={16} color={"#828282"} />
            <Star width={16} height={16} color={"#828282"} />
            <Star width={16} height={16} color={"#828282"} />
          </View>
        </View>

        {/* Review 2 */}

        <View style={styles.reviewBox}>
          <Text style={styles.reviewText}>
            Very professional and fast absolutely recomment
          </Text>
          <View style={styles.starRatingBox}>
            {/* Star rating Box */}
            <Star width={16} height={16} color={"#828282"} />
            <Star width={16} height={16} color={"#828282"} />
            <Star width={16} height={16} color={"#828282"} />
            <Star width={16} height={16} color={"#828282"} />
            <Star width={16} height={16} color={"#828282"} />
          </View>
        </View>
      </View>


      {/* ACTIONS CONTAINER */}

      <View style={styles.actions}>
        {/* Accept Button  */}

        {/* TODO LATER IMPLEMENT THE ONPRESS BUTTON FUNCTION */}
        <PrimaryButton onPress={() => {}} btnStyle={{ width: 241, height: 44 }}>
          <Text>Accept Stylist</Text>
        </PrimaryButton>

        {/* Search for anothe Button  */}

        <PrimaryButton
          onPress={() => {}}
          btnStyle={styles.outlineButton}
          textStyle={styles.textStyle}
        >
          <Text>Search for another</Text>
        </PrimaryButton>

        {/* Cancel Text Button  */}
        <Text style={styles.cancelTextButton}>Cancel Request</Text>
      </View>
    </ScrollView>
  );
};

export default AboutArtisianScreen;

const styles = StyleSheet.create({
  // Summary container Styles
  container: {
    alignItems: "center",
  },
  artisanSummary: {
    width: 328,
    height: 111,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 4,
    marginBottom: 20,
  },
  image: {
    width: 73,
    height: 73,
    borderRadius: 73 / 2,
    marginRight: 17,
  },
  name: {
    color: "#221B38",
    lineHeight: 20,
    fontWeight: "500",
    fontStyle: "normal",
    // fontFamily:"Be Vietnam"
    fontSize: 14,
  },
  artisanDetailsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  innerSummaryContainer: {
    marginVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  detail: {
    color: "#828282",
    lineHeight: 20,
    fontWeight: "500",
    fontStyle: "normal",
    // fontFamily:"Be Vietnam"
    fontSize: 12,
    marginLeft: 8,
  },

  //   About container Styles
  aboutContainer: {
    width: 328,
    height: 111,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  aboutInnerContainer: {
    padding: 5,
    width: 328,
    height: 77,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 4,
  },
  title: {
    alignSelf: "flex-start",
    color: "#000000",
    lineHeight: 20,
    fontWeight: "500",
    fontStyle: "normal",
    // fontFamily:"Be Vietnam"
    fontSize: 16,
    marginVertical: 10,
  },
  description: {
    color: "#000000",
    lineHeight: 20,
    fontWeight: "500",
    fontStyle: "normal",
    // fontFamily:"Be Vietnam"
    fontSize: 14,
  },

  //   Featured Works page
  works: {
    width: 324,
    height: 501,
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "space-between",
    rowGap: 10,
    columnGap: 5,
  },
  featuredWorks: {
    alignItems: "flex-start",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 26,
  },
  featuredWorkImageContainer: {
    width: 152,
    height: 155,
    borderRadius: 4,
    marginHorizontal: 5,
  },

  //   Reviews section styles
  starRatingBox: {
    flexDirection: "row",
    marginVertical: 10,
  },
  reviewText: {
    lineHeight: 20,
    fontWeight: "500",
    fontStyle: "normal",
    // fontFamily:"Be Vietnam"
    fontSize: 14,
    width: 258,
  },
  reviewBox: {
    padding: 5,
    width: 328,
    height: 77,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 4,
    marginBottom: 10,
  },

//   Actions Button Section 

  actions: {
    width: 354,
    height: 194,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 17,
  },

// Outlined Button
outlineButton: {
    width: 241,
    height: 44,
    borderColor: "#8C44EE",
    borderWidth: 1,
    backgroundColor: "#ffffff",
    marginTop: 14,
  },
  textStyle:{
    color: '#8C44EE',
    lineHeight: 20,
    fontWeight: "500",
    fontStyle: "normal",
    // fontFamily:"Be Vietnam"
    fontSize: 14,
  },
  cancelTextButton:{
    textDecorationLine: 'underline',
    textDecorationColor: "#420D8B   ",
    color: '#420D8B',
    marginVertical: 5
  }
});
