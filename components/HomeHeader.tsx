import { Text, View, Image } from "react-native";
import React from "react";
import { images } from "@/constants";

export default function HomeHeader() {
    return (
        <>
            <Image
                source={images.logo}
                className="h-20 w-20"
                resizeMode="contain"
            />
            <Text className="font-zeyada mt-5 font-bold text-3xl pt-4">
                #Share & Earn #Sub & Save
            </Text>
        </>
    );
}
