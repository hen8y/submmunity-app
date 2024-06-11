import { SafeAreaView, ScrollView, TouchableOpacity, View } from "react-native";
import React from "react";
import { router, useLocalSearchParams } from "expo-router";
import ThemedText from "@/components/ThemedText";
import { Iconify } from "react-native-iconify";
import { StatusBar } from "expo-status-bar";

export default function TransactionDetails() {
    const item = useLocalSearchParams();
    return (
        <SafeAreaView className="bg-white h-full">
            <ScrollView>
                <StatusBar style="auto" />
                <View className="p-4 flex-row items-center">
                    <TouchableOpacity
                        onPress={() => router.back()}
                        className="w-10 h-10 flex-row items-center justify-center rounded-full bg-zinc-100"
                    >
                        <Iconify
                            icon="ic:round-chevron-left"
                            size={24}
                            color="#111"
                        />
                    </TouchableOpacity>
                    <ThemedText textClass="mx-2 text-base">
                        Transaction {item.id}
                    </ThemedText>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
