import { Pressable, View } from "react-native";
import React from "react";
import ThemedText from "../ThemedText";
import TransactionSection from "../TransactionSection";
import { router } from "expo-router";

export type TransactionSectionProps = {
    // transactions: TransactionSectionProps["transaction"][];
    transaction: {
        id: string;
        username: string;
        amount: number;
        time: string;
        type: string;
        label: string;
    };
};

export default function RecentTransactions() {
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
            username: "paul",
            amount: 1500,
            time: "18:00 AM",
            label: "Spotify Subscription",
            type: "transfer",
        },
        {
            id: "4",
            username: "kilua",
            amount: 1500,
            time: "18:00 AM",
            label: "Spotify Subscription",
            type: "payout",
        },
        {
            id: "5",
            username: "keppp",
            amount: 1500,
            time: "18:00 AM",
            label: "Spotify Subscription",
            type: "withdrawal",
        },
    ];

    const transactionsList = (props: {
        transactions: TransactionSectionProps["transaction"][];
    }) => {
        return props.transactions.map((transaction) => (
            <TransactionSection key={transaction.id} item={transaction} />
        ));
    };

    return (
        <View className="p-2">
            <View className="w-full min-h-[50vh] p-4">
                <View className="flex-row justify-between items-center">
                    <ThemedText
                        type="semibold"
                        textClass="text-zinc-700 text-base"
                    >
                        Recents
                    </ThemedText>

                    <Pressable
                        onPress={() => {
                            router.push("/transactions");
                        }}
                    >
                        <ThemedText type="semibold" textClass="text-blue-500">
                            See all
                        </ThemedText>
                    </Pressable>
                </View>

                {transactionsList({ transactions })}
            </View>
        </View>
    );
}
