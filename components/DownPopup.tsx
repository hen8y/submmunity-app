import { Modal, Pressable, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { ViewProps } from "react-native-svg/lib/typescript/fabric/utils";

export type DownPopupProps = ViewProps & {
    showPopup: boolean;
    setShowPopup: (setShowPopup: boolean) => void;
    height: number;
};

export default function DownPopup({
    showPopup,
    setShowPopup,
    height = 300,
    ...otherView
}: DownPopupProps) {
    return (
        <View>
            <Modal animationType="slide" transparent={true} visible={showPopup}>
                <Pressable
                    className="w-full h-full bg-zinc-900/30"
                    onPress={() => {
                        setShowPopup(false);
                    }}
                >
                    <View
                        className="absolute rounded-xl bottom-0 w-full bg-zinc-50"
                        style={[styles.modalView, { height: height }]}
                    >
                        <View className="h-1 mx-auto my-2 rounded-full w-8 bg-zinc-400"></View>
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
