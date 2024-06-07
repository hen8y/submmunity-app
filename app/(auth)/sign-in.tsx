import { StatusBar } from "expo-status-bar";
import {
    View,
    Text,
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
import AntDesign from "@expo/vector-icons/AntDesign";
import ThemedText from "@/components/ThemedText";

export default function SignIn() {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    return (
        <SafeAreaView className="h-full bg-white ">
            {/* <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
                className="flex-1 h-full"
            > */}
            <ScrollView contentContainerStyle={{ height: "100%" }}>
                <StatusBar style="auto" />
                <View className="flex-row justify-between items-center w-10/12 mx-auto">
                    <TouchableOpacity
                        onPress={() => router.back()}
                        className="mt-1 p-3 rounded-full bg-zinc-100"
                    >
                        <AntDesign name="left" size={16} color="black" />
                    </TouchableOpacity>
                    <Link
                        href="/sign-up"
                        className="font-semibold text-zinc-700 text-lg"
                    >
                        <ThemedText textClass="font-semibold">
                            Sign Up
                        </ThemedText>
                    </Link>
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
                            showPassword={true}
                        />
                        <View className="mt-5 w-full">
                            <Link
                                className="text-primary text-right font-semibold"
                                href="/sign-in"
                            >
                                <ThemedText>forgot password?</ThemedText>
                            </Link>
                        </View>
                        <PrimaryButton
                            isLoading={false}
                            content="Sign In"
                            textClasses=""
                            handlePress={() => router.push("/sign-in")}
                            customClasses="w-full mt-7 bg-primary h-16"
                        />
                    </View>

                    <View className="mb-5 absolute bottom-0">
                        <View className="gap-2 mt-5 flex-row items-center justify-center">
                            <View className="h-[1px] flex-1 bg-zinc-300" />
                            <ThemedText>Or continue using</ThemedText>
                            <View className="h-[1px] flex-1 bg-zinc-300" />
                        </View>
                        <View className="gap-1 mt-5 flex-row w-full justify-between">
                            <PrimaryButton
                                isLoading={false}
                                content={
                                    <Image
                                        source={images.apple}
                                        className="h-6 w-6"
                                        resizeMode="contain"
                                    />
                                }
                                textClasses=""
                                handlePress={() => router.push("/sign-in")}
                                customClasses="flex-1 bg-white border mx-1 border-zinc-300"
                            />

                            <PrimaryButton
                                isLoading={false}
                                content={
                                    <Image
                                        source={images.google}
                                        className="h-6 w-6"
                                        resizeMode="contain"
                                    />
                                }
                                textClasses=""
                                handlePress={() => router.push("/sign-in")}
                                customClasses="flex-1 bg-white border mx-1 border-zinc-300"
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
            {/* </KeyboardAvoidingView> */}
        </SafeAreaView>
    );
}
