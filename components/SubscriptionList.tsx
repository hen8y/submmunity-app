import { Text, View } from "react-native";
import React from "react";

export type SubscriptionListProps = {
    item: {
        id: string;
        icon: string;
        price: string;
        families: number;
    };
};

export default function SubscriptionList({ item }: SubscriptionListProps) {
    return (
        <>
            <View className="m-2 rounded-xl bg-white flex-1 h-40"></View>
        </>
    );
}
