import {
    FlatList,
    Pressable,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    View,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import ThemedText from "@/components/ThemedText";
import { Iconify } from "react-native-iconify";
import { router } from "expo-router";
import ServiceFamilyItem from "@/components/services/ServiceFamilyItem";
import { ListRenderItem } from "react-native";
import FamilyPopup from "@/components/FamilyPopup";
import FamilyItemPopup from "@/components/services/FamilyItemPopup";
import HeadingText from "@/components/HeadingText";

interface renderItemProp {
    id: string;
    value: string;
}

export default function FamilyList() {
    const [selectedFamily, setselectedFamily] = useState({
        id: "",
        value: "",
    });

    const options = [
        {
            id: "1",
            value: "option1",
        },
        {
            id: "2",
            value: "option2",
        },
        {
            id: "3",
            value: "option3",
        },
    ];

    const renderItem: ListRenderItem<renderItemProp> = ({ item }) => {
        return (
            <ServiceFamilyItem
                selectedId={selectedFamily.id}
                family={item}
                handlePress={() => {
                    setselectedFamily(item);
                }}
            />
        );
    };

    const familyList = (props: { options: renderItemProp[] }) => {
        return props.options.map((item) => (
            <View key={item.id}>
                <ServiceFamilyItem
                    selectedId={selectedFamily.id}
                    family={item}
                    handlePress={() => {
                        setselectedFamily(item);
                    }}
                />
            </View>
        ));
    };

    const redirectToFamily = () => {
        if (selectedFamily.id) {
            setShowFamilyPopup(true);
        } else {
            alert("hi");
        }
    };

    const [showFamilyPopup, setShowFamilyPopup] = useState(false);
    return (
        <SafeAreaView className="bg-white h-full">
            <ScrollView>
                <StatusBar style="auto" />
                <View className="p-4 flex-row items-center">
                    <TouchableOpacity
                        onPress={() => router.back()}
                        className="w-10 h-10 flex-row items-center justify-center rounded-full bg-zinc-100"
                    >
                        <Iconify
                            icon="ic:round-chevron-left"
                            size={24}
                            color="#111"
                        />
                    </TouchableOpacity>
                    <ThemedText textClass="mx-2 text-base">
                        Available Families
                    </ThemedText>
                </View>
                <HeadingText
                    title="Service Families"
                    subtitle="Choose a family and join"
                />
                <View className="p-4">{familyList({ options })}</View>
            </ScrollView>

            <View className="flex items-center justify-center">
                <Pressable
                    className={`${
                        selectedFamily.id ? "bg-black" : "bg-black/50"
                    } p-5 absolute bottom-0 w-40 rounded-full`}
                    onPress={redirectToFamily}
                >
                    <ThemedText textClass="text-white text-center">
                        Join Family
                    </ThemedText>
                </Pressable>
            </View>

            <FamilyItemPopup
                showFamilyPopup={showFamilyPopup}
                setShowFamilyPopup={setShowFamilyPopup}
                selectedFamily={selectedFamily}
            />
        </SafeAreaView>
    );
}
