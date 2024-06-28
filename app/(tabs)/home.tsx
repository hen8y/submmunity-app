import {
    FlatList,
    ImageSourcePropType,
    SafeAreaView,
    ScrollView,
    View,
    Image,
    Pressable,
    TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import ThemedText from "@/components/ThemedText";
import { Iconify } from "react-native-iconify";
import icons from "@/constants/icons";
import DownPopup from "@/components/DownPopup";
import Animated3Dot from "@/components/Animated3Dot";
import FamilyCircle from "@/components/home/FamilyCircle";
import { images } from "@/constants";
import { router } from "expo-router";
import RecentTransactions from "@/components/home/RecentTransactions";
import FamilyPopup from "@/components/FamilyPopup";

interface Family {
    name: string;
    icon: ImageSourcePropType; // Adjust the type if necessary
}
interface MemberItem {
    id: number;
    name: string;
    status: string;
    renewalDate: string;
}
export default function Home() {
    const [showPopup, setShowPopup] = useState(false);
    const [showFamilyPopup, setShowFamilyPopup] = useState(false);
    const [familyInfoOption, setfamilyInfoOption] = useState("details");

    const families = [
        {
            name: "ZDUpnS",
            icon: icons.Apple,
        },
        {
            name: "s7IhYG",
            icon: icons.Prime,
        },
        {
            name: "lsypcy",
            icon: icons.Spotify,
        },
        {
            name: "cGkd8O",
            icon: icons.Netflix,
        },
        {
            name: "cxdd5K",
            icon: icons.Express,
        },
    ];
    const members = [
        {
            id: 1,
            name: "Henry Oaul",
            status: "Active",
            renewalDate: "01 Apr 24",
        },
        {
            id: 2,
            name: "Jon Doe",
            status: "Unpaid",
            renewalDate: "01 Apr 24",
        },
        {
            id: 3,
            name: "Will Jane",
            status: "Overdue",
            renewalDate: "01 Apr 24",
        },
        {
            id: 4,
            name: "Keith Keep",
            status: "Active",
            renewalDate: "01 Apr 24",
        },
        {
            id: 5,
            name: "Ogbonna Henry",
            status: "Unpaid",
            renewalDate: "01 Apr 24",
        },
        {
            id: 6,
            name: "Will Jane",
            status: "Overdue",
            renewalDate: "01 Apr 24",
        },
        {
            id: 7,
            name: "Keith Keep",
            status: "Active",
            renewalDate: "01 Apr 24",
        },
        {
            id: 8,
            name: "Ogbonna Henry",
            status: "Unpaid",
            renewalDate: "01 Apr 24",
        },
    ];

    const renderItem = ({ item }: { item: Family }) => {
        return (
            <FamilyCircle
                handlePress={() => {
                    setShowFamilyPopup(true);
                }}
                icon={item.icon}
                name={item.name}
            />
        );
    };
    const memberItem = ({ item }: { item: MemberItem }) => {
        return (
            <TouchableWithoutFeedback onPress={() => {}}>
                <View className="flex-row items-center mt-5 justify-between">
                    <View className="flex-row items-center">
                        <View className="h-12 w-12 border flex items-center justify-center border-neutral-300 rounded-full">
                            <ThemedText className="uppercase">
                                {item.name.substring(0, 2)}
                            </ThemedText>
                        </View>
                        <View className="mx-2">
                            <ThemedText type="semibold">{item.name}</ThemedText>
                            <View className="flex-row items-center mt-1">
                                <ThemedText className="text-xs text-neutral-600">
                                    Renewal Date
                                </ThemedText>
                                <ThemedText className="text-xs mx-1 text-neutral-500">
                                    {item.renewalDate}
                                </ThemedText>
                            </View>
                        </View>
                    </View>
                    <View>
                        <ThemedText
                            type="italic"
                            className={`underline text-xs ${
                                item.status === "Active"
                                    ? "text-primary"
                                    : item.status === "Overdue"
                                    ? "text-red-500"
                                    : "text-blue-400"
                            }`}
                        >
                            {item.status}
                        </ThemedText>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    };
    const status = "Active";
    return (
        <SafeAreaView className="h-full bg-primary">
            <ScrollView className="h-full flex-1 ">
                <StatusBar style="auto" />
                <View className="w-full">
                    <View className="bg-primary w-full p-4 mx-auto">
                        <Image
                            source={images.homeBg}
                            resizeMode="contain"
                            className="h-96 absolute opacity-70 w-96"
                        />
                        <View>
                            <View className="flex-row mt-10 justify-between items-center ">
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

                                <Pressable
                                    onPress={() => {
                                        router.push("/notification");
                                    }}
                                    className="bg-white/20 rounded-full p-2"
                                >
                                    <Iconify
                                        icon="hugeicons:notification-02"
                                        size={18}
                                        color="#fff"
                                    />
                                </Pressable>
                            </View>
                            <ThemedText textClass="text-white/90 text-sm m mt-7">
                                Your Balance
                            </ThemedText>

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
                            <View className="flex-row w-full items-center mt-5">
                                <Pressable
                                    onPress={() => {
                                        router.push("/deposit");
                                    }}
                                    className="w-full flex-1 bg-white/20 backdrop-blur-md h-16 rounded-full -z-10 flex-row items-center justify-center"
                                >
                                    <ThemedText textClass="text-white mx-2 text-xl">
                                        Deposit
                                    </ThemedText>
                                    <Iconify
                                        size={32}
                                        color="#fff"
                                        icon="solar:round-arrow-left-down-line-duotone"
                                    />
                                </Pressable>
                                <View className="mx-2"></View>
                                <Pressable
                                    onPress={() => {
                                        router.push("/earnings");
                                    }}
                                    className="w-full flex-1 bg-white/20 backdrop-blur-md h-16 rounded-full -z-10 flex-row items-center justify-center"
                                >
                                    <ThemedText textClass="text-white mx-2 text-xl">
                                        Earnings
                                    </ThemedText>
                                    <Iconify
                                        size={32}
                                        color="#fff"
                                        icon="solar:wallet-bold-duotone"
                                    />
                                </Pressable>
                            </View>
                        </View>
                    </View>

                    <View className="bg-white h-full">
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

                        <RecentTransactions />
                    </View>
                </View>

                <DownPopup
                    showPopup={showPopup}
                    height={150}
                    setShowPopup={setShowPopup}
                >
                    <View className="p-4">
                        <Pressable
                            onPress={() => {
                                router.push("/createfamily");
                                setShowPopup(false);
                            }}
                            className="flex-row items-center"
                        >
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
                        </Pressable>
                        <Pressable
                            onPress={() => {
                                router.push("/sharedfamilylist");
                                setShowPopup(false);
                            }}
                            className="flex-row items-center mt-7"
                        >
                            <Iconify
                                icon="system-uicons:users"
                                color="#3f3f46"
                                size={20}
                            />
                            <ThemedText
                                className="mx-6 flex-1"
                                textClass="text-zinc-700 text-sm"
                            >
                                View Shared Families
                            </ThemedText>
                        </Pressable>
                    </View>
                </DownPopup>
                <FamilyPopup
                    showFamilyPopup={showFamilyPopup}
                    setshowFamilyPopup={setShowFamilyPopup}
                >
                    <View className="h-full">
                        <View
                            className={`h-full ${
                                familyInfoOption === "members"
                                    ? "block"
                                    : "hidden"
                            }`}
                        >
                            <View className="flex-row items-center">
                                <ThemedText type="semibold" className="text-xl">
                                    Members
                                </ThemedText>
                                <ThemedText className="text-zinc-500 mx-2">
                                    7 active
                                </ThemedText>
                            </View>
                            <View className="mt-2 flex-1 h-full">
                                <FlatList
                                    data={members}
                                    renderItem={memberItem}
                                    keyExtractor={(item) => item.id.toString()}
                                    contentContainerStyle={{
                                        paddingBottom: 90,
                                    }}
                                />
                            </View>
                        </View>

                        <View
                            className={`h-full ${
                                familyInfoOption === "details"
                                    ? "block"
                                    : "hidden"
                            }`}
                        >
                            <View className="flex-row justify-between items-center">
                                <ThemedText type="semibold" className="text-xl">
                                    Family Details
                                </ThemedText>
                                <Pressable className="bg-black p-3 px-4 rounded-full">
                                    <ThemedText className="text-white text-xs">
                                        Request Delete
                                    </ThemedText>
                                </Pressable>
                            </View>
                            <View className="rounded-3xl min-h-[30vh] bg-zinc-100 mt-5 border border-zinc-200"></View>
                        </View>
                        <View className="flex items-center justify-center w-full absolute bottom-0 ">
                            <View className="h-14 border p-1 border-zinc-600 mb-7 bg-white rounded-full w-10/12 flex-row">
                                <Pressable
                                    onPress={() =>
                                        setfamilyInfoOption("details")
                                    }
                                    className={`h-full flex-1 ${
                                        familyInfoOption === "details"
                                            ? "bg-primary border border-zinc-600"
                                            : "bg-white"
                                    } rounded-full`}
                                ></Pressable>
                                <Pressable
                                    onPress={() =>
                                        setfamilyInfoOption("members")
                                    }
                                    className={`h-full flex-1 ${
                                        familyInfoOption === "members"
                                            ? "bg-primary border border-zinc-600"
                                            : "bg-white"
                                    } rounded-full`}
                                ></Pressable>
                            </View>
                        </View>
                    </View>
                </FamilyPopup>
            </ScrollView>
        </SafeAreaView>
    );
}
