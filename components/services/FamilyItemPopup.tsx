import { Pressable, ScrollView, View } from "react-native";
import React from "react";
import FamilyPopup from "../FamilyPopup";
import ThemedText from "../ThemedText";

type FamilyItemPopupType = {
    showFamilyPopup: boolean;
    setShowFamilyPopup: (showFamilyPopup: boolean) => void;
    selectedFamily: {
        id: string;
        value: string;
    };
};
export default function FamilyItemPopup({
    showFamilyPopup,
    setShowFamilyPopup,
    selectedFamily,
}: FamilyItemPopupType) {
    return (
        <View>
            <FamilyPopup
                showFamilyPopup={showFamilyPopup}
                setshowFamilyPopup={setShowFamilyPopup}
                className="flex-1"
            >
                <View className="border rounded-3xl h-52 mt-3"></View>
                <View className="mt-5 h-full w-full">
                    <ThemedText
                        type="semibold"
                        textClass="text-3xl text-zinc-700"
                    >
                        What to know before joining family
                    </ThemedText>
                    <View className="absolute bottom-0 ">
                        <Pressable
                            className={`${
                                selectedFamily.id ? "bg-black" : "bg-black/50"
                            } p-5 w-full rounded-full`}
                        >
                            <ThemedText
                                type="semibold"
                                textClass="text-white text-center"
                            >
                                Proceed
                            </ThemedText>
                        </Pressable>
                    </View>
                </View>
            </FamilyPopup>
        </View>
    );
}
