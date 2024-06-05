import { Text, View, TextInput } from "react-native";
import React from "react";

interface NormalInputProps {
    title: string;
    handleChangeText: (text: string) => void;
    value: string;
    placeholder: string;
    customClasses: string;
    titleClasess: string;
}

export default function NormalInput({
    title,
    value,
    placeholder,
    handleChangeText,
    customClasses,
    titleClasess,
}: NormalInputProps) {
    return (
        <View className="w-full">
            <Text className={`${titleClasess}`}>{title}</Text>
            <TextInput
                onChangeText={handleChangeText}
                placeholder={placeholder}
                value={value}
                className={`w-full min-h-[55px] mt-1 px-4 border rounded-md border-zinc-300 ${customClasses}`}
            />
        </View>
    );
}
