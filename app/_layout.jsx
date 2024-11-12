import React, { useState } from "react"; // Import useState here
import { useFonts } from "expo-font";
import { ActivityIndicator, View } from "react-native";
import { CreateTripContext } from "./../context/CreateTripContext";
import { Stack } from "expo-router";

export default function RootLayout() {
  // Load fonts
  const [fontsLoaded] = useFonts({
    "Outfit-Bold": require("../assets/fonts/Outfit-Bold.ttf"),
    "Outfit-Medium": require("../assets/fonts/Outfit-Medium.ttf"),
    "Outfit-Regular": require("../assets/fonts/Outfit-Regular.ttf"),
  });

  // State for trip data
  const [tripData, setTripData] = useState([]);

  // Show loading indicator until fonts are loaded
  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <CreateTripContext.Provider value={{ tripData, setTripData }}>
      <Stack screenOptions={{ headerShown: false }}>
        {/* Uncomment or add additional screens as needed */}
        <Stack.Screen name="(tabs)" />
      </Stack>
    </CreateTripContext.Provider>
  );
}
