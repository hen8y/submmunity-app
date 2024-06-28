import {
    Image,
    Pressable,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    View,
} from "react-native";
import React from "react";
import { router, useLocalSearchParams } from "expo-router";
import ThemedText from "@/components/ThemedText";
import { Iconify } from "react-native-iconify";
import { StatusBar } from "expo-status-bar";
import { images } from "@/constants";

export default function TransactionDetails() {
    const item = useLocalSearchParams();
    return (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView>
                <StatusBar style="auto" />
                <View className="p-4 flex-row items-center">
                    <TouchableOpacity
                        onPress={() => router.back()}
                        className="w-10 h-10 flex-row items-center justify-center rounded-full bg-white/40"
                    >
                        <Iconify
                            icon="ic:round-chevron-left"
                            size={24}
                            color="#fff"
                        />
                    </TouchableOpacity>
                </View>
                <View className="p-4">
                    <View className="bg-white h-[65vh] rounded-2xl w-full">
                        <View className="relative items-center justify-center">
                            <Image
                                source={images.transactionBg}
                                resizeMode="contain"
                                className="h-[26rem] top-0 bottom-0 absolute opacity-70 w-[26rem]"
                            />
                        </View>
                    </View>
                    <Pressable
                        onPress={() => {
                            router.navigate("/home");
                        }}
                        className="bg-zinc-900 p-4 w-full rounded-full py-6 mt-3"
                    >
                        <ThemedText
                            textClass="text-white text-center"
                            type="semibold"
                        >
                            Back To Home Page
                        </ThemedText>
                    </Pressable>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
