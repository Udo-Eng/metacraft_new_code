import { ScrollView, View, Text, StyleSheet, Image } from "react-native";
import PrimaryButton from "../../components/ui/PrimaryButton";
import React from "react";
import Telephone from "../../assets/RequestDetails/telephone.svg";
import Star from "../../assets/Logo/Star.svg";
import Location from "../../assets/Logo/Location.svg";
import Person from "../../assets/Logo/Person.svg";
import HairStylist from "../../assets/Logo/HairStylist.svg";

const RequestDetialsScreen = () => {
  // Extra Text for request status  preview container

  // Completed

  // Ongoing - Artisan is working on this

  // Declined - service terminated

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/*Request Status Preview  */}

      <View style={styles.previewContainer}>
        <Text style={styles.label}>Request Status</Text>
        <View style={[styles.innerPreviewContainer, styles.status]}>
          <Text style={[styles.value, styles.statusText]}>
            Request Accepted - Not yet started
          </Text>
        </View>
      </View>

      {/* Location Preview  */}
      <View style={styles.previewContainer}>
        <Text style={styles.label}>Your Location</Text>
        <View style={styles.innerPreviewContainer}>
          <Text style={styles.value}>Gbagada, lagos</Text>
        </View>
      </View>

      {/* Services requested Preview */}
      <View style={styles.previewContainer}>
        <Text style={styles.label}>Services requested</Text>
        <View style={styles.innerPreviewContainer}>
          <View style={styles.listItem}>
            <View style={styles.dot}></View>
            <Text style={styles.value}>Wig Installation</Text>
          </View>
          <View style={styles.listItem}>
            <View style={styles.dot}></View>
            <Text style={styles.value}>Wig Styling</Text>
          </View>
          <View style={styles.listItem}>
            <View style={styles.dot}></View>
            <Text style={styles.value}>Cornrows</Text>
          </View>
        </View>
      </View>

      {/* Preview of  Payment Method */}
      <View style={styles.previewContainer}>
        <Text style={[styles.label, { marginBottom: 2 }]}>Payment Method </Text>
        <Text style={styles.paymentInfo}>
          You will be charged for after Job completion
        </Text>
        <View style={styles.innerPreviewContainer}>
          <Text style={styles.value}>Cash</Text>
        </View>
      </View>

      {/* Preview for Total cost of service  */}

      <View style={styles.previewContainer}>
        <Text style={styles.label}>Total cost of service</Text>
        <View style={styles.innerPreviewContainer}>
          <Text style={styles.value}>10,000</Text>
        </View>
      </View>

      {/* Preview for Pictures Selected If Availiable  */}

      <View style={styles.previewContainer}>
        <Text style={styles.label}>Custom Style</Text>
        <View style={styles.customStylesPreviewContainer}>
          <View style={styles.imageContainer}>
            <Image source={require("../../assets/RequestDetails/image1.png")} />
          </View>

          <View style={styles.imageContainer}>
            <Image source={require("../../assets/RequestDetails/image2.png")} />
          </View>

          <View style={styles.imageContainer}>
            <Image source={require("../../assets/RequestDetails/image3.png")} />
          </View>
        </View>
      </View>

      {/* ARTISAN SELECTED SUMMARY */}

      {/* Summary Component for Artisan */}
      <View style={styles.previewContainer}>
        <Text style={styles.label}>Artisian providing Service</Text>

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
            
             {/* Artisan  telephone */}
            <View style={styles.telContainer}>
            <Telephone width={16} height={16} color={"#828282"} />
            <Text style={styles.telText}>08123456789</Text>
            </View>

            
          </View>
        </View>
      </View>

      {/* ACTIONS  AND FURTHER TIPS  CONTAINER */}

      <View style={styles.actions}>
        {/* TODO LATER IMPLEMENT THE ONPRESS  FUNCTION */}

        {/* Available in completed Request  */}
        <Text style={styles.ratingTextTip}>
          Please rate this artisan your satisfaction is our priority
        </Text>

        <PrimaryButton onPress={() => {}} btnStyle={{ width: 241, height: 44 }}>
          <Text>RATE ARTISAN</Text>
        </PrimaryButton>

        {/* Availiable in accepted  request  */}

        {/* Cancel Text Button  */}

        {/* When time is still available cancellation would not incur a charge */}

        <Text style={styles.cancelTextTip}>
          You won’t be charged yet for canceling this request
        </Text>

        <Text style={styles.cancelTextTip}>
          late cancellation incurs a fee of
          <Text style={styles.cancelFees}> N500 {"\n"}</Text>
          <Text style={styles.learnMore}>learn more</Text>
        </Text>

        {/* Cancel Request Button  */}

        <PrimaryButton
          onPress={() => {}}
          btnStyle={styles.outlineButton}
          textStyle={styles.textStyle}
        >
          <Text>Cancel Request</Text>
        </PrimaryButton>

        {/* Available in ongoing requst */}

        <View>
          <Text style={styles.title}>Looking to cancel this request?</Text>
          <Text style={styles.subtitle}>
            Unfortunately, you cannot cancel this request please ask the artisan
            to cancel or {'\n'}
            <Text style={[styles.title, styles.decoration]}>
               reach out to support.
            </Text>
          </Text>
          <Text style={styles.subtitle}>
            Please note
            <Text style={styles.title}> we charge a cancellation fee </Text>
            depending on the circumstance we might issue a complete or partial
            refund
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default RequestDetialsScreen;

