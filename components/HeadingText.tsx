import { View } from "react-native";
import React from "react";
import ThemedText from "./ThemedText";

type HeadingTextType = {
    title: string;
    subtitle: string;
    bordered: boolean;
};
export default function HeadingText({ title, subtitle, bordered }: HeadingTextType) {
    return (
        <View className={`p-4 bg-zinc-50 ${ bordered ? 'border-y border-zinc-200' : ''}`}>
            <ThemedText type="semibold" textClass="text-2xl text-zinc-700">
                {title}
            </ThemedText>
            <ThemedText className="text-xs mt-1 text-zinc-500">
                {subtitle}
            </ThemedText>
        </View>
    );
}
