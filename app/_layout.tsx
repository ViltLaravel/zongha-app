import { useFonts } from "expo-font";
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { router, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { Provider, useDispatch, useSelector } from "react-redux";
import { RootState, store } from "@/store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { clearAuthToken, setAuthToken } from "@/redux/_slice/sign-in-slice";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <ReduxWrapper />
    </Provider>
  );
}

function ReduxWrapper() {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.signInState);

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

  useEffect(() => {
    if (state.auth.isAuthenticated) {
      router.replace("/(tabs)");
    } else {
      router.replace("/signin");
    }
  }, [state.auth.isAuthenticated]);

  return (
    <GluestackUIProvider mode="light">
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="signin" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </GluestackUIProvider>
  );
}
