import {
    FlatList,
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
import JoinedFamilyItem from "@/components/services/JoinedFamilyItem";

export default function JoinedFamilies() {
    const subscriptions = [
        {
            id: "1",
            name: "Apple Music & Icloud",
            icon: "Apple",
            price: "₦1500 / Month",
            families: 3,
        },
        {
            id: "2",
            name: "Spotify",
            icon: "Spotify",
            price: "₦4000 / Month",
            families: 0,
        },
        {
            id: "3",
            name: "Express",
            icon: "Express",
            price: "₦3000 / Month",
            families: 1,
        },
        {
            id: "4",
            name: "Prime",
            icon: "Prime",
            price: "₦1500 / Month",
            families: 0,
        },
        {
            id: "5",
            name: "Netflix",
            icon: "Netflix",
            price: "₦1520 / Month",
            families: 1,
        },
        {
            id: "6",
            name: "iCloud",
            icon: "ICloud",
            price: "₦3500 / Month",
            families: 2,
        },
        {
            id: "7",
            name: "Canva",
            icon: "Canva",
            price: "₦4000 / Month",
            families: 0,
        },
        {
            id: "8",
            name: "Deezer",
            icon: "Deezer",
            price: "₦1600 / Month",
            families: 1,
        },
        {
            id: "32",
            name: "Deezer",
            icon: "Deezer",
            price: "₦1600 / Month",
            families: 1,
        },
        {
            id: "33",
            name: "Deezer",
            icon: "Deezer",
            price: "₦1600 / Month",
            families: 1,
        },
    ];
    return (
        <SafeAreaView className="bg-white h-full">
            {/* <ScrollView> */}
            <StatusBar style="auto" />
            <View className="p-4 flex-row items-center">
                <TouchableOpacity
                    onPress={() => router.back()}
                    className="w-10 h-10 flex-row items-center justify-center rounded-full bg-zinc-100"
                >
                    <Iconify icon="iconoir:cancel" size={24} color="#555" />
                </TouchableOpacity>
            </View>

            <View className="w-full">
                <View className="p-4 pb-2">
                    <View className="h-14 w-14 rounded-full bg-blue-400 items-center justify-center">
                        <Iconify
                            size={25}
                            color="#fff"
                            icon="fluent:people-28-filled"
                        />
                    </View>
                    <View>
                        <ThemedText
                            textClass="mt-2 text-2xl text-zinc-700"
                            type="semibold"
                        >
                            Joined Families
                        </ThemedText>
                        <ThemedText className="text-xs mt-1 text-zinc-500">
                            Families you're a member
                        </ThemedText>
                    </View>
                </View>

                <FlatList
                    data={subscriptions}
                    renderItem={({ item }) => (
                        <JoinedFamilyItem
                            columnClass="w-full my-2 h-44"
                            subscription={item}
                        />
                    )}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={{
                        padding: 12,
                    }}
                />
            </View>
            {/* </ScrollView> */}
        </SafeAreaView>
    );
}
