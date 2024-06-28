import { Pressable, View } from "react-native";
import React from "react";
import ThemedText from "../ThemedText";

export type ServiceFamilyItemType = {
    selectedId: string;
    family: {
        id: string;
        value: string;
    };
    handlePress: () => void;
};

export default function ServiceFamilyItem({
    selectedId,
    family,
    handlePress,
}: ServiceFamilyItemType) {
    return (
        <Pressable onPress={handlePress} className=" flex-1">
            <View
                className={`h-24 flex-1 m-2 bg-zinc-100  flex-row justify-between items-center border rounded-xl ${
                    family.id === selectedId
                        ? "border-blue-400"
                        : "border-zinc-200"
                }`}
            >
                <View></View>
                <View className="w-10 h-full flex-row items-center justify-center">
                    <View
                        className={`h-5 w-5 bg-white rounded-full
                        ${
                            family.id === selectedId
                                ? "border border-blue-500 bg-blue-500"
                                : ""
                        }
                    `}
                    ></View>
                </View>
            </View>
        </Pressable>
    );
}
