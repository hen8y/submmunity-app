import { Image, Pressable, Text, View } from "react-native";
import React, { useState } from "react";
import ThemedText from "../ThemedText";
import icons from "@/constants/icons";
import { Iconify } from "react-native-iconify";
import DownPopup from "../DownPopup";

export type SubscriptionListProps = {
    item: {
        id: string;
        icon: string;
        price: string;
        families: number;
    };
};

export default function SubscriptionList({ item }: SubscriptionListProps) {
    const [showPopup, setShowPopup] = useState(false);
    return (
        <>
            <View className="m-2 rounded-xl bg-white flex-1 p-4">
                <ThemedText type="semibold">Apple Music</ThemedText>
                <View className="mt-8 flex-row justify-between">
                    <View>
                        <ThemedText textClass="text-zinc-500 text-xs">
                            3 Families Available
                        </ThemedText>
                        <ThemedText type="semibold" className="text-2xl mt-1">
                            ₦24,000
                        </ThemedText>
                    </View>

                    <View className="flex-row items-center">
                        <View className="h-9 w-9 mx-1 rounded-full bg-white border border-zinc-200 p-3 flex-row items-center justify-center">
                            <Image
                                source={icons.iApple}
                                resizeMode="contain"
                                className="w-6 h-6 rounded-full"
                            />
                        </View>
                        <Pressable
                            onPress={() => {
                                setShowPopup(true);
                            }}
                            className="h-9 w-9 rounded-full bg-white border border-zinc-200 p-3 flex-row items-center justify-center"
                        >
                            <Iconify size={22} color="#555" icon="mage:email" />
                        </Pressable>
                    </View>
                </View>
            </View>
            <DownPopup
                showPopup={showPopup}
                height={200}
                setShowPopup={setShowPopup}
            />
        </>
    );
}
