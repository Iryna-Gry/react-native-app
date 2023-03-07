import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Button,
} from "react-native";

export const RegistrationScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../images/bg-reg.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.form_container}>
          <View style={styles.hero_container}>
            <Image style={styles.hero_image} />
            <Button title="+" />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "flex-end",
  },
  form_container: {
    width: "100%",
    flex: 0.6,
    position: "relative",
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },
  hero_container: {
    position: "absolute",
  },
  hero_image: {
    backgroundColor: "#f6f6f6",
    width: 120,
    height: 120,
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
  },
});
