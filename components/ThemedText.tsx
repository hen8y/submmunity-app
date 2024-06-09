import { Text, type TextProps } from "react-native";
import React from "react";

export type ThemedTextProps = TextProps & {
    type?: "bold" | "semibold" | "default" | "em";
    textClass?: string;
};

export default function ThemedText({
    type = "default",
    textClass,
    ...textProps
}: ThemedTextProps) {
    const font =
        type === "em"
            ? "font-zeyada"
            : type == "default"
            ? "font-poppin"
            : type == "bold"
            ? "font-bPoppin"
            : type == "semibold"
            ? "font-sbPoppin"
            : "font-ebPoppin";

    return <Text className={`${textClass} ${font}`} {...textProps} />;
}
