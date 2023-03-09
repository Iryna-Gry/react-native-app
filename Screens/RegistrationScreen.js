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
  Text,
  TextInput,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export const RegistrationScreen = () => {
  const [user, setUser] = useState({});
  const handleSubmit = (event) => {
    const element = event.currentTarget.elements;
    setUser({
      login: element.login.value,
      email: element.email.value,
      password: element.password.value,
    });
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../images/bg-reg.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.form_container}>
          <KeyboardAvoidingView // определяем ОС и настраиваем поведение клавиатуры
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={styles.form_container}
            height="100%"
          >
            <View
              style={[
                styles.hero_container,
                {
                  transform: [{ translateX: -60 }],
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
            />
            <TextInput
              placeholder="Адресса електронної пошти"
              style={styles.input}
              inputMode="email"
              placeholderTextColor="#bdbdbd"
              name="email"
            />
            <TextInput
              placeholder="Пароль"
              style={styles.input}
              placeholderTextColor="#bdbdbd"
              name="password"
            />

            <Pressable style={styles.button}>
              <Text style={styles.button_text}>Зареєструватися</Text>
            </Pressable>
            <Pressable style={styles.link_text}>
              <Text>Вже є аккаунт? Увійти</Text>
            </Pressable>
          </KeyboardAvoidingView>
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
    paddingHorizontal: 16,
    flex: 0.6,
    position: "relative",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    alignItems: "center",
  },
  hero_container: {
    position: "absolute",
    top: -60,
    left: "50%",
    marginBottom: 32,
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
