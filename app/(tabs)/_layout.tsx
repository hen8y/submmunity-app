import React from "react";
import { Tabs } from "expo-router";
import { View } from "react-native";
import { Iconify } from "react-native-iconify";

export type TabsLayoutProps = {
    icon: () => JSX.Element;
    focused: boolean;
};

export default function TabsLayout() {
    const TabIcons = ({ icon, focused }: TabsLayoutProps) => {
        return (
            <View
                className={`flex-col items-center rounded-full h-10 w-10 justify-center p-3 ${
                    focused ? "bg-white text-black" : "text-zinc-200"
                }`}
            >
                {icon()}
            </View>
        );
    };

    return (
        <>
            <Tabs
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        backgroundColor: "#000",
                        height: 70,
                        borderRadius: 9999,
                        marginBottom: 30,
                        width: "91.66667%",
                        margin: "auto",
                        alignItems: "center",
                        paddingTop: 30,
                        justifyContent: "center", // Ensure this is set to center
                    },
                }}
            >
                <Tabs.Screen
                    name="home"
                    options={{
                        headerShown: false,
                        title: "Home",
                        tabBarIcon: ({ focused }) => {
                            return (
                                <TabIcons
                                    icon={() => (
                                        <Iconify
                                            icon="hugeicons:home-01"
                                            size={20}
                                            color={focused ? "#15a362" : "#ccc"}
                                        />
                                    )}
                                    focused={focused}
                                />
                            );
                        },
                    }}
                />

                <Tabs.Screen
                    name="services"
                    options={{
                        headerShown: false,
                        title: "Services",
                        tabBarIcon: ({ focused }) => {
                            return (
                                <TabIcons
                                    icon={() => (
                                        <Iconify
                                            icon="solar:earth-outline"
                                            size={20}
                                            color={focused ? "#15a362" : "#ccc"}
                                        />
                                    )}
                                    focused={focused}
                                />
                            );
                        },
                    }}
                />

                <Tabs.Screen
                    name="support"
                    options={{
                        headerShown: false,
                        title: "support",
                        tabBarIcon: ({ focused }) => {
                            return (
                                <TabIcons
                                    icon={() => (
                                        <Iconify
                                            icon="ep:service"
                                            size={20}
                                            color={focused ? "#15a362" : "#ccc"}
                                        />
                                    )}
                                    focused={focused}
                                />
                            );
                        },
                    }}
                />

                <Tabs.Screen
                    name="profile"
                    options={{
                        headerShown: false,
                        title: "Profile",
                        tabBarIcon: ({ focused }) => {
                            return (
                                <TabIcons
                                    icon={() => (
                                        <Iconify
                                            icon="solar:user-outline"
                                            size={20}
                                            color={focused ? "#15a362" : "#ccc"}
                                        />
                                    )}
                                    focused={focused}
                                />
                            );
                        },
                    }}
                />
            </Tabs>
        </>
    );
}
