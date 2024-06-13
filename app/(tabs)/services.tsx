import {
    SafeAreaView,
    FlatList,
    View,
    ScrollView,
    Pressable,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import ThemedText from "@/components/ThemedText";
import SubscriptionItem, {
    SubscriptionItemProps,
} from "@/components/services/SubscriptionItem";
import { Iconify } from "react-native-iconify";
import JoinedFamilyItem from "@/components/services/JoinedFamilyItem";
import { router } from "expo-router";

export default function Services() {
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
    ];

    function AvailableServices(props: {
        subscriptions: SubscriptionItemProps["subscription"][];
    }) {
        return props.subscriptions.map((subscription) => (
            <View key={subscription.id}>
                <SubscriptionItem subscription={subscription} />
            </View>
        ));
    }

    return (
        <SafeAreaView className="h-full bg-zinc-50 w-full">
            <StatusBar style="dark" />
            <ScrollView className="w-full pt-10">
                <View className="p-4 pb-2">
                    <View className="h-14 w-14 rounded-full bg-blue-400 items-center justify-center">
                        <Iconify
                            size={25}
                            color="#fff"
                            icon="fluent:people-28-filled"
                        />
                    </View>
                    <Pressable
                        onPress={() => {
                            router.push("/joinedfamilies");
                        }}
                        className="flex-row justify-between items-center"
                    >
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
                        <Iconify
                            size={25}
                            color="#555"
                            icon="ic:round-chevron-right"
                        />
                    </Pressable>
                </View>

                <FlatList
                    data={subscriptions.slice(0, 3)}
                    renderItem={({ item }) => (
                        <JoinedFamilyItem columnClass="" subscription={item} />
                    )}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={{
                        padding: 12,
                    }}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
                <View className="p-4 mt-5">
                    <View className="">
                        <ThemedText
                            type="semibold"
                            textClass="text-2xl text-zinc-700"
                        >
                            Available Subscriptions
                        </ThemedText>
                        <ThemedText className="text-xs mt-1 text-zinc-500">
                            Get a subscription cheaper
                        </ThemedText>
                    </View>
                    <View className="mt-2">
                        {AvailableServices({ subscriptions })}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
