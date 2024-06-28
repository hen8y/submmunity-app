import { Text, View, Image } from "react-native";
import React from "react";
import { images } from "@/constants";

export default function Logo() {
    return (
        <>
            <Image
                source={images.logo}
                className="h-20 w-20"
                resizeMode="contain"
            />
        </>
    );
}
