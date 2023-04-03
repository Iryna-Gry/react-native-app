import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export const Header = ({ title }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
      {title === "Публікації" && (
        <TouchableOpacity
          style={styles.logOutBtn}
          onPress={() => navigation.navigate("Login")}
        >
          <MaterialIcons name="logout" size={24} color="#BDBDBD" />
        </TouchableOpacity>
      )}

      {title !== "Публікації" && (
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.navigate("Posts")}
        >
          <AntDesign name="arrowleft" size={24} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    display: "flex",
    paddingTop: "13%",
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
    justifyContent: "center",
    borderBottomColor: "#BDBDBD",
    borderBottomWidth: 1,
    paddingBottom: "2%",
    backgroundColor: "#FFF",
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: 500,
  },
  backBtn: {
    position: "absolute",
    left: 10,
    bottom: "25%",
  },
  logOutBtn: {
    position: "absolute",
    right: 10,
    bottom: "25%",
  },
});
