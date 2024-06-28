import { Text, TouchableOpacity } from "react-native";
import React from "react";
import ThemedText from "../ThemedText";

interface LinkButtonProps {
    content: any;
    customClasses: string;
    isLoading: boolean;
    handlePress: () => void;
    textClasses: string;
}

export default function PrimaryButton({
    content,
    customClasses,
    isLoading,
    textClasses,
    handlePress,
}: LinkButtonProps) {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            disabled={isLoading}
            onPress={handlePress}
            className={`min-h-[60px] justify-center flex items-center rounded-full ${customClasses}`}
        >
            <ThemedText
                type="semibold"
                textClass={`text-lg font-bold text-white text-sm ${textClasses}`}
            >
                {content}
            </ThemedText>
        </TouchableOpacity>
    );
}
