import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CreatePostsScreen } from "./CreatePostsScreen";
import { PostsScreen } from "./PostsScreen";
import { ProfileScreen } from "./ProfileScreen";
import { AntDesign, Feather, MaterialIcons } from "@expo/vector-icons";
import useRoute from "../../../router";
import { Alert } from "react-native";

const Tabs = createBottomTabNavigator();

const Home = ({ navigation }) => {
  return (
    <Tabs.Navigator
      initialRouteName="Posts"
      screenOptions={{
        headerStyle: { borderBottomWidth: 1 },
        headerTitleAlign: "center",
        headerRight: () => {
          return (
            <MaterialIcons
              name="logout"
              size={24}
              color="rgba(33, 33, 33, 0.8)"
              onPress={() => {
                navigation.navigate("Login");
              }}
            />
          );
        },
        headerRightContainerStyle: { paddingRight: 16 },
        tabBarShowLabel: false,
        tabBarStyle: {
          justifyContent: "center",
          alignItems: "center",
          height: 60,
        },
      }}
    >
      <Tabs.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="grid"
              size={24}
              color={focused ? "#FF6C00" : "rgba(33, 33, 33, 0.8)"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Create Post"
        component={CreatePostsScreen}
        options={{
          headerRight: () => null,
          headerLeft: () => (
            <AntDesign
              name="arrowleft"
              size={24}
              color="rgba(33, 33, 33, 0.8)"
              onPress={() => {
                navigation.navigate("Posts");
              }}
            />
          ),
          headerLeftContainerStyle: { paddingLeft: 16 },
          tabBarIcon: () => (
            <AntDesign
              name="pluscircle"
              size={24}
              color="#FF6C00"
              onPress={() => {
                navigation.navigate("CreatePosts");
              }}
            />
          ),
          tabBarStyle: { display: "none" },
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="user"
              size={24}
              color={focused ? "#FF6C00" : "rgba(33, 33, 33, 0.8)"}
              onPress={() => {
                navigation.navigate("Profile");
              }}
            />
          ),
          headerShown: false,
        }}
      />
    </Tabs.Navigator>
  );
};

export default Home;
