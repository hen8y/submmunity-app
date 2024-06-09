import React from "react";
import { Stack } from "expo-router";

export default function HomeLayout() {
    return (
        <Stack>
            <Stack.Screen name="overview" options={{ headerShown: false }} />
            <Stack.Screen name="deposit" options={{ headerShown: false }} />
            <Stack.Screen name="earnings" options={{ headerShown: false }} />
            <Stack.Screen
                name="notification"
                options={{ headerShown: false }}
            />
            <Stack.Screen name="(family)" options={{ headerShown: false }} />
        </Stack>
    );
}
