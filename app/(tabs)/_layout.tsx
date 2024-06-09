import React from "react";
import { Tabs } from "expo-router";
import { View } from "react-native";
import { Iconify } from "react-native-iconify";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export type TabsLayoutProps = {
    icon: () => JSX.Element;
    focused: boolean;
};

export default function TabsLayout() {
    const TabIcons = ({ icon, focused }: TabsLayoutProps) => {
        return (
            <View className="flex-col items-center rounded-full h-10 w-10 justify-center p-3">
                {icon()}
            </View>
        );
    };

    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: "#fff",
                    height: 80,
                    width: "100%",
                    margin: "auto",
                    alignItems: "center",
                    paddingTop: 10,
                    justifyContent: "center",
                    borderTopColor: "#888",
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
                                        color={focused ? "#15a362" : "#555"}
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
                                        color={focused ? "#15a362" : "#555"}
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
                                        color={focused ? "#15a362" : "#555"}
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
                                        color={focused ? "#15a362" : "#555"}
                                    />
                                )}
                                focused={focused}
                            />
                        );
                    },
                }}
            />
        </Tabs>
        // <Tabs screenOptions={{ tabBarActiveTintColor: "blue" }}>
        //     <Tabs.Screen
        //         name="index"
        //         options={{
        //             title: "Home",
        //             tabBarIcon: ({ color }) => (
        //                 <FontAwesome size={28} name="home" color={color} />
        //             ),
        //         }}
        //     />
        // </Tabs>
    );
}
