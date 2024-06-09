import { SafeAreaView, ScrollView, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Iconify } from "react-native-iconify";
import ThemedText from "@/components/ThemedText";

export default function Support() {
    return (
        <ScrollView className="bg-zinc-50 h-full">
            <SafeAreaView className="w-full mt-20">
                <StatusBar style="auto" />
                <View className="p-4">
                    <View>
                        <ThemedText type="semibold" textClass="text-2xl">
                            Support
                        </ThemedText>
                        <ThemedText textClass="text-zinc-500 mt-5">
                            Support for issues
                        </ThemedText>

                        <View className="mt-5 bg-white rounded-xl px-4">
                            <View className="flex-row items-center justify-between border-b border-zinc-200 py-4">
                                <View className="flex-row items-center">
                                    <View className="h-10 w-10 rounded-full bg-zinc-100 items-center justify-center">
                                        <Iconify
                                            icon="hugeicons:bubble-chat-question"
                                            size={24}
                                            color={"#555"}
                                        />
                                    </View>
                                    <ThemedText className="mx-2">
                                        FAQ
                                    </ThemedText>
                                </View>
                                <Iconify
                                    icon="ic:round-chevron-right"
                                    size={24}
                                    color="#111"
                                />
                            </View>

                            <View className="flex-row items-center justify-between border-b border-zinc-200 py-4">
                                <View className="flex-row items-center">
                                    <View className="h-10 w-10 rounded-full bg-zinc-100 items-center justify-center">
                                        <Iconify
                                            icon="hugeicons:whatsapp-business"
                                            size={24}
                                            color={"#555"}
                                        />
                                    </View>
                                    <ThemedText className="mx-2">
                                        Whatsapp
                                    </ThemedText>
                                </View>
                                <Iconify
                                    icon="ic:round-chevron-right"
                                    size={24}
                                    color="#111"
                                />
                            </View>

                            <View className="flex-row items-center justify-between py-4">
                                <View className="flex-row items-center">
                                    <View className="h-10 w-10 rounded-full bg-zinc-100 items-center justify-center">
                                        <Iconify
                                            icon="hugeicons:new-twitter-rectangle"
                                            size={24}
                                            color={"#555"}
                                        />
                                    </View>
                                    <ThemedText className="mx-2">
                                        Twitter (X)
                                    </ThemedText>
                                </View>
                                <Iconify
                                    icon="ic:round-chevron-right"
                                    size={24}
                                    color="#111"
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView>
    );
}
