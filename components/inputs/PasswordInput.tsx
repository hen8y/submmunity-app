import { Text, View, TextInput } from "react-native";
import React from "react";

interface PasswordInputProps {
    title: string;
    handleChangeText: (text: string) => void;
    value: string;
    placeholder: string;
    customClasses: string;
    showPassword: true;
    titleClasess: string;
    hideLabel: boolean;
}

export default function PasswordInput({
    title,
    value,
    placeholder,
    handleChangeText,
    customClasses,
    showPassword,
    titleClasess,
    hideLabel,
}: PasswordInputProps) {
    return (
        <View className="w-full">
            <Text className={`${titleClasess} ${hideLabel ? "hidden" : ""}`}>
                {title}
            </Text>
            <TextInput
                onChangeText={handleChangeText}
                placeholder={placeholder}
                value={value}
                className={`w-full min-h-[55px] mt-1 px-4 border rounded-md border-zinc-300 ${customClasses}`}
                secureTextEntry={!showPassword}
            />
        </View>
    );
}
