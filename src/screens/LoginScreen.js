import React from "react";
import { View, Text, TextInput } from "react-native";

export default class LoginScreen extends React.Component {
  render() {
    return (
      <View>
        <Text> CAR AUCTION </Text>
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 2,
            width: "100%",
          }}
          placeholder="이름"
        />
      </View>
    );
  }
}
