import { SafeAreaView, FlatList, View, TextInput } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import ThemedText from "@/components/ThemedText";
import { AntDesign } from "@expo/vector-icons";
import SubscriptionList from "@/components/SubscriptionList";
import { Iconify } from "react-native-iconify";

export default function Services() {
    const subscriptions = [
        {
            id: "1",
            icon: "path/to/apple-music-ng.png",
            price: "₦1500 / Month",
            families: 3,
        },
        {
            id: "2",
            icon: "path/to/apple-music-us.png",
            price: "₦4000 / Month",
            families: 0,
        },
        {
            id: "3",
            icon: "path/to/apple-music-icloud.png",
            price: "₦3000 / Month",
            families: 1,
        },
        {
            id: "4",
            icon: "path/to/canva.png",
            price: "₦1500 / Month",
            families: 0,
        },
        {
            id: "5",
            icon: "path/to/crunchyroll.png",
            price: "₦1520 / Month",
            families: 1,
        },
        {
            id: "6",
            icon: "path/to/expressvpn.png",
            price: "₦3500 / Month",
            families: 2,
        },
        {
            id: "7",
            icon: "path/to/icloud-us.png",
            price: "₦4000 / Month",
            families: 0,
        },
        {
            id: "8",
            icon: "path/to/icloud-ng.png",
            price: "₦1600 / Month",
            families: 1,
        },
    ];

    return (
        <SafeAreaView>
            <StatusBar style="auto" />
            <View className="w-11/12 mx-auto mt-10">
                <ThemedText type="bold" textClass="text-4xl">
                    Available Services
                </ThemedText>

                <View className="flex-row justify-between mt-10 items-center mb-10">
                    <View className="flex-1 mr-3 w-full bg-neutral-200 flex-row items-center justify-around rounded-full p-4">
                        <Iconify icon="oui:search" size={15} color="#111" />
                        <TextInput
                            className="flex-1 pl-3"
                            placeholder="Search Services"
                            placeholderTextColor="#aaa"
                        />
                    </View>
                    <View className="w-10 h-10 bg-black rounded-full"></View>
                </View>
                <FlatList
                    data={subscriptions}
                    renderItem={({ item }) => <SubscriptionList item={item} />}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                />
            </View>
        </SafeAreaView>
    );
}
