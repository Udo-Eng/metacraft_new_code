import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Date from "../../../assets/Requests/icons/Date.svg";
import Time from "../../../assets/Requests/icons/Time.svg";
import Location from "../../../assets/Requests/icons/Location.svg";
import { Request } from "../../../data/clientRequest";

const OngoingRequest = () => {
  return (
    <View style={styles.container}>
      {Request.map((data, index) => {
        return (
          <View style={styles.innerContainer}>
            <View style={styles.textContent}>
              <Text style={styles.title}>{data.title}</Text>
              <View style={styles.textContainer}>
                <Date />
                <Text style={styles.text}>{data.date}</Text>
              </View>
              <View style={styles.textContainer}>
                <Time />
                <Text style={styles.text}>{data.time}</Text>
              </View>
              <View style={styles.textContainer}>
                <Location />
                <Text style={styles.text}>{data.address}.</Text>
              </View>
            </View>
            <View>
              <Pressable
                onPress={() =>
                  navigation.navigate("Request Details", {
                    id: data.id,
                    name: data.name,
                    phone: data.phone,
                    date: data.date,
                    time: data.time,
                    images: data.images,
                    address: data.address,
                    service: data.service,
                    sub_service: data.sub_service,
                    payment: data.payment,
                    note: data.note,
                  })
                }
              >
                <View style={styles.img}>
                  <data.img />
                  <View style={styles.imgTextContainer}>
                    <Text style={styles.imgText}>Quote Sent</Text>
                  </View>
                </View>
              </Pressable>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default OngoingRequest;

const styles = StyleSheet.create({
  container: {
    //   paddingBottom: 40
  },
  innerContainer: {
    display: "flex",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 4,
    marginBottom: 8,
  },
  textContent: {
    paddingTop: 6,
    paddingBottom: 18,
    paddingLeft: 9,
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "300",
    lineHeight: 26,
    color: "#221b38",
  },
  textContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    marginTop: 7,
  },
  text: {
    fontSize: 14,
    fontWeight: "300",
    color: "#221b38",
    lineHeight: 18,
    marginLeft: 7,
  },
  img: {
    position: "relative",
  },
  imgTextContainer: {
    position: "absolute",
    right: 0,
    top: 0,
    paddingVertical: 4,
    paddingLeft: 27,
    paddingRight: 13,
    borderBottomLeftRadius: 4,
    backgroundColor: "#e857eb",
  },
  imgText: {
    fontWeight: "600",
    fontSize: 11,
    color: "#fff",
  },
});
