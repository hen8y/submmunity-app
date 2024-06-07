import { SafeAreaView, ScrollView, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

export default function Home() {
    return (
        <SafeAreaView className="bg-white h-full">
            <ScrollView>
                <StatusBar style="auto" />
                <View></View>
            </ScrollView>
        </SafeAreaView>
    );
}
