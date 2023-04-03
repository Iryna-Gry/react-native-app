import React, { useState } from "react";
import {
  View,
  Image,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Pressable,
  TouchableOpacity,
  Text,
  TextInput,
} from "react-native";
import { RegStyles } from "../styles";
import { AntDesign } from "@expo/vector-icons";

const intialState = {
  login: "",
  email: "",
  password: "",
};
const initialFocusState = {
  login: false,
  email: false,
  password: false,
};
export const RegistrationScreen = ({ navigation }) => {
  const [user, setUser] = useState(intialState);
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  const [isFocused, setIsFocused] = useState(initialFocusState);

  const handleTouchOut = () => {
    setIsKeyboardShown(false);
    Keyboard.dismiss();
  };
  const handleOnBlur = (name) => {
    setIsFocused((prevState) => ({ ...prevState, [name]: false }));
  };
  const handleSubmit = () => {
    setIsKeyboardShown(false);
    Keyboard.dismiss();
    console.log(user);
    setUser(intialState);
  };

  return (
    <TouchableWithoutFeedback onPress={handleTouchOut}>
      <ImageBackground
        source={require("../../../assets/images/bg-reg.jpg")}
        style={RegStyles.image}
      >
        <KeyboardAvoidingView behavior={Platform.OS === "ios" && "padding"}>
          <TouchableWithoutFeedback onPress={handleTouchOut}>
            <View
              style={[
                RegStyles.content_container,
                {},
                { paddingBottom: isKeyboardShown ? 35 : 80 },
              ]}
              onPress={handleTouchOut}
            >
              <View
                style={[
                  RegStyles.hero_container,
                  {
                    transform: [{ translateX: -50 }],
                  },
                ]}
              >
                <Image style={RegStyles.hero_image} />
                <Pressable>
                  <AntDesign
                    name="pluscircleo"
                    size={24}
                    color="#ff6c00"
                    style={RegStyles.hero_button}
                  />
                </Pressable>
              </View>
              <Text style={RegStyles.title_text}>Реєстрація</Text>
              <TextInput
                placeholder="Логін"
                style={{
                  ...RegStyles.input,
                  borderColor: isFocused.login ? "#FF6C00" : "#E8E8E8",
                }}
                placeholderTextColor="#bdbdbd"
                name="login"
                value={user.login}
                onFocus={() => {
                  setIsKeyboardShown(true);
                  setIsFocused((prevState) => ({
                    ...prevState,
                    login: true,
                  }));
                }}
                onBlur={() => handleOnBlur("login")}
                onChangeText={(value) =>
                  setUser((prevState) => ({ ...prevState, login: value }))
                }
              />
              <TextInput
                placeholder="Адреса електронної пошти"
                style={{
                  ...RegStyles.input,
                  borderColor: isFocused.email ? "#FF6C00" : "#E8E8E8",
                }}
                inputMode="email"
                placeholderTextColor="#bdbdbd"
                name="email"
                value={user.email}
                onFocus={() => {
                  setIsKeyboardShown(true);
                  setIsFocused((prevState) => ({
                    ...prevState,
                    email: true,
                  }));
                }}
                onBlur={() => handleOnBlur("email")}
                onChangeText={(value) =>
                  setUser((prevState) => ({ ...prevState, email: value }))
                }
              />
              <View style={RegStyles.password_view}>
                <TextInput
                  placeholder="Пароль"
                  style={{
                    ...RegStyles.input,
                    borderColor: isFocused.password ? "#FF6C00" : "#E8E8E8",
                  }}
                  placeholderTextColor="#bdbdbd"
                  name="password"
                  value={user.password}
                  secureTextEntry={isPasswordHidden}
                  onFocus={() => {
                    setIsKeyboardShown(true);
                    setIsFocused((prevState) => ({
                      ...prevState,
                      password: true,
                    }));
                  }}
                  onBlur={() => handleOnBlur("password")}
                  onChangeText={(value) =>
                    setUser((prevState) => ({ ...prevState, password: value }))
                  }
                />
                <TouchableOpacity
                  style={RegStyles.showButton}
                  onPress={() => setIsPasswordHidden((prevState) => !prevState)}
                >
                  <Text style={RegStyles.showButton_text}>
                    {isPasswordHidden ? "Показати" : "Приховати"}
                  </Text>
                </TouchableOpacity>
              </View>

              {!isKeyboardShown && (
                <View>
                  <TouchableOpacity
                    style={RegStyles.button}
                    activeOpacity={0.7}
                    onPress={handleSubmit}
                  >
                    <Text style={RegStyles.button_text}>Зареєструватися</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    activeOpacity={0.7}
                    title="Go to Login"
                    onPress={() => navigation.navigate("Login")}
                  >
                    <Text style={RegStyles.link_text}>
                      Вже є аккаунт? Увійти
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};
