import React, { useEffect } from "react";
import { SplashScreen, Stack, Tabs } from "expo-router";
import { useFonts } from "expo-font";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [fontsLoaded, error] = useFonts({
        Zeyada: require("@/assets/fonts/Zeyada-Regular.ttf"),
        DMSans: require("@/assets/fonts/DMSans-Regular.ttf"),
        poppin: require("@/assets/fonts/Poppins-Regular.ttf"),
        sbPoppin: require("@/assets/fonts/Poppins-Medium.ttf"),
        bPoppin: require("@/assets/fonts/Poppins-Bold.ttf"),
        ebPoppin: require("@/assets/fonts/Poppins-ExtraBold.ttf"),
        ibPoppin: require("@/assets/fonts/Poppins-Italic.ttf"),
    });

    useEffect(() => {
        if (error) throw error;

        if (fontsLoaded) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded, error]);

    if (!fontsLoaded || error) return null;

    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
            <Stack.Screen name="(pages)" options={{ headerShown: false }} />
        </Stack>
    );
}
