import {
    Pressable,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    View,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import ThemedText from "@/components/ThemedText";
import { Iconify } from "react-native-iconify";
import { router } from "expo-router";

export default function Earnings() {
    return (
        <SafeAreaView className="bg-white h-full">
            <ScrollView>
                <StatusBar style="auto" />
                <View className="p-4 flex-row items-center border-b border-zinc-300">
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
                    <ThemedText textClass="mx-2 text-base">Earnings</ThemedText>
                </View>
                <View className="bg-zinc-900 px-6 py-8">
                    <SafeAreaView>
                        <ThemedText textClass="text-white/90 text-sm">
                            Current Month Earnings
                        </ThemedText>

                        <View className="flex-row pt-2 items-center">
                            <ThemedText textClass="text-white text-2xl">
                                ₦
                            </ThemedText>
                            <ThemedText
                                type="semibold"
                                textClass="pt-4 mx-2 text-5xl text-white"
                            >
                                5769.00
                            </ThemedText>
                        </View>
                        <View className="flex-row w-full items-center mt-5">
                            <Pressable
                                onPress={() => {
                                    router.push("/sharedfamilylist");
                                }}
                                className="w-full flex-1 bg-white/20 backdrop-blur-md h-16 rounded-full -z-10 flex-row items-center justify-center"
                            >
                                <ThemedText textClass="text-white mx-2 text-xl">
                                    View Families
                                </ThemedText>
                                <Iconify
                                    size={25}
                                    color="#fff"
                                    icon="system-uicons:users"
                                />
                            </Pressable>
                        </View>
                    </SafeAreaView>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
