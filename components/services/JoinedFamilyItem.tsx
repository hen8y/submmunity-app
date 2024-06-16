import { Image, Pressable, View } from "react-native";
import React, { useState } from "react";
import { SubscriptionItemProps } from "./SubscriptionItem";
import ThemedText from "../ThemedText";
import icons from "@/constants/icons";
import DownPopup from "../DownPopup";
import { Iconify } from "react-native-iconify";
import { FlatList } from "react-native-gesture-handler";

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
                    className={`w-44  h-32 ${columnClass}  relative overflow-hidden flex-col justify-between border mx-1 border-zinc-200 rounded-2xl bg-white p-4`}
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
                        className="h-32 w-32 opacity-80 top-5 -left-16 absolute rounded-full"
                    />
                </View>
                <DownPopup
                    height={400}
                    showPopup={showPopup}
                    setShowPopup={setShowPopUp}
                >
                    <View className="w-full p-2 mt-3">
                        <ThemedText textClass="text-zinc-700 uppercase text-sm mx-4">
                            {subscription.name} Details
                        </ThemedText>
                        <View className="mt-2 mx-2 bg-zinc-100 border border-zinc-200 rounded-2xl">
                            <View className="flex-row items-center justify-between p-4">
                                <View className="flex-row items-center">
                                    <Iconify
                                        icon="solar:earth-bold-duotone"
                                        color="#555"
                                        size={20}
                                    />
                                    <ThemedText textClass="text-zinc-700 mx-6 text-sm">
                                        Subscription
                                    </ThemedText>
                                </View>
                                <ThemedText textClass="text-zinc-500">
                                    3rd June
                                </ThemedText>
                            </View>

                            <View className="flex-row items-center justify-between p-4 border-t border-zinc-200">
                                <View className="flex-row items-center">
                                    <Iconify
                                        icon="lets-icons:date-today-duotone"
                                        color="#555"
                                        size={20}
                                    />
                                    <ThemedText textClass="text-zinc-700 mx-6 text-sm">
                                        Renewal Joined
                                    </ThemedText>
                                </View>
                                <ThemedText textClass="text-zinc-500">
                                    3rd June
                                </ThemedText>
                            </View>

                            <View className="flex-row items-center justify-between p-4 border-t border-zinc-200">
                                <View className="flex-row items-center">
                                    <Iconify
                                        icon="f7:status"
                                        color="#555"
                                        size={20}
                                    />
                                    <ThemedText textClass="text-zinc-700 mx-6 text-sm">
                                        Subscription Status
                                    </ThemedText>
                                </View>
                                <View className="p-2 px-3 rounded-full bg-green-100/50 border border-green-800 border-dashed">
                                    <ThemedText textClass="text-green-800 text-xs">
                                        3rd June
                                    </ThemedText>
                                </View>
                            </View>
                        </View>

                        <View className="mt-7">
                            <View className="flex-row items-center mt-1 justify-center">
                                <Pressable className="bg-primary rounded-full p-5 mx-2 flex-1">
                                    <ThemedText textClass="text-white text-center">
                                        Request Details
                                    </ThemedText>
                                </Pressable>
                                <Pressable className="bg-black rounded-full p-5 mx-2 flex-1">
                                    <ThemedText textClass="text-white text-center">
                                        Leave Family
                                    </ThemedText>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </DownPopup>
            </Pressable>
        </>
    );
}
