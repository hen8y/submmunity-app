import { SafeAreaView, ScrollView, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import ThemedText from "@/components/ThemedText";
import { Iconify } from "react-native-iconify";

export default function Profile() {
    return (
        <ScrollView className="bg-zinc-50 h-full">
            <StatusBar style="auto" />
            <SafeAreaView className="mt-20">
                <View className="p-4">
                    <View>
                        <ThemedText type="semibold" textClass="text-2xl">
                            Account
                        </ThemedText>
                        <ThemedText textClass="text-zinc-500">
                            Update your account information
                        </ThemedText>

                        <View className="mt-5 bg-white rounded-xl px-4">
                            <View className="flex-row items-center justify-between border-b border-zinc-200 py-4">
                                <ThemedText>Account Information</ThemedText>
                                <Iconify
                                    icon="ic:round-chevron-right"
                                    size={24}
                                    color="#111"
                                />
                            </View>

                            <View className="flex-row items-center justify-between border-b border-zinc-200 py-4">
                                <ThemedText>Notifications</ThemedText>
                                <Iconify
                                    icon="ic:round-chevron-right"
                                    size={24}
                                    color="#111"
                                />
                            </View>

                            <View className="flex-row items-center justify-between border-zinc-200 py-4">
                                <ThemedText>Bank Details</ThemedText>
                                <Iconify
                                    icon="ic:round-chevron-right"
                                    size={24}
                                    color="#111"
                                />
                            </View>
                        </View>
                    </View>
                    <View className="mt-10">
                        <ThemedText type="semibold" textClass="text-2xl">
                            Privacy
                        </ThemedText>
                        <ThemedText textClass="text-zinc-500">
                            Update your privacy information
                        </ThemedText>

                        <View className="mt-5 bg-white rounded-xl px-4">
                            <View className="flex-row items-center justify-between border-zinc-200 py-4">
                                <ThemedText>Update Password</ThemedText>
                                <Iconify
                                    icon="ic:round-chevron-right"
                                    size={24}
                                    color="#111"
                                />
                            </View>
                        </View>
                    </View>

                    <View className="mt-10">
                        <ThemedText type="semibold" textClass="text-2xl">
                            Legal
                        </ThemedText>
                        <ThemedText textClass="text-zinc-500">
                            Update your account information
                        </ThemedText>

                        <View className="mt-5 bg-white rounded-xl px-4">
                            <View className="flex-row items-center justify-between border-b border-zinc-200 py-4">
                                <ThemedText>Terms Of Use</ThemedText>
                                <Iconify
                                    icon="ic:round-chevron-right"
                                    size={24}
                                    color="#111"
                                />
                            </View>

                            <View className="flex-row items-center justify-between border-zinc-200 py-4">
                                <ThemedText>Privacy Policy</ThemedText>
                                <Iconify
                                    icon="ic:round-chevron-right"
                                    size={24}
                                    color="#111"
                                />
                            </View>
                        </View>
                    </View>

                    <View className="mt-10">
                        <ThemedText textClass="text-center text-zinc-500">
                            v1.0.0
                        </ThemedText>
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView>
    );
}
