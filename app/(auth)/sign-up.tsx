import { StatusBar } from "expo-status-bar";
import {
    View,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
    TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import { Link, router } from "expo-router";
import Logo from "@/components/Logo";
import PasswordInput from "@/components/inputs/PasswordInput";
import NormalInput from "@/components/inputs/NormalInput";
import { useState } from "react";
import ThemedText from "@/components/ThemedText";
import { Iconify } from "react-native-iconify";

export default function SignUp() {
    const [form, setForm] = useState({
        email: "",
        password: "",
        confirmPassword: "",
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
                            onPress={() => router.push("/sign-in")}
                            className="font-semibold bg-zinc-100 p-2 rounded-lg text-zinc-600 text-lg"
                        >
                            <ThemedText
                                type="semibold"
                                textClass="font-semibold"
                            >
                                Sign In
                            </ThemedText>
                        </TouchableOpacity>
                    </View>
                    <View className="flex-1  items-center mt-10 w-10/12 mx-auto">
                        <View className="items-center flex-col w-full">
                            <Logo />
                            <ThemedText
                                type="em"
                                textClass=" mt-5 font-bold text-3xl pt-4"
                            >
                                #Share & Earn #Sub & Save
                            </ThemedText>
                        </View>
                        <View className="w-full flex flex-col items-center">
                            <NormalInput
                                placeholder="Email"
                                titleClasess=""
                                customClasses="rounded-xl bg-zinc-100 mt-5 h-16"
                                hideLabel={true}
                                handleChangeText={(e) =>
                                    setForm({ ...form, email: e })
                                }
                                value={form.email}
                                title="Email"
                            />

                            <PasswordInput
                                placeholder="Password"
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

                            <PasswordInput
                                placeholder="Confirm Password"
                                customClasses="rounded-xl bg-zinc-100 mt-5 h-16"
                                hideLabel={true}
                                titleClasess="mt-5"
                                handleChangeText={(e) =>
                                    setForm({ ...form, confirmPassword: e })
                                }
                                value={form.confirmPassword}
                                title="Confirm Password"
                                showPassword={false}
                            />

                            <View className="w-full">
                                <ThemedText textClass="mt-7 text-center text-zinc-500">
                                    By registering you agree to our
                                </ThemedText>
                                <Link href="" className="mt-1 text-center">
                                    <ThemedText
                                        type="bold"
                                        textClass="text-zinc-700"
                                    >
                                        Terms and Condition
                                    </ThemedText>
                                </Link>
                            </View>
                            <PrimaryButton
                                isLoading={false}
                                content="Proceed"
                                textClasses=""
                                handlePress={() => router.push("/sign-in")}
                                customClasses="w-full mt-10 h-16 bg-primary"
                            />
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
