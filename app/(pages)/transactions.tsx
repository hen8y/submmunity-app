import { FlatList, SafeAreaView, TouchableOpacity, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import ThemedText from "@/components/ThemedText";
import { Iconify } from "react-native-iconify";
import { router } from "expo-router";
import TransactionSection, {
    TransactionSectionProps,
} from "@/components/TransactionSection";

export default function Transactions() {
    const transactions = [
        {
            id: "1",
            username: "henry",
            amount: 1500,
            time: "18:00 PM",
            label: "Spotify Subscription",
            type: "deposit",
        },
        {
            id: "2",
            username: "gen8y",
            amount: 1500,
            time: "18:00 AM",
            label: "Spotify Subscription",
            type: "withdrawal",
        },
        {
            id: "3",
            username: "gen8y",
            amount: 1500,
            time: "18:00 AM",
            label: "Spotify Subscription",
            type: "transfer",
        },
        {
            id: "4",
            username: "gen8y",
            amount: 1500,
            time: "18:00 AM",
            label: "Spotify Subscription",
            type: "payout",
        },
        {
            id: "5",
            username: "gen8y",
            amount: 1500,
            time: "18:00 AM",
            label: "Spotify Subscription",
            type: "withdrawal",
        },
    ];

    const renderItem = ({ item }: TransactionSectionProps) => {
        return <TransactionSection item={item} />;
    };
    return (
        <SafeAreaView className="bg-white h-full">
            <View className="p-4 ">
                <StatusBar style="auto" />
                <View className="flex-row items-center">
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
                    <ThemedText textClass="mx-2 text-base">
                        Transactions
                    </ThemedText>
                </View>
                <View className="mt-5">
                    <ThemedText type="semibold" textClass="text-2xl">
                        Pending
                    </ThemedText>
                    <View>
                        <ThemedText textClass="mt-3 text-zinc-500">
                            No pending transactions
                        </ThemedText>
                    </View>
                </View>
                <View className="mt-7">
                    <ThemedText type="semibold" textClass="text-2xl">
                        Transaction
                    </ThemedText>
                    <View className="w-full">
                        <FlatList
                            data={transactions}
                            renderItem={renderItem}
                            keyExtractor={(item) => item.id}
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}
