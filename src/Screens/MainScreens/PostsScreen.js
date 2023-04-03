import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Header } from "../../Components/Header/Header";

export const PostsScreen = () => {
  return (
    <>
      <Header title="Публікації" />
      <View style={styles.container}>
        <Text>PostsScreen</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
