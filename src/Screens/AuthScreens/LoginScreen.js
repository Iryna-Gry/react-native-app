import React, { useState } from "react";
import {
  View,
  Image,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Text,
  TextInput,
} from "react-native";
import { RegStyles } from "../styles";

const intialState = {
  email: "",
  password: "",
};
const initialFocusState = {
  email: false,
  password: false,
};
export const LoginScreen = ({ navigation }) => {
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
                { paddingBottom: isKeyboardShown ? 35 : 144, paddingTop: 32 },
              ]}
              onPress={handleTouchOut}
            >
              <Text style={{ ...RegStyles.title_text }}>Вхід</Text>

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
                    <Text style={RegStyles.button_text}>Увійти</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => navigation.navigate("Registration")}
                  >
                    <Text style={RegStyles.link_text}>
                      Ще нема аккаунта? Зареєструватися
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
