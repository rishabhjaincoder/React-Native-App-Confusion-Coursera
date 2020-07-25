import React, { Component } from "react";
import Menu from "./MenuComponent";
import Home from "./HomeComponent";
import Dishdetail from "./DishdetailComponent";
import { View, Platform } from "react-native";
// in newer version of Expo, Expo is replaced with ExpoStatusBar
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { createStackNavigator, createDrawerNavigator } from "react-navigation";

const MenuNavigator = createStackNavigator(
    {
        Menu: { screen: Menu },
        Dishdetail: { screen: Dishdetail },
    },
    {
        initialRouteName: "Menu",
        navigationOptions: {
            headerStyle: {
                backgroundColor: "#512DA8",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
                color: "#fff",
            },
        },
    }
);

// we have created home using createStackNavigator because we want to display status bar on the top
const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home },
    },
    {
        navigationOptions: {
            headerStyle: {
                backgroundColor: "#512DA8",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
                color: "#fff",
            },
        },
    }
);

// this is drawer based navigation
const MainNavigator = createDrawerNavigator(
    {
        Home: {
            screen: HomeNavigator,
            navigationOptions: {
                title: "Home",
                drawerLabel: "Home",
            },
        },
        Menu: {
            screen: MenuNavigator,
            navigationOptions: {
                title: "Menu",
                drawerLabel: "Menu",
            },
        },
    },
    {
        drawerBackgroundColor: "#D1C4E9",
    }
);

class Main extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    paddingTop: Platform.OS === "ios" ? 0 : ExpoStatusBar.statusBarHeight,
                }}
            >
                <MainNavigator />
            </View>
        );
    }
}

export default Main;
