import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../../constants/Colors";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

export default function SearchPlace() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: "Search Place",
      headerShown: true,
    });
  }, []);
  return (
    <View
      style={{
        padding: 25,
        paddingTop: 50,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <GooglePlacesAutocomplete
        placeholder="Search"
        fetchDetails={true}
        onPress={(data, details = null) => {
          setTripData({
            locationInfo: {
            name:data.description,
            coordinates:details?.geometry.location,
            photoRef:details?.photos [0]?.photo_reference,
            url:details?.url
            }
            })
        }}
        query={{
          key: process.env.PUBLIC_GOOGLE_MAP_API_KEY,
          language: "en",
        }}
      />
    </View>
  );
}
