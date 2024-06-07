import { StatusBar } from "expo-status-bar";
import { View, ScrollView, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import { router } from "expo-router";
import Logo from "@/components/Logo";
import NormalInput from "@/components/inputs/NormalInput";
import AntDesign from "@expo/vector-icons/AntDesign";
import ThemedText from "@/components/ThemedText";
import { useState } from "react";
import PasswordInput from "@/components/inputs/PasswordInput";
export default function ResetPassword() {
    const [form, setForm] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });

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
                            showPassword={true}
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
                            showPassword={true}
                        />
                        <PrimaryButton
                            isLoading={false}
                            content="Send Reset Link"
                            textClasses="text-sm"
                            handlePress={() => router.push("/sign-in")}
                            customClasses="w-full mt-7 bg-primary h-16"
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
