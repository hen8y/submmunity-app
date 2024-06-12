import { Pressable, View } from "react-native";
import React from "react";
import ThemedText from "./ThemedText";
import { generateHex } from "@/constants/utils";
import { Iconify } from "react-native-iconify";
import { router } from "expo-router";
import { NumericFormat } from "react-number-format";

export type TransactionSectionProps = {
    item: {
        id: string;
        username: string;
        amount: number;
        time: string;
        type: string;
        label: string;
    };
};

export default function TransactionSection({ item }: TransactionSectionProps) {
    const Icon = () => {
        if (
            item.type === "deposit" ||
            item.type === "payout" ||
            item.type === "transfer-in"
        ) {
            return (
                <Iconify icon="bi:arrow-down-left" size={10} color="white" />
            );
        }
        if (item.type === "withdrawal" || item.type === "transfer-out") {
            return (
                <Iconify icon="bi:arrow-down-right" size={10} color="white" />
            );
        }

        return <Iconify icon="bi:arrow-down-right" size={10} color="white" />;
    };

    return (
        <Pressable
            className="flex-row items-center mt-5 justify-between"
            onPress={() => {
                router.push({
                    pathname: `/transactiondetails/`,
                    params: item,
                });
            }}
        >
            <View className="flex-row items-center">
                <View
                    className="h-12 items-center justify-center w-12 rounded-full"
                    style={{
                        backgroundColor: `#${generateHex(item.username)}50`,
                    }}
                >
                    <View>
                        <ThemedText
                            textClass="text-xl uppercase"
                            style={{
                                color: `#${generateHex(item.username)}`,
                            }}
                        >
                            {item.username.charAt(0)}
                        </ThemedText>
                        <View
                            className={`h-4 w-4 rounded-full items-center justify-center absolute top-5 left-3 ${
                                item.type === "withdrawal"
                                    ? "bg-red-500 border border-red-500"
                                    : item.type === "deposit"
                                    ? "bg-primary border border-green-700"
                                    : item.type === "payout"
                                    ? "bg-blue-500 border border-blue-500"
                                    : "bg-gray-500 border border-gray-500"
                            }`}
                        >
                            {Icon()}
                        </View>
                    </View>
                </View>
                <View className="mx-2">
                    <ThemedText type="semibold">{item.label}</ThemedText>
                    <ThemedText textClass="text-zinc-700/80">
                        {item.username}
                    </ThemedText>
                </View>
            </View>

            <View>
                <NumericFormat
                    value={item.amount}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"₦"}
                    renderText={(value) => (
                        <ThemedText type="semibold" textClass="text-right">
                            {value}
                        </ThemedText>
                    )}
                />
                <ThemedText textClass="text-zinc-700/80 text-right">
                    {item.time}
                </ThemedText>
            </View>
        </Pressable>
    );
}
