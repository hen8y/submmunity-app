import { StatusBar } from "expo-status-bar";
import {
    View,
    Text,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import { Link, router } from "expo-router";
import HomeHeader from "@/components/HomeHeader";
import PasswordInput from "@/components/inputs/PasswordInput";
import NormalInput from "@/components/inputs/NormalInput";
import { useState } from "react";

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
                    <View className="flex-1 items-center mt-32 w-full">
                        <HomeHeader />
                        <View className="w-10/12 mt-5 flex flex-col items-center">
                            <NormalInput
                                placeholder=""
                                titleClasess=""
                                customClasses=""
                                handleChangeText={(e) =>
                                    setForm({ ...form, email: e })
                                }
                                value={form.email}
                                title="Email"
                            />

                            <PasswordInput
                                placeholder=""
                                customClasses=""
                                titleClasess="mt-5"
                                handleChangeText={(e) =>
                                    setForm({ ...form, password: e })
                                }
                                value={form.password}
                                title="Password"
                                showPassword={true}
                            />

                            <PasswordInput
                                placeholder=""
                                customClasses=""
                                titleClasess="mt-5"
                                handleChangeText={(e) =>
                                    setForm({ ...form, confirmPassword: e })
                                }
                                value={form.confirmPassword}
                                title="Confirm Password"
                                showPassword={true}
                            />

                            <PrimaryButton
                                isLoading={false}
                                content="Proceed"
                                handlePress={() => router.push("/sign-in")}
                                customClasses="w-full mt-7"
                            />
                            <View className="flex gap-2 mt-3 flex-row">
                                <Text className="mt-7">
                                    Already have an account
                                </Text>
                                <Link className="text-primary" href="/sign-in">
                                    Sign In.
                                </Link>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
