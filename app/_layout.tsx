import { Stack, useLocalSearchParams } from "expo-router";
import {
  Prompt_400Regular,
  Prompt_700Bold,
  useFonts,
} from "@expo-google-fonts/prompt";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { type, title } = useLocalSearchParams();
  const [fontsLoaded] = useFonts({
    Prompt_400Regular,
    Prompt_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="home" options={{ headerShown: false }} />
      <Stack.Screen
        name="detail"
        options={{
          title: "รายละเอียดสถานที่",
          headerBackButtonDisplayMode: "minimal",
          headerTitleAlign: "center",
          headerTitleStyle: { fontFamily: "Prompt_400Regular", color: "#fff" },
          headerStyle: { backgroundColor: "#ffbf2a" },
          headerTintColor: "#fff",
        }}
      />
      <Stack.Screen
        name="category"
        options={({ route }) => ({
          title: (route.params as any)?.title || "หมวดหมู่",
          headerBackButtonDisplayMode: "minimal",
          headerTitleAlign: "center",
          headerTitleStyle: { fontFamily: "Prompt_400Regular", color: "#ffffff" },
          headerStyle: { backgroundColor: "#ffbf2a" },
          headerTintColor: "#ffffff",
        })}
      />
    </Stack>
  );
}
