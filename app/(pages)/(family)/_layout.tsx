import React from "react";
import { Stack } from "expo-router";

export default function FamilyLayout() {
    return (
        <Stack>
            <Stack.Screen
                name="joinedfamilies"
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="sharedfamilylist"
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="sharedfamily"
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="createfamily"
                options={{ headerShown: false }}
            />
        </Stack>
    );
}
