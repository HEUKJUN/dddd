import React from "react";
import { View } from "react-native";
import IconPractice from "./practices/IconPractice";
import LoginScreen from "./screens/LoginScreen";

export default class Root extends React.Component {
  render() {
    return (
      <View>
        <IconPractice />
        <LoginScreen />
      </View>
    );
  }
}
