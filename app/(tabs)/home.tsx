import { SafeAreaView, ScrollView, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import ThemedText from "@/components/ThemedText";
import Entypo from "@expo/vector-icons/Entypo";
import DropDown from "@/components/DropDown";
import { Iconify } from "react-native-iconify";

export default function Home() {
    return (
        <SafeAreaView className="h-full bg-white">
            <ScrollView>
                <StatusBar style="auto" />
                <View className="w-11/12 mx-auto mt-10">
                    <View className="flex-row justify-between items-center">
                        <View>
                            <ThemedText type="semibold" textClass="text-lg">
                                Hello Henry,
                            </ThemedText>
                            <ThemedText textClass="text-base text-zinc-700 mt-2">
                                {new Date().toLocaleString("en-GB")}
                            </ThemedText>
                        </View>

                        <DropDown
                            trigger={
                                <View className="bg-zinc-100 rounded-full p-3">
                                    <Iconify
                                        icon="hugeicons:notification-02"
                                        size={24}
                                        color="#111"
                                    />
                                </View>
                            }
                            content={
                                <ThemedText className="bg-white">
                                    No Notification
                                </ThemedText>
                            }
                            contentClasses="w-40"
                        />
                    </View>
                    <View className="mt-7">
                        <ThemedText type="semibold" textClass="text-lg">
                            Account Balance
                        </ThemedText>

                        <View className="flex-row justify-between items-center">
                            <View className="flex-row pt-4">
                                <ThemedText type="bold" textClass="text-2xl">
                                    ₦
                                </ThemedText>
                                <Text className="font-bold text-5xl">
                                    5769.00
                                </Text>
                            </View>
                            <View className="relative flex-1 flex-row justify-end">
                                <DropDown
                                    trigger={
                                        <View className="bg-zinc-100 rounded-full w-10 h-10 flex-row justify-center items-center">
                                            <Entypo
                                                name="dots-three-horizontal"
                                                size={16}
                                                color="black"
                                            />
                                        </View>
                                    }
                                    content={
                                        <Text className="bg-white p-3"></Text>
                                    }
                                    contentClasses=""
                                />
                            </View>
                        </View>
                        <View className="mt-4 flex-1 bg-zinc-100 h-16 rounded-full -z-10"></View>
                        <View className="flex-row justify-between items-center mt-4">
                            <View className="w-20 h-20 rounded-xl bg-zinc-100"></View>
                            <View className="flex-1 h-20 rounded-xl bg-primary ml-3"></View>
                        </View>

                        <View className="mt-4">
                            <ThemedText type="semibold" textClass="text-lg">
                                Families you manage
                            </ThemedText>
                            <View className="mt-4 flex-row justify-center items-center">
                                <View className="flex-1 h-20 rounded-xl bg-zinc-100 mr-2"></View>
                                <View className="flex-1 h-20 rounded-xl bg-zinc-100 mr-2"></View>
                                <View className="flex-1 h-20 rounded-xl bg-zinc-100"></View>
                            </View>
                        </View>
                        <View className="mt-4">
                            <ThemedText type="semibold" textClass="text-lg">
                                Families you manage
                            </ThemedText>
                            <View className="mt-4 flex-row justify-center items-center h-32 rounded-xl bg-zinc-100"></View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
