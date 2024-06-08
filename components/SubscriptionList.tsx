import { Text, View } from "react-native";
import React from "react";
import ThemedText from "./ThemedText";

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
            <View className="m-2 rounded-xl bg-white flex-1 h-40">
                <View className=" p-4 ">
                    <View className="flex-row items-center">
                        <View className="h-6 w-6 rounded-full bg-zinc-200"></View>
                        <ThemedText type="semibold" textClass="mx-1 text-xs">
                            Apple Music
                        </ThemedText>
                    </View>
                    <ThemedText type="semibold" textClass="mt-4 text-4xl">
                        ₦2000
                    </ThemedText>
                </View>
            </View>
        </>
    );
}
