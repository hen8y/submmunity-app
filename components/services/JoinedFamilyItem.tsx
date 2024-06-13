import { Image, Pressable, View } from "react-native";
import React, { useState } from "react";
import { SubscriptionItemProps } from "./SubscriptionItem";
import ThemedText from "../ThemedText";
import icons from "@/constants/icons";
import DownPopup from "../DownPopup";
import { Iconify } from "react-native-iconify";

type JoinedFamiliesProps = SubscriptionItemProps & { columnClass: string };

export default function JoinedFamilyItem({
    subscription,
    columnClass,
}: JoinedFamiliesProps) {
    const [showPopup, setShowPopUp] = useState(false);
    return (
        <>
            <Pressable
                onPress={() => {
                    setShowPopUp(true);
                }}
            >
                <View
                    className={`w-44  h-32 ${columnClass}  relative overflow-hidden flex-col justify-between border mx-1 border-zinc-200 rounded-2xl bg-zinc-200 p-4`}
                >
                    <View className="flex-row justify-end">
                        <View className="flex-col justify-between h-full">
                            <View className="rounded-full p-2 px-3  border-zinc-200 bg-white">
                                <ThemedText textClass="text-xs" type="semibold">
                                    HhehjX
                                </ThemedText>
                            </View>
                            <View className="rounded-full p-2 px-3  border-zinc-300 bg-green-100">
                                <ThemedText textClass="text-xs">
                                    Active
                                </ThemedText>
                            </View>
                        </View>
                    </View>
                    <Image
                        source={icons[subscription.icon]}
                        resizeMode="contain"
                        className="h-32 w-32 opacity-80 top-5 -left-16 absolute bg-zinc-200 rounded-full"
                    />
                </View>
                <DownPopup
                    height={300}
                    showPopup={showPopup}
                    setShowPopup={setShowPopUp}
                >
                    <View className="w-full p-4">
                        <View>
                            <View className="flex-row">
                                <ThemedText>Owner:</ThemedText>
                                <ThemedText textClass="mx-2">Henry</ThemedText>
                            </View>
                            <View className="flex-row mt-3">
                                <ThemedText>Joined:</ThemedText>
                                <ThemedText textClass="mx-2">
                                    3 March
                                </ThemedText>
                            </View>
                            <View className="flex-row mt-3">
                                <ThemedText>Renewal Date:</ThemedText>
                                <ThemedText textClass="mx-2">
                                    3 March
                                </ThemedText>
                            </View>
                        </View>
                        <View className="border-t mt-3 border-zinc-300">
                            <Pressable
                                onPress={() => {}}
                                className="flex-row items-center mt-7"
                            >
                                <Iconify
                                    icon="hugeicons:mail-02"
                                    color="#555"
                                    size={20}
                                />
                                <ThemedText
                                    className="mx-6 flex-1"
                                    textClass="text-zinc-700 text-sm"
                                >
                                    Request Details
                                </ThemedText>
                            </Pressable>
                            <Pressable
                                onPress={() => {}}
                                className="flex-row items-center mt-7"
                            >
                                <Iconify
                                    icon="solar:exit-linear"
                                    color="#555"
                                    size={20}
                                />
                                <ThemedText
                                    className="mx-6 flex-1"
                                    textClass="text-zinc-700 text-sm"
                                >
                                    Leave Family
                                </ThemedText>
                            </Pressable>
                        </View>
                    </View>
                </DownPopup>
            </Pressable>
        </>
    );
}
