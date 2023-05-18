import React, { useState } from "react";
import { RegistrationScreen } from "./src/Screens/AuthScreens/RegistrationScreen";
import { LoginScreen } from "./src/Screens/AuthScreens/LoginScreen";
import { MapScreen } from "./src/Screens/MainScreens/MapScreen";
import { ProfileScreen } from "./src/Screens/MainScreens/ProfileScreen";
import { CreatePostsScreen } from "./src/Screens/MainScreens/CreatePostsScreen";
import { Feather } from "@expo/vector-icons";
import Home from "./src/Screens/MainScreens/Home";
import { TouchableOpacity, Text } from "react-native";
import CommentsScreen from "./src/Screens/MainScreens/CommentsScreen";
import { createStackNavigator } from "@react-navigation/stack";

const MainStack = createStackNavigator();

export const useRoute = (isLoggedIn) => {
  const [keyboardIsShown, setKeyboardIsShown] = useState(false);
  const [passwordIsShown, setPasswordIsShown] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);

  const handleActiveKeyboard = (inputName) => {
    setFocusedInput(inputName);

    if (keyboardIsShown) return;

    setKeyboardIsShown(!keyboardIsShown);
  };

  const hideKeyboard = () => {
    if (!keyboardIsShown) return;

    setKeyboardIsShown(false);
    setFocusedInput(null);
    Keyboard.dismiss();
  };

  return (
    <MainStack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
        headerTitleAlign: "center",
        headerStyle: { borderBottomWidth: 1 },
      }}
    >
      {!isLoggedIn && (
        <>
          <MainStack.Screen name="Login">
            {(props) => (
              <LoginScreen
                {...props}
                isLoggedIn={isLoggedIn}
                keyboardIsShown={keyboardIsShown}
                passwordIsShown={passwordIsShown}
                focusedInput={focusedInput}
                setPasswordIsShown={setPasswordIsShown}
                hideKeyboard={hideKeyboard}
                handleActiveKeyboard={handleActiveKeyboard}
              />
            )}
          </MainStack.Screen>

          <MainStack.Screen name="Register">
            {(props) => (
              <RegistrationScreen
                {...props}
                isLoggedIn={isLoggedIn}
                keyboardIsShown={keyboardIsShown}
                passwordIsShown={passwordIsShown}
                focusedInput={focusedInput}
                setPasswordIsShown={setPasswordIsShown}
                hideKeyboard={hideKeyboard}
                handleActiveKeyboard={handleActiveKeyboard}
              />
            )}
          </MainStack.Screen>

          <MainStack.Screen name="Home" component={Home} />
          <MainStack.Screen
            name="Comments"
            component={CommentsScreen}
            options={{ headerShown: true }}
          />
          <MainStack.Screen
            name="Map"
            component={MapScreen}
            options={{ headerShown: true }}
          />
        </>
      )}

      {isLoggedIn && (
        <>
          <MainStack.Screen name="Home" component={Home} />
          <MainStack.Screen name="CreatePosts" component={CreatePostsScreen} />
          <MainStack.Screen name="Profile" component={ProfileScreen} />
          <MainStack.Screen name="Login">
            {(props) => (
              <LoginScreen
                {...props}
                isLoggedIn={isLoggedIn}
                keyboardIsShown={keyboardIsShown}
                passwordIsShown={passwordIsShown}
                focusedInput={focusedInput}
                setPasswordIsShown={setPasswordIsShown}
                hideKeyboard={hideKeyboard}
                handleActiveKeyboard={handleActiveKeyboard}
              />
            )}
          </MainStack.Screen>

          <MainStack.Screen name="Register">
            {(props) => (
              <RegistrationScreen
                {...props}
                isLoggedIn={isLoggedIn}
                keyboardIsShown={keyboardIsShown}
                passwordIsShown={passwordIsShown}
                focusedInput={focusedInput}
                setPasswordIsShown={setPasswordIsShown}
                hideKeyboard={hideKeyboard}
                handleActiveKeyboard={handleActiveKeyboard}
              />
            )}
          </MainStack.Screen>

          <MainStack.Screen
            name="Comments"
            component={CommentsScreen}
            options={{ headerShown: true }}
          />
          <MainStack.Screen
            name="Map"
            component={MapScreen}
            options={{ headerShown: true }}
          />
        </>
      )}
    </MainStack.Navigator>
  );
};

export default useRoute;
