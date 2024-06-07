import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";

export type DropDownProps = {
    trigger: React.ReactNode;
    content: React.ReactNode;
    contentClasses: string;
};

export default function DropDown({
    trigger,
    content,
    contentClasses,
}: DropDownProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <View className="relative flex-col items-end">
            <TouchableOpacity onPress={() => setIsOpen(!isOpen)}>
                {trigger}
            </TouchableOpacity>
            {isOpen && (
                <View
                    style={styles.dropdownContent}
                    className="rounded-xl top-12 absolute h-10 bg-white border border-zinc-300"
                >
                    <View className={`p-3 ring-1 w-32 ${contentClasses}`}>
                        {content}
                    </View>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    dropdownContent: {
        shadowColor: "#ccc",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
        elevation: 5,
        zIndex: 2,
    },
});
