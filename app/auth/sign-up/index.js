import { View, Text, ToastAndroid, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./../../../Configs/FirebaseConfig";  // Import Firebase config
import { Colors } from "../../../constants/Colors";

export default function SignUp() {
  const router = useRouter();

  // State for email, password, and full name
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  useEffect(() => {
    // Hiding the header on this screen
    router.setOptions({
      headerShown: false,
    });
  }, []);

  const OnCreateAccount = () => {
    // Check if fields are empty
    if (email.length === 0 || password.length === 0 || fullName.length === 0) {
      ToastAndroid.show("Please enter full details", ToastAndroid.LONG);
      return;
    }

    // Firebase Sign-up
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // User created successfully
        const user = userCredential.user;
        router.replace("/mytrip");
      })
      .catch((error) => {
        const errorMessage = error.message;
        ToastAndroid.show(errorMessage, ToastAndroid.LONG);
      });
  };

  return (
    <View style={{ padding: 25, marginTop: 50, backgroundColor: Colors.WHITE, height: "100%", paddingTop: 40 }}>
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back-circle" size={24} color="black" />
      </TouchableOpacity>
      <Text style={{ fontFamily: "outfit-bold", fontSize: 28, marginTop: 20 }}>Create New Account</Text>

      <View style={{ marginTop: 20 }}>
        <Text>Full Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Full Name"
          value={fullName}
          onChangeText={(value) => setFullName(value)}
        />
      </View>

      <View style={{ marginTop: 20 }}>
        <Text>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={(value) => setEmail(value)}
        />
      </View>

      <View style={{ marginTop: 20 }}>
        <Text>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Password"
          secureTextEntry={true}
          value={password}
          onChangeText={(value) => setPassword(value)}
        />
      </View>

      <TouchableOpacity onPress={OnCreateAccount} style={styles.button}>
        <Text style={{ color: Colors.WHITE, textAlign: "center", fontFamily: "outfit-bold", fontSize: 17 }}>
          Create Account
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.replace("/auth/sign-in")} style={styles.buttonOutline}>
        <Text style={{ textAlign: "center", fontFamily: "outfit-regular", fontSize: 17 }}>
          Already have an account? Sign In
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Colors.GRAY,
    fontFamily: "outfit-regular",
  },
  button: {
    marginTop: 20,
    backgroundColor: Colors.PRIMARY,
    padding: 15,
    borderRadius: 15,
    textAlign: "center",
  },
  buttonOutline: {
    marginTop: 20,
    borderWidth: 1,
    padding: 15,
    borderRadius: 15,
    textAlign: "center",
  },
});
