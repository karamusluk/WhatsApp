/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Fontisto, Ionicons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ChatsScreen from "../screens/ChatsScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import {
  MainTabParamList,
  ChatsScreenParamList,
  TabTwoParamList,
} from "../types";

const MainTab = createMaterialTopTabNavigator<MainTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <MainTab.Navigator
      initialRouteName={"Chats"}
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].background,
        tabBarStyle: {
          backgroundColor: Colors[colorScheme].tint,
        },
        tabBarIndicatorStyle: {
          backgroundColor: Colors[colorScheme].background,
          height: 5,
          borderRadius: 1,
        },
        tabBarLabelStyle: {
          fontWeight: "bold",
        },
        tabBarShowIcon: true,
      }}
    >
      <MainTab.Screen
        name="Camera"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Fontisto name="camera" color={color} size={18} />
          ),
          tabBarShowLabel: false,
        }}
      />
      <MainTab.Screen
        name="Chats"
        component={ChatScreenNavigator}
        options={{}}
      />
      <MainTab.Screen name="Status" component={TabTwoNavigator} options={{}} />
      <MainTab.Screen name="Calls" component={TabTwoNavigator} options={{}} />
    </MainTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const ChatsScreenStack = createStackNavigator<ChatsScreenParamList>();

function ChatScreenNavigator() {
  return (
    <ChatsScreenStack.Navigator>
      <ChatsScreenStack.Screen
        name="ChatsScreen"
        component={ChatsScreen}
        options={{ headerShown: false, headerTitle: "Tab One Title" }}
      />
    </ChatsScreenStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerShown: false, headerTitle: "Tab Two Title" }}
      />
    </TabTwoStack.Navigator>
  );
}
