import { StatusBar } from "expo-status-bar";
import {
    View,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
    Image,
    TouchableOpacity,
    Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import { Link, router } from "expo-router";
import Logo from "@/components/Logo";
import PasswordInput from "@/components/inputs/PasswordInput";
import NormalInput from "@/components/inputs/NormalInput";
import { useState } from "react";
import { images } from "@/constants";
import ThemedText from "@/components/ThemedText";
import { Iconify } from "react-native-iconify";

export default function SignIn() {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    return (
        <SafeAreaView className="h-full bg-white">
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
                className="flex-1 h-full"
            >
                <ScrollView contentContainerStyle={{ height: "100%" }}>
                    <StatusBar style="auto" />
                    <View className="flex-row justify-between items-center w-10/12 mx-auto">
                        <TouchableOpacity
                            onPress={() => router.back()}
                            className="mt-1 w-12 h-12 flex-row items-center justify-center rounded-full bg-zinc-100"
                        >
                            <Iconify
                                icon="ic:round-chevron-left"
                                size={24}
                                color="#111"
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => router.push("/sign-up")}
                            className="font-semibold bg-zinc-100 p-2 rounded-lg text-zinc-600 text-lg"
                        >
                            <ThemedText
                                type="semibold"
                                textClass="font-semibold"
                            >
                                Sign Up
                            </ThemedText>
                        </TouchableOpacity>
                    </View>
                    <View className="flex-1 mt-20 w-10/12 mx-auto h-full">
                        <View className="items-center flex-col w-full">
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
                                handleChangeText={(e) =>
                                    setForm({ ...form, email: e })
                                }
                                value={form.email}
                                title="Email"
                            />

                            <PasswordInput
                                placeholder="******"
                                customClasses="rounded-xl bg-zinc-100 mt-5 h-16"
                                hideLabel={true}
                                titleClasess="mt-5"
                                handleChangeText={(e) =>
                                    setForm({ ...form, password: e })
                                }
                                value={form.password}
                                title="Password"
                                showPassword={false}
                            />
                            <View className="mt-5 w-full">
                                <Link
                                    className="text-primary text-right font-semibold"
                                    href="/forgot-password"
                                >
                                    <ThemedText>forgot password?</ThemedText>
                                </Link>
                            </View>
                            <PrimaryButton
                                isLoading={false}
                                content="Sign In"
                                textClasses=""
                                handlePress={() => router.push("/home")}
                                customClasses="w-full mt-7 bg-primary h-16"
                            />
                        </View>

                        <View className="mb-5 mt-10">
                            <View className="gap-2 mt-5 flex-row items-center justify-center">
                                <View className="h-[1px] flex-1 bg-zinc-300" />
                                <ThemedText>Or continue using</ThemedText>
                                <View className="h-[1px] flex-1 bg-zinc-300" />
                            </View>
                            <View className="gap-1 mt-5 flex-row w-full justify-between">

                            <Pressable
                                onPress={() => router.push("/sign-in")}
                                className="flex-1 bg-white h-14 flex items-center justify-center rounded-full border mx-1 border-zinc-300"
                            >
                                <Image
                                    source={images.apple}
                                    className="h-6 w-6"
                                    resizeMode="contain"
                                />
                            </Pressable>

                            <Pressable
                                onPress={() => router.push("/sign-in")}
                                className="flex-1 bg-white flex h-14 items-center justify-center rounded-full border mx-1 border-zinc-300"
                            >
                                <Image
                                    source={images.google}
                                    className="h-6 w-6"
                                    resizeMode="contain"
                                />
                            </Pressable>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
