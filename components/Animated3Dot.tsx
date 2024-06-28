import React, { useState } from "react";
import {
    View,
    TouchableOpacity,
    Easing,
    StyleSheet,
    Animated,
    Pressable,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

export type Animated3DotProps = {
    onPress: () => void;
};

export default function Animated3Dot({ onPress }: Animated3DotProps) {
    const [showBubble, setShowBubble] = useState(false);
    const [bubbleAnim] = useState(new Animated.Value(0));

    const handlePress = () => {
        setShowBubble(true);
        Animated.timing(bubbleAnim, {
            toValue: 1,
            duration: 300,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: false,
        }).start(() => {
            setTimeout(() => {
                setShowBubble(false);
                bubbleAnim.setValue(0);
            }, 500);
        });
    };
    const bubbleStyle = {
        opacity: bubbleAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
        }),
        transform: [
            {
                scale: bubbleAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 1],
                }),
            },
        ],
    };
    return (
        <View className="">
            <Pressable
                onPress={() => {
                    handlePress();
                    onPress();
                }}
                className="justify-center items-center"
            >
                <Entypo name="dots-three-horizontal" size={16} color="#555" />
            </Pressable>
            {showBubble && (
                <Animated.View style={[styles.bubble, bubbleStyle]} />
            )}
        </View>
    );
}
const styles = StyleSheet.create({
    bubble: {
        position: "absolute",
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "rgba(170, 170, 170, 0.4)",
        top: -12,
        left: -12,
        transform: [{ translateX: -20 }, { translateY: -20 }],
    },
});
