import React from "react";
import { RegistrationScreen } from "./src/Screens/AuthScreens/RegistrationScreen";
import { LoginScreen } from "./src/Screens/AuthScreens/LoginScreen";
import { PostsScreen } from "./src/Screens/MainScreens/PostsScreen";
import { ProfileScreen } from "./src/Screens/MainScreens/ProfileScreen";
import { CreatePostsScreen } from "./src/Screens/MainScreens/CreatePostsScreen";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const MainStack = createStackNavigator();
const Tab = createBottomTabNavigator();

export const useRoute = (isLoggedIn) => {
  return isLoggedIn ? (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#FF6C00",
        tabBarInactiveTintColor: "rgba(33, 33, 33, 0.8)",
        tabBarStyle: {
          paddingHorizontal: 70,
          paddingTop: 10,
          paddingBottom: 22,
          height: 70,
        },
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Feather name="grid" size={size} color={color} />
          ),

          headerRight: () => (
            <TouchableOpacity
              onPress={() => alert("This is a button!")}
              title="Press me"
              color="#fff"
            ></TouchableOpacity>
          ),
        }}
        name="Posts"
        component={PostsScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Feather name="plus" size={size} color={color} />
          ),
        }}
        name="CreatePosts"
        component={CreatePostsScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  ) : (
    <MainStack.Navigator initialRouteName="Login">
      {/* Замена Switch */}
      <MainStack.Screen
        name="Registration"
        component={RegistrationScreen}
        options={{ headerShown: false }}
      />
      {/* Замена Route */}
      <MainStack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      {/* <MainStack.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          title: "Публікації",
          headerRight: () => (
            <Button
              onPress={() => alert("This is a button!")}
              title="Press me"
              color="#fff"
            />
          ),
        }}
      /> */}
    </MainStack.Navigator>
  );
};

{
  /* <Feather name="trash-2" size={24} color="black" />; */
}
