import { View, StyleSheet, type ViewProps } from "react-native";
import React from "react";

export default function MainTheme({ ...otherProps }: ViewProps) {
    return <View style={styles.sansText} {...otherProps} />;
}

const styles = StyleSheet.create({
    sansText: {
        fontFamily: "DMSans",
        fontSize: 24,
    },
});
