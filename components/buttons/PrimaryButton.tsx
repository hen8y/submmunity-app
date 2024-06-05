import { Text, View, TouchableOpacity } from "react-native";
import React from "react";

interface LinkButtonProps {
    content: string;
    customClasses: string;
    isLoading: boolean;
    handlePress: () => void;
}

export default function PrimaryButton({
    content,
    customClasses,
    isLoading,
    handlePress,
}: LinkButtonProps) {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            disabled={isLoading}
            onPress={handlePress}
            className={`min-h-[55px] bg-primary justify-center flex items-center rounded-full  ${customClasses}`}
        >
            <Text className="text-lg font-bold text-white">{content}</Text>
        </TouchableOpacity>
    );
}
