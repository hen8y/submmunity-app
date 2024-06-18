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
import { NumericFormat } from "react-number-format";

export default function SharedFamilyList() {
    return (
        <SafeAreaView className="bg-white h-full">
            <ScrollView>
                <StatusBar style="auto" />
                <View className="p-4 flex-row items-center">
                    <View className="absolute p-4 z-10">
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
                    </View>
                    <View className="flex-1">
                        <ThemedText
                            type="bold"
                            textClass="text-base text-zinc-700 text-center"
                        >
                            Families
                        </ThemedText>
                    </View>
                </View>

                <View>
                    <ThemedText
                        type="bold"
                        textClass="text-3xl text-zinc-700 text-center"
                    >
                        Shared Families
                    </ThemedText>
                    <ThemedText textClass="text-center text-zinc-600">
                        Families shared by you
                    </ThemedText>
                </View>
                <View className="mt-4 p-4">
                    <View className="border border-zinc-200 rounded-2xl bg-zinc-100 p-4">
                        <ThemedText
                            type="bold"
                            textClass="text-xl uppercase text-zinc-700"
                        >
                            HyTERsd
                        </ThemedText>
                        <NumericFormat
                            value={5000}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"₦"}
                            renderText={(value) => (
                                <ThemedText
                                    type="semibold"
                                    textClass="text-zinc-600"
                                >
                                    {value} Per Slot
                                </ThemedText>
                            )}
                        />
                        <View className="mt-2">
                            <View className="flex-row items-center justify-between py-4 border-b border-zinc-200">
                                <View className="flex-row items-center">
                                    <Iconify
                                        icon="lets-icons:date-today-duotone"
                                        color="#555"
                                        size={20}
                                    />
                                    <ThemedText textClass="text-zinc-700 mx-2 text-sm">
                                        Subscription
                                    </ThemedText>
                                </View>
                                <ThemedText textClass="text-zinc-500">
                                    Showmax
                                </ThemedText>
                            </View>

                            <View className="flex-row items-center justify-between py-4 border-b border-zinc-200">
                                <View className="flex-row items-center">
                                    <Iconify
                                        icon="lets-icons:date-today-duotone"
                                        color="#555"
                                        size={20}
                                    />
                                    <ThemedText textClass="text-zinc-700 mx-2 text-sm">
                                        Slots Remaining
                                    </ThemedText>
                                </View>
                                <ThemedText textClass="text-zinc-500">
                                    8
                                </ThemedText>
                            </View>
                            <Pressable
                                className={`bg-black/90 p-5 w-full rounded-full`}
                            >
                                <ThemedText textClass="text-white text-center">
                                    Join Family
                                </ThemedText>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
