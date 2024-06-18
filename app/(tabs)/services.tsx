import {
    SafeAreaView,
    StyleSheet,
    View,
    ScrollView,
    Pressable,
    ImageBackground,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import ThemedText from "@/components/ThemedText";
import SubscriptionItem, {
    SubscriptionItemProps,
} from "@/components/services/SubscriptionItem";
import { Iconify } from "react-native-iconify";
import JoinedFamilyItem from "@/components/services/JoinedFamilyItem";
import { router } from "expo-router";
import HeadingText from "@/components/HeadingText";
import { images } from "@/constants";

export default function Services() {
    const subscriptions = [
        {
            id: "1",
            name: "Apple Music & Icloud",
            icon: "Apple",
            price: "₦1500 / Month",
            families: 3,
        },
        {
            id: "2",
            name: "Spotify",
            icon: "Spotify",
            price: "₦4000 / Month",
            families: 0,
        },
        {
            id: "3",
            name: "Express",
            icon: "Express",
            price: "₦3000 / Month",
            families: 1,
        },
        {
            id: "4",
            name: "Prime",
            icon: "Prime",
            price: "₦1500 / Month",
            families: 0,
        },
        {
            id: "5",
            name: "Netflix",
            icon: "Netflix",
            price: "₦1520 / Month",
            families: 1,
        },
        {
            id: "6",
            name: "iCloud",
            icon: "ICloud",
            price: "₦3500 / Month",
            families: 2,
        },
        {
            id: "7",
            name: "Canva",
            icon: "Canva",
            price: "₦4000 / Month",
            families: 0,
        },
        {
            id: "8",
            name: "Deezer",
            icon: "Deezer",
            price: "₦1600 / Month",
            families: 1,
        },
    ];

    function AvailableServices(props: {
        subscriptions: SubscriptionItemProps["subscription"][];
    }) {
        return props.subscriptions.map((subscription, index) => (
            <View key={subscription.id} className={`${index !== subscriptions.length - 1 ? 'border-b border-zinc-200' : ''}`}>
                <SubscriptionItem subscription={subscription} />
            </View>
        ));
    }

    return (
        <SafeAreaView className="h-full bg-zinc-50 w-full">
            <StatusBar style="dark" />
            <ScrollView className="w-full">
                <View className="pb-10 pt-10 p-4">
                    <View className="pb-2">
                    <Pressable
                            onPress={() => {
                                router.push("/joinedfamilies");
                            }}
                            className="flex-row justify-between items-center"
                        >
                            <View>
                                <ThemedText
                                    textClass="mt-10 text-2xl text-zinc-700"
                                    type="semibold"
                                >
                                    Joined Families
                                </ThemedText>
                                <ThemedText className="text-xs mt-1 text-zinc-500">
                                    Families you're a member
                                </ThemedText>
                            </View>
                            <Iconify
                                size={25}
                                color="#555"
                                icon="ic:round-chevron-right"
                            />
                        </Pressable>
                        <View className="mt-5">
                            <View className="h-40 bg-white rounded-2xl overflow-hidden" style={styles.shadow}>
                                <ImageBackground resizeMode="cover" className="flex-1 justify-center" source={images.familiesBg}>

                                </ImageBackground>
                            </View>
                        </View>
                    </View>
                </View>

                <HeadingText
                    bordered={false}
                    title="Available Subscriptions"
                    subtitle="Get a subscription cheaper"
                />

                <View className="p-4 pt-0 pb-10">
                    <View className="mt-2 bg-white rounded-2xl" style={styles.shadow}>
                        {AvailableServices({ subscriptions })}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
    const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#ccc",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
        zIndex: 2,
    },
});
