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
  Pressable,
  TouchableOpacity,
  Text,
  TextInput,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export const RegistrationScreen = () => {
  const [user, setUser] = useState({});
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);
  const handleSubmit = (event) => {
    const element = event.currentTarget.elements;
    setUser({
      login: element.login.value,
      email: element.email.value,
      password: element.password.value,
    });
  };
  const keyboardHide = () => {
    setIsKeyboardShown(false);
    Keyboard.dismiss();
  };
  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <ImageBackground
        source={require("../images/bg-reg.jpg")}
        style={styles.image}
      >
        <KeyboardAvoidingView behavior={Platform.OS === "ios" && "padding"}>
          <TouchableWithoutFeedback onPress={keyboardHide}>
            <View
              style={[
                styles.content_container,
                {},
                { paddingBottom: isKeyboardShown ? 35 : 80 },
              ]}
              onPress={keyboardHide}
            >
              <View
                style={[
                  styles.hero_container,
                  {
                    transform: [{ translateX: -50 }],
                  },
                ]}
              >
                <Image style={styles.hero_image} />
                <Pressable>
                  <AntDesign
                    name="pluscircleo"
                    size={24}
                    color="#ff6c00"
                    style={styles.hero_button}
                  />
                </Pressable>
              </View>
              <Text style={styles.title_text}>Реєстрація</Text>
              <TextInput
                placeholder="Логін"
                style={styles.input}
                placeholderTextColor="#bdbdbd"
                name="login"
                onFocus={() => {
                  setIsKeyboardShown(true);
                }}
              />
              <TextInput
                placeholder="Адреса електронної пошти"
                style={styles.input}
                inputMode="email"
                placeholderTextColor="#bdbdbd"
                name="email"
                onFocus={() => {
                  setIsKeyboardShown(true);
                }}
              />
              <TextInput
                placeholder="Пароль"
                style={styles.input}
                placeholderTextColor="#bdbdbd"
                name="password"
                secureTextEntry={true}
                onFocus={() => {
                  setIsKeyboardShown(true);
                }}
              />

              {!isKeyboardShown && (
                <View>
                  <TouchableOpacity style={styles.button} activeOpacity={0.7}>
                    <Text style={styles.button_text}>Зарегистрироваться</Text>
                  </TouchableOpacity>
                  <TouchableOpacity activeOpacity={0.7}>
                    <Text style={styles.link_text}>
                      Уже есть аккаунт? Войти
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

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  content_container: {
    position: "relative",
    justifyContent: "center",
    alignItems: "stretch",
    paddingHorizontal: 16,
    paddingTop: 92,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  form_container: {
    width: "100%",
    position: "relative",
    top: 0,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 40,
  },
  hero_container: {
    position: "absolute",
    top: -60,
    left: "50%",
  },
  hero_image: {
    backgroundColor: "#f6f6f6",
    width: 120,
    height: 120,
    borderRadius: 16,
  },
  hero_button: {
    position: "absolute",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    bottom: 14,
    right: -12.5,
  },

  title_text: {
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    color: "#212121",
    marginBottom: 33,
  },
  input: {
    width: "100%",
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderColor: "#e8e8e8",
    marginBottom: 16,
    backgroundColor: "#f6f6f6",
    borderRadius: 8,
  },
  button: {
    backgroundColor: "#ff6c00",
    width: "100%",
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 27,
    marginBottom: 16,
  },
  button_text: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#FFFFFF",
  },
  link_text: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#1B4371",
  },
});
