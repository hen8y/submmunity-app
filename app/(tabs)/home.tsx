import {
    FlatList,
    ImageSourcePropType,
    SafeAreaView,
    ScrollView,
    Text,
    View,
    Image,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import ThemedText from "@/components/ThemedText";
import Entypo from "@expo/vector-icons/Entypo";
import DropDown from "@/components/DropDown";
import { Iconify } from "react-native-iconify";
import icons from "@/constants/icons";
import DownPopup from "@/components/DownPopup";
import Animated3Dot from "@/components/Animated3Dot";
import FamilyCircle from "@/components/home/FamilyCircle";
import { images } from "@/constants";

interface Family {
    name: string;
    icon: ImageSourcePropType; // Adjust the type if necessary
}
export default function Home() {
    const [showPopup, setShowPopup] = useState(false);

    const families = [
        {
            name: "ZDUpnS",
            icon: icons.iApple,
        },
        {
            name: "s7IhYG",
            icon: icons.iPrime,
        },
        {
            name: "lsypcy",
            icon: icons.iSpotify,
        },
        {
            name: "cGkd8O",
            icon: icons.iNetflix,
        },
        {
            name: "cxdd5K",
            icon: icons.iExpress,
        },
    ];

    const renderItem = ({ item }: { item: Family }) => {
        return <FamilyCircle icon={item.icon} name={item.name} />;
    };

    return (
        <ScrollView className="h-full flex-1 bg-zinc-50">
            <StatusBar style="auto" />
            <View className="w-full">
                <View className="bg-primary w-full p-4 mx-auto">
                    <Image
                        source={images.homeBg}
                        resizeMode="contain"
                        className="h-96 absolute opacity-70 w-96"
                    />
                    <SafeAreaView>
                        <View className="flex-row mt-10 justify-between items-center">
                            <View>
                                <ThemedText textClass="text-white/90">
                                    Welcome back,
                                </ThemedText>
                                <ThemedText
                                    type="semibold"
                                    textClass="text-white mt-2"
                                >
                                    Hello Henry
                                </ThemedText>
                            </View>

                            <DropDown
                                trigger={
                                    <View className="bg-white/20 rounded-full p-2">
                                        <Iconify
                                            icon="hugeicons:notification-02"
                                            size={18}
                                            color="#fff"
                                        />
                                    </View>
                                }
                                content={
                                    <ThemedText>No Notification</ThemedText>
                                }
                                contentClasses="w-40"
                            />
                        </View>
                        <ThemedText textClass="text-white/90 text-sm mt-7">
                            Your Balance
                        </ThemedText>

                        <View className="flex-row justify-between items-center">
                            <View className="flex-row pt-2 items-center">
                                <ThemedText textClass="text-white text-2xl">
                                    ₦
                                </ThemedText>
                                <ThemedText
                                    type="semibold"
                                    textClass="pt-4 mx-2 text-5xl text-white"
                                >
                                    5769.00
                                </ThemedText>
                            </View>
                            <View className="relative flex-1 flex-row justify-end">
                                <DropDown
                                    trigger={
                                        <View className="bg-white/20 rounded-full w-10 h-10 flex-row justify-center items-center">
                                            <Entypo
                                                name="dots-three-horizontal"
                                                size={16}
                                                color="#fff"
                                            />
                                        </View>
                                    }
                                    content={<Text className=" p-3"></Text>}
                                    contentClasses=""
                                />
                            </View>
                        </View>
                        <View className="flex-row w-full items-center mt-5">
                            <View className="w-full flex-1 bg-white/20 backdrop-blur-md h-16 rounded-full -z-10 flex-row items-center justify-center">
                                <ThemedText textClass="text-white mx-2 text-xl">
                                    Deposit
                                </ThemedText>
                                <Iconify
                                    size={32}
                                    color="#fff"
                                    icon="solar:round-arrow-left-down-line-duotone"
                                />
                            </View>
                            <View className="mx-2"></View>
                            <View className="w-full flex-1 bg-white/20 backdrop-blur-md h-16 rounded-full -z-10 flex-row items-center justify-center">
                                <ThemedText textClass="text-white mx-2 text-xl">
                                    History
                                </ThemedText>
                                <Iconify
                                    size={32}
                                    color="#fff"
                                    icon="solar:wallet-bold-duotone"
                                />
                            </View>
                        </View>
                    </SafeAreaView>
                </View>

                <View className="w-full mt-2 mx-auto">
                    <View className="flex-row justify-between p-4 pb-0">
                        <View>
                            <ThemedText
                                type="semibold"
                                textClass="text-zinc-700 text-base"
                            >
                                Families you manage
                            </ThemedText>
                            <ThemedText textClass="text-zinc-500 mt-2 text-sm">
                                Recent
                            </ThemedText>
                        </View>
                        <View>
                            <Animated3Dot
                                onPress={() => {
                                    setShowPopup(true);
                                }}
                            />
                        </View>
                    </View>
                    <View className="p-2">
                        <FlatList
                            data={families}
                            renderItem={renderItem}
                            horizontal
                            keyExtractor={(item) => item.name}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </View>

                {/* <View className="p-2">
                    <View className="w-full rounded-3xl bg-white border border-zinc-200 min-h-[50vh] p-4">
                        <ThemedText
                            type="semibold"
                            textClass="text-zinc-700 text-base"
                        >
                            Transactions
                        </ThemedText>

                        <View className="flex-row items-center mt-3 justify-between">
                            <View className="flex-row items-center">
                                <View className="h-10 items-center justify-center w-10 rounded-full bg-purple-500">
                                    <ThemedText textClass="text-2xl text-white">
                                        A
                                    </ThemedText>
                                </View>
                                <View className="mx-2">
                                    <ThemedText type="semibold">
                                        Spotify Subscription
                                    </ThemedText>
                                    <ThemedText textClass="text-zinc-700/80">
                                        Ogbonna Henry
                                    </ThemedText>
                                </View>
                            </View>

                            <View>
                                <ThemedText
                                    type="semibold"
                                    textClass="text-right"
                                >
                                    -₦700
                                </ThemedText>
                                <ThemedText textClass="text-zinc-700/80 text-right">
                                    30 December
                                </ThemedText>
                            </View>
                        </View>
                    </View>
                </View> */}
            </View>

            <DownPopup
                showPopup={showPopup}
                height={150}
                setShowPopup={setShowPopup}
            >
                <View className="p-4">
                    <View className="flex-row items-center">
                        <Iconify
                            icon="fluent:add-12-regular"
                            color="#3f3f46"
                            size={20}
                        />
                        <ThemedText
                            className="mx-6 flex-1"
                            textClass="text-zinc-700 text-sm"
                        >
                            Add New Family
                        </ThemedText>
                    </View>

                    <View className="flex-row items-center mt-7">
                        <Iconify
                            icon="system-uicons:users"
                            color="#3f3f46"
                            size={20}
                        />
                        <ThemedText
                            className="mx-6 flex-1"
                            textClass="text-zinc-700 text-sm"
                        >
                            View Your Families
                        </ThemedText>
                    </View>
                </View>
            </DownPopup>
        </ScrollView>
    );
}
