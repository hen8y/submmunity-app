import { Image, Pressable, Text, View } from "react-native";
import React from "react";
import ThemedText from "../ThemedText";
import { NumericFormat } from "react-number-format";
import { router } from "expo-router";
import icons from "@/constants/icons";
import { Iconify } from "react-native-iconify";
import { generateHex } from "@/constants/utils";

export type SubscriptionItemProps = {
    subscription: {
        id: string;
        name: string;
        icon: string;
        price: string;
        families: number;
    };
};

export default function SubscriptionItem({
    subscription,
}: SubscriptionItemProps) {
    return (
        <Pressable
            className="flex-1"
            onPress={() => {
                router.push("/familylist");
            }}
        >
            <View className="flex-1 bg-white mt-2 p-5 rounded-2xl border border-zinc-200">
                <ThemedText textClass="text-zinc-500">
                    {subscription.name}
                </ThemedText>
                <View className="flex-row mt-3">
                    <View
                        className="p-2 rounded-xl border border-zinc-200"
                        style={{
                            backgroundColor: `#${generateHex(
                                subscription.name
                            )}20`,
                        }}
                    >
                        <Image
                            source={icons[subscription.icon]}
                            resizeMode="contain"
                            className="w-8 h-8 rounded-full"
                        />
                    </View>
                    <View className="flex-row flex-1 mx-2 items-center justify-between">
                        <View className="flex-row mx-2 items-center">
                            <Iconify
                                size={15}
                                color="#555"
                                icon="fa6-solid:people-line"
                            />
                            <ThemedText textClass="mx-2 text-zinc-700">
                                2 Families
                            </ThemedText>
                        </View>
                        <View className="rounded-full p-2 y-1 bg-green-100">
                            <NumericFormat
                                value={5000}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"₦"}
                                renderText={(value) => (
                                    <ThemedText
                                        type="semibold"
                                        textClass="text-green-800"
                                    >
                                        {value}
                                    </ThemedText>
                                )}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </Pressable>
    );
}
