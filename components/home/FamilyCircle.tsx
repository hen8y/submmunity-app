import { Image, Text, View } from "react-native";
import React from "react";
import ThemedText from "../ThemedText";
import { ImageSourcePropType } from "react-native";

type FamilyCircleProps = {
    icon: ImageSourcePropType;
    name: string;
};

export default function FamilyCircle({ icon, name }: FamilyCircleProps) {
    return (
        <View className="p-2">
            <View className="flex-col items-center">
                <View className="h-16 w-16 rounded-full bg-zinc-100 p-3 flex-row items-center justify-center">
                    <Image
                        source={icon}
                        resizeMode="contain"
                        className="w-10 h-10 rounded-full"
                    />
                </View>
                <ThemedText textClass="mt-1 text-zinc-700">{name}</ThemedText>
            </View>
        </View>
    );
}
