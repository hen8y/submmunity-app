import { Text, type TextProps } from "react-native";
import React from "react";

export type ThemedTextProps = TextProps & {
    type?: string;
    textClass?: string;
};

export default function ThemedText({
    type,
    textClass,
    ...textProps
}: ThemedTextProps) {
    const font = type === "em" ? "font-zeyada" : "font-sans";

    return <Text className={`${textClass} ${font}`} {...textProps} />;
}
