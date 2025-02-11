import { Tabs } from "expo-router";
import React, { useEffect } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { clearAuthToken, setAuthToken } from "@/redux/_slice/sign-in-slice";
import { useDispatch } from "react-redux";

export default function TabLayout() {
  const dispatch = useDispatch();
  useEffect(() => {
    const loadToken = async () => {
      try {
        const token = await AsyncStorage.getItem("authToken");
        if (token) {
          dispatch(setAuthToken({ token: token, isAuthenticated: true }));
        } else {
          dispatch(clearAuthToken({ token: "", isAuthenticated: false }));
        }
      } catch (e) {
        console.error("Failed to load token from AsyncStorage", e);
      }
    };

    loadToken();
  }, [dispatch]);

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#0a7ea4",
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Dashboard",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "My Profile",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
}
