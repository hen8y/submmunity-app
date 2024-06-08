import { Pressable, SafeAreaView, ScrollView, Text, View } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import ThemedText from "@/components/ThemedText";
import Entypo from "@expo/vector-icons/Entypo";
import DropDown from "@/components/DropDown";
import { Iconify } from "react-native-iconify";
import DownPopup from "@/components/DownPopup";
import Animated3Dot from "@/components/Animated3Dot";

export default function Home() {
    const [showPopup, setShowPopup] = useState(true);
    return (
        <SafeAreaView className="h-full bg-zinc-50">
            <ScrollView>
                <StatusBar style="auto" />
                <View className="w-11/12 mx-auto mt-10">
                    <View className="flex-row justify-between items-center">
                        <View>
                            <ThemedText
                                type="semibold"
                                textClass="text-zinc-700"
                            >
                                Hello Henry,
                            </ThemedText>
                            <ThemedText textClass="text-zinc-700  text-zinc-700 mt-2">
                                {new Date().toLocaleString("en-GB")}
                            </ThemedText>
                        </View>

                        <DropDown
                            trigger={
                                <View className="bg-white border border-zinc-200 rounded-full p-2">
                                    <Iconify
                                        icon="hugeicons:notification-02"
                                        size={18}
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
                    <ThemedText
                        type="semibold"
                        textClass="text-zinc-700 text-sm mt-7"
                    >
                        Account Balance
                    </ThemedText>

                    <View className="flex-row justify-between items-center">
                        <View className="flex-row pt-4">
                            <ThemedText
                                type="bold"
                                textClass="text-zinc-700 text-2xl"
                            >
                                ₦
                            </ThemedText>
                            <Text className="font-bold text-5xl text-zinc-700">
                                5769.00
                            </Text>
                        </View>
                        <View className="relative flex-1 flex-row justify-end">
                            <DropDown
                                trigger={
                                    <View className="bg-white border border-zinc-200 rounded-full w-10 h-10 flex-row justify-center items-center">
                                        <Entypo
                                            name="dots-three-horizontal"
                                            size={16}
                                            color="black"
                                        />
                                    </View>
                                }
                                content={<Text className="bg-white p-3"></Text>}
                                contentClasses=""
                            />
                        </View>
                    </View>

                    <View className="mt-7">
                        <View className="mt-4 w-full flex-1 bg-white border border-zinc-200 h-16 rounded-full -z-10"></View>
                        <View className="flex-row justify-between items-center mt-4">
                            <View className="w-20 h-20 rounded-xl bg-white border border-zinc-200"></View>
                            <View className="flex-1 h-20 rounded-xl bg-primary ml-3"></View>
                        </View>

                        <View className="mt-5 p-4 h-32 rounded-xl bg-white border border-zinc-200">
                            <View className="flex-row justify-between">
                                <ThemedText
                                    type="semibold"
                                    textClass="text-zinc-700 text-sm"
                                >
                                    Families you manage
                                </ThemedText>
                                <Animated3Dot
                                    onPress={() => {
                                        setShowPopup(true);
                                    }}
                                />
                            </View>
                        </View>
                        <View className="mt-5 p-4 h-32 rounded-xl bg-white border border-zinc-200">
                            <ThemedText
                                type="semibold"
                                textClass="text-zinc-700 text-sm"
                            >
                                Families you manage
                            </ThemedText>
                        </View>
                    </View>
                </View>

                <DownPopup
                    showPopup={showPopup}
                    height={150}
                    setShowPopup={setShowPopup}
                >
                    <View className="p-4">
                        <View className="flex-row items-center">
                            <Iconify
                                icon="fluent:add-12-regular"
                                color="#3f3f46"
                                size={20}
                            />
                            <ThemedText
                                className="mx-6 flex-1"
                                textClass="text-zinc-700 text-sm"
                            >
                                Add New Family
                            </ThemedText>
                        </View>
                    </View>
                </DownPopup>
            </ScrollView>
        </SafeAreaView>
    );
}
