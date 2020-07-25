import React, { Component } from "react";
import { View, Text } from "react-native";
import { normalize } from "react-native-elements";
// use imd to create this import {  } from 'module';

class Home extends Component {
  static navigationOptions = {
    title: "Home",
  };

  render() {
    return (
      <View
        style={{
          alignItems: "center",
        }}
      >
        <Text>Home Component</Text>
      </View>
    );
  }
}

export default Home;
