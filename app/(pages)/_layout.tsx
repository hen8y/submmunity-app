import React from "react";
import { Stack } from "expo-router";

export default function PagesLayout() {
    return (
        <Stack>
            <Stack.Screen name="earnings" options={{ headerShown: false }} />
            <Stack.Screen name="deposit" options={{ headerShown: false }} />
            <Stack.Screen
                name="transactiondetails"
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="transactions"
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="notification"
                options={{ headerShown: false }}
            />
            <Stack.Screen name="(family)" options={{ headerShown: false }} />
            <Stack.Screen name="(profile)" options={{ headerShown: false }} />
            <Stack.Screen name="(services)" options={{ headerShown: false }} />
        </Stack>
    );
}
