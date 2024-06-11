import { Modal, Pressable, StyleSheet, View } from "react-native";
import React from "react";
import { ViewProps } from "react-native-svg/lib/typescript/fabric/utils";
import { Iconify } from "react-native-iconify";

export type FamilyPopupProps = ViewProps & {
    showFamilyPopup: boolean;
    setshowFamilyPopup: (setshowFamilyPopup: boolean) => void;
};

export default function FamilyPopup({
    showFamilyPopup,
    setshowFamilyPopup,
    ...otherView
}: FamilyPopupProps) {
    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={showFamilyPopup}
            >
                <Pressable
                    className="w-full h-full bg-zinc-900/30"
                    onPress={() => {
                        setshowFamilyPopup(false);
                    }}
                >
                    <View
                        className="absolute rounded-xl bottom-0 w-full h-[90vh] bg-zinc-50 p-4"
                        style={[styles.modalView]}
                        onStartShouldSetResponder={() => true}
                    >
                        <View className="flex-row justify-center">
                            <View className="h-1 mx-auto my-2 rounded-full w-8 bg-zinc-400"></View>
                            <Pressable
                                onPress={() => {
                                    setshowFamilyPopup(false);
                                }}
                            >
                                <Iconify
                                    icon="iconoir:cancel"
                                    size={30}
                                    color="#555"
                                />
                            </Pressable>
                        </View>
                        <View {...otherView} />
                    </View>
                </Pressable>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    modalView: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
});
