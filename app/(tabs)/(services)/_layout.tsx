import React from "react";
import { Stack } from "expo-router";

export default function ProfileLayout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="familylist" options={{ headerShown: false }} />
            <Stack.Screen
                name="familydetails"
                options={{ headerShown: false }}
            />
        </Stack>
    );
}
