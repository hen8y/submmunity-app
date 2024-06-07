import { Text, View, TextInput } from "react-native";
import React from "react";

interface PasswordInputProps {
    title: string;
    handleChangeText: (text: string) => void;
    value: string;
    placeholder: string;
    customClasses: string;
    showPassword: boolean;
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
                className={`w-full min-h-[55px] mt-1 px-4 rounded-md ${customClasses}`}
                secureTextEntry={!showPassword}
                placeholderTextColor="#aaa"
            />
        </View>
    );
}
