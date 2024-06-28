import React from "react";
import { Stack } from "expo-router";

export default function ProfileLayout() {
    return (
        <Stack>
            <Stack.Screen name="account" options={{ headerShown: false }} />
            <Stack.Screen name="bankdetails" options={{ headerShown: false }} />
            <Stack.Screen name="policy" options={{ headerShown: false }} />
            <Stack.Screen name="terms" options={{ headerShown: false }} />
            <Stack.Screen
                name="updatepassword"
                options={{ headerShown: false }}
            />
        </Stack>
    );
}
