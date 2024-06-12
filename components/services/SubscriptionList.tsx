import { Image, Pressable, Text, View } from "react-native";
import React, { useState } from "react";
import ThemedText from "../ThemedText";
import { NumericFormat } from "react-number-format";
import DownPopup from "../DownPopup";
import { router } from "expo-router";
import icons from "@/constants/icons";
import { Iconify } from "react-native-iconify";

export type SubscriptionListProps = {
    item: {
        id: string;
        name: string;
        icon: string;
        price: string;
        families: number;
    };
};

export default function SubscriptionList({ item }: SubscriptionListProps) {
    const [showPopup, setShowPopup] = useState(false);
    return (
        <Pressable
            className="flex-1 m-2"
            onPress={() => {
                router.push("/familylist");
            }}
        >
            <View className="bg-white border-zinc-200 flex-col justify-between border rounded-2xl p-4 h-40 flex-1">
                <View>
                    <View className="flex-row justify-between">
                        <Image
                            source={icons[item.icon]}
                            resizeMode="contain"
                            className="w-8 h-8 rounded-full"
                        />
                        <View className="rounded-md p-2 bg-zinc-100">
                            <NumericFormat
                                value={5000}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"₦"}
                                renderText={(value) => (
                                    <ThemedText>{value}</ThemedText>
                                )}
                            />
                        </View>
                    </View>
                    <ThemedText type="semibold" textClass="text-zinc-600 mt-2">
                        {item.name}
                    </ThemedText>
                </View>
                <View>
                    <View className="flex-row items-center mt-2">
                        <Iconify
                            size={15}
                            color="#111"
                            icon="arcticons:family-space"
                        />
                        <ThemedText textClass="mx-2">2 Families</ThemedText>
                    </View>
                </View>
            </View>
            <DownPopup
                showPopup={showPopup}
                height={200}
                setShowPopup={setShowPopup}
            />
            {/* <View className="flex-row mt-2 justify-between items-center">
                <ThemedText textClass="text-zinc-600">2 Families</ThemedText>
                
            </View> */}
        </Pressable>
    );
}
