import { Pressable, SafeAreaView, ScrollView, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import ThemedText from "@/components/ThemedText";
import { Iconify } from "react-native-iconify";
import { router } from "expo-router";

export default function Profile() {
    return (
        <SafeAreaView className="bg-zinc-50 h-full">
            <StatusBar style="auto" />
            <ScrollView className="pt-1s0">
                <View className="p-4">
                    <View>
                        <ThemedText type="semibold" textClass="text-2xl">
                            Account
                        </ThemedText>
                        <ThemedText textClass="text-zinc-500">
                            Update your account information
                        </ThemedText>

                        <View className="mt-5 bg-white rounded-xl px-4">
                            <Pressable
                                onPress={() => {
                                    router.push("/account");
                                }}
                                className="flex-row items-center justify-between border-b border-zinc-200 py-4"
                            >
                                <ThemedText>Account Information</ThemedText>
                                <Iconify
                                    icon="ic:round-chevron-right"
                                    size={24}
                                    color="#111"
                                />
                            </Pressable>

                            <Pressable
                                onPress={() => {
                                    router.push("/updatepassword");
                                }}
                                className="flex-row items-center justify-between border-b border-zinc-200 py-4"
                            >
                                <ThemedText>Update Password</ThemedText>
                                <Iconify
                                    icon="ic:round-chevron-right"
                                    size={24}
                                    color="#111"
                                />
                            </Pressable>

                            <Pressable
                                onPress={() => {
                                    router.push("/bankdetails");
                                }}
                                className="flex-row items-center justify-between border-zinc-200 py-4"
                            >
                                <ThemedText>Bank Details</ThemedText>
                                <Iconify
                                    icon="ic:round-chevron-right"
                                    size={24}
                                    color="#111"
                                />
                            </Pressable>
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
                            <Pressable
                                onPress={() => {
                                    router.push("/terms");
                                }}
                                className="flex-row items-center justify-between border-b border-zinc-200 py-4"
                            >
                                <ThemedText>Terms Of Use</ThemedText>
                                <Iconify
                                    icon="ic:round-chevron-right"
                                    size={24}
                                    color="#111"
                                />
                            </Pressable>

                            <Pressable
                                onPress={() => {
                                    router.push("/policy");
                                }}
                                className="flex-row items-center justify-between border-zinc-200 py-4"
                            >
                                <ThemedText>Privacy Policy</ThemedText>
                                <Iconify
                                    icon="ic:round-chevron-right"
                                    size={24}
                                    color="#111"
                                />
                            </Pressable>
                        </View>
                    </View>

                    <View className="mt-10">
                        <ThemedText textClass="text-center text-zinc-500">
                            v1.0.0
                        </ThemedText>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
