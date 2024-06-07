import { StatusBar } from "expo-status-bar";
import { View, ScrollView, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import { Link, router } from "expo-router";
import Logo from "@/components/Logo";
import NormalInput from "@/components/inputs/NormalInput";
import { images } from "@/constants";
import AntDesign from "@expo/vector-icons/AntDesign";
import ThemedText from "@/components/ThemedText";
import { useState } from "react";
export default function ForgotPassword() {
    const [email, setEmail] = useState("");

    return (
        <SafeAreaView className="h-full bg-white ">
            <ScrollView contentContainerStyle={{ height: "100%" }}>
                <StatusBar style="auto" />
                <View className="flex-1 w-10/12 mx-auto h-full">
                    <TouchableOpacity
                        onPress={() => router.back()}
                        className="mt-1 w-12 h-12 flex-row items-center justify-center rounded-full bg-zinc-100"
                    >
                        <AntDesign name="left" size={16} color="black" />
                    </TouchableOpacity>
                    <View className="items-center mt-20 flex-col w-full">
                        <Logo />
                        <ThemedText
                            type="em"
                            textClass=" mt-5 font-bold text-3xl pt-4"
                        >
                            #Share & Earn #Sub & Save
                        </ThemedText>
                    </View>
                    <View className="w-full mt-5 flex flex-col items-center">
                        <NormalInput
                            placeholder="example@outlook.com"
                            titleClasess=""
                            hideLabel={true}
                            customClasses="rounded-xl bg-zinc-100 h-16"
                            handleChangeText={(e) => setEmail(e)}
                            value={email}
                            title="Email"
                        />
                        <PrimaryButton
                            isLoading={false}
                            content="Send Reset Link"
                            textClasses="text-sm"
                            handlePress={() => router.push("/reset-password")}
                            customClasses="w-full mt-7 bg-primary h-16"
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