const styles = StyleSheet.create({
  // Genaral container style
  container: {
    alignItems: "center",
  },

  //   General Preview container ,label and Values Styles
  infoTip: {
    width: 296,
    color: "#221B38",
    lineHeight: 20,
    fontWeight: "400",
    fontStyle: "normal",
    // fontFamily:"Be Vietnam"
    fontSize: 13,
    textAlign: "center",
  },
  previewContainer: {
    marginVertical: 12,
    alignItems: "flex-start",
  },
  innerPreviewContainer: {
    padding: 12,
    width: 328,
    alignItems: "flex-start",
    paddingLeft: 15,
    backgroundColor: "#FAF9FD",
    borderWidth: 1,
    borderColor: "#F1E8FD",
    borderRadius: 4,
  },
  label: {
    color: "#221B38",
    lineHeight: 20,
    fontWeight: "400",
    // fontFamily:"Be Vietnam"
    fontSize: 14,
    marginBottom: 5,
  },
  value: {
    color: "#221B38",
    lineHeight: 20,
    fontWeight: "500",
    fontStyle: "normal",
    // fontFamily:"Be Vietnam"
    fontSize: 14,
  },

  //   Extra styles for Request Details screen
  status: {
    backgroundColor: "#219653",
  },
  declined: {
    backgroundColor: "#981B25",
  },
  accepted: {
    backgroundColor: "#219653",
  },
  completed: {
    backgroundColor: "#066042",
  },
  ongoing: {
    backgroundColor: "#F2994A",
  },
  statusText: {
    color: "#ffffff",
  },
  telText: {
    color: "#221B38",
    fontWeight: "bold",
  },
  customStylesPreviewContainer: {
    flexDirection: "row",
    width: 329,
    justifyContent: "flex-start",
    marginBottom: 15,
  },

  imageContainer: {
    borderRadius: 4,
    marginRight: 10,
  },
  cancelFees: {
    color: "#420D8B",
    fontWeight: "bold",
  },

  learnMore: {
    textDecorationLine: "underline",
    fontWeight: "bold",
    textDecorationColor: "#420D8B",
    color: "#420D8B",
  },
  ratingTextTip: {
    width: 322,
    height: 40,
    textAlign: "center",
    marginBottom: 8,
  },

  title: {
    color: "#000000",
    lineHeight: 20,
    fontWeight: "600",
    // fontFamily:"Be Vietnam"
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 8,
  },

  subtitle: {
    width: 322,
    color: "#828282",
    lineHeight: 20,
    fontWeight: "400",
    // fontFamily:"Be Vietnam"
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 8,
  },

  decoration: {
    color: "#221B38",
    textDecorationLine: "underline",
    textDecorationColor: "#221B38",
  },

  //   Special Styles for the dot component and the  listItem
  dot: {
    width: 3,
    height: 3,
    borderRadius: 3 / 2,
    backgroundColor: "#221B38",
    marginRight: 10,
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  paymentInfo: {
    color: "#493B5D",
    lineHeight: 20,
    fontWeight: "500",
    fontStyle: "normal",
    // fontFamily:"Be Vietnam"
    fontSize: 10,
    marginBottom: 5,
  },

  //   Actions Button Styles
  actions: {
    marginTop: 34,
    width: 354,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 17,
  },

  // Outlined Button
  outlineButton: {
    width: 241,
    height: 45,
    borderColor: "#221B38",
    borderWidth: 1,
    backgroundColor: "#ffffff",
    marginTop: 14,
    marginBottom: 14,
  },
  textStyle: {
    color: "#221B38",
    lineHeight: 20,
    fontWeight: "500",
    fontStyle: "normal",
    // fontFamily:"Be Vietnam"
    fontSize: 14,
  },
  cancelTextTip: {
    width: 302,
    padding: 10,
    textAlign: "center",
    lineHeight: 20,
    fontWeight: "500",
    fontStyle: "normal",
    // fontFamily:"Be Vietnam"
    fontSize: 14,
    color: "#420D8B",
    marginVertical: 5,
  },

  //   Artisan  Preview Styles section
  artisanSummary: {
    width: 328,
    height: 140,
    paddingLeft: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 4,
    marginBottom: 20,
  },
  image: {
    width: 54,
    height: 54,
    borderRadius: 54 / 2,
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
  telContainer: {
    width: 111,
    height: 20,
    marginVertical: 8,
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
});
