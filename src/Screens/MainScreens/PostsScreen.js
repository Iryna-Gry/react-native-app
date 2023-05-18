import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Pressable,
  SafeAreaView,
} from "react-native";
import { Header } from "../../Components/Header/Header";
import { Feather } from "@expo/vector-icons";
import heroImg from "../../../assets/images/hero.jpg";

const initialPosts = [
  {
    id: 1,
    photo: require("../../../assets/images/hero.jpg"),
    name: "Me",
    location: "",
    locationDescription: "Kryvyi Rih, Ukraine",
    comments: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
  },
  {
    id: 2,
    photo: require("../../../assets/images/evening.jpg"),
    name: "Amazing evening",
    location: "",
    locationDescription: "Ivano-Frankivsk Region, Ukraine",
    comments: [{ id: 3 }, { id: 4 }],
  },
  {
    id: 3,
    photo: require("../../../assets/images/forrest.jpg"),
    name: "Forest Mountain",
    location: "",
    locationDescription: "Ivano-Frankivsk Region, Ukraine",
    comments: [{ id: 5 }, { id: 6 }, { id: 7 }],
  },
];
export const PostsScreen = ({ route, navigation }) => {
  const [posts, setPosts] = useState(initialPosts);
  useEffect(() => {
    route.params && setPosts((prevPosts) => [...prevPosts, route.params]);
  }, [route.params]);
  return (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View>
            <Image
              source={heroImg}
              style={{ width: 60, height: 60, borderRadius: 16 }}
            />
          </View>
          <View style={{ marginLeft: 8 }}>
            <Text
              style={{
                fontWeight: 700,
                fontSize: 13,
                lineHeight: 15,
              }}
            >
              Iryna Grytsaenko
            </Text>
            <Text
              style={{
                fontWeight: 400,
                fontSize: 11,
                lineHeight: 13,
                color: "#4d4d4d",
              }}
            >
              iryna.grytsaenko@gmail.com
            </Text>
          </View>
        </View>

        <SafeAreaView
          style={{
            width: "100%",
            marginTop: 2,
            marginBottom: 130,
          }}
        >
          <FlatList
            style={{
              width: "100%",
            }}
            scrollEnabled={true}
            data={posts}
            renderItem={({ item }) => {
              return (
                <View style={{ width: "100%", marginTop: 32 }}>
                  <Image
                    style={{
                      width: "100%",
                      height: 240,
                      marginBottom: 8,
                      borderRadius: 8,

                      resizeMode: "cover",
                    }}
                    source={item.photo}
                  />

                  <Text
                    style={{
                      fontWeight: 500,
                      fontSize: 16,
                      lineHeight: 19,
                    }}
                  >
                    {item.name}
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginTop: 11,
                    }}
                  >
                    <Pressable
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                      onPress={() => {
                        const img = item.photo;
                        navigation.navigate("Comments", { img });
                      }}
                    >
                      <Feather
                        name="message-circle"
                        size={24}
                        color="#bdbdbd"
                      />
                      <Text
                        style={{
                          marginLeft: 6,
                          fontSize: 16,
                          lineHeight: 19,
                          color: "#bdbdbd",
                        }}
                      >
                        {item.comments ? item.comments.length : 0}
                      </Text>
                    </Pressable>

                    <Pressable
                      style={{ flexDirection: "row" }}
                      onPress={() => {
                        navigation.navigate("Map", {
                          name: item.name,
                          locationDescription: item.locationDescription,
                          longitude: item.location.longitude,
                          latitude: item.location.latitude,
                        });
                      }}
                    >
                      <Feather
                        name="map-pin"
                        size={24}
                        color="#BDBDBD"
                        style={{ marginRight: 8 }}
                      />
                      <Text
                        style={{
                          textDecorationLine: "underline",
                        }}
                      >
                        {item.locationDescription}
                      </Text>
                    </Pressable>
                  </View>
                </View>
              );
            }}
            keyExtractor={(item, index) => index.toString()}
          />
        </SafeAreaView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginTop: 32,
    marginBottom: 0,
    paddingHorizontal: 16,
  },
});
