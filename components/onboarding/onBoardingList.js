import { View, Text, StyleSheet, FlatList ,Image} from "react-native";
import React ,{useState,useRef,useEffect} from "react";
import { COLORS, SIZES } from "../../constants";
import NextButton from "./NextButton";
import GetStartedSection from "./GetStartedSection";
import {useNavigation} from "@react-navigation/native";

const OnBoardingList = ({ data }) => {
  const flatlistRef = useRef();
  const [currentPage, setCurrentPage] = useState(0);
  const [viewableItems, setViewableItems] = useState([]);
  const navigation = useNavigation();

  const handleViewableItemsChanged = useRef(({ viewableItems }) => {
    setViewableItems(viewableItems);
  });


  useEffect(() => {
    if (!viewableItems[0] || currentPage === viewableItems[0].index) return;

    setCurrentPage(viewableItems[0].index);
    
  }, [viewableItems]);

  const nextHandler = () => {
    if (currentPage == data.length - 1) {
      return;
    }

    flatlistRef.current.scrollToIndex({
      animated: true,
      index: currentPage + 1,
    });
  };

  // function to render Dot components
  function renderDotComponents() {
    return (
      <View style={styles.dotsContainer}>
        {/* Render the number of Dots obtained from the data sample passed  */}
        {[...Array(data.length)].map((_, index) => (
          <View
            key={index}
            style={
              index === currentPage
                ? styles.selectedDot
                : styles.dotComponentStyle
            }
          ></View>
        ))}
      </View>
    );
  }

  //   function to render  flatList section and DotComponent
  function renderFlatListItem({ item }) {
    return (
      <View style={styles.itemContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image source={item.image} />
        </View>
        {renderDotComponents()}
        <View style={styles.subTitleContainer}>
          <Text style={styles.subtitle}>{item.subtitle}</Text>
        </View>
      </View>
    );
  }

  function signUpHandler() {
    navigation.replace("signup");
  }

  function signInHandler() {
    navigation.replace("signin");
  }

  return (
    <>
      <FlatList
        data={data}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.title}
        renderItem={renderFlatListItem}
        ref={flatlistRef}
        onViewableItemsChanged={handleViewableItemsChanged.current}
        viewabilityConfig={{ viewAreaCoveragePercentThreshold: 100 }}
        initialNumToRender={1}
      />
      
    
      {/* Logic To either return the Next Button or the Getting Started Button  */}
      {currentPage === data.length - 1 ? (
        <GetStartedSection
          title="Get Started"
          signUpHandler={signUpHandler}
          signInHandler={signInHandler}
        />
      ) : (
        <NextButton title="Next" onPress={nextHandler} />
      )}
    </>
  );
};


const styles = StyleSheet.create({
  itemContainer: {
    width: SIZES.width < 350 ? 320 : 400,
    justifyContent: "center",
    alignItems: "center",
  },
  titleContainer: {
    paddingVertical: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 21,
    letterSpacing: 0.16,
    color: "#221b38",
    // fontFamily: "Be Vietnam",
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  subTitleContainer: {
    width: SIZES.width < 350 ? 450 : 500,
    padding: 8,
    paddingTop: 8,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  subtitle: {
    width: "60%",
    textAlign: "center",
    fontWeight: "normal",
    fontSize: 16,
    color: COLORS.titleColor,
    // fontFamily: "Be Vietnam",
  },
  dotsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  dotComponentStyle: {
    width: 9,
    height: 9,
    borderRadius: 4.5,
    backgroundColor: "grey",
    marginRight: 8,
  },
  selectedDot: {
    width: 19,
    height: 9,
    borderRadius: 4.5,
    backgroundColor: COLORS.primaryColor,
    marginRight: 8,
  },
});


export default OnBoardingList;
