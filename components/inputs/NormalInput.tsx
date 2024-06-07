import { Text, View, TextInput } from "react-native";
import React from "react";

interface NormalInputProps {
    title: string;
    handleChangeText: (text: string) => void;
    value: string;
    placeholder: string;
    customClasses: string;
    titleClasess: string;
    hideLabel: boolean;
}

export default function NormalInput({
    title,
    value,
    placeholder,
    handleChangeText,
    customClasses,
    titleClasess,
    hideLabel = false,
}: NormalInputProps) {
    return (
        <View className="w-full">
            <Text className={`${titleClasess} ${hideLabel ? "hidden" : ""}`}>
                {title}
            </Text>
            <TextInput
                onChangeText={handleChangeText}
                placeholder={placeholder}
                value={value}
                className={`w-full min-h-[55px] mt-1 px-4 rounded-md ${customClasses}`}
            />
        </View>
    );
}
